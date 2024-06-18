export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/discover/index',
    'pages/journey/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: "首页",
      },
      {
        pagePath: 'pages/journey/index',
        text: '行程'
      },
      {
        pagePath: 'pages/discover/index',
        text: '发现'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
