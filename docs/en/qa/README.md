# FAQ

## What's the difference between BitApp Chrome extension and Metamask？
Answer: MetaMask currently only supports ETH, BitApp now supports ETH and BCH, and more currencies will be supported in the future, and we provide unified SDK call interfaces will be to enable your application to quickly support different public chains.

## Is the DApp developed with BitApp SDK compatible with other wallets?
Answer: The BitApp SDK is compatible with mainstream wallets and can support multiple public chains and mainstream wallets in one development.

## Why do I use the BitApp SDK to develop DApp?
Answer: Using the BitApp SDK to develop applications, you can achieve:

- With only once development, the application is compatible with multiple public chains.Easily change the cryptocurrencies holders of different public chains into DApp users.
- Develop a wallet that is compatible with the mainstreams. The DApp developed by BitApp SDK can be uploaded to the DApp store of mainstream wallets without any trouble, and there is no need to make tedious adaptation work for each wallet.
- The SDK integrates the inquiry of asset balance, price, transaction record, block and other information, so you don't need to look for any additional third-party services.

## I don't do DApp, I just want to access cryptocurrency payment. Can I use BitApp SDK?
Answer: Totally. Based on the BitApp SDK, you don't need to pay attention to the underlying blockchain technology.With simple development, the application is able to support multi-cryptocurrencies payment and enjoy industry dividends.

## How to receive ETH test coin and BCH test coin?
Answer: After installing the BitApp Chrome extension, open the developer station and you can [get free ETH](https://developer.bitapp.net/faucet/eth) or [get free BCH](https://developer.bitapp.net/faucet/bch).

## How to detect if the user has installed BitApp?

If the user installs BitApp, the developer can directly access the **window.bitapp** object

```js

if(!window.bitapp){ 
  console.error('bitapp chrome plugin is not installed')
};

```

**If the user has created a BitApp account, the user's address can be obtained by the following method:**

```js

bitapp.preference.getDefaultAddress().then(addresses => {
  if(!addresses.eth || !addresses.bch) {
    console.log('BitApp account not created')
  }
})

```
