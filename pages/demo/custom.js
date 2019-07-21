// pages/demo/custom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    codes: [
      {
        path: '1. 引入组件',
        code: `在页面的json配置文件中，引入sdk的view组件，命名为vpush-view（或其他），如：
{
  "usingComponents": {
    "vpush-view": "/utils/vpush-pro-sdk/components/view"
  }
}`}, {
      path: '2. 使用组件',
      code: `在页面的wxml中，使用vpush-view组件，可以放置在其他UI如卡片、文字列表等上，也可以自定义内容，如：
<vpush-view>
  <text>点击我就会自动收集推送凭证</text>
</vpush-view>
`}, {
      path: '3. 自定义样式',
      code: `使用custom-class属性，即可自定义vpush-view的样式，如：
wxml:
<vpush-view custom-class="mycard" />
wxss:
.mycard { background-color: red; width:100px;height:100px; }
`}, {
    path: '4. 自定义点击事件',
        code: `使用bindClickHandler属性，即可自定义用户点击后的触发事件（会同时自动收集推送凭证），如：
wxml:
<vpush-view bindClickHandler="myClickHandler" />
js:
myClickHandler: function(e) {}`
      }
    ]
  },

  myClickHandler: function(e) {
    console.log('自定义回调函数触发：', e);
    wx.showModal({
      title: '点击回调',
      content: '您点击了vpush-view容器，触发了myClickHandler函数！',
    })
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