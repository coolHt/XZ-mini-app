//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    taskList:[1,1,1,1,1,1,1,1,1,1,1,1,1],
    tags: ['保洁', '行政专员', '物业专享经理', '保洁主管', '保洁阿姨', '保安', '物业经理'],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'), //判断是否可以使用
    time: new Date().getFullYear(),
    listIndex: 0,
    show: false,
    activeNames: ['1'],
    result_length: 90,
    //只搜索职位名称
    isName: false
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
    
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  //是否只搜索职位名称
  toggleSearchName({detail}) {
    this.setData({
      isName: !this.data.isName
    });
  }
});
