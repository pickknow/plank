const util = require('../../utils/util.js')
Page({
    data:{
        logs:[]
    },
    refresh: function() {
        this.setData({
            logs:(wx.getStorageSync('timing') || []).map((log) => {
                log.start = util.formatTime(new Date(log.start))
                log.end = util.formatTime(new Date(log.end))
                return log
            })
        })
    },
    onLoad: function(e) {
        this.refresh()
    },
    onShow: function(e) {
        this.refresh()
    }


})
