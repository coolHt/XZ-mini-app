// pages/mappage/mappage.js
// 引入qqmapsdk
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
// 实例化API核心类
const qqmapsdk = new QQMapWX({
  key: 'OLYBZ-B2IKX-RA64C-73AMB-CX722-BPFHS' // 必填
});
// 引入axios
// import axios from 'axios'
// import mpAdapter from 'axios-miniprogram-adapter'

// 引入微信同声传译插件进行语音转文字
// const plugin = requirePlugin("WechatSI")
// const manager = plugin.getRecordRecognitionManager()

// axios.defaults.adapter = mpAdapter
Page({
  data: {
    navInstance: 0,
    iconPath: "../../assets/images/location.png",
    isShowCover: false,
    isGetFocus: false,
    Height: 0,
    Width: 0,
    scale: 14,
    latitude: 29.8172,
    longitude: 121.548,
    circles: [{
      latitude: 29.8172,
      longitude: 121.548,
      color: '#ffffff',
      fillColor: '#7cb5ec88',
      radius: 100,
      strokeWidth: 1
    }],
    markers: [],
    entInf: {},
    //inputInfo: '',
    count: 0,
    voicePath: '',
    startPoint: 0,
    //输入框
    inputFocus: false, // input 框的focus状态
    searchText: '', // input 框的输入内容
    inputInfo: '搜索附近的职位', // cover-view 显示的 input 的输入内容
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取屏幕高度
    //this.handlPlayVocal()
    wx.getSystemInfo({
      success: res => {
        //设置map高度，根据当前设备宽高满屏显示
        this.setData({
          Width: res.windowWidth,
          Height: res.windowHeight,
        });
      }
    });

    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: res => {
        let c = [{
          latitude: res.latitude,
          longitude: res.longitude,
          color: '#ffffff',
          fillColor: '#7cb5ec88',
          radius: 100,
          strokeWidth: 1
        }]
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          circles: c
        })
      }
    })

    // TODO:从服务端获取坐标点
    this.handlGetJobList()
  },

  // 获取用户位置
  handlGetLoc: function(e) {
    wx.chooseLocation({
      success: (res) => {
        let c = [{
          latitude: res.latitude,
          longitude: res.longitude,
          color: '#ffffff',
          fillColor: '#7cb5ec88',
          radius: 100,
          strokeWidth: 1
        }]
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          circles: c
        })
        // 重新定位后再次向服务器请求坐标数据
      },
      fail: (res) => {
        wx.getSetting({
          success: (res) => {
            if (!res.authSetting['scope.userLocation']) {
              wx.showModal({
                title: '提示',
                content: '获取定位失败，请前往设置打开定位权限',
                confirmText: '设置',
                confirmColor: '#09bb07',
                success: res => {
                  wx.openSetting({
                    success: res => {}
                  })
                }
              })
            }
          }
        })
      }
    })
  },

  // 点击黑色背景关闭dialog
  handlCloseModal: function(e) {
    this.setData({
      isShowCon: false
    })

  },

  // 点击黑色背景关闭弹出层
  handlCloseCover: function(e) {
    this.setData({
      isShowCover: false,
      entInf: {}
    })
  },
  // 点击marker显示弹出层
  handlShowCover: function(e) {
    this.setData({
      isShowCover: true
    })
    let markerId = e.markerId
    let arrMarkers = e.currentTarget.dataset.markers
    for (let i in arrMarkers) {
      if (markerId === arrMarkers[i].id) {
        this.setData({
          entInf: arrMarkers[i].inf
        })
      }
    }
  },
  // 切换到列表
  handlShowJobList: function(e) {
    wx.navigateTo({
      url: '../index/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  },

  // 将焦点给到 input（在真机上不能获取input焦点）
  handlTapInput() {
    this.setData({
      //在真机上将焦点给input
      inputFocus: true,
    });
  },

  // input 失去焦点后将 input 的输入内容给到cover-view
  handlBlurInput(e) {
    this.setData({
      inputInfo: e.detail.value || '输入'
    });
  },

  // TODO:
  // 向服务器请求职位数据
  // 传入当前坐标参数以及对职位信息的筛选条件
  // 调用wx.request
  handlGetJobList(e) {

    // axios.get('https://easy-mock.com/mock/5d4a393060b1e07c422a0bc1/example/query')
    // axios.get('http://127.0.0.1:8001/mock')
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // wx.request({
    //   url: 'https://jsonplaceholder.typicode.com/posts', //给函数传递服务器地址参数 
    //   data: {},
    //   success: (res) => {},
    // })

    let arrEnt = [{
      id: "1",
      latitude: 29.8172,
      longitude: 121.550,
      width: 30,
      height: 30,
      inf: {
        logo: 'https://zhishiimg.oss-cn-hangzhou.aliyuncs.com/1f5ac949-1a87-44db-8412-095d2506b689/1565842550293.jpg',
        job: '罗森(世纪东方店)',
        salary: '3000 - 4000元/月',
        ent: '宁波市测试公司',
        tag: ['五险一金', '班车接送', '员工宿舍'],
        count: 13,
        add: '宁波市鄞州区惊驾路汉德城207',
        date: '07.14'
      }
    }, {
      id: "2",
      latitude: 29.8172,
      longitude: 121.555,
      width: 30,
      height: 30,
      inf: {
        logo: 'https://zhishiimg.oss-cn-hangzhou.aliyuncs.com/1f5ac949-1a87-44db-8412-095d2506b689/1565842550293.jpg',
        salary: '3000 - 4000元/月',
        ent: '7-11(世纪东方店)',
        tag: ['五险一金', '班车接送', '员工宿舍'],
        count: 13,
        add: '宁波市鄞州区惊驾路汉德城207',
        date: '07.14'
      }
    }, {
      id: "3",
      latitude: 29.8172,
      longitude: 121.560,
      width: 30,
      height: 30,
      inf: {
        logo: 'https://zhishiimg.oss-cn-hangzhou.aliyuncs.com/1f5ac949-1a87-44db-8412-095d2506b689/1565842550293.jpg',
        salary: '3000 - 4000元/月',
        ent: 'cole(世纪东方店)',
        tag: ['五险一金', '班车接送', '员工宿舍'],
        count: 13,
        add: '宁波市鄞州区惊驾路汉德城207',
        date: '07.14'
      }
    }, {
      id: "4",
      latitude: 29.8172,
      longitude: 121.545,
      width: 30,
      height: 30,
      inf: {
        logo: 'https://zhishiimg.oss-cn-hangzhou.aliyuncs.com/1f5ac949-1a87-44db-8412-095d2506b689/1565842550293.jpg',
        salary: '3000 - 4000元/月',
        ent: '华联(世纪东方店)',
        tag: ['五险一金', '班车接送', '员工宿舍'],
        count: 13,
        add: '宁波市鄞州区惊驾路汉德城207',
        date: '07.14'

      }
    }]
    for (let i in arrEnt) {
      arrEnt[i].iconPath = this.data.iconPath
    }
    this.setData({
      markers: arrEnt
    })
  },

  handlChooseIsOpen: function(e) {
    let c = this.data.count
    c++
    this.setData({
      count: c
    })
    if (this.data.count % 2 == 0) {
      this.handlStopVocal()
    } else {
      this.handlGetVocal()
    }

  },

  // 将地址转化为经纬度
  hanldSearchLat: function(e) {
    var _this = this;
    //调用地址解析接口
    qqmapsdk.geocoder({
      // address: e.detail.value.geocoder, //地址参数
      address: '浙江省宁波市鄞州区惊驾路735',
      success: function(res) { //成功后的回调
        console.log(res);
        var res = res.result;
        var latitude = res.location.lat;
        var longitude = res.location.lng;
        //根据地址解析在地图上标记解析地址位置
        _this.setData({ // 获取返回结果，放到markers及poi中，并在地图展示
          markers: [{
            id: 0,
            title: res.title,
            latitude: latitude,
            longitude: longitude,
            iconPath: '../../assets/images/location.png', //图标路径
            width: 30,
            height: 30,
          }],
          poi: { //根据自己data数据设置相应的地图中心坐标变量名称
            latitude: latitude,
            longitude: longitude
          }
        });
      },
      fail: function(error) {
        console.error(error);
      },
      complete: function(res) {
        console.log(res);
      }
    })
  },
  /**输入框**/
  tapInput() {
    this.setData({
      inputInfo: '',
      inputFocus: true
    });
  },
  blurInput(val) {
    this.setData({
      inputInfo: val.detail.value || '搜索'
    });
  },
  tapType(){
    this.setData({
      isShowCover: false
    });
  },
  //企业卡片跳转
  jumpRoute(){
    wx.navigateTo({
      url: '../companyDetail/companyDetail'
    });
  },
  routeList(){
    wx.navigateTo({
      url: '../index/index'
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var app = getApp();
    this.setData({
      navInstance: app.globalData.navInstance + 5,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})