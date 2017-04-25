const util = require('../../utils/util.js')
const storage = require('../../utils/storage.js')
Page({
    data:{
        logs:[],
        total:0
    },
    refresh: function() {
        this.setData({
            logs:(wx.getStorageSync('timing') || []).map((log) => {
                log.start = util.formatTime(new Date(log.start))
                log.end = util.formatTime(new Date(log.end))
                return log
            }),
            total:this.totalTime()
        })
    },
    totalTime:() => {
       let time = storage.settings.get('totalTime') || 0
        return util.formatCounter(time)
    },
    onLoad: function(e) {
        this.refresh()
    },
    onShow: function(e) {
        this.refresh()
    }


})
