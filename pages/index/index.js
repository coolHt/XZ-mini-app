//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    searchField: '', //搜索框文字
    showClear: false, //清除按钮
    userInfo: {},
    navInstance: 0,
    taskList:[1,1,1,1,1,1,1,1,1,1,1,1,1],
    tags: [{
      name: '保洁',
      isSelected: false
    }, {
      name: '行政专员',
      isSelected: false
    }, {
      name: '物业专享经理',
      isSelected: false
    }, {
      name: '保洁主管',
      isSelected: false
    }, {
      name: '保洁阿姨',
      isSelected: false
    }, {
      name: '保安',
      isSelected: false
    }, {
      name: '物业经理',
      isSelected: false
    }, ],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'), //判断是否可以使用
    time: new Date().getFullYear(),
    listIndex: 0,
    show: false,
    activeNames: ['1'],
    result_length: 90,
    //只搜索职位名称
    isName: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  showList: function(e){
    let v;
    e.currentTarget.dataset.num === this.data.listIndex ? v = 0 : v = e.currentTarget.dataset.num;
    this.setData({
      listIndex: v
    });
  },
  onLoad: function () {
    var app = getApp();
    this.setData({
      navInstance: app.globalData.navInstance,
    });
    
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  //是否只搜索职位名称
  toggleSearchName({detail}) {
    this.setData({
      isName: !this.data.isName
    });
  },
  //输入
  watchSearch(e){
    var v = e.detail.value; //输入值
    var show = false;
    v.trim() != '' ? show = true : show = false;
    this.setData({
      showClear: show
    });
  },
  //清空搜索
  clearSearch(){
    var preTags = this.data.tags;
    preTags.forEach(v => {
      if(v.isSelected) v.isSelected = false;
    });
    this.setData({
      searchField: '',
      showClear: false,
      tags: preTags
    });
  },
  //添加关键词到搜索
  addSearchField(e){
    var v = e.target.dataset.tag;
    var vIndex = e.target.dataset.index;
    var preV = this.data.searchField;
    if (preV.indexOf(v) > -1){
      preV = preV.replace("[" + v + "]", '');
    }else{
      preV = preV ? preV + "[" + v + "]" : "[" + v + "]";
    }

    var preTags = this.data.tags;
    preTags[vIndex].isSelected = !preTags[vIndex].isSelected;
    this.setData({
      searchField: preV,
      tags: preTags
    });
  }
});
