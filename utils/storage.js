function getTimingLog() {
    return wx.getStorageSync('timing') || []
}

let timingLog = {
    get: () => wx.getStorageSync('timing') || [],
    set : (timing) => {
        let arr = wx.getStorageSync('timing') || []
        arr.unshift(timing)
        wx.setStorageSync('timing',arr)
    } 
}

module.exports = {
    timingLog:timingLog,
}
