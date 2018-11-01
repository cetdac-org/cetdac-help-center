# bitapp.preference

User configuration module

## bitapp.preference.get

Query user's current configuration.

- type：method
- parameter: 
  - **key** | [string] (optional), the field name that needs to be queried，If nor filled in, all fields are queried
    - **currency** Current legal currency symbol
    - **currencyType** Current legal currency
    - **currentLocale** Current language
    - **currentPage** The current page of the extension
    - **identities** All account information
    - **selectedAddress** Current address
    - **tokens** Token list
- return: Promise
  - **success**
    - **result** | [object] The query results
  - **fail** | Cause of failure

- example

```js
bitapp.preference.get().then(console.log)
// output
>{
  currency:"¥",
  currentLocale:"cn",
  currencyType: 'cny',
  currentPage:"/",
  identities:{bch: {…}, eth: {…}},
  selectedAddress:{bch: "bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm", eth: "0x1688bc332f03a0db34faab4d863d882dc53957ab"},
  tokens:{bch: [], eth: []}
}
```

[Try](http://developer.bitapp.net/playground?code=bitapp.preference.get)

## bitapp.preference.getCurrency

Get the user's current currency type

- type：method
- parameter: none
- return: Promise
  - **success**
    - **currency** | [string] currency ('cny', 'usd').
  - **fail** | cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.preference.getcurrency)

## bitapp.preference.getLocale

Get the language of the user's current selection

- type：method
- parameter: none
- return: Promise
  - **success**
    - **locale** | [string] Language ('cn', 'en').
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.preference.getlocale)

## bitapp.preference.getTokens

Get the tokens that the user is currently adding

- type：method
- parameter: 
  - **coin** | [string] Currency Optional [Complete token list](/en/append/#complete-token-list)
  - **network** | [string] Optional Network type string [Complete network type](/en/append/#complete-network-list)
- return: Promise
  - **success**
    - **tokens** | [array] Token list.
  - **fail** | Cause of failure.

[Try](http://developer.bitapp.net/playground?code=bitapp.preference.gettokens)

## bitapp.preference.getDefaultAddress

Get the user's current default address

- type：method
- parameter: 
  - **coin** | [string] (optional) Currency, If not filled in, return the address of all tokens（ERC20 address is the same as ETH address） [Complete token list](/en/append/#complete-token-list)
  - **networkType** | [string]  (optional) Network type, optional, bch needs networkType [Complete network type](/zh/append/#complete-network-list), eth doesn't.
- return: Promise
  - **success**
    - **address** | [string] Current address.
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.preference.getdefaultaddress)