//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    taskList:[1,1,1,1,1,1,1,1,1,1,1,1,1],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'), //判断是否可以使用
    time: new Date().getFullYear(),
    listIndex: 0,
    show: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  showList: function(e){
    let v;
    e.currentTarget.dataset.num === this.data.listIndex ? v = 0 : v = e.currentTarget.dataset.num;
    this.setData({
      listIndex: v
    });
  },
  onLoad: function () {
    
  }
});
