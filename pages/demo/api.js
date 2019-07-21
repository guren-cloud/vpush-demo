// pages/demo/api.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    api: {
      // 请填写正确的您的vPush后端推送API接口地址，如：
      // url: 'https://4ad41.bigse.cn/v1/apis/call_json/1',
      // 接口密钥，如：
      // secret: '8c3dd-99634-xxxxx'
    },
    data: [
      'vPush',
      '{{date}} {{time}}',
      '这是一条测试的推送消息',
      '您可以点击卡片打开小程序了解详情'
    ]
  },

  inputHandler: function (e) {
    var id = e.currentTarget.dataset.idx;
    var value = e.detail.value;

    var new_data = this.data.data;
    new_data[id] = value;
    this.setData({
      data: new_data
    });
  },

  // 删除数据
  removeHandler: function (e) {
    var old_data = this.data.data;
    var new_data = [];
    var id = e.currentTarget.dataset.idx;
    console.log('remove old data', old_data, id);
    for (var i = 0; i < old_data.length; i  ++) {
      if (i === id) continue;
      new_data.push(old_data[i]);
    }
    this.setData({
      data: new_data
    });
  },

  // 添加数据
  addHandler: function () {
    var new_data = this.data.data;
    new_data.push("新的数据" + (new_data.length + 1));
    this.setData({
      data: new_data
    });
  },

  // 推送测试
  pushHandler: function () {
    wx.showLoading({
      title: '测试推送中..',
      mask: true
    });
    wx.request({
      url: this.data.api.url,
      method: 'POST',
      dataType: 'json',
      header: {
        'Content-Type': "application/json"
      },
      data: {
        "secret": this.data.api.secret,
        // "path": "pages/index/index",
        data: this.data.data,
        "openId": app.vPush.OPEN_ID
      },
      success: res => {
        wx.hideLoading();
        console.log('push.res:', res);
        var data = res.data;
        if (typeof data === 'object') data = JSON.stringify(data);
        wx.showModal({
          title: '请求成功',
          content: '推送任务已请求，返回数据：\n' + data,
        })
      }
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