# bitapp.wallet

Wallet module.

<!-- ## bitapp.wallet.requestUnlock

Request to unlock

- Type：method
- Parameter: 
  - appName Name of the application requesting the user to unlock the wallet
- Return: Promise
  - success
    - status | [string] When the unlock is successful，return to 'success'
  - fail

[Try](http://localhost:3001/playground?code=bitapp.wallet.requestunlock) -->

## bitapp.wallet.isUnlocked

Determine if the bitapp wallet extension is unlocked

- type：method
- parameter: none
- return: Promise
  - **success**
    - **isUnlocked** | [bool] The value is true if the wallet is unlocked and false if the wallet is locked.
  - fail

[Try](http://developer.bitapp.net/playground?code=bitapp.wallet.isunlocked)

## bitapp.wallet.requestPay

Initate a transfer request.

- type: method
- parameter: 
  - **appName** | [string] The platform of transfer.
  - **symbol** | [string] Currency ('eth', 'bch', 'others'). [Complete list of cryptocurrency](/en/append/#complete-list-of-cryptocurrency)
  - **amount** | [string] Transfer amount (eth: unit [wei](http://eth-converter.com/)。[Learn more](https://ethgasstation.info/)) or transaction fee (bch: unit [satoshi](https://en.bitcoin.it/wiki/Satoshi_(unit)), 1bch = 1e8 satoshi)
  - **to** | [string] transfer address
  - **gasPriceOrFee** | [string | null | undefined] (optional) (Fill in null or undefined for the default fee) gasPrice (eth: unit [wei](http://eth-converter.com/)。[ETH unit conversion](/en/append/#unit-conversion)) or transaction fee fee(bch: unit [satoshi](https://en.bitcoin.it/wiki/Satoshi_(unit)), 1bch = 1e8 satoshi) 
  - **data** | [string] self-defining data
  - **desc** | [string] transfer description
- return: Promise
  - **success**
    - **result** | [object]
      - **data** | [object] If the user cancels, there is no data
        - **txid** | [string] transaction id
      - **action** | [string] User behavior（'AUTH_PAY'：User authorizes payment，'CANCEL_PAY': User cancels payment）
  - fail
- example

```js
bitapp.bch.net.getId().then(network => {
  bitapp.wallet.requestPay(
    'Demo',
    'bch', 
    (1e8).toString(), 
    (network == 1 ? 'bitcoincash:qzd0m9mp4avt5uzx3vq56xc5rdh459t5lvz2npqhdg' : 'bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm'),
    '1000',
    '',
    'purchase CryptoKitties').then(console.log)
})

// output，user cancels
>{
  action: "CANCEL_PAY"
}
```


[Try](http://developer.bitapp.net/playground?code=bitapp.wallet.requestpay)

## bitapp.wallet.requestSign

Initiate a signature request.

- type：method
- parameter: 
  - **appName** | [string] The platform of signature
  - **symbol** | [string] Currency ('eth', 'bch')。
  - **dataToSign** | [string] The data that needs signature
- return: Promise
  - **success**
    - **result** | [object]
      - **data** | [object] If the user cancels, there is no data
        - **signature** | [string] Signature data
      - **action** | [string] User behavior（'AUTH_SIGN'：User authorizes signature，'CANCEL_SIGN': User cancels signature）
  - **fail**
- example

```js
bitapp.wallet.requestSign('Demo','bch','Register account').then(console.log)
// output，User cancels
>{
  action: "CANCEL_SIGN"
}
```

[Try](http://developer.bitapp.net/playground?code=bitapp.wallet.requestsign)