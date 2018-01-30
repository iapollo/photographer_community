//home.js
//获取应用实例
const util = require('../../utils/util.js');
const app = getApp()

Page({
  data: {
    //轮播图
    imgUrls: [
      { url: '../../images/beijing1.jpg' },
      { url: '../../images/shanghai.jpg' },
      { url: '../../images/guangzhou1.jpg' },
      { url: '../../images/shenzhen1.jpg' }
    ],
    indicatorDot: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgWidth: wx.getSystemInfoSync().windowWidth,
    //九宫格
    grids:[
      { text: '优秀作品', icon: '../../images/pic1.png', url: 'conference'},
      { text: '优秀摄影师', icon: '../../images/photographer.png', url: 'index' },
      { text: '优秀服务商', icon: '../../images/provider1.png', url: 'index' },

    ],
    //picker
    array: ['中国', '美国', '巴西', '俄罗斯'],
    objectArray: [
      {
        id: 0,
        name: '中国'
      },
      {
        id: 1,
        name: '美国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '俄罗斯'
      }
    ],
    //瀑布流
    datalist: [],
    dataListDateCurrent: 20180106,      // 当前日期current
    dataListDateCount: 0,
    imagesHeightList: [],

    //瀑布流 liujch add
    cityDescription:"",
    cityList:[]

  },


  //事件处理函数
  //picker
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //加载数据
    this.loadData();
    
   
  },


  //下载瀑布流数据
  loadData: function () {
    /**
    * 发送请求数据
    */
    var that = this

    var currentDate = this.data.dataListDateCurrent;
    util.AJAX("news/before/" + currentDate, function (res) {
      // var arr = res.data;
      //liujch add
      var arr = {
        'description':"选定旅行目的地，选择当地的摄影师，省去摄影师昂贵的机票和酒店费用，把钱花到享受异国风情上吧",
        'cities':[
          {
            'title': "北京是一个古老的城市",
            'id':'1',
            'images':[
              '../../images/beijing.jpg',
              '../../images/beijing1.jpg'
            ]
          },
          {
            'title': "上海是一个时尚的城市",
            'id':'2',
            'images': [
              '../../images/shanghai.jpg',
              '../../images/shanghai1.jpg'
            ]
          },
          {
            'title': "广州是一个时尚的城市",
            'id': '3',
            'images': [
              '../../images/guangzhou.jpg',
              '../../images/guangzhou1.jpg'
            ]
          },
          {
            'title': "深圳是一个时尚的城市",
            'id': '4',
            'images': [
              '../../images/shenzhen.jpg',
              '../../images/shenzhen1.jpg'
            ]
          }
        ]
      };

      // 然后重新写入数据
      that.setData({
        cityDescription: arr.description,                       // 存储数据
        cityList: arr.cities
      });

      // var format = util.getFormatDate(arr.date);

      // // 格式化日期方便加载指定日期数据
      // // 格式化日期获取星期几方便显示
      // arr["dateDay"] = format.dateDay;

      // // 获取当前数据进行保存
      // var list = that.data.datalist;
      // // 然后重新写入数据
      // that.setData({
      //   datalist: list.concat(arr),                              // 存储数据
      //   dataListDateCurrent: arr.date,
      //   dataListDateCount: that.data.dataListDateCount + 1      // 统计加载次数
      // });
    });
  },

  //下载图片，打印日志，可以去掉
  WxMasonryImageLoad: function (e) {
    var that = this;
    console.log(e.detail.height);
  }
})
