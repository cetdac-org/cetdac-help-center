---
home: true
heroImage: /approles.png
actionText: Guidance →
actionLink: /en/getstarted/
features:
- title: SDK with multi-language support.
  details: In addition to javascript SDK, we will also launch android, ios version SDK. For the server, we will provide node.js and python version, please stay tuned.
- title: Unified API for multiple chains.
  details: We provide a unified API interface for multiple chains (
    ETH, BCH), which is designed to help developers support multiple chains quickly and efficiently.
- title: Integrated block explorer service.
  details: BitApp SDK integrates commonly used balance query, transactions query and other functions, so you don't need to call other services and it's free.
footer: Copyright © BitApp Team
---

# Get Started

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
