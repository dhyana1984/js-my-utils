/**
 * 验证是否为手机号码（移动手机）
 *
 * @param {}
 *            source
 */
 
function isMobilePhone(source) {
	var regex = /^((\(\d{3}\))|(\d{3}\-))?1\d{10}/;
	return regex.test(source);
}
 
/**
 * 验证是否为电子邮箱
 *
 * @param {}
 *            source
 */
function isEmail(source) {
	var regex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(source.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1){
		return true;
	}else{
		alert("电子邮箱格式不正确");
		return false;
	}
}
 
/**
 *
 *验证是否为邮编
 * @param
 *      source
 */
function isZip(source){
	var regex=/^[1-9]\d{5}$/;
	return regex.test(source);
}
