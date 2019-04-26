// pages/media/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp: 0,
    current: {
      poster: ['https://y.gtimg.cn/music/photo_new/T002R300x300M000001xXVYZ3D3baj.jpg?max_age=2592000',
      'https://y.gtimg.cn/music/photo_new/T002R300x300M000001xl4uF3OU04A.jpg?max_age=2592000'],
      name: ['往后余生','说散就散'],
      author: ['马良','袁娅维'],
      src: ['https://isure.stream.qqmusic.qq.com/C4000046NhnE3I6glK.m4a?guid=2130345730&vkey=8641F86B47BDAC8929530163351A02E162421342F6FB92EB91C47DC9C7D87928259DC0EFCC43E2440C9483283B1D50BD8BB7F2369F22FD86&uin=3796&fromtag=66',
      'https://dl.stream.qqmusic.qq.com/C400003vUjJp3QwFcd.m4a?guid=2130345730&vkey=6BE183006C5368D1D315CFAAA1E9398574DE567EAE59532CA4CA16146A2ECB59FF612A9C6F8C6F7B23C0D415BCAFE44B51A91B139A6B376A&uin=3796&fromtag=66']
    },

    audioAction: {
      method: 'pause'
    },
  },

  audioPlay: function() {
    this.audioCtx1.play()
  },

  audioPause: function() {
    this.audioCtx1.pause()
  },

  audioLast: function() {
  },
  audioNext: function() {

  },
  audioStart: function() {
    this.audioCtx1.seek(0)
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
    this.audioCtx1 = wx.createAudioContext('myAudio')
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