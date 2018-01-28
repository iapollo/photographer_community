//article.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //文章列表数据
    articleList: [
      { id: 1, title: "标题一", time: "2017-3-5 23:01:59", src: "../../images/1.jpg", url: "https://bigdayforus.com/article/10" },
      { id: 2, title: "标题二", time: "2017-3-6 23:01:59", src: "../../images/2.jpg", url: "https://bigdayforus.com/article/1" },
      { id: 3, title: "标题三", time: "2017-3-7 23:01:59", src: "../../images/3.jpg", url: "https://bigdayforus.com/article/2" }
    ]
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.request({
      url: 'https://bigdayforus.com/articles',
      data: {},
      method: 'GET',
      // header: {},
      success: function (res) {
        console.log(res.data)
        that.setData({
          articleList: res.data.result
        })
      }
    })
  },
})
