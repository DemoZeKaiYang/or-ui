export default {
  title: 'OR-UI',
  base: process.env.NODE_ENV === 'production' ? '/or/' : '/',
  themeConfig: {
    nav: [
      { text: '文档', link: '/guild/introduce' },
      { text: '组件', link: '/components/index' }
    ],
    sidebar: {
      '/guild/': [
        {
          text: '引入',
          items: [
            {
              text: '介绍',
              link: '/guild/introduce'
            },
            {
              text: '快速开始',
              link: '/guild/quickstart'
            }
          ]
        }
      ],

      '/components/': [
        {
          text: '基础',
          items: [
            {
              text: 'Button按钮',
              link: '/components/button/index'
            },
            {
              text: 'Icon图标',
              link: '/components/icon/index'
            },
            {
              text: 'Link文字链接',
              link: '/components/link/index'
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DemoZeKaiYang/or-ui' }
    ]
  }
}
