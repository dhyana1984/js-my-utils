/**
 * 验证是否是整数或小数
 * @param source
 * @return
 */
function checkIntAndFloat(source){
	var regex = /^[0-9]+(\.[0-9]+)?$/g;
	return regex.test(source);
}
 
/**
 * 验证是否是整数或只有一位小数点的小数
 *
 * @param {}
 *            source
 * @return {}
 */
function checkFloat(source) {
	// var regex=/^[1-9]d*.d{1}|0.d{1}[1-9]d{1}$/g;
	var regex = /^[0-9]+\d*[\.\d]?\d{0,1}$/g;
	return regex.test(source);
}
 
/**
 * 验证是否两位数以内的正整数
 *
 * @param {}
 *            source
 * @return {}
 */
function checkTwoInt(source) {
	var regex = /^[1-9][0-9]?$/g;  //两位数以内的正整数
	return regex.test(source);
}
 
/**
 * 验证数字
 *
 * @param {}
 *            source
 * @return {}
 */
function checkNumber(source) {
	var regex = /^(\-|\+)?\d+(\.\d+)?$/;
	return regex.test(source);
}
 
/**
 * 验证是否是两位小数的正实数
 *
 * @param {}
 *            source
 * @return {}
 */
function checkTowLenFloat(source) {
	var regex = /^[0-9]+(.[0-9]{2})?$/g;//只能输入有两位小数的正实数
	return regex.test(source);
}
 
/**
 * 验证是否是两位或一位小数的正实数
 *
 * @param {}
 *            source
 * @return {}
 */
function checkTowLenFloatt(source) {
	var regex = /^[0-9]+(.[0-9]{1,2})?$/g;//只能输入有两位小数的正实数
	return regex.test(source);
}
 
/**
 * 验证是否是整数或只有2位小数的数
 *
 * @param {}
 *            source
 */
function checkTowFloat(source) {
	var regex = /^[1-9]+\d*[\.\d]?\d{0,2}$/g;
	return regex.test(source);
}
 
/**
 * 验证是否有空格
 *
 * @param {}
 *            source
 */
function checkSpace(source) {
	var regex = /\s/g;
	return regex.test(source);
}
 
/**
 * 检查一个数是否是整数则位数在8以内
 *
 * @param {}
 *            source
 */
function checkIntLeng(source) {
	var regex = /^[1-9]{1}[0-9]{1,7}$/g
	return regex.test(source);
}
 
/**
 * 检查一个数是否是整数则位数在2以内
 *
 * @param {}
 *            source
 */
function checkIntTwoLeng(source) {
	var regex = /^[1-9]{1}[0-9]{1,2}$/g
	return regex.test(source);
}
 
/**
 * 验证正整数
 *
 * @param {}
 *            source
 */
function checkInt(source) {
	// var regex=/^[1-9]d*$/g
	var regex = /^[0-9]*[1-9][0-9]*$/g
	return regex.test(source);
}
 
/**
 * 验证非负数
 *
 * @param {}
 *            source
 */
function checkNegative(source) {
	var regex=/^[1-9]\d*|0$/g
	return regex.test(source);
}


/**
 * 验证是否全是空格
 *
 * @param {}
 *            source
 * @return {}
 */
function checkAllSpace(source) {
	var regex = /^\s+$/g
	return regex.test(source);
}