const app = getApp();

Page({
  data: {
    isLike: true,
    // banner
    imgUrls: [
      "../../images/1.jpg",
      "../../images/2.jpg",
      "../../images/3.jpg",
      "../../images/code-cloud-callback-config.png",
      "../../images/code-db-inc-dec.png"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    //收藏
    job: [],
    jobList: [],
    id: '',
    isClick: false,
    jobStorage: [],
    jobId: ''
   //好评率
    probability:"20%",

  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  haveSave(e) {
    if (!this.data.isClick == true) {
     let jobData = this.data.jobStorage;
     jobData.push({
     jobid: jobData.length,
     id: this.data.job.id
     })
     wx.setStorageSync('jobData', jobData);//设置缓存
     wx.showToast({
     title: '已收藏',
     });
    } else {
     wx.showToast({
     title: '已取消收藏',
     });
    }
    this.setData({
     isClick: !this.data.isClick
    })
    },
   
  // 跳到延迟界面
  todelay() {
    wx.switchTab({
      url: '/pages/4delay/4delay'
    })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '正在跳转至XX平台',
      icon: 'success',
      duration: 2000
    });
  },
})
