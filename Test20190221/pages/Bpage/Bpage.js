Page({
  data: {
    new: 'top-hoverd-btn',
    recommend: '',
    dailyuse: '',
    household: '',
    kitchen: '',
    player: '',
    TopIndex: 0,
    hidden: false,

    //轮播图
    swiperCurrent: 1,
    arr: [
      {images: '../others/one.jpg'},
      {images: '../others/two.jpg'},
      {images: '../others/three.jpg'},
      {images: '../others/four.jpg'}
    ],
    interval: 1000,
    duration: 1000,
    circular: true,
    beforeColor: "black", //指示点颜色 
    afterColor: "red", //当前选中的指示点颜色 
    previousmargin: '0px', //前边距
    nextmargin: '0px', //后边距

  },
  recommend: function () {
    this.updateBtnStatus('recommend');
  },
  dailyuse: function () {
    this.updateBtnStatus('dailyuse');
  },
  household: function () {
    this.updateBtnStatus('household');
  },
  kitchen: function () {
    this.updateBtnStatus('kitchen');
  },
  player: function () {
    this.updateBtnStatus('player');
  },

  //轮播图的切换事件 
  swiperChange: function(e) {
    console.log(e.detail.current);
    this.setData({
      swiperCurrent: e.detail.current //获取当前轮播图片的下标
    })
  },
  //滑动图片切换 
  chuangEvent: function(e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },

  onLaunch: function () {
    console.log('Bpage is Launching ...');
  },
  onShow: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        hidden: true
      });
    }, 1500);
  },
  updateBtnStatus: function (k) {
    this.setData({
      recommend: this.getHoverd('recommend', k),
      dailyuse: this.getHoverd('dailyuse', k),
      household: this.getHoverd('household', k),
      kitchen: this.getHoverd('kitchen', k),
      player: this.getHoverd('player', k),
    });
  },
  getHoverd: function (src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  },

})