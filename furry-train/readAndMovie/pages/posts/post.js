//所有脚本都是在Page传入的结构体编写
var postsData = require('../../data/posts-data.js')

Page({
  data:{
      date:"FEB 15 2017",
      title:"hello,Ragna,it's me"
  },
  imgPath:"",

  process:function(){
  },
  onLoad:function(options){
      var posts_content=[
            {
            date: "FEB 15 2017",
            title: "Hello,Ragna,it's me",
            imgSrc: "/images/post/bl.png",
            avatar: "/images/avatar/4.jpg",
            img_condition: true,
            content: "你啊你~，是天真无邪的少年。飞在天地间，比梦还遥远。你呀你~，是自在如风的少年，若干年后是否还有青春的容颜。侠矣乎，一番壮志行不行？半生只费弹指倾，大话悲欢，小心当下毁曾经。消磨了青春岁月，旁观走马如灯，不多情，遂了初心，拂衣便走，且把此身藏人海，埋没我的姓名。",
            reading: "911",
            collection: "86", 
        },
        {
            date: "WED FEB 15 2017",
            title: "浪，你好",
            imgSrc: "/images/post/crab.png",
            avatar: "/images/avatar/1.jpg",
            img_condition: true,
            content: "世界没有终极的目标；人们发现自己处于一个隐隐约约而有敌意的世界中；人们选择而且无法避免选择他们的品格、目标和观点；不选择就是一种选择，即是选择了“不选择”；世界和我们的处境的真相最清楚地反映在茫然的心理不安或恐惧的瞬间。",
            reading: "112",
            collection: "96",
        }
      ]

      this.setData({posts_key:posts_content});//把这个数据绑定到data区了
     // this.setData(post_content2);
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    String7
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    String8
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
}
)