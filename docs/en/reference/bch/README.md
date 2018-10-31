# bitapp.bch

API interface for BCH

## bitapp.bch

### bitapp.bch.getBalance
- Type: Method
- Parameter: address | [string] Address that needs to query balance
- Return: Promise
  - **success**
	  - **balance** | [number] Query the balance of the address，The unit is [satoshi][1], 1bch = 1e8 satoshi
  - **fail** | Cause of failure

[Try][2]

### bitapp.bch.getFee

Get transaction fee

- Type: Method
- Parameter: type | [string] (dereference 'default', 'fast', 'slow')
- Return: Promise
  - **success**
	  - **fee** | [number] Get transaction fee，the unit is[satoshi][3], 1bch = 1e8 satoshi
  - **fail** | Cause of failure

[Try][4]


### bitapp.bch.getBlockNumber
- Type：method
- Parameter: none
- Return: Promise
  - **success**
	  - **blockNumber** | [number] The latest block count
  - **fail** | Cause of failure

[Try][5]

### bitapp.bch.verifyMessage
- Type：method
- Parameter: 
  - **address** | [string] Address
  - **message** | [string] Original message
  - **signature** | [string] Signature
- return:
	- **result** | [bool] If the signature is correct

[Try][6]

## bitapp.bch.account

Account module

### bitapp.bch.account.get
- Type：method
- Parameter: none
- Return: Promise
  - **success**
	  - **accounts** | [array] All accounts under the current user's BCH account
  - **fail**
	  - **WalletLockError** The wallet is currently locked

[Try][7]

## bitapp.bch.net

Network module

### bitapp.bch.net.getId
- Type：method
- Parameter: none
- Return: Promise
  - **success**
	  - **networkid** | [string] Network environment digital number(1 = mainnet, 2 = testnet)[Complete network type][8]
  - **fail** | Cause of failure

[Try][9]

### bitapp.bch.net.getNetworkType
- Type：method
- Parameter: none
- Return: Promise
  - **success**
	  - **network** | [string] Network environment(mainnet = 1, testnet = 2)[Complete network type][10]
  - **fail** | Cause of failure

[Try][11]

## bitapp.bch.transaction

### bitapp.bch.transaction.getUnspent
- Type：method
- Parameter: none
- Return: Promise
  - **success**
	  - **utxo** | [array] utxo array
  - **fail** | Cause of failure
- example

```js

bitapp.bch.transaction.getUnspent('bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm').then(console.log)
// output
> {
  list: [{
    onfirmations: 1532, //int confirmation
    tx_hash: "1d71d2155d7ece7168006283e26300a29cdf83977a2ee6c67132fd5be58ba712", //string trade hash
    tx_output_n: 0, //int unspent's vertical sort of trade output
    tx_output_n2: 0, //int unspent's transversal sort of trade output
    value: 260000000 //int unspent amount
  }],
  page: 1,
  pagesize: 50,
  total_count: 1
}

```

[Try][12]

### bitapp.bch.transaction.getTransaction
- Type：method
- Parameter: txHash
- Return: Promise
  - **success**
	  - **txObject** | [object] Transaction structure
  - **fail** | Cause of failure

- Example

```js
bitapp.bch.transaction.getTransaction('2949978d23c296d0487f2160cdd86f53dffcc3bdb6b5fb39781b5d2c6ab65acf', 'testnet').then(console.log)
// output
>{
  block_hash:"00000000000001d8204582e18e7073d355208abfb9328dcd07938b63b320f0a8", //block hash
  block_height:1255162, //block height
  block_time:1535969357, //block time
  confirmations:15, //confirmation
  created_at:1535968942, //transaction time
  fee:113340, //transaction fee
  hash:"2949978d23c296d0487f2160cdd86f53dffcc3bdb6b5fb39781b5d2c6ab65acf" // trade hash
  inputs:[{...}, {...}], //transaction input
  inputs_count:10, //input amount of transaction
  inputs_value:100001000005 //total input amount
  is_coinbase:false, //if coin_base （Transaction of mining reward）
  is_double_spend:false, //whether double spend
  is_sw_tx:false,
  lock_time:1255161,
  outputs:[{…}, {…}], //output
  outputs_count:2, //output number
  outputs_value:100000886665, //output amount
  sigops:8,
  size:96557, //Transaction size
  version:2, //Transaction version
  vsize:96557,
  weight:386228,
  witness_hash:"2949978d23c296d0487f2160cdd86f53dffcc3bdb6b5fb39781b5d2c6ab65acf"
  }
```

[Try][13]

<!-- ### bitapp.bch.transaction.getTransactionCount
- Type：method
- Parameter: address
- Return: Promise
  - success
    - transactionCount | [number] Transaction number issued from the current address
  - fail | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.bch.transactions.gettransactioncount) -->

## bitapp.bch.address

Address module

### bitapp.bch.address.detectAddress
- Type：method
- Parameter: 
  - **address** | [string] Address
- Return:
	- **format** | [string] Address format（'legacy', 'cashaddr', 'bitpay'）[Complete address format][14]
	- **network** | [string] Network type（'livenet', 'testnet'）[Complete network type][15]
	- **type** | [string] Address type（'pubkeyhash', 'scripthash'）[Complete address type][16] [Learn more][17]

```js

bitapp.bch.address.detectAddress('bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm')
>
//output
{
  format: "cashaddr"，
  network: "testnet"，
  type: "pubkeyhash"
}
```

[Try][18]

### bitapp.bch.address.toLegacyAddress
- Type：method
- Parameter: 
  - **address** | [string] Address
- return:
	- **legacyAddress** | [string] legacy address format

```js

bitapp.bch.address.toLegacyAddress('bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm')
>
//output
"moyEZqXkfpqYAwtE69f6WrPyqg4DjGmArQ"
```

[Try][19]

### bitapp.bch.address.toCashAddress
- Type：method
- Parameter: 
  - **address** | [string] Address
- Return:
	- **cashAddress** | [string] cash address format

[Try][20]

### bitapp.bch.address.toBitpayAddress
- Type：method
- Parameter: 
  - **address** | [string] Address
- Return:
	- **bitpayAddress** | [string] bitpay address format(BitPie specific address)

[Try][21]

### bitapp.bch.address.isLegacyAddress
- Type：method
- Parameter: 
  - **address** | [string] Address
- Return:
	- **isLegacyAddress** | [bool]
- Example

```js

bitapp.bch.address.isLegacyAddress('bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm')
>
//output
false
```

[Try][22]

### bitapp.bch.address.isCashAddress
- Type：method
- Parameter: 
  - **address** | [string] Address
- Return:
	- **isCashAddress** | [bool]

[Try][23]

### bitapp.bch.address.isBitpayAddress
- Type：method
- Parameter: 
  - **address** | [string] Address
- Return:
	- **isBitpayAddress** | [bool]

[Try][24]

### bitapp.bch.address.isMainnetAddress

Determine if it is the main network address

- Type：method
- Parameter: 
  - **address** | [string] Address
- Return:
	- **isMainnetAddress** | [bool]
- Example

```js

bitapp.bch.address.isMainnetAddress('bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm')
>
//output
false
```

[Try][25]

### bitapp.bch.address.isTestnetAddress

Determine if it is the main testnet address

- Type：method
- Parameter: 
  - **address** | [string] Address
- Return:
	- **isTestnetAddress** | [bool]

[Try][26]

### bitapp.bch.address.isP2PKHAddress

[What is P2PKH][27]

- Type：method
- Parameter: 
  - **address** | [string] Address
- Return:
	- **isP2PKHAddress** | [bool]
- Example

```js

bitapp.bch.address.isP2PKHAddress('bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm')
>
//output
true
```

[Try][28]

### bitapp.bch.address.isP2SHAddress

[What is P2SH][29]

- Type：method
- Parameter: 
  - **address** | [string] Address
- Return:
	- **isP2SHAddress** | [bool]

[Try][30]

## bitapp.bch.currency

Exchange rate module

### bitapp.bch.currency.getCurrency
- Type：method
- Parameter: none
- Return:
  - **success**
	  - **currency** | [string] the legal currency currently selected by the user('cny', 'usd')
  - **fail** | Cause of failure

[Try][31]

### bitapp.bch.currency.getRate
- Type：method
- Parameter: none
- Return:
  - **success**
	  - **rate** | [number] Current exchange rate
  - **fail** | Cause of failure

[Try][32]

## bitapp.bch.util

Tool module

### bitapp.bch.util.bchToSatoshi

- Type：method
- Parameter: 
  - **val** | [number or string] Value in the unit of BCH
- Return:
	- **satoshi** | [number] Return to value in the unit of satoshi

[Try][33]

### bitapp.bch.util.satoshiToBch

- Type：method
- Parameter: 
  - **val** | [number or string] Value in the unit of satoshi
- Return:
	- **bch** | [number] Return to value in the unit of bch

[Try][34]

[1]:	https://en.bitcoin.it/wiki/Satoshi_(unit)
[2]:	http://developer.bitapp.net/playground?code=bitapp.bch.getbalance
[3]:	https://en.bitcoin.it/wiki/Satoshi_(unit)
[4]:	http://developer.bitapp.net/playground?code=bitapp.bch.getfee
[5]:	http://developer.bitapp.net/playground?code=bitapp.bch.getblocknumber
[6]:	http://developer.bitapp.net/playground?code=bitapp.bch.verifymessage
[7]:	http://developer.bitapp.net/playground?code=bitapp.bch.account.get
[8]:	/zh/append/#%E5%AE%8C%E6%95%B4%E7%BD%91%E7%BB%9C%E7%B1%BB%E5%9E%8B
[9]:	http://developer.bitapp.net/playground?code=bitapp.bch.net.getid
[10]:	/zh/append/#%E5%AE%8C%E6%95%B4%E7%BD%91%E7%BB%9C%E7%B1%BB%E5%9E%8B
[11]:	http://developer.bitapp.net/playground?code=bitapp.bch.net.getnetworktype
[12]:	http://developer.bitapp.net/playground?code=bitapp.bch.transaction.getunspent
[13]:	http://developer.bitapp.net/playground?code=bitapp.bch.transaction.gettransaction
[14]:	/zh/append/#%E5%9C%B0%E5%9D%80%E6%A0%BC%E5%BC%8F
[15]:	/zh/append/#%E5%AE%8C%E6%95%B4%E7%BD%91%E7%BB%9C%E7%B1%BB%E5%9E%8B
[16]:	/zh/append/#%E5%9C%B0%E5%9D%80%E7%B1%BB%E5%9E%8B
[17]:	https://bitcoin.stackexchange.com/questions/64733/what-is-p2pk-p2pkh-p2sh-p2wpkh-eli5
[18]:	http://developer.bitapp.net/playground?code=bitapp.bch.address.detectaddress
[19]:	http://developer.bitapp.net/playground?code=bitapp.bch.address.tolegacyaddress
[20]:	http://developer.bitapp.net/playground?code=bitapp.bch.address.tocashaddress
[21]:	http://developer.bitapp.net/playground?code=bitapp.bch.address.tobitpayaddress
[22]:	http://developer.bitapp.net/playground?code=bitapp.bch.address.islegacyaddress
[23]:	http://developer.bitapp.net/playground?code=bitapp.bch.address.iscashaddress
[24]:	http://developer.bitapp.net/playground?code=bitapp.bch.address.isbitpayaddress
[25]:	http://developer.bitapp.net/playground?code=bitapp.bch.address.ismainnetaddress
[26]:	http://developer.bitapp.net/playground?code=bitapp.bch.address.istestnetaddress
[27]:	https://bitcoin.stackexchange.com/questions/64733/what-is-p2pk-p2pkh-p2sh-p2wpkh-eli5
[28]:	http://developer.bitapp.net/playground?code=bitapp.bch.address.isp2pkhaddress
[29]:	https://bitcoin.stackexchange.com/questions/64733/what-is-p2pk-p2pkh-p2sh-p2wpkh-eli5
[30]:	http://developer.bitapp.net/playground?code=bitapp.bch.address.isp2shaddress
[31]:	http://developer.bitapp.net/playground?code=bitapp.bch.currency.getcurrency
[32]:	http://developer.bitapp.net/playground?code=bitapp.bch.currency.getrate
[33]:	http://developer.bitapp.net/playground?code=bitapp.bch.util.bchtosatoshi
[34]:	http://developer.bitapp.net/playground?code=bitapp.bch.util.satoshitobch