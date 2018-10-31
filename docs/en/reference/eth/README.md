# bitapp.eth

API interface for ETH

## bitapp.eth

### bitapp.eth.gasPrice
- Type：method
- Parameter: none
- Return: Promise
  - **success**
    - **gasPrice** | [number] Get updated gas price, the unit is[wei](http://eth-converter.com/)。[Learn more](https://ethgasstation.info/)
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.gasprice)

### bitapp.eth.getBlockNumber
- Type：method
- Parameter: none
- Return: Promise
  - **success**
    - **blockNumber** | [number] Current latest number of blocks
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.getblocknumber)

### bitapp.eth.getRawInstance
- In order to bring a better calling experience to users and a more unified interface output, bitapp reencapsulates the web3 method of ETH. But we can also expose web3's native objects directly to advanced users. Once the developer gets the native object, they can use the native web3 method. Bitapp uses version 0.20.7 of web3.
- Type：method
- Parameter: none
- Return: Promise
  - **success**
    - Native object of web3
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.getrawinstance)

### bitapp.eth.getBalance
- Type：method
- Parameter: **address** | [string] Address that needs to check balance，The network environment is the current user extension's network environment.
- Return: Promise
  - **success**
    - **balance** | [number] Check address's balance，the unit is [wei](http://eth-converter.com/),1eth = 1e18 wei
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.getbalance)

## bitapp.eth.account

Account module

### bitapp.eth.account.get
- Type：method
- Parameter: none
- Return: Promise
  - **success**
    - **accounts** | [array] All accounts under current user's eth account
    - **isUnlocked** | [bool] 
    Whether the wallet is unlocked. If the wallet is locked, the account data is not available.
  - WalletLockError Current wallet is locked.

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.accounts.get)


<!-- ## bitapp.eth.accounts.create
- Type：method
- Parameter: 
  - entropy | [optional] (optional): Random strings that increase entropy. If given, it should be at least 32 characters. If no string is given, randomhex is used to generate a random string.
- Return: Promise
  - success
    - accounts | [array] All accounts under current user's eth account
    - isUnlocked | [bool] 
    Whether the wallet is unlocked. If the wallet is locked, the account data is not available.
  - fail | Cause of failure

[Try](http://localhost:3001/playground?code=bitapp.eth.accounts.create) -->

## bitapp.eth.net

Network module

### bitapp.eth.net.getId
- Type：method
- Parameter: none
- Return: Promise
  - **success**
    - **networkid** | [string] Network environment digital number[Complete network type](/zh/append/#Complete network type)
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.net.getid)


### bitapp.eth.net.getNetworkType
- Type：method
- Parameter: none
- Return: Promise
  - **success**
    - **network** | [string] Network environment[complete network type](/zh/append/#Complete network type)
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.net.getnetworktype)

## bitapp.eth.transaction

Transaction module

### bitapp.eth.transaction.getTransaction
- Type：method
- Parameter: txHash
- Return: Promise
  - **success**
    - **txObject** | [object] Transaction structure
  - **fail** | Cause of failure

- Example

```js
bitapp.eth.transaction.getTransaction('0x7ffbd75c4c0c4700f7b2d2bf3551a408aa271e32509757546f292d53d2532e72').then(console.log)
// output
>{
  "blockHash":"0x5696a39b8e3a64cd1ee8af7d855e88b12939d0d9e085295dade9b1fcbfe6b832",
  "blockNumber":6239367,
  "from":"0xA090b409F862be10e5C86dd7D6DaD0C039e1077F",
  "gas":21000,
  "gasPrice":"2875000000",
  "hash":"0x7ffbd75c4c0c4700f7b2d2bf3551a408aa271e32509757546f292d53d2532e72",
  "input":"0x",
  "nonce":1,
  "r":"0xa4bcbca9b5635ee9510e1fc0254c991668e442b463daca1974e80ea3c69a5bf6",
  "s":"0x4a1dd2d5a5a73094ed1ed9facccabb063675c6bd1ebe201f3fa19df732d26474",
  "to":"0x689C56AEf474Df92D44A1B70850f808488F9769C",
  "transactionIndex":45,
  "v":"0x25",
  "value":"449835741000000000"
  }
```

- [learn more](https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransaction)

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.transaction.gettransaction)

### bitapp.eth.transaction.getTransactionReceipt
- Type：method
- Parameter: txHash
- Return: Promise
  - **success**
    - **tx Receipt Object** | [object] Transaction state structure
  - **fail** | Cause of failure

- Example

```js
bitapp.eth.transaction.getTransactionReceipt('0x7ffbd75c4c0c4700f7b2d2bf3551a408aa271e32509757546f292d53d2532e72').then(console.log)
// output
>{
  "blockHash":"0x5696a39b8e3a64cd1ee8af7d855e88b12939d0d9e085295dade9b1fcbfe6b832",
  "blockNumber":6239367,
  "contractAddress":null,
  "cumulativeGasUsed":7989933,
  "from":"0xa090b409f862be10e5c86dd7d6dad0c039e1077f",
  "gasUsed":21000,
  "logs":[],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "status":true,
  "to":"0x689c56aef474df92d44a1b70850f808488f9769c",
  "transactionHash":"0x7ffbd75c4c0c4700f7b2d2bf3551a408aa271e32509757546f292d53d2532e72",
  "transactionIndex":45
  }
```
- Learn more [https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactionreceipt](https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactionreceipt)

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.transaction.gettransactionreceipt)

### bitapp.eth.transaction.getTransactionCount
- Type：method
- Parameter: address
- Return: Promise
  - **success**
    - **transactionCount** | [number] The number of transactions issued from the current address
  - **fail** | Cause of failure

- Learn more [https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactioncount](https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactioncount)

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.transaction.gettransactioncount)


## bitapp.eth.contract

Smart contract module

### bitapp.eth.contract.create

Connect a smart contract

- Type：method
- Parameter: 
  - **abi** | [object] Samrt contract abi[What is abi](https://web3js.readthedocs.io/en/1.0/web3-eth-abi.html#eth-abi)
  - **address** | [string] Contract address
  - **options**
    - **from** | [string] Calling party
    - **gasLimit** | [number] The biggest gas The unit is [wei](http://eth-converter.com/)
    - **gasPrice** | [string] gas price, the unit is[wei](http://eth-converter.com/)。[Learn more](https://ethgasstation.info/)
    - **data** | [string] Contract's byte code
- Return: Promise
  - **success**
    - **contract** | [Contract] Return to Contract's object
  - **fail** | Cause of failure
- Example

```js

// ropsten A smart contract to calculate Fibonacci Numbers
let address = '0x7a6a8c0555d13ba58804c93a5b74718cdec93a9a'
let abi = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "number",
        "type": "uint256"
      }
    ],
    "name": "factorial",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
]

bitapp.preference.getDefaultAddress('eth').then(from=>{
  let contractInstance = bitapp.eth.contract.create(abi, address, {from: from, gasPrice: '2000000000'})
  contractInstance.call('factorial', [10]).then(result=>{
    console.log(result)
  }).catch(e=>{
    console.error(e.message)
  })
})

```

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.contract.create)

### contractInstance.send

the method that calls the smart contract object，at the same time initiate a transaction

- Type：method
- Parameter: 
  - method | [string] The name of the method to call
  - args | [array] Paramarrays 
  - **options** | [object]
    - **from** | [string] Calling party
    - **gasLimit** | [number] The biggest gas The unit is [wei](http://eth-converter.com/)
    - **gasPrice** | [string] gas price, the unit is [wei](http://eth-converter.com/)。[Learn more](https://ethgasstation.info/)
    - **value** | [string] Transaction amount
  - **appName** | [string] Application name
  - **desc** | [string] Description of this call
- Return: Promise
  - **success**
    - **txhash** | [string] Call txhash this time
  - **fail** | Cause of failure

- Example

```js

// ropsten A smart contract to calculate Fibonacci Numbers
let address = '0x7a6a8c0555d13ba58804c93a5b74718cdec93a9a'
let abi = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "number",
        "type": "uint256"
      }
    ],
    "name": "factorial",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
]

bitapp.preference.getDefaultAddress('eth').then(from=>{
  let contractInstance = bitapp.eth.contract.create(abi, address, {from: from, gasPrice: '2000000000'})
  contractInstance.send('factorial', [10]).then(result=>{
    console.log(result)
  }).catch(e=>{
    console.error(e.message)
  })
})

//output
>
{
  "blockHash":"0x9e3b20f9c788708cd57b8625dec5a396feede90a847850a401ecfc3d45fef41e",
  "blockNumber":4057890,
  "contractAddress":null,
  "cumulativeGasUsed":4153264,
  "from":"0xe5903117222cd6e87deaa0cb60b3e394896645ae",
  "gasUsed":22520,"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "status":true,
  "to":"0x7a6a8c0555d13ba58804c93a5b74718cdec93a9a",
  "transactionHash":"0x11e9829c75a2b33571318303b742b7fe299912ce0c1b168dd77be566c33c7c66",
  "transactionIndex":33,
  "events":{}
}
```

[Try](http://developer.bitapp.net/playground?code=contractinstance.send)

### contractInstance.call

Call the method of the smart contract object in EVM，but not initiate transaction.

- Type：method
- Parameter: 
  - method | [string] The name of the method to call
  - args | [array] Paramarrays 
  - **options** | [object]
    - **from** | [string] Calling party
    - **gasLimit** | [number] The biggest gas The unit is [wei](http://eth-converter.com/)
    - **gasPrice** | [string] gas price, the unit is [wei](http://eth-converter.com/)。[Learn more](https://ethgasstation.info/)
  - **appName** | [string] Application name
  - **desc** | [string] Description of this call
- Return: Promise
  - **success**
    - **txhash** | [string] Call txhash this time
  - **fail** | Cause of failure
- Example

```js

// ropsten
// A smart contract to calculate Fibonacci Numbers
let address = '0x7a6a8c0555d13ba58804c93a5b74718cdec93a9a'
let abi = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "number",
        "type": "uint256"
      }
    ],
    "name": "factorial",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
]

bitapp.preference.getDefaultAddress('eth').then(from=>{
  let contractInstance = bitapp.eth.contract.create(abi, address, {from: from, gasPrice: '2000000000'})
  contractInstance.call('factorial', [10]).then(result=>{
    console.log(result)
  }).catch(e=>{
    console.error(e.message)
  })
})

// output
> 3628800
```

[Try](http://developer.bitapp.net/playground?code=contractinstance.call)


## bitapp.eth.currency

Exchange rate module

### bitapp.eth.currency.getCurrency
- Type：method
- Parameter: none
- Return: Promise
  - **success**
    - **currency** | [string] The legal currency currently selected by the user('cny', 'usd')
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.currency.getcurrency)

### bitapp.eth.currency.getRate
- Type：method
- Parameter: none
- Return: Promise
  - **success**
    - **rate** | [number] Current exchange rate
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.eth.currency.getrate)
