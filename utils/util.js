function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatCounter(n) {
        let betufulNum = (num)=> num >=10 ? num : '0' + num;
        let minute = Math.floor(n/6000)
        let second = Math.floor((n-minute*6000)/100)
        let millisecond = (n%100)
        return  betufulNum(minute) + ':' + betufulNum(second) + ':' + betufulNum(millisecond)
}

module.exports = {
  formatTime: formatTime,
  formatCounter: formatCounter,
}
