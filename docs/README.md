---
home: true
heroImage: /approles.png
actionText: English Reference Comming Soon.
actionLink: /
features:
- title: SDK wih multi-language support.
  details: In addition to javascript sdk, we will also launch android, ios version sdk, for the server, we will provide nodejs and python version, please keep in touch.
- title: Uniform API for multiple chains.
  details: We provide a uniform API call interface for multiple chains (eth, bch), designed to help developers complete multiple chain support quickly and efficiently.
- title: BlockExplorer service integrated.
  details: BITAPP sdk integrates commonly used balance query, transactions query and other functions, so you don't need to call other services and they are free.
footer: Copyright © BITAPP Team
---

# Get Stated

```js

var bitapp = window.bitapp;

if (bitapp) {
  bitapp.preference.getDefaultAddress().then(addresses => {
    if(addresses.eth && addresses.bch) {
      //query eth balance from default account
      bitapp.eth.getBalance(addresses.eth).then(balance=>{
        console.log('My BitApp wallet eth address: ' + addresses.eth)
        console.log('balance: ' + balance)
      }).catch(e=>{
        console.error(e)
      })

      //query bch balance from default account
      bitapp.bch.getBalance(addresses.bch).then(balance=>{
        console.log('My BitApp wallet bch address: ' + addresses.bch)
        console.log('balance: ' + balance)
      }).catch(e=>{
        console.error(e)
      })
    } else {
      console.error('BitApp account not created')
    }
  })
}

```
