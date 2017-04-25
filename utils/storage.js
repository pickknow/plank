function getTimingLog() {
    return wx.getStorageSync('timing') || []
}

let timingLog = {
    get: () => wx.getStorageSync('timing') || [],
    set : (timing) => {
        let arr = wx.getStorageSync('timing') || []
        arr.unshift(timing)
        wx.setStorageSync('timing',arr)
        settings.setTotalTime(timing.counter)
    } 
}
let defaultSetting = {
    totalTime : 0,
}
let settings = {
    get:(key) => {
     let log =  wx.getStorageSync('settings') || defaultSetting 
        return log ? log[key] : null
    },
    set:(key,value) => {
        let log = wx.getStorageSync('settings') ||defaultSetting 
        log[key] = value
        wx.setStorageSync('settings',log)
    },
    setTotalTime:(time) => {
        let log = wx.getStorageSync('settings') ||defaultSetting 
        log.totalTime += time
        wx.setStorageSync('settings',log)
    }
}
module.exports = {
    timingLog:timingLog,
    settings:settings,
}
