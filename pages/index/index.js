const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前用户的推送凭证数据
    counts: {
      used: 0,
      expired: 0,
      avaliable: 0
    },
    // 是否初始化了vPush
    isInit: false,
    isDevTools: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isInit: !!app.vPush,
      // isDevTools: wx.getSystemInfoSync().platform === "devtools"
    });
  },

  // 加载凭证统计数据
  loadCounts: function () {
    wx.showLoading({
      title: '加载凭证数据中..',
      mask: true
    });
    wx.request({
      url: app.vPush.HOST + '/formids/user_counts',
      data: {
        openId: app.vPush.OPEN_ID
      },
      success: res => {
        var data = res.data;
        console.log(res, data);
        wx.hideLoading();

        if (data.errcode !== 0) return;
        this.setData({
          counts: data.counts
        });
      }
    })
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
    // this.loadCounts();
    setTimeout(() => {
      this.loadCounts()
    }, app.vPush.OPEN_ID ? 0 : 300);
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
    
  },

  copyURL: function () {
    wx.setClipboardData({
      data: 'https://vpush.pro',
    })
  }
})