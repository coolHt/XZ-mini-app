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
    resumePhone: '',
    resumeBorth: '',
    resumeDiploma:'',
    resumeWorks: '',
    show: false,
    selectTitle: '',
    selectType:'',
    borthArray: [ {
      name: '1966'
    }, {
      name: '1967'
    }, {
      name: '1968'
    }, {
      name: '1969'
    }, {
      name: '1970'
    }, {
      name: '1971'
    }, {
      name: '1972'
    }, {
      name: '1973'
    }, {
      name: '1974'
    }, {
      name: '1975'
    }, {
      name: '1976'
    }, {
      name: '1977'
    }, {
      name: '1978'
    }, {
      name: '1979'
    }, {
      name: '1980'
    }, {
      name: '1981'
    }, {
      name: '1982'
    }, {
      name: '1983'
    }, {
      name: '1984'
    }, {
      name: '1985'
    }, {
      name: '1986'
    }, {
      name: '1987'
    }, {
      name: '1988'
    }, {
      name: '1989'
    }, {
      name: '1990'
    }, {
      name: '1991'
    }, {
      name: '1992'
    }, {
        name: '1993'
      }, {
        name: '1994'
      }, {
        name: '1995'
      }, {
        name: '1996'
      }, {
        name: '1997'
      }, {
        name: '1998'
      }, {
        name: '1999'
      }, {
        name: '2000'
      }, {
        name: '2001'
      }, {
        name: '2002'
      }, {
        name: '2003'
      } ],
    workTimeArray: [{
        name: '无经验'
      }, {
        name: '应届生'
      }, {
        name: '1-3年'
      }, {
        name: '3-5年'
      }, {
        name: '5-10年'
      }, {
        name: '10年以上'
      }, {
        name: '高中以下'
      }, {
        name: '高中以下'
      }],
    diplomaArray: [{
      name: '高中以下'
    }, {
      name: '高中'
    }, {
      name: '中专/技校'
    }, {
      name: '大专'
    }, {
      name: '本科'
    }, {
      name: '硕士'
    }, {
      name: '博士'
    }],
    selectAction:[]
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
    if (e.currentTarget.dataset.inputtype == 'name') {
      this.setData({
        resumeName: e.detail.value,
        inputType: ''
      });
    } else if (e.currentTarget.dataset.inputtype == 'phone') {
      this.setData({
        resumePhone: e.detail.value,
        inputType: ''
      });
    }else{
      this.setData({
        inputType: ''
      });
    }

  },
  //选择性别
  changeGender: function(e){
    var datas = e.currentTarget.dataset.gender;
    console.log(datas);
    this.setData({
      resumeGender: datas
    });
  },
  //
  saveProfile: function(){
    return;
  },
  selectedArray: function(e){
    var sType = e.currentTarget.dataset.select;
    var title = '';
    var actionArray = [];
    var selectType = '';
    if (sType === 'borth') {
      title = '请选择出生日期';
      actionArray = this.data.borthArray;
      selectType = 'borth';
    } else if (sType === 'diploma') {
      title = '请选择最高学历';
      actionArray = this.data.diplomaArray;
      selectType = 'diploma';
    } else if (sType === 'workTime') {
      title = '请选择工作时间';
      actionArray = this.data.workTimeArray;
      selectType = 'workTime';
    }
    this.setData({
      show: true,
      selectAction: actionArray,
      selectTitle: title,
      selectType: selectType
      
    });
    console.log(sType);
  },
  onClose() {
      this.setData({
        show: false
      });
    },

    onSelect(event) {
      //borth //diploma //workTime
      var sType = this.data.selectType;
      if (sType == 'borth'){
        this.setData({
          resumeBorth: event.detail.name
        });
      } else if (sType == 'diploma') {
        this.setData({
          resumeDiploma: event.detail.name
        });
      }else if(sType == 'workTime'){
        this.setData({
          resumeWorks: event.detail.name
        });
      }
    }
});