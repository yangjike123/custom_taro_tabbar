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
        text: '',
      },
      {
        pagePath: 'pages/journey/index',
        text: ''
      },
      {
        pagePath: 'pages/discover/index',
        text: ''
      },
      {
        pagePath: 'pages/my/index',
        text: ''
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
