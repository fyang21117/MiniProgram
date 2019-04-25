//app.js
App({
  onLaunch: function() {

    var logs = wx.getStorageSync('logs') || [] //读取存储在本地缓存中的logs信息
    logs.unshift(Date.now()) //通过UNshift函数添加一条当前时间点信息
    wx.setStorageSync('logs', logs) //新增一条logs数据，写回本地缓存

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    //rpx与px单位之间的换算 : 750/windowWidth = 屏幕的高度（rpx）/windowHeight
    var scroll_height = 750 * windowHeight / windowWidth - 150;
    var scroll_width = this.setData({
      scroll_height: scroll_height
    })
  },

  globalData: {
    userInfo: null,
    TopIndex: 0
  }
})