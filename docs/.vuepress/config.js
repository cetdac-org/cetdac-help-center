module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'PureWallet Help Center',
      description: 'A Cryptocurrency Wallet',
      keywords: 'btc,bch,bcc,bitcoin cash,sdk,iost,ft,iostabc,bitapp,free,ropsten,testnet,faucet,wallet,extension,metamask,dapp,play,dapps',
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ]
    },
    '/zh/': {
      lang: 'zh',
      title: 'PureWallet 帮助中心',
      description: '专业数字货币钱包',
      keywords: '比特币,以太坊,iost,iostabc,比特现金,sdk,bitapp,开发者,水龙头,测试币,测试币领取,免费,free,ropsten,testnet,faucet,多币种,支付按钮,跨链开发,区块链开发,智能合约,比特币,钱包,兔子洞口,dapp,dapps,去中心化应用,去中心应用,应用,插件钱包',
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ]
    }
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'PureWallet', link: 'https://www.purewallet.org/' }
    ],
    locales:{
      '/':{
        nav: [
          { text: 'PureWallet', link: 'https://www.purewallet.org/' }
        ],
        selectText: 'Languages',
        label: 'English',
        sidebar: [
          {
            title: 'IOST Free Account Creation',
            collapsable: false,
            children: [
              '/en/iostaccount/'
            ]
          },
          {
            title: 'IOST Pledge For New Account',
            collapsable: false,
            children: [
              '/en/iostpledgeaccount/'
            ]
          },
          {
            title: 'IOST Deposit',
            collapsable: false,
            children: [
              '/en/iostdeposit/'
            ]
          },
          {
            title: 'IOST Vote',
            collapsable: false,
            children: [
              '/en/iostvoting/'
            ]
          },
          {
            title: 'IOST DApps',
            collapsable: false,
            children: [
              '/en/iostdapps/'
            ]
          }
        ]
      },
      '/zh/':{
        nav: [
          { text: 'PureWallet', link: 'https://www.purewallet.org/' }
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
            title: 'IOST免费创建账户',
            collapsable: false,
            children: [
              '/zh/iostaccount/'
            ]
          },
          {
            title: 'IOST抵押创建账户',
            collapsable: false,
            children: [
              '/zh/iostpledgeacount/'
            ]
          },
          {
            title: 'IOST 充值',
            collapsable: false,
            children: [
              '/zh/iostdeposit/'
            ]
          },
          {
            title: 'IOST 投票',
            collapsable: false,
            children: [
              '/zh/iostvoting/'
            ]
          },
          {
            title: 'IOST DApps',
            collapsable: false,
            children: [
              '/zh/iostdapps/'
            ]
          }
        ]
      }
    }
  },
  ga:'UA-123067217-1'
}