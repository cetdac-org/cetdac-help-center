module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'BITAPP Developer Document',
      description: 'Developer Document',
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ]
    },
    '/zh/': {
      lang: 'zh',
      title: '开发者文档 | BITAPP',
      description: ' ',
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
        selectText: 'Languages',
        label: 'English',
        sidebar: [
          {
            title: 'Installation',
            collapsable: false,
            children: [
              '/'
            ]
          },
          {
            title: 'Guide',
            collapsable: false,
            children: [
              '/'
            ]
          },
          {
            title: 'API Reference',
            children: [ /* ... */ ]
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
  }
}