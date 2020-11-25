// 时间戳转日期格式（时间戳、日期格式）
function timeStampFormat(timeStamp,dateType) {
    var dateVal = timeStamp + "";
    if (timeStamp != null) {
        var date = new Date(parseInt(dateVal.replace("/Date(", "").replace(")/", ""), 10));
        var year=date.getFullYear();//年
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;//月
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();//日
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();//时
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();//分
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();//秒
        if (dateType=='date') {
        	return year + "-" + month + "-" + day;//返回年月日
        }
        if (dateType=='datetime') {
        	return year + "-" + month + "-" + day + ' ' + hours + ':' + minutes + ':' + seconds;//返回年月日时分
        }
    }
}