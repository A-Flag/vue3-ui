module.exports = {
  title: 'Z-UI',
  description: 'zi-shui UI',
  themeConfig: {
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkTest: '编辑',
    repo: 'https://gitee.com/login',
    footer: {
      message: 'released--',
      copyright: '2022--lala'
    },
    nav: [
      {
        text: '指南',
        link: '/guide/installation',
        activeMatch: '/guide/'
      },
      {
        text: '组件',
        link: '/component/icon',
        activeMatch: '/component/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            {
              text: '安装',
              link: '/guide/installation'
            },
            {
              text: '快速开始',
              link: '/guide/quireStart'
            }
          ]
        }
      ],
      '/component/': [
        {
          text: '组件',
          items: [
            {
              text: '图标',
              items: [
                {
                  text: 'Icon',
                  link: '/component/icon'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
