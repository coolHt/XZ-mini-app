Page({
  data: {
    text: "Page animation",
    animation: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
    //实例化一个动画
    this.animation = wx.createAnimation({
      duration: 1000,
  
      timingFunction: 'linear',
      // 延迟多长时间开始
      delay: 100,
     
      
      success: function (res) {
        console.log(res)
      }
    })
  },

  /**
   * 旋转
   */
  rotate: function () {
    //顺时针旋转10度
    //
    this.animation.top(150).step()
    this.setData({
      //输出动画
      animation: this.animation.export()
    })
  },

  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})