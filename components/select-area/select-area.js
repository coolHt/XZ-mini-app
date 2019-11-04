// components/select-area/select-area.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    w: 0, //可视屏屏宽
    h: 0, //可视屏屏高
    navInstance: 0,
    topSpace: 0, //按钮距离顶部的位置
    buttonHeight: 0,  //按钮的高度,
  },
  //生命周期
  lifetimes: {
    attached: function () {
      var menuButton = wx.getMenuButtonBoundingClientRect();
      var _this = this;
      wx.getSystemInfo({
        success: function (res) {
          _this.setData({
            w: res.screenWidth,
            h: res.screenHeight,
            topSpace: menuButton.top,
            buttonHeight: menuButton.height
          });
        }
      });
    }
  },
  pageLifetimes: {
    show: function () {
      var app = getApp();
      this.setData({
        navInstance: app.globalData.navInstance,
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
