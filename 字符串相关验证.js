
/**
 * 判断字符串是否为空，若为空则返回true否则返回false
 * @param source
 * @return true或者false
 **/
function isEmpty(source){
	var str = source.replace(/(^\s*)|(\s*$)/g,"");
	if(str=="" || str.toLowerCase()=="null" || str.length<=0){
		return true;
	}else{
		return false;
	}
}

/**
 *
 *验证字符串是否是中文
 *
 **/
function isChines(source){
	var regex = /^[\u4E00-\u9FA5]+$/;
	return regex.test(source);
}


/*
 *判断包含关系
 *string:原始字符串
 *substr:子字符串
 *isIgnoreCase:忽略大小写
 */
 
 
function jsContains(string,substr,isIgnoreCase)
{
	if(isIgnoreCase)
	{
		string=string.toLowerCase();
		substr=substr.toLowerCase();
	}
	var startChar=substr.substring(0,1);
	var strLen=substr.length;
	for(var j=0;j<string.length-strLen+1;j++)
	{
		if(string.charAt(j)==startChar)//如果匹配起始字符,开始查找
		{
			if(string.substring(j,j+strLen)==substr)//如果从j开始的字符与str匹配，那ok
			{
				return true;
			}
		}
	}
	return false;
}