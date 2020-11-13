// pages/2merchants/2merchants.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'mertdata':[{
      "id":"1",
      "imgid":"../../images/1.jpg",
      "message":"九阳（Joyoung）京品家电 电火锅家用多功能电热锅 麦饭石色不粘锅 6L大容量电煮锅HG60-G91 【邓伦推荐】",
      "price":"￥100",
      "value":"10",
    },
    {
      "id":"2",
      "imgid":"../../images/2.jpg",
      "message":"利仁 （Liven）5.5L多功能家用电火锅不粘电炒锅电煮锅 电炖锅多用途锅电煎锅电热锅电煮锅DHG-558 ",
      "price":"￥100",
      "value":"9",
    },
    {
      "id":"3",
      "imgid":"../../images/3.jpg",
      "message":"XXX",
      "price":"￥100",
      "value":"8",
    },
  ],
  },
  next:function(){
    wx.navigateTo({
      url: '../3goods/3goods'
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
