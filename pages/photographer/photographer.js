// pages/photographer/photographer.js
const util = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:{},
    city:{},
    photo:{},
    worksList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options 为页面跳转所带来的参数
    var that = this
    var id = options.id;
    console.log(options.id);

    // 请求内容数据
    util.AJAX("news/" + id, function (res) {
      // var arr = res.data;
      var arr = {
        'name':"name1",
        'city':"china.beijing",
        'photo':"../../images/name1.jpg",
        'works':[
          // { 'url': "../../images/beijing.jpg" },
          // { 'url': '../../images/beijing.jpg' },
          // { 'url': '../../images/beijing.jpg' }
          '../../images/beijing.jpg',
          '../../images/beijing1.jpg',
          '../../images/shanghai.jpg',
          '../../images/shanghai1.jpg',
          '../../images/guangzhou.jpg'
        ]
      };
 
      // 重新写入数据
      that.setData({
        name: arr.name,
        city: arr.city,
        photo: arr.photo,
        worksList: arr.works
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})