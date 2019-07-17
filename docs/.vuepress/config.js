module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'CETDAC Docs Center',
      description: 'CoinEx Chain co-building platform',
      keywords: 'btc,bch,bcc,bitcoin cash,sdk,iost,cet,coinex,iostabc,bitapp,free,ropsten,testnet,faucet,wallet,extension,metamask,dapp,play,dapps',
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ]
    },
    '/zh/': {
      lang: 'zh',
      title: 'CETDAC 文档中心',
      description: 'CoinEx Chain共建平台',
      keywords: '比特币,以太坊,iost,coinex,cet,比特现金,sdk,bitapp,开发者,水龙头,测试币,测试币领取,免费,free,ropsten,testnet,faucet,多币种,支付按钮,跨链开发,区块链开发,智能合约,比特币,钱包,兔子洞口,dapp,dapps,去中心化应用,去中心应用,应用,插件钱包',
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ]
    }
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'CETDAC', link: 'https://www.cetdac.org/' }
    ],
    locales:{
      '/':{
        nav: [
          { text: 'CETDAC', link: 'https://www.cetdac.org/' }
        ],
        selectText: 'Languages',
        label: 'English',
        sidebar: [
          {
            title: 'CET Producer',
            collapsable: false,
            children: [
              '/en/cetnode/'
            ]
          }
        ]
      },
      '/zh/':{
        nav: [
          { text: 'CETDAC', link: 'https://www.cetdac.org/' }
        ],
        selectText: '选择语言',
        label: '简体中文',
        sidebar: [
          {
            title: '上手指南',
            collapsable: false,
            children: [
              '/zh/getstarted/'
            ]
          },
          {
            title: 'CoinEx Chain 超级节点',
            collapsable: false,
            children: [
              '/zh/cetnode/'
            ]
          }
        ]
      }
    }
  },
  ga:'UA-143967384-1'
}