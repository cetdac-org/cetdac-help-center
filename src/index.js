const Web3 = require('web3');

/**
 * Represents a JSDApps.
 * @constructor
 * @param {object} config - 配置(coin, providerHost).
 */
export function JSDApps(config){
  this._config = config || {}
  if(this._config.coin === "eth"){
    let inst = new Web3(new Web3.providers.HttpProvider(this._config.providerHost));
  }
}
