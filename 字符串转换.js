
/**
 * 字符串转正形
 * @param source
 * @returns
 */
function strParseInt(source){
	if(isEmpty(source) || isNaN(source)){
		return 0;
	}
	return parseInt(source);
}
/**
 * 字符串转Float形
 * @param source
 * @returns
 */
function strParseFloat(source){
	if(isEmpty(source) || isNaN(source)){
		return 0;
	}
	return parseFloat(source);
}