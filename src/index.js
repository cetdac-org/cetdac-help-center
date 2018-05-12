const Web3 = require('web3');
import { Account, Transaction, Neb, HttpRequest} from 'nebulas'
import { resolve } from 'path';
const transform = require('./transform');

//for plugin config
let _globalOptions = {
  'eth':{
    providerHost:'HTTP://127.0.0.1:8545'
  },
  'nas':{
    providerHost:'https://testnet.nebulas.io',    
    accounts:[Account.NewAccount()]
  }
}

let JSDApps = function(config){
  this._config = config || {}
  if(/eth/i.test(this._config.coin)){
    let inst = new Web3(new Web3.providers.HttpProvider(_globalOptions.eth.providerHost))
    this._instance = inst
  }
  else if(/nas/i.test(this._config.coin)){
    let inst = new Neb()
    inst.setRequest(new HttpRequest(_globalOptions.nas.providerHost));
    this._instance = inst
  }

  return this
}

//合约
let Contract = function(inst, config){
  this._config = config || {}
  switch(this._config.coin){
    case 'eth':
    this._instance = inst.eth.Contract(this._config.abi, this._config.address, {gasPrice:this._config.gasPrice, fromAddress:this._config.fromAddress})
    break;
    case 'nas':
    break;
  }
}

//获取账户
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
      return new Promise((resolve, reject)=>{
        this._instance.api.getAccountState(address).then(function (state) {
          state = state.result || state
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
    return new Contract(this, Object.assign({coin:'eth'},params))
    case 'nas':
    return new Contract(this, Object.assign({coin:'nas'},params))
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

console.log('JSDApps has defined on window for developing all kind of dapps.')