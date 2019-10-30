// pages/companyDetail/companyDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switchType: '1',
    longitudeNum: 0,
    latitdueNum: 0
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
    navInstance: 0
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    var app = getApp();
    this.setData({
      navInstance: app.globalData.navInstance,
    });
    wx.getLocation({
      isHighAccuracy: true,
      success: function(res){
        _this.setData({
          longitudeNum: res.longitude,
          latitdueNum: res.latitude
        });
      }
    });
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

  },
  //切换
  switchTab: function(v){
    var currentV = v.currentTarget.dataset;
    if (this.data.switchType != currentV.vindex){
      this.setData({
        switchType: currentV.vindex
      });
    }
  }
});