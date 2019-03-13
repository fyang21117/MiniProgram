// pages/new/new.js
var app = getApp()
Page({
    data: {
        new: 'top-hoverd-btn',
        recommend: '',
        home_app: '',
        household: '',
        kitchen_app: '',
        player: '',
        hidden: false,
        imgUrls: 
        ['../pages/others/a2.png',
        '../pages/others/b2.png',
        '../pages/others/c2.png',
        '../pages/others/d2.png'],
        indicatorDots:true,
        autoplay:true
    },
    recommend: function () {
        this.updateBtnStatus('recommend');
    },
    home_app: function () {
        this.updateBtnStatus('home_app');
    },
    household: function () {
        this.updateBtnStatus('household');
    },
    kitchen_app: function () {
        this.updateBtnStatus('kitchen_app');
    },
    player: function () {
        this.updateBtnStatus('player');
    },

    onLaunch: function () {
        console.log('Mini商城 Launching ...');
    },
    onShow: function () {
        var that = this;
        setTimeout(function () {
            that.setData({hidden: true});
        }, 1500);
    },
    updateBtnStatus: function (k) {
        this.setData({
            recommend: this.getHoverd('recommend', k),
            home_app: this.getHoverd('home_app', k),
            household: this.getHoverd('household', k),
            kitchen_app: this.getHoverd('kitchen_app', k),
            player: this.getHoverd('player', k),
        });
    },
    getHoverd: function (src, dest) {
        return (src === dest ? 'top-hoverd-btn' : '');
    },

    /**
     * 页面的初始数据
     */
    data: {

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

    }
})