module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'BITAPP Developer Document',
      description: 'BitApp, Create your life with blockchain',
      keywords: 'eth,以太坊,bch,bcc,bitcoin cash,比特现金,sdk,bitapp,开发者,水龙头,测试币,测试币领取,免费,free,ropsten,testnet,faucet,多币种,支付按钮,跨链开发,区块链开发,智能合约,比特币,btc,钱包,wallet,extension,metamask,兔子洞口,dapp,play,dapps,去中心化应用,去中心应用,应用,插件钱包',
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ]
    },
    '/zh/': {
      lang: 'zh',
      title: '开发者文档 | BITAPP',
      description: 'BitApp, 区块链开发第一站',
      keywords: 'eth,以太坊,bch,bcc,bitcoin cash,比特现金,sdk,bitapp,开发者,水龙头,测试币,测试币领取,免费,free,ropsten,testnet,faucet,多币种,支付按钮,跨链开发,区块链开发,智能合约,比特币,btc,钱包,wallet,extension,metamask,兔子洞口,dapp,play,dapps,去中心化应用,去中心应用,应用,插件钱包',
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ]
    }
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'BITAPP Wallet', link: 'http://www.bitapp.net/' },
      { text: 'Developer', link: 'http://developer.bitapp.net/' },
      { text: 'Github', link: 'https://github.com/bitapp' }
    ],
    locales:{
      '/':{
        nav: [
          { text: 'BitApp Wallet', link: 'http://www.bitapp.net/' },
          { text: 'Developer', link: 'http://developer.bitapp.net/' },
          { text: 'Github', link: 'https://github.com/bitapp' }
        ],
        selectText: 'Languages',
        label: 'English',
        sidebar: [
          {
            title: 'Guidance',
            collapsable: false,
            children: [
              '/en/getstarted/'
            ]
          },
          {
            title: 'API',
            collapsable: false,
            children: [
              '/en/reference/bitapp/',
              '/en/reference/wallet/',
              '/en/reference/preference/',
              //'/zh/reference/userContext/',
              '/en/reference/bip32/',
              '/en/reference/bip39/',
              '/en/reference/eth/',
              '/en/reference/bch/'
            ]
          },
          {
            title: 'Demo',
            children: [
              '/en/demos/'
            ]
          },
          {
            title: 'FAQ',
            children: [
              '/en/qa/'
            ]
          },
          {
            title: 'Package Installation',
            children: [
              '/en/qa/zip/'
            ]
          },
          {
            title: 'Appendix',
            children: [
              '/en/append/'
            ]
          }
        ]
      },
      '/zh/':{
        nav: [
          { text: 'BITAPP钱包', link: 'http://www.bitapp.net/' },
          { text: '开发者站', link: 'http://developer.bitapp.net/' },
          { text: 'Github', link: 'https://github.com/bitapp' }
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
            title: 'API文档',
            collapsable: false,
            children: [
              '/zh/reference/bitapp/',
              '/zh/reference/wallet/',
              '/zh/reference/preference/',
              //'/zh/reference/userContext/',
              '/zh/reference/bip32/',
              '/zh/reference/bip39/',
              '/zh/reference/eth/',
              '/zh/reference/bch/'
            ]
          },
          {
            title: '示例',
            children: [
              '/zh/demos/'
            ]
          },
          {
            title: '更多相关教程',
            children: ['/zh/tutorials/']
          },
          {
            title: '常见问题',
            children: [
              '/zh/qa/'
            ]
          },
          {
            title: '无法安装',
            children: [
              '/zh/qa/zip/'
            ]
          },
          {
            title: '附录',
            children: [
              '/zh/append/'
            ]
          }
        ]
      }
    }
  },
  ga:'UA-123067217-1'
}