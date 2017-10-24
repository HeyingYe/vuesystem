jQuery.validator.addMethod("mobile", function(value, element) {
	var length = value.length;
	var mobile = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
	return this.optional(element) || (length == 11 && mobile.test(value));
}, "手机号码格式错误");

jQuery.validator.addMethod("maxWord", function(value, element, param) {
	var length = value.length;
	for (var i = 0; i < value.length; i++) {
		if (value.charCodeAt(i) > 127) {
			length++;
			length++;
		}
	}
	return this.optional(element) || ( length <= param);
},$.validator.format("不能超过{0}个字节(一个中文字算3个字节)"));

jQuery.validator.addMethod("greaterThanZero", function(value, element) {
	var num = /^(0(?:[.](?:[1-9]\d?|0[1-9]))|[1-9]\d*(?:[.]\d{1,2}|$))$/;
	return this.optional(element) || (num.test(value));
}, "金额必须大于0");	

jQuery.validator.addMethod("notSpace", function(value, element) {
	var notSpace = /^\s+/;
	return this.optional(element) || ( !notSpace.test(value));
}, "前面不能为空格");

jQuery.validator.addMethod("loginName", function(value, element) {
	var chinese = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/;
	return this.optional(element) || (chinese.test(value));
}, "用户名只能由字母、数字、汉字组成");

jQuery.validator.addMethod("passWord02", function(value, element) {
	var passWord02 = /(?=(?:.*?[!<>&%+]){1})/;
	return this.optional(element) || (!passWord02.test(value));
}, "包含非法字符");

jQuery.validator.addMethod("passWord01", function(value, element) {
	//var passWord01 = /(?=(?:.*?[@#$*()_^}{:;?.]){1})(?=(?:.*?\d){1})(?=(?:.*?[a-zA-Z]){1})/;
	var passWord01 =/^(?!([a-zA-Z]+|[a-z\d]+|[a-z~`@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'<,>\.\?\/\!]+|[A-Z\d]+|[A-Z~`@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'<,>\.\?\/\!]+|[\d~`@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'<,>\.\?\/\!]+)$)[a-zA-Z\d~`@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'<,>\.\?\/\!]+$/
	return this.optional(element) || (passWord01.test(value));
}, "密码至少是3种字符组合");

jQuery.validator.addMethod("phone", function(value, element) {
	var tel = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
	return this.optional(element) || (tel.test(value));
}, "电话号码格式错误");

jQuery.validator.addMethod("zipCode", function(value, element) {
	var tel = /^[0-9]{6}$/;
	return this.optional(element) || (tel.test(value));
}, "邮政编码格式错误");

jQuery.validator.addMethod("qq", function(value, element) {
	var tel = /^[1-9]\d{4,9}$/;
	return this.optional(element) || (tel.test(value));
}, "qq号码格式错误");

jQuery.validator.addMethod("numberformat", function(value, element) {
	var tel = /^\d{1,12}$/;
	return this.optional(element) || (tel.test(value));
}, "数字格式有误");

jQuery.validator.addMethod("integer", function(value, element) {
	var num = /^(0|[1-9]\d*)$/;
	return this.optional(element) || (num.test(value));
}, "数字格式有误");

jQuery.validator.addMethod("double", function(value, element) {
	var num = /^(0|[-\+]?\d+(\.\d+)?)$/;
	return this.optional(element) || (num.test(value));
}, "数字格式有误");		
	
jQuery.validator.addMethod("negative", function(value, element) {
	var num = /^-\d+(\.\d+)?$/;
	return this.optional(element) || (num.test(value));
}, "数字格式有误");

jQuery.validator.addMethod("ip", function(value, element) {
	var ip = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	return this.optional(element) || (ip.test(value) && (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256));
}, "Ip地址格式错误");

jQuery.validator.addMethod("chrnum", function(value, element) {
	var chrnum = /^([a-zA-Z0-9]+)$/;
	return this.optional(element) || (chrnum.test(value));
}, "只能输入数字和字母(字符A-Z, a-z, 0-9)");

jQuery.validator.addMethod("chinese", function(value, element) {
	var chinese = /^[\u4e00-\u9fa5]+$/;
	return this.optional(element) || (chinese.test(value));
}, "只能输入中文");

jQuery.validator.addMethod("checkChina", function(value, element) {
    var reg = /^[\u0391-\uFFE5A-Za-z]+$/;
    return reg.test(value)
}, "该项不能输入数字");

jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {
	var length = value.length;
	for (var i = 0; i < value.length; i++) {
		if (value.charCodeAt(i) > 127) {
			length++;
		}
	}
	return this.optional(element) || (length >= param[0] && length <= param[1]);
},$.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)"));

jQuery.validator.addMethod("excludeNumber", function (value, element) {
	var excludeNumber = /^[^\d]+$/;
    return this.optional(element) || excludeNumber.test(value);
}, "该项不能输入数字");

jQuery.validator.addMethod("orgAdmCode", function (value, element) {
	var excludeNumber = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]$/;
	return this.optional(element) || excludeNumber.test(value);
}, "格式错误！参考例子：01271075-5");


jQuery.validator.addMethod("isIdCardNo", function (value, element) {
    return this.optional(element) || isIdCardNo(value);
}, "请正确输入您的身份证号码");

//新增用户身份证校验  added by luoshuai
jQuery.validator.addMethod("isIDCard", function (value, element) {
	var cardNo = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    return this.optional(element) || cardNo.test(value);
}, "证件号码格式不对");

//登录名  只能输入字母、数字、汉字   added by luoshuai
jQuery.validator.addMethod("loginName", function (value, element) {
	var loginName = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
    return this.optional(element) || loginName.test(value);
}, "用户名只能由字母、数字、汉字组成");

jQuery.validator.addMethod("creditCode", function (value, element) {
    return this.optional(element) || isSocialCreditCode(value);
}, "请正确输入社会信用代码");

function isIdCardNo(num) {
    var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
    var parityBit = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
    var varArray = new Array();
    var lngProduct = 0;
    var intCheckDigit;
    var intStrLen = num.length;
    var idNumber = num;
    // initialize
    if ((intStrLen != 15) && (intStrLen != 18)) {
        return false;
    }
    // check and set value
    for (var i = 0; i < intStrLen; i++) {
        varArray[i] = idNumber.charAt(i);
        if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
            return false;
        } else if (i < 17) {
            varArray[i] = varArray[i] * factorArr[i];
        }
    }

    if (intStrLen == 18) {
        //check date
        var date8 = idNumber.substring(6, 14);
        if (isDate8(date8) == false) {
            return false;
        }
        // calculate the sum of the products
        for (var i = 0; i < 17; i++) {
            lngProduct = lngProduct + varArray[i];
        }
        // calculate the check digit
        intCheckDigit = parityBit[lngProduct % 11];
        // check last digit
        if (varArray[17] != intCheckDigit) {
            return false;
        }
    }
    else {        //length is 15
        //check date
        var date6 = idNumber.substring(6, 12);
        if (isDate6(date6) == false) {
            return false;
        }
    }
    return true;
}
function isDate6(sDate) {
    if (!/^[0-9]{6}$/.test(sDate)) {
        return false;
    }
    var year, month, day;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    if (year < 1700 || year > 2500) return false;
    if (month < 1 || month > 12) return false;
    return true;
}
/**
* 判断是否为“YYYYMMDD”式的时期
*
*/
function isDate8(sDate) {
    if (!/^[0-9]{8}$/.test(sDate)) {
        return false;
    }
    var year, month, day;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    day = sDate.substring(6, 8);
    var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year < 1700 || year > 2500) return false;
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1] = 29;
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > iaMonthDays[month - 1]) return false;
    return true;
}


/**
 * 社会信用代码
 */
function isSocialCreditCode(code){
	if(code.length != 18){return false;}//必须是18位
	//登记管理部门代码1位
	var first = code.substring(0,1);
	if(!/^[1,5,9,Y]{1}$/.test(first)){return false;}//第一位数必须是以1，5，9或Y开头
	
	//机构类别代码1位
	var second = code.substring(1,2);
	switch(first){
		case "1" : if(!/^[1,2,3,9]$/.test(second)){return false;};break;//机构编制
		case "5" : if(!/^[1,2,3,9]$/.test(second)){return false;};break;//民政
		case "9" : if(!/^[1,2,3]$/.test(second)){return false;};break;//工商
		case "Y" : if(!/^[1]$/.test(second)){return false;};break;//其他
	}
	
	//登记管理机关行政区划码6位
	var xz = code.substring(2,8);
	if(!/^[0-9]{6}$/.test(xz)){return false;}
	
	//主体标识码（组织机构代码）9位
	var jg = code.substring(8,17);
	if(!/^[0-9,A-H,J-N,P-R,T-U,W-Y]{9}$/.test(jg)){return false;}//阿拉伯数字或者大写英语字母（不含I,O,Z,S,V）
	
	//第18位校验码
	var et = code.substring(17);
	
	/**计算第18位校证码*/
	//17位Ci的值
	var dmj = "0123456789ABCDEFGHJKLMNPQRTUWXY";
	var dmjv = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30);//字符集对应的值
	var Ci = new Array(17);
	for(var i=0;i<17;i++){//17位
		var val = code.charAt(i);
		var indx = dmj.indexOf(val);
		Ci[i] = dmjv[indx];
	}
	//加权因子Wi
	var Wi = new Array(1,3,9,27,19,26,16,17,20,29,25,13,8,24,10,30,28);
	//Ci*Wi
	var CWi = new Array(17);
	var total = new Number(0);
	for(var i=0;i<17;i++){
		var val = Ci[i] * Wi[i];
		CWi[i] = val;
		total += val;
	}
	var index = total%31;
	var jm = "";
	if(index==0){jm="0";}else{jm = dmj.charAt(31-total%31);}
	if(jm!=et){return false;}
	return true;
}