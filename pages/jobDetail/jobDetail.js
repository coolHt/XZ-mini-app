// pages/jobDetail/jobDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    w: 0, //屏宽
    h: 0, //屏高
    buttonHeight: 0, //按钮高
    topSpace: 0, //距离顶部的间距
    pageTitle: '均胜电子' //自定义导航文字
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('hello');
    console.log(wx.getMenuButtonBoundingClientRect());
    let menuButton = wx.getMenuButtonBoundingClientRect();
    let _this = this;
    wx.getSystemInfo({
      success: function(res){
        _this.setData({
          w: res.screenWidth,
          h: res.screenHeight,
          topSpace: menuButton.top,
          buttonHeight: menuButton.height
        });
      }
    });
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