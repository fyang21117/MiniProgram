// pages/Cpage/Cpage.js
Page({

  /**
   * MINA框架同步数据：
   * 视图层的信息和参数通过事件绑定，向逻辑层传递
   * 逻辑层的数据通过数据绑定，向视图层传递数据
   */
  data: {
    bindvar: "one"
  },

  changetext() {
    this.setData({
      bindvar: "two"
    })
  },

  onLaunch: function() {
    console.log('Cpage Launching ...');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
    return {
      title: 'Minijia智能情景模式',
      path: '/page/user?id=123'
    }
  }
})