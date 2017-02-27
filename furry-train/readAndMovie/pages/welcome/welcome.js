Page({
    onTap: function(event){
        // wx.navigateTo({//父级页面被隐藏
        //     url: "../posts/post"
        // })
        wx.redirectTo({//父级页面被关闭
          url: '../posts/post',
        })

    },
})