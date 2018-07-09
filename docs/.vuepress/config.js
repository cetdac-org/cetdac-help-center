module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'AppRoles Developer Document',
      description: 'Developer Document',
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ]
    },
    '/zh/': {
      lang: '简体中文',
      title: 'AppRoles',
      description: '开发者文档',
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ]
    }
  },
  themeConfig: {
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
        selectText: '选择语言',
        label: '简体中文',
        sidebar: [
          // {
          //   title: '安装',
          //   collapsable: false,
          //   children: [
          //     '/zh/plugin'
          //   ]
          // },
          {
            title: '上手指南',
            collapsable: false,
            children: [
              '/zh/getstarted/'
            ]
          },
          {
            title: '示例',
            children: [
              '/zh/demos/'
            ]
          },
          {
            title: 'API文档',
            children: [ /* ... */ ]
          },
          {
            title: '更多相关教程',
            collapsable: false,
            children: [
              //'/zh/'
            ]
          },
        ]
      }
    }
  }
}