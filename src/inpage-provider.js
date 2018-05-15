const pump = require('pump')
const RpcEngine = require('json-rpc-engine')
const createIdRemapMiddleware = require('json-rpc-engine/src/idRemapMiddleware')
const createStreamMiddleware = require('json-rpc-middleware-stream')
const LocalStorageStore = require('obs-store')
const asStream = require('obs-store/lib/asStream')
const ObjectMultiplex = require('obj-multiplex')

module.exports = AppRolesInpageProvider

function AppRolesInpageProvider (connectionStream) {
  const self = this

  // setup connectionStream multiplexing
  const mux = self.mux = new ObjectMultiplex()
  pump(
    connectionStream,
    mux,
    connectionStream,
    (err) => logStreamDisconnectWarning('AppRoles', err)
  )

  // subscribe to AppRoles public config (one-way)
  self.publicConfigStore = new LocalStorageStore({ storageKey: 'AppRoles-Config' })

  pump(
    mux.createStream('publicConfig'),
    asStream(self.publicConfigStore),
    (err) => logStreamDisconnectWarning('AppRoles PublicConfigStore', err)
  )

  // ignore phishing warning message (handled elsewhere)
  mux.ignoreStream('phishing')

  // connect to async provider
  const streamMiddleware = createStreamMiddleware()
  pump(
    streamMiddleware.stream,
    mux.createStream('provider'),
    streamMiddleware.stream,
    (err) => logStreamDisconnectWarning('AppRoles RpcProvider', err)
  )

  // handle sendAsync requests via dapp-side rpc engine
  const rpcEngine = new RpcEngine()
  rpcEngine.push(createIdRemapMiddleware())
  rpcEngine.push(streamMiddleware)
  self.rpcEngine = rpcEngine
}

// handle sendAsync requests via asyncProvider
// also remap ids inbound and outbound
AppRolesInpageProvider.prototype.sendAsync = function (payload, cb) {
  const self = this
  self.rpcEngine.handle(payload, cb)
}


AppRolesInpageProvider.prototype.send = function (payload) {
  const self = this

  let selectedAddress
  let result = null
  switch (payload.method) {

    case 'eth_accounts':
      // read from localStorage
      selectedAddress = self.publicConfigStore.getState().selectedAddress
      result = selectedAddress ? [selectedAddress] : []
      break

    case 'eth_coinbase':
      // read from localStorage
      selectedAddress = self.publicConfigStore.getState().selectedAddress
      result = selectedAddress || null
      break

    case 'eth_uninstallFilter':
      self.sendAsync(payload, noop)
      result = true
      break

    case 'net_version':
      const networkVersion = self.publicConfigStore.getState().networkVersion
      result = networkVersion || null
      break

    // throw not-supported Error
    default:
      var link = 'https://github.com/AppRoles/faq/blob/master/DEVELOPERS.md#dizzy-all-async---think-of-AppRoles-as-a-light-client'
      var message = `The AppRoles Web3 object does not support synchronous methods like ${payload.method} without a callback parameter. See ${link} for details.`
      throw new Error(message)

  }

  // return the result
  return {
    id: payload.id,
    jsonrpc: payload.jsonrpc,
    result: result,
  }
}

AppRolesInpageProvider.prototype.isConnected = function () {
  return true
}

AppRolesInpageProvider.prototype.isAppRoles = true

// util

function logStreamDisconnectWarning (remoteLabel, err) {
  let warningMsg = `AppRolesInpageProvider - lost connection to ${remoteLabel}`
  if (err) warningMsg += '\n' + err.stack
  console.warn(warningMsg)
}

function noop () {}