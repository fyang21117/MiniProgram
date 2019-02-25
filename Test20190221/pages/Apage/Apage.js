// pages/test.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        new: 'top-hoverd-btn',
        my_device:'',
        living_room: '',
        bedroom: '',
        kitchen: '',
        study: '',
        office: '',
        bathroom: '',
        balcony: '',
        toilet: '',
        hidden: false,
    },
    my_device:function(){
        console.log('my_device');
        this.updateBtnStatus('my_device');
        wx.showToast({
            title: '这是我的设备',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    living_room:function(event){
        console.log('living_room');
        this.updateBtnStatus('living_room');
        wx.showToast({
            title: '这是客厅',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    bedroom: function () {
        console.log('bedroom');
        this.updateBtnStatus('bedroom');
        wx.showToast({
            title: '这是卧室',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    kitchen: function () {
        console.log('kitchen');
        this.updateBtnStatus('kitchen');
        wx.showToast({
            title: '这是厨房',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    study: function () {
        console.log('study');
        this.updateBtnStatus('study');
        wx.showToast({
            title: '这是书房',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    office: function () {
        console.log('office');
        this.updateBtnStatus('office');
        wx.showToast({
            title: '这是办公室',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    bathroom: function () {
        console.log('bathroom');
        this.updateBtnStatus('bathroom');
        wx.showToast({
            title: '这是浴室',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    balcony: function () {
        console.log('balcony');
        this.updateBtnStatus('balcony');
        wx.showToast({
            title: '这是阳台',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    toilet: function () {
        console.log('toilet');
        this.updateBtnStatus('toilet');
        wx.showToast({
            title: '这是卫生间',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },

    onLaunch: function () {
        console.log('Apage is Launching ...');
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
            my_device: this.getHoverd('my_device', k),
            living_room: this.getHoverd('living_room', k),
            bedroom: this.getHoverd('bedroom', k),
            kitchen: this.getHoverd('kitchen', k),
            study: this.getHoverd('study', k),
            office: this.getHoverd('office', k),
            bathroom: this.getHoverd('bathroom', k),
            balcony: this.getHoverd('balcony', k),
            toilet: this.getHoverd('toilet', k),
        });
    },
    getHoverd: function (src, dest) {
        return (src === dest ? 'top-hoverd-btn' : '');
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var windowWidth = wx.getSystemInfoSync().windowWidth;
        var windowHeight = wx.getSystemInfoSync().windowHeight;
        //rpx与px单位之间的换算 : 750/windowWidth = 屏幕的高度（rpx）/windowHeight
        var scroll_height = 750 * windowHeight / windowWidth - 150;
        var scroll_width = this.setData({scroll_height: scroll_height})  
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