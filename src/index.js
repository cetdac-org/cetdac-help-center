const Web3 = require('web3');
import { Account, Transaction, Neb, HttpRequest} from 'nebulas'
import { resolve } from 'path';
const transform = require('./transform');

//for plugin config
let _globalOptions = {
  'mode':'dev',
  'currentCoin':'nas',
  'name':'alan',
  'eth':{
    provider: null
  },
  'nas':{
    providerHost:'https://testnet.nebulas.io',    
    accounts:[Account.NewAccount()],
    gasLimit:'2000000',
    chainID:1
  }
}

let generateAddressesFromSeed = function(seed, count) {
  let bip39 = require('bip39');
  let hdkey = require('ethereumjs-wallet/hdkey');
  let hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(seed));
  let wallet_hdpath = "m/44'/60'/0'/0/";

  let accounts = [];
  for (let i = 0; i < count; i++) {
      let wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet();
      let address = '0x' + wallet.getAddress().toString("hex");
      let privateKey = wallet.getPrivateKey().toString("hex");
      accounts.push({address: address, privateKey: privateKey});
  }

  return accounts;
}

//合约
let Contract = function(inst, config){
  this._config = config || {}
  switch(this._config.coin){
    case 'eth':
    this._instance = inst.eth.Contract(this._config.abi, this._config.address, {gasPrice:this._config.gasPrice, fromAddress:this._config.fromAddress})
    this._eth = {}
    break;
    case 'nas':
    this._instance = inst.api
    this._nas = {}
    this._nas.state = inst._nas.state
    break;
  }
}

//调用智能合约的方法
Contract.prototype.call = function(method, args){
  let _this = this
  return new Promise((resolve, reject)=>{
    switch(this._config.coin){
      case 'eth':
        this._instance[method].apply(this._instance, args).send({
          from:this._config.fromAddress,
          gasPrice:this._config.gasPrice,
          gas:this._config.gasLimit || _globalOptions.nas.gasLimit
        }).then(tx=>{
          resolve(tx)
        }).catch(e=>{
          reject(e)
        })
      
      break;
      case 'nas':
        this._instance.call({
          to:this._config.address,
          from:this._config.fromAddress,
          value:0,
          nonce:++this._nas.state.nonce,
          gasPrice:this._config.gasPrice,
          gasLimit:this._config.gasLimit || _globalOptions.nas.gasLimit,
          contract:{
            function: method,
            args: JSON.stringify(args)
          }
        }).then(tx=>{
          resolve(tx)
        }).catch(e=>{
          reject(e)
        })

      break;
    }
  })
}

let JSDApps = function(config){
  this._config = config || {}
  if(/eth/i.test(this._config.coin)){
    let inst = new Web3(config.provider)
    this._instance = inst
    //专属
    this._eth = {}
  }
  else if(/nas/i.test(this._config.coin)){
    let inst = new Neb()
    inst.setRequest(new HttpRequest(config.provider));
    this._instance = inst
    //专属
    this._nas = {}
  }

  return this
}

JSDApps.prototype.version = 0.5

JSDApps.prototype.generateAddressesFromSeed = function(seed, count){
  let accountsData = generateAddressesFromSeed(seed, count)
  let _this = this
  
  accountsData.forEach(item=>{
    _this._instance.eth.accounts.create()
  })
}
//获取交易账户
JSDApps.prototype.getAccounts = async function(){
  let _this = this
  return new Promise((resolve, reject) => {
    switch(_this._config.coin){
      case "eth":
        _this._instance.eth.getAccounts((error, accounts)=>{
          if(error){
            reject(error)
          }
          else{
            resolve({
              name:_globalOptions.name,
              sex:_globalOptions.sex,
              birth:_globalOptions.birth,
              accounts:transform.getAccounts[_this._config.coin](accounts)
            })
          }
        })
        break;
      case "nas":
        return {
          name:_globalOptions.name,
          sex:_globalOptions.sex,
          birth:_globalOptions.birth,
          accounts:transform.getAccounts[_this._config.coin](_globalOptions.nas.accounts.map(item=>{
            return item.getAddressString()
          }))
        }
      break;
    }
  })
}

JSDApps.prototype.setDefaultAccount = function(address){
  switch(this._config.coin){
    case "eth":
      return this._instance.defaultAccount = address
      break;
    case 'nas':
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
      let _this = this
      return new Promise((resolve, reject)=>{
        this._instance.api.getAccountState(address).then(function (state) {
          state = state.result || state
          _this._nas.state = state
          resolve(state.balance)
        }).catch(function (err) {
          reject(err)
        })
      })
    break;
  }
}

//发送交易
JSDApps.prototype.sendTransaction = async function(config){
  let _this = this
  switch(this._config.coin){
    case "eth":
      return new Promise((resolve, reject)=>{
        return _this._instance.eth.sendTransaction({
          from:config.from,
          to:config.to,
          value:config.value,
          gas:config.gas || _this._config.gas,
          gasPrice:config.gasPrice || _this._config.gasPrice,
          data:config.data,
          nonce:config.nonce
        }, function(error, hash){
          if(error){
            reject(error)
          }
          else{
            resolve({tx:hash})
          }
        })
      })
    case "nas":
    return new Promise((resolve, reject)=>{
      let tx = new Transaction({
        chainID:_this._config.chainID,
        from:config.from,
        to:config.to,
        value:config.value,
        gasLimit:config.gas || _this._config.gas,
        gasPrice:config.gasPrice || _this._config.gasPrice,
        nonce:config.nonce
      })
      tx.signTransaction()
      _this._instance.api.sendRawTransaction( {data: tx.toProtoString()} ).then(function(hash) {
        resolve({tx:hash})
      }).catch(e=>{
        reject(e)
      })
    })
    break;
  }
}

//获取交易记录
JSDApps.prototype.getTransaction = async function(){
}

//获取交易记录列表
JSDApps.prototype.getTransactions = async function(){
}

//获取智能合约对象
JSDApps.prototype.getContract = async function(contractName){
  let params = this._config.contracts.find(item=>{
    return item.name === contractName
  })
  switch(this._config.coin){
    case 'eth':
    return new Contract(this, Object.assign({coin:'eth'}, params))
    case 'nas':
    return new Contract(this, Object.assign({coin:'nas'}, params))
  }
}

//获取gasPrice
JSDApps.prototype.getGasPrice = function(){
  let _this = this
  new Promise((resolve, reject)=>{
    switch(this._config.coin){
      case 'eth':
      _this._instance.eth.getGasPrice().then(function(gasPrice){
        resolve(gasPrice)
      }).catch(e=>{
        reject(e)
      })
      break;
      case 'nas':
      _this._instance.api.gasPrice().then(function(gasPrice){
        resolve(gasPrice)
      }).catch(e=>{
        reject(e)
      })
      break;
    }
  })
}

//获取原始对象
JSDApps.prototype.getRawInstance = function(){
  return this._instance
}

//工具类
JSDApps.prototype.utils = Web3.utils

/**
 * Represents a JSDApps.
 * @constructor
 * @param {object} config - 配置(coin, unit, provider).
 */
export function create(config){
  config = config || {}
  if(config.coin && config.coin.toLowerCase){
    config.coin = config.coin.toLowerCase()
  }
  let jsdapps = new JSDApps(config)
  return jsdapps
}

export function setGlobalOptions(options){
  _globalOptions = Object.assign(_globalOptions, options)
}