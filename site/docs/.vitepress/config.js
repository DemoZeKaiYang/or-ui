export default {
  title: 'or',
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
          text: '进阶',
          items: [
            {
              text: '按钮',
              link: '/components/button/index'
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DemoZeKaiYang/or-ui' }
    ]
  }
};
