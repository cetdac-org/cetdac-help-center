const Web3 = require('web3');
import { Account, Transaction, Neb, HttpRequest} from 'nebulas'
import { resolve } from 'path';
import { ENGINE_METHOD_PKEY_METHS } from 'constants';
const transform = require('./transform');

//for plugin config
let _globalOptions = {
  'currentCoin':'nas',
  'eth':{
    providerHost:'HTTP://127.0.0.1:8545'
  },
  'nas':{
    providerHost:'https://testnet.nebulas.io',    
    accounts:[Account.NewAccount()],
    gasLimit:'2000000'
  }
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
          nonce:this._nas.state.nonce,
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
    let inst = new Web3(new Web3.providers.HttpProvider(_globalOptions.eth.providerHost))
    this._instance = inst
    //专属
    this._eth = {}
  }
  else if(/nas/i.test(this._config.coin)){
    let inst = new Neb()
    inst.setRequest(new HttpRequest(_globalOptions.nas.providerHost));
    this._instance = inst
    //专属
    this._nas = {}
  }

  return this
}

//获取交易账户
JSDApps.prototype.getAccounts = async function(){
  switch(this._config.coin){
    case "eth":
      return transform.getAccount(this._instance.eth.getAccounts())
      break;
    case "nas":
      return _globalOptions.nas.accounts.map(item=>{
        return item.getAddressString()
      })
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

//获取交易记录
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

//获取原始对象
JSDApps.prototype.getRawInstance = function(){
  return this._instance
}

//获取基础账户信息
JSDApps.getUserInfo = function(){
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

console.log('JSDApps has defined on window for developing all kind of dapps.')