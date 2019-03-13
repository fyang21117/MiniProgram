Page({
    /**
     * 页面数据初始化
     */
    data: {
        new: 'top-hoverd-btn',
        my_device:'',
        living_room_page: '',
        bedroom_page: '',
        balcony_page: '',
        study_page: '',
        kitchen: '',
        office: '',
        bathroom: '',
        toilet: '',
        TopIndex:0,
        hidden: false,
    },
    /**
     * top-btn的响应事件
     */
    my_device:function(){
        this.updateBtnStatus('my_device');
        this.setData({ TopIndex: 0 })
    },
    living_room_page:function(event){
        this.updateBtnStatus('living_room_page');
        this.setData({ TopIndex: 1 })
    },
    bedroom_page: function (event) {
        this.updateBtnStatus('bedroom_page');
        this.setData({ TopIndex: 2 })
    },
    balcony_page: function (event) {
        this.updateBtnStatus('balcony_page');
        this.setData({ TopIndex: 3 })
    },
    study_page: function (event) {
        this.updateBtnStatus('study_page');
        this.setData({ TopIndex: 4 })
    },
    /**
     * top-btn对应页面下的按钮响应
     */
    living_room: function () {
        var topindex  = getApp().globalData.TopIndex;
        if ({topindex}==1){this.updateBtnStatus('living_room_page');}
        wx.showToast({
            title: '客厅设备',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    bedroom: function () {
        var topindex = getApp().globalData.TopIndex;
        if ({ topindex } == 2){ this.updateBtnStatus('bedroom'); }
        wx.showToast({
            title: '卧室设备',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    balcony: function () {
        var topindex = getApp().globalData.TopIndex;
        if ({ topindex } == 3) { this.updateBtnStatus('balcony'); }
        wx.showToast({
            title: '阳台设备',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    study: function () {
        var topindex = getApp().globalData.TopIndex;
        if ({ topindex } == 4) { this.updateBtnStatus('study'); }
        wx.showToast({
            title: '书房设备',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },

    /**
     * 未做page分类下的按钮响应
     */
    kitchen: function () {
        this.updateBtnStatus('kitchen');
        wx.showToast({
            title: '设备匹配中',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    office: function () {
        this.updateBtnStatus('office');
        wx.showToast({
            title: '设备匹配中',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },
    bathroom: function () {
        this.updateBtnStatus('bathroom');
        wx.showToast({
            title: '设备匹配中',
            icon: 'succes',
            duration: 1000,
            mask: true
        })
    },

    toilet: function () {
        this.updateBtnStatus('toilet');
        wx.showToast({
            title: '设备匹配中',
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
            living_room_page: this.getHoverd('living_room_page',k),
            bedroom_page: this.getHoverd('bedroom_page', k),
            balcony_page: this.getHoverd('balcony_page', k),
            study_page: this.getHoverd('study_page', k),
            
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