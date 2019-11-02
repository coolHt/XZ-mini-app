// pages/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navInstance: 0,
    inputType: '',
    foucsType: '',
    resumeName: '',
    resumeGender: '',
    resumePhone: ''
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
  //点击输入字段
  inputField: function(e){
    var _this = this; 
     this.setData({
       inputType: e.currentTarget.dataset.partition
     });
     setTimeout(function(){
       _this.setData({
         foucsType: e.currentTarget.dataset.partition
       });
     },210);
  },
  //移除时重置状态
  initFoucs: function(e){
    this.setData({
      inputType: ''
    });
    console.log(this.data.inputType);
  }
});