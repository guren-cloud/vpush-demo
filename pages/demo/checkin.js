// pages/demo/checkin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    codes: [
      {
        path: '1. 页面 .json 配置文件',
        code: `引入vpush-checkin组件，注意组件的路径，如：
"usingComponents": {
  "vpush-checkin": "/utils/vpush-pro-sdk/components/checkin"
}`
      }, {
        path: '2. 页面 .wxml 文件',
        code: `直接引入组件即可：
<vpush-checkin />
`
      }, {
        path: '3. 自定义显示内容',
        code: `可传递 title,desc 两个参数，用于自定义显示内容，如：
<vpush-checkin
title="自定义标题"
desc="自定义签到提示文字"
/>
`
      }, {
        path: '4. 自定义点击回调',
        code: `可传递 bindCheckIn 回调参数，用户在点击签到后会触发执行：
<vpush-checkin bindCheckIn="checkHandler" />
`
      }, {
        path: '3. 其他说明',
        code: '1. 签到组件每天只出现一次\n2. 采用localStorage存储是否签到'
      }
    ]
  },

  checkHandler: function (e) {
    console.log('点击了签到按钮', e);
    wx.showModal({
      title: '点击回调',
      content: '您点击了签到按钮，触发了自定义的回调函数！',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 删除签到缓存，测试使用，实际中请勿处理
    const CHECKIN_STORAGE_KEY = 'vpush_checkin_' + new Date().toLocaleDateString();
    wx.removeStorage({
      key: CHECKIN_STORAGE_KEY,
      success: function (res) { },
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