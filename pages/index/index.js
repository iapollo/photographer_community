//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //navbar数据
    tabs:['首页', '文章列表', '论坛'],
    //轮播图
    imgUrls:[
      {url:'../../images/1.jpg'},
      {url:'../../images/2.jpg'},
      {url:'../../images/3.jpg'}
    ],
    indicatorDot:false,
    autoplay:true,
    interval:5000,
    duration:1000,
    //文章列表数据
    articleList:[
      { id: 1, title: "标题一", time: "2017-3-5 23:01:59", src: "../../images/1.jpg"},
      { id: 2, title: "标题二", time: "2017-3-6 23:01:59", src: "../../images/2.jpg" },
      { id: 3, title: "标题三", time: "2017-3-7 23:01:59", src: "../../images/3.jpg" }
    ],
    imgWidth: wx.getSystemInfoSync().windowWidth,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },


  //事件处理函数
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
