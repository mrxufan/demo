	var port = 'http://192.168.1.88:94'; //秋生
	// var port = 'http://192.168.1.252:94/smartcatering'; //服务
	// var port_pc_prefix = 'http://192.168.1.252:94/wisdomFood'; //pc端文件地址前缀

	var verifyFirst = true;

	// 正则验证
	var phongReg = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号码
	var integerReg = /^[0-9]+$/; //大于等于0的正整数
	var zzsReg = /^\+?[1-9]\d*$/; //大于0的整数
	var zsReg = /^(?!(0[0-9]{0,}$))[0-9]{1,}[.]{0,}[0-9]{0,}$/; //大于0的数（包括小数）
	var ddlReg = /^\d+(?=\.{0,1}\d+$|$)/; //大于等于0（包含小数）
	var idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证
	var posReg = /^\d+(\.\d+)?$/; //非负浮点数
	var dateReg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/; //日期xxxx-xx-xx


	//除了登录页面以外进行登录验证
	// var locationHref = window.location.href.split("/");
	// if (locationHref[locationHref.length - 1] != 'login.html') {
	//     $.ajax({
	//         url: port + '/user/loginVerify',
	//         type: 'post',
	//         xhrFields: {
	//             withCredentials: true
	//         },
	//         async: false,
	//         success: function(data) {
	//             if (data.rescode != '0000') {
	//                 window.location.href = "./login.html";
	//             } else {
	//                 $('#userLoginName').html(data.data.pName);
	//             }
	//         }
	//     });
	// }


	//左侧树形菜单高度
	$('.left-side-tree').css({ 'height': $(document).height() - 30 ,'overflow':'auto'});



	//日期转时间戳
	function timeStamp(date) {
	    var date = new Date(date);
	    var reault = date.getTime();
	    return reault;
	}

	//获取文件名的后缀
	function getFileType(fileName) {
	    var fileType = '';
	    var index = fileName.lastIndexOf("."); //获取","最后出现的位置
	    fileType = fileName.substr(index + 1); //截取文件名
	    return fileType;
	}


	// 时间戳转日期格式（时间戳、日期格式）
	function timeStampFormat(timeStamp, dateType) {
	    var dateVal = timeStamp + "";
	    if (timeStamp != null) {
	        var date = new Date(parseInt(dateVal.replace("/Date(", "").replace(")/", ""), 10));
	        var year = date.getFullYear(); //年
	        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1; //月
	        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(); //日
	        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); //时
	        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); //分
	        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); //秒
	        if (dateType == 'date') {
	            return year + "-" + month + "-" + day; //返回年月日
	        }
	        if (dateType == 'datetime') {
	            return year + "-" + month + "-" + day + ' ' + hours + ':' + minutes + ':' + seconds; //返回年月日时分
	        }
	    }
	}

	// 设置默认时间为当前时间之后30分钟——先转化为毫秒数，加上 20 分钟的毫秒数，再转化回来（参数为分钟）
	function setDefaultTime(min) {
	    let t = new Date().getTime() + 1000 * 60 * min;
	    let d = new Date(t);
	    let theMonth = d.getMonth() + 1;
	    let theDate = d.getDate();
	    let theHours = d.getHours();
	    let theMinutes = d.getMinutes();
	    if (theMonth < 10) {
	        theMonth = '0' + theMonth
	    }
	    if (theDate < 10) {
	        theDate = '0' + theDate
	    }
	    if (theHours < 10) {
	        theHours = '0' + theHours
	    }
	    if (theMinutes < 10) {
	        theMinutes = '0' + theMinutes
	    }
	    let date = d.getFullYear() + '-' + theMonth + '-' + theDate
	    let time = theHours + ':' + theMinutes
	    let Spare = date + ' ' + time

	    return {
	        hours: theHours,
	        min: theMinutes
	    };
	};


	// 获取当前日期（参数date:年月日,datetime:年月日时分）
	function getCurrentDate(para) {
	    var myDate = new Date();
	    var year = myDate.getFullYear(); //年
	    var month = myDate.getMonth() + 1; //月
	    var day = myDate.getDate(); //日
	    var hours = myDate.getHours(); //时
	    var min = myDate.getMinutes(); //分
	    if (month < 10) {
	        month = '0' + month;
	    }
	    if (day < 10) {
	        day = '0' + day;
	    }
	    if (hours < 10) {
	        hours = '0' + hours;
	    }
	    if (min < 10) {
	        min = '0' + min;
	    }

	    if (para == 'date') {
	        return year + '-' + month + '-' + day;
	    }
	    if (para == 'datetime') {
	        return year + '-' + month + '-' + day + ' ' + hours + ':' + min;
	    }
	}

	//日期+天数得出新的日期（参数日期yyyy-mm-dd、天数）
	function getNewData(dateTemp, days) {
	    var dateTemp = dateTemp.split("-");
	    var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]); //转换为MM-DD-YYYY格式    
	    var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);
	    var rDate = new Date(millSeconds);
	    var year = rDate.getFullYear();
	    var month = rDate.getMonth() + 1;
	    if (month < 10) month = "0" + month;
	    var date = rDate.getDate();
	    if (date < 10) date = "0" + date;
	    return (year + "-" + month + "-" + date);
	}

	//动态获取左侧菜单
	function getMenu(ele) {
	    $(ele).html('');
	    $.ajax({
	        url: port + '/v1/resource/menutree',
	        type: 'post',
	        xhrFields: {
	            withCredentials: true
	        },
	        async: false,
	        data: {
	            appId: '021'
	        },
	        success: function(data) {
	            var html = '';
	            for (var i = 0; i < data.length; i++) {
	                html += "<li>" +
	                    "<a href='javascript:;'>" +
	                    "<img class='tree-icon' src=" + data[i].icon + ">" +
	                    "<cite>" + data[i].title + "</cite>" +
	                    "<i class='iconfont nav_right'>&#xe697;</i>" +
	                    "</a>" +
	                    "<ul class='sub-menu'>";
	                if (data[i].children) {
	                    for (var j = 0; j < data[i].children.length; j++) {
	                        html += "<li>" +
	                            "<a onclick=xadmin.add_tab('" + data[i].children[j].title + "','" +
	                            data[i].children[j].href + "')>" +
	                            "<cite>" + data[i].children[j].title + "</cite>" +
	                            "</a>" +
	                            "</li>";
	                    }
	                }
	                html += "</ul></li>";
	            }
	            $(ele).append(html);

	        },
	        error: function(data) {}
	    });
	}

	//非空判断
	function isNull(e) {
	    if (e) {
	        return e;
	    } else {
	        return '';
	    }
	}

	//导入下载错误信息 
	function downloadErrMsg(_this) {
	    window.open(port_pc_prefix + $(_this).attr("data-url"));
	}

	//导入下载模板
	function downloadTemplate(url) {
	    location.href = port + url;
	}


	// 图片预览
	function prevImg(_this) {
	    var index = $(_this).index();
	    var imgData = [];
	    $(_this).parent().find('img').each(function(i, a) {
	        imgData.push({
	            "alt": "",
	            "pid": "", //图片id
	            "src": $(a).attr('src'), //原图地址
	            "thumb": "" //缩略图地址
	        });
	    });
	    layer.photos({
	        anim: 5,
	        photos: {
	            "title": "", //相册标题
	            "id": "", //相册id
	            "start": index, //初始显示的图片序号，默认0
	            "data": imgData //相册包含的图片，数组格式
	        }
	    });
	}



	// 根据url获取参数（url、key）
	function getUrlPara(url, key) {
	    var query = url.split('?')[1];
	    if (query) {
	        var vars = query.split("&");
	        for (var i = 0; i < vars.length; i++) {
	            var pair = vars[i].split("=");
	            if (pair[0] == key) {
	                return pair[1];
	            }
	        }
	    } else {
	        return '';
	    }

	}