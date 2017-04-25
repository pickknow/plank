//index.js
//获取应用实例
var app = getApp()
const util = require('../../utils/util.js')
const storage = require('../../utils/storage.js')
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        timing:{
            counter:0,
            run:false,
            text:'00:00:00',
            timer:null,
            start:null,
            end:null
        }
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    bindTimingStart: function(e) {
        console.log('start')
        let timing =  this.data.timing
        if(!timing.run) {
            timing.run = true
            timing.counter = 0
            timing.start = new Date()
            timing.timer = setInterval(this.timeTostr,10)
        } else {
            clearInterval(timing.timer)
            timing.timer = null
            timing.run = false
            timing.edn = new Date()
            storage.timingLog.set(timing)

        }
        this.setData({
            timing:timing
        })
    },
    timeTostr:function() {
        let that = this
        let timing =  this.data.timing
        timing.counter = timing.counter + 1
        timing.text = util.formatCounter(timing.counter)
        that.setData({
            timing:timing
        })
        this.refresh('timingCanvas',timing.counter)
    },
    refresh: function(type= 'timingCanvas',n=0) {
        n = ((Math.floor((n%6000)/100))/60*360+270)/360*2*Math.PI
        let start = 270/360*2*Math.PI
        let context = wx.createCanvasContext(type)
        context.setLineWidth(7)
        context.setStrokeStyle("#ff0000")
        context.arc(110, 110, 100, start, n, false)
        context.stroke()
        context.draw()
    },
    onLoad: function () {
        var that = this
        app.getUserInfo(function(userInfo){
            //更新数据
            that.setData({
                userInfo:userInfo
            })
        })
    },
    onReady: function(e) {
        let context = wx.createCanvasContext('timingBack')
        context.setLineWidth(7)
        context.setStrokeStyle("#666666")
        context.arc(110, 110, 100, 0, 2 * Math.PI, true)
        context.stroke()
        context.draw()
    }  

})
