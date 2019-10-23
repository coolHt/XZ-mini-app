// components/custom-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navTitle: { //文字
      type: String,
      value: ''
    },
    pos: { //文字位置
      type: String,
      value: 'center', //值left/center
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    w: 0, //可视屏屏宽
    h: 0, //可视屏屏高
    topSpace: 0, //按钮距离顶部的位置
    buttonHeight: 0,  //按钮的高度,
    title: '',
    titlePos: ''
  },

  //生命周期
  lifetimes: {
    attached: function(){
      var menuButton = wx.getMenuButtonBoundingClientRect();
      var _this = this;
      wx.getSystemInfo({
        success: function(res){
          _this.setData({
            w: res.screenWidth,
            h: res.screenHeight,
            topSpace: menuButton.top,
            buttonHeight: menuButton.height,
            title: _this.properties.navTitle,
            titlePos: _this.properties.pos
          });
        }
      }); 
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
