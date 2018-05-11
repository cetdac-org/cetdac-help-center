const Web3 = require('web3');
const NebPay = require('nebpay.js');
const transform = require('./transform');

//for plugin config
let _globalOptions = {
  providerHost:"HTTP://127.0.0.1:8545"
}

let JSDApps = function(config){
  this._config = config || {}
  if(/eth/i.test(this._config.coin)){
    let inst = new Web3(new Web3.providers.HttpProvider(_globalOptions.providerHost))
    this._instance = inst
  }
  else if(/nas/i.test(this._config.coin)){
    let inst = new NebPay();
    this._instance = inst
  }

  return this
}

//获取账户
JSDApps.prototype.getAccounts = async function(){
  switch(this._config.coin){
    case "eth":
      return transform.getAccount(this._instance.eth.getAccounts())
      break;
    case "nas":
    break;
  }
}

//获取账户余额
JSDApps.prototype.getBalance = async function(address){
  switch(this._config.coin){
    case "eth":
      return this._instance.eth.getBalance(address)
      break;
    case "nas":
    break;
  }
}

/**
 * Represents a JSDApps.
 * @constructor
 * @param {object} config - 配置(coin, unit, providerHost).
 */
export function create(config){
  config = config || {}
  if(config.coin && config.coin.toLowerCase){
    config.coin = config.coin.toLowerCase()
  }
  let jsdapps = new JSDApps(config)
  return jsdapps
}