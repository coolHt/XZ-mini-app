// pages/jobDetail/jobDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: '均胜电子', //自定义导航文字
    navInstance: 0,
    stars: [{
      label: 0,
      isSelected: false,
    }, {
      label: 1,
      isSelected: false,
    }, {
      label: 2,
      isSelected: false,
    }, {
      label: 3,
      isSelected: false,
    }, {
      label: 4,
      isSelected: false,
    }]
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
    var app = getApp();
    this.setData({
      navInstance: app.globalData.navInstance,
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

  },
  //点星评价
  clickStar: function(e){
    var zIndex = e.currentTarget.dataset.index;
    var stars = this.data.stars;
    for (let i = 0; i < stars.length; i++) {
      i <= zIndex ? stars[i].isSelected = true : stars[i].isSelected = false;
    }
    this.setData({
      stars: stars
    });
  },
  
});