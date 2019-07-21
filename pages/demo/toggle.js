const { vPush } = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOpen: true,
    status: '加载中..',
    codes: [{
      path: '1. 获取开关状态',
      code: `使用 vPush.isOpenPush 函数，会返回Promise对象，如：
vPush.isOpenPush().then(isOpen => {
  if (isOpen) console.log('开启了推送');
});`
    }, {
      path: '2. 关闭推送',
      code: `使用 vPush.closePush 函数，返回Promise，如：
vPush.closePush().then(() => {
  console.log("已经关闭推送")；
})`
    }, {
      path: '3. 开启推送',
      code: `使用 vPush.openPush 函数，返回 Promise，如：
vPush.openPush().then(() => {
  console.log('开启推送成功');
})`
    }, {
      path: '4. 其他提示',
      code: `此API用于在小程序中允许用户自定义是否接收推送。
在vPush推送后台创建任务的时候，有个强制推送设置，启用后会忽略这个设置
也就是推送给所有可推送的用户，无论是否设置了开启关闭推送。`
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadStatus();
  },

  loadStatus: function () {
    this.setData({
      status: '加载中..'
    });
    vPush.isOpenPush().then(open => {
      this.setData({
        isOpen: open,
        status: open ? '开启' : '关闭'
      })
    })
  },

  openHandler: function () {
    wx.showLoading({
      title: '开启中..',
      mask: true
    });
    vPush.openPush().then(() => {
      this.loadStatus();
      wx.hideLoading();
    });
  },
  closeHandler: function () {
    wx.showLoading({
      title: '关闭中..',
      mask: true
    });
    vPush.closePush().then(() => {
      this.loadStatus();
      wx.hideLoading();
    });
  },
  reloadHandler: function () {
    this.loadStatus()
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