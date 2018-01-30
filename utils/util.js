const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


/**
* 从一个数组中随机取出若干个元素组成数组
* @param {Array} arr 原数组
* @param {Number} count 需要随机取得个数
**/
const getRandomArray = (arr, count) => {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

/**
* 从一个数组中随机取出一个元素
* @param {Array} arr 原数组
**/
const getRandomArrayElement = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 加载配置文件
const config = require('../global_config.js');
// 格式化时间戳
function getTime(timestamp) {
  var time = arguments[0] || 0;
  var t, y, m, d, h, i, s;
  t = time ? new Date(time * 1000) : new Date();
  y = t.getFullYear();    // 年
  m = t.getMonth() + 1;   // 月
  d = t.getDate();        // 日

  h = t.getHours();       // 时
  i = t.getMinutes();     // 分
  s = t.getSeconds();     // 秒

  return [y, m, d].map(formatNumber).join('-') + ' ' + [h, i, s].map(formatNumber).join(':');

}


module.exports = {
  formatTime: formatTime,
  getRandomArray: getRandomArray,
  getRandomArrayElement: getRandomArrayElement,

  getTime: getTime,
  //请求数据
  AJAX: function (data = '', fn, method = "get", header = {}) {
    wx.request({
      url: config.API_HOST + data,
      method: method ? method : 'get',
      data: {},
      header: header ? header : { "Content-Type": "application/json" },
      success: function (res) {
        fn(res);
      }
    });
  },

  /**
 * 获取格式化日期
 * 20161002
 */
  getFormatDate: function (str) {

    // 拆分日期为年 月 日
    var YEAR = str.substring(0, 4),
      MONTH = str.substring(4, 6),
      DATE = str.slice(-2);

    // 拼接为 2016/10/02 可用于请求日期格式
    var dateDay = YEAR + "/" + MONTH + "/" + DATE;

    // 获取星期几
    var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      day = new Date(dateDay).getDay();
    return {
      "dateDay": MONTH + "月" + DATE + "日 " + week[day]
    }
  },
}

