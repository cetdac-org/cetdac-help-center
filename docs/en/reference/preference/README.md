# bitapp.preference

User configuration module

## bitapp.preference.get

Query user's current configuration.

- Type：method
- Parameter: 
  - **key** | [string] (optional),The field name that needs to be queried，If nor filled in, all fields are queried
    - **currency** current legal currency symbol
    - **currencyType** current legal currency
    - **currentLocale** current language
    - **currentPage** the current page of the extension
    - **identities** All account information
    - **selectedAddress** Current address
    - **tokens** token list
- Return: Promise
  - **success**
    - **result** | [object] The query results
  - **fail** | Cause of failure

- Example

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

Gets the user's current currency type

- Type：method
- Parameter: none
- Return: Promise
  - **success**
    - **currency** | [string] currency ('cny', 'usd').
  - **fail** | cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.preference.getcurrency)

## bitapp.preference.getLocale

Gets the language of the user's current selection

- Type：method
- Parameter: none
- Return: Promise
  - **success**
    - **locale** | [string] Language ('cn', 'en').
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.preference.getlocale)

## bitapp.preference.getTokens

Get the Token that the user is currently adding

- Type：method
- Parameter: 
  - **coin** | [string] Currency Optional [Complete token list](/en/append/#complete-token-list)
  - **network** | [string] Optional Network type string [Complete network type](/en/append/#complete-network-list)
- Return: Promise
  - **success**
    - **tokens** | [array] Token list.
  - **fail** | Cause of failure.

[Try](http://developer.bitapp.net/playground?code=bitapp.preference.gettokens)

## bitapp.preference.getDefaultAddress

Gets the user's current default address

- Type：method
- Parameter: 
  - **coin** | [string] (optional) currency, If not filled in, return the address of all tokens（ERC20 address is the same as ETH address） [Complete token list](/en/append/#complete-token-list)
  - **networkType** | [string]  (optional) Network type, optional, bch needs networkType [Complete network type](/zh/append/#complete-network-list), eth doesn't.
- Return: Promise
  - **success**
    - **address** | [string] Current address.
  - **fail** | Cause of failure

[Try](http://developer.bitapp.net/playground?code=bitapp.preference.getdefaultaddress)