var y = require('../../assets/js/pinyinUtil');
var areas = require("../../assets/js/data");
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    w: 0, //可视屏屏宽
    h: 0, //可视屏屏高
    navInstance: 0,
    selectCityLeft: 0, //选择城市页面的初始位置
    currentCity: {
      name:"杭州市",
      code:330102
    }, //当前地址
    topSpace: 0, //按钮距离顶部的位置
    searchValue: "", //搜索城市的文字
    buttonHeight: 0, //按钮的高度,
    ranking: {}, //城市排序
    scrollTop: 0, //滚动距离
    words: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "M",
      "N",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "W",
      "X",
      "Y",
      "Z"
    ],
    searchResult: [],
    areaList: [
      "鄞州区",
      "海曙区",
      "北仑",
      "象山",
      "慈溪",
      "江北",
      "慈城",
      "余姚"
    ],
    areaArray: {
      city1: ["鄞州区"],
      city2: ["海曙区"],
      city3: ["北仑"]
    },
    hot: [
      "北京",
      "上海",
      "广州",
      "深圳",
      "杭州",
      "南京",
      "天津",
      "武汉",
      "重庆"
    ]
  },
  //生命周期
  lifetimes: {
    attached: function() {
      var menuButton = wx.getMenuButtonBoundingClientRect();
      var _this = this;
      wx.getSystemInfo({
        success: function(res) {
          _this.setData({
            w: res.screenWidth,
            h: res.screenHeight,
            topSpace: menuButton.top,
            buttonHeight: menuButton.height,
            selectCityLeft: res.screenWidth
          });
        }
      });
    }
  },
  pageLifetimes: {
    show: function() {
      //排序城市
      var city = areas.default.city;
      var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lists = [];
      var ranklingList = [];
      for (var i = 0; i < capital.length; i++) {
        lists[capital[i]] = [];
      }
      city.forEach(function(c) {
        var l = y.pinyinUtil.getFirstLetter(c.name)[0];
        switch (l) {
          case "A":
            lists["A"].push(c);
            break;
          case "B":
            lists["B"].push(c);
            break;
          case "C":
            lists["C"].push(c);
            break;
          case "D":
            lists["D"].push(c);
            break;
          case "E":
            lists["E"].push(c);
            break;
          case "F":
            lists["F"].push(c);
            break;
          case "G":
            lists["G"].push(c);
            break;
          case "H":
            lists["H"].push(c);
            break;
          case "I":
            lists["I"].push(c);
            break;
          case "J":
            lists["J"].push(c);
            break;
          case "K":
            lists["K"].push(c);
            break;
          case "L":
            lists["L"].push(c);
            break;
          case "M":
            lists["M"].push(c);
            break;
          case "N":
            lists["N"].push(c);
            break;
          case "O":
            lists["O"].push(c);
            break;
          case "P":
            lists["P"].push(c);
            break;
          case "Q":
            lists["Q"].push(c);
            break;
          case "R":
            lists["R"].push(c);
            break;
          case "S":
            lists["S"].push(c);
            break;
          case "T":
            lists["T"].push(c);
            break;
          case "U":
            lists["U"].push(c);
            break;
          case "V":
            lists["V"].push(c);
            break;
          case "W":
            lists["W"].push(c);
            break;
          case "X":
            lists["X"].push(c);
            break;
          case "Y":
            lists["Y"].push(c);
            break;
          case "Z":
            lists["Z"].push(c);
            break;
        }
      });
      for (var a in lists) {
        let singleArea = {
          name: a,
          data: lists[a]
        };
        ranklingList.push(singleArea);
      }
      //赋值
      this.setData({
        ranking: ranklingList
      });

      var app = getApp();
      this.setData({
        navInstance: app.globalData.navInstance
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //显示城市选择
    showSelectArea: function(){
      this.setData({
        selectCityLeft: 0
      });
    },
    //关闭城市选择
    choseIntent: function(){
      this.setData({
        selectCityLeft: this.data.w
      });
    },
    //跳转排序
    routeArea: function(e) {
      var _this = this;
      var className = "#area" + e.currentTarget.dataset.ranking;
      var query = wx.createSelectorQuery();
      query.select(className).boundingClientRect(); //需要滚动距离的数据信息
      query.select(".cityContainer").scrollOffset(); //当前已滚动的数据信息
      query.exec(function(res) {
        var distanceT = res[1].scrollTop;
        var t = res[0].top + distanceT;
        if (t !== 0) t -= _this.data.buttonHeight + 3 * _this.data.topSpace;
        _this.setData({
          scrollTop: t
        });
      });
    },
    //响应输入
    watchInput: function(e) {
      var v = e.detail.value.trim();
      var result = [];
      var city = areas.default.city; //所有城市
      if (v) {
        city.forEach(function(c) {
          if (c.name.indexOf(v) > -1) {
            result.push(c);
          }
        });
      } else {
        result = [];
      }
      //
      this.setData({
        searchResult: result
      });
    },
    //选择城市
    chooseCity: function(e) {
      var cityInfor = e.currentTarget.dataset.city;
      this.setData({
        currentCity: cityInfor,
        searchValue: cityInfor.name,
        searchResult: [],
        selectCityLeft: this.data.w
      });
    },
    //点击当前页面
    clickPage(e){
      var currentT = e.target;
      if (currentT.id !== "searchInput" && currentT.id.indexOf("resultCity") < 0) {
        this.setData({
          searchResult: []
        });
      }
    }
  }
});
