
/**
 验证身份证号是否正确
 **/
function isCardNo(num){
	if(isNaN(num)){
		alert("输入的身份证号不是数字！");
		return false;
	}
	var len = num.length;
	if(len<15 || len>18){
		alert("输入的身份证号码长度不正确定！应为15位或18位");
		return false;
	}
	var re15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
	var re18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
	var res = (re15.test(num) || re18.test(num));
	if(res==false){
		alert("输入的身份证号格式不正确！");
		return false;
	}
	return res;
}
