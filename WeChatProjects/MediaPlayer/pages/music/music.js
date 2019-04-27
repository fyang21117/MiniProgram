// pages/media/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    current: {
      poster: ['https://y.gtimg.cn/music/photo_new/T002R300x300M000001xXVYZ3D3baj.jpg?max_age=2592000',
        'https://y.gtimg.cn/music/photo_new/T002R300x300M000001xl4uF3OU04A.jpg?max_age=2592000',
        'https://y.gtimg.cn/music/photo_new/T002R300x300M000003mShNh1zsmxX.jpg?max_age=2592000',
        'https://y.gtimg.cn/music/photo_new/T002R300x300M000000uoprw2iIYSC.jpg?max_age=2592000',
        'https://y.gtimg.cn/music/photo_new/T002R300x300M000004VR1w241uBhB.jpg?max_age=2592000'
      ],
      name: ['往后余生', '说散就散', '一生所爱', '房间', '可不可以'],
      author: ['马良', '袁娅维', '舒淇', '刘瑞琦', '张紫豪'],
      src: ['https://isure.stream.qqmusic.qq.com/C4000046NhnE3I6glK.m4a?guid=2130345730&vkey=8641F86B47BDAC8929530163351A02E162421342F6FB92EB91C47DC9C7D87928259DC0EFCC43E2440C9483283B1D50BD8BB7F2369F22FD86&uin=3796&fromtag=66',
        'https://dl.stream.qqmusic.qq.com/C400003vUjJp3QwFcd.m4a?guid=2130345730&vkey=6BE183006C5368D1D315CFAAA1E9398574DE567EAE59532CA4CA16146A2ECB59FF612A9C6F8C6F7B23C0D415BCAFE44B51A91B139A6B376A&uin=3796&fromtag=66',
        'https://isure.stream.qqmusic.qq.com/C400002r3PRW3KCJre.m4a?guid=2130345730&vkey=E5322FC323154D8F7F3EFAA2B288F824F86058B48C53E29DD9EB94D0ABB17F2223B333C4CFE3B7D87DFF3DBB99F49CC9AB77FB89C04C8DAF&uin=3796&fromtag=66',
        'https://isure.stream.qqmusic.qq.com/C400001HXIzh1hfxKw.m4a?guid=2130345730&vkey=2890AC69126F4AD85EF62502D4821F801212A3F6B31330A4B2F296EA053666644B9FEEABD99F867F8CDC51DC5C899EE71C4A4484DFBD5761&uin=3796&fromtag=66',
        'https://isure.stream.qqmusic.qq.com/C400003w4Tn23jENMJ.m4a?guid=2130345730&vkey=C21AE43CDCA606FCC4DD823BCB136470E0C1E1906CEEE1ECD4CAF7373F1317A6923B567A7B63BC76BD41CA5932B41461D92C582D8781EA6E&uin=3796&fromtag=66'
      ]
    },

    audioAction: {
      method: 'pause'
    },
  },

  audioPlay: function() {
    this.audioCtx.play();
  },

  audioPause: function() {
    this.audioCtx.pause();
  },

  audioLast: function() {
    var that = this
    var id = parseInt(this.data.index)
    var num = id - 1
    if (num < 0) {
      wx.showToast({title: '已是第一首',})
    } else {
      this.setData({index: num})
      that.change()
    }
  },
  audioNext: function() {
    var that = this
    var id = parseInt(this.data.index)
    var num = id + 1
    if (num > this.data.current.src.length -1 ) {
      wx.showToast({title: '已是最后一首',})
    } else {
      this.setData({index: num})
      that.change()
    }
  },
  audioStart: function() {
    this.audioCtx.seek(0)
    this.audioCtx.play()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    that.change()
  },

  change:function() {
    var that = this
    var poster = this.data.poster[this.data.index].poster
    var name = this.data.name[this.data.index].name
    var author = this.data.author[this.data.index].author
    var src = this.data.src[this.data.index].src
    this.setData({
      poster: poster,
      name: name,
      author: author,
      src: src,
    })
    that.audioCtx.play()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.audioCtx = wx.createAudioContext('myAudio')
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