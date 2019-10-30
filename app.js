//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow(){
      var menuButton = wx.getMenuButtonBoundingClientRect();
      this.globalData = {
        navInstance: menuButton.height + menuButton.top
      };
      

    //授权获取当前地址
    const _this = this;
    wx.authorize({
      scope: 'scope.userLocation',
      success: function(){
        //授权之后获取当前的位置
        _this.getLocationPara();
      },
      fail: function(){
        console.log('Something wrong');
      }
    });
  },
  
  //获取当前位置
  getLocationPara(){
    wx.getLocation({
      success: function (res) {
        //经度
        const longitude = res.longitude;
        //纬度
        const latitude = res.latitude;
        console.log(res);
        console.log(`经度: ${longitude}`);
        console.log(`纬度: ${latitude}`);
      },
      fail: function () {
        console.log('检查是否打开微信位置');
      }
    });
  },
  globalData: {
    userInfo: null,
    navInstance: 0
  },
});