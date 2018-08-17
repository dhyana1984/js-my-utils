//银行卡号按4位一空格显示（     使用 onkeyup(setBankNoStyle(this.value))   ）
function setBankNoStyle(BankNo) {
    var lKeyCode = (navigator.appname == "Netscape") ? event.which : event.keyCode;
    if (lKeyCode != 8) {
        if (BankNo.value == "") return;
        var account = new String(BankNo.value).replace(/\s/g, '');
        var strTemp = "";
        for (var i = 0; i < account.length; i++) {
            if (!isNaN(account[i])) {
                strTemp = strTemp + account[i];
            }
        }
        var strValue = strTemp.substr(0, 19);
        strTemp = "";
        for (var j = 0; j < strValue.length; j++) {
            if ((j + 1) % 4 == 0) {
                strTemp = strTemp + strValue[j] + " ";
            } else {
                strTemp = strTemp + strValue[j];
            }
        }
        $(BankNo).val(strTemp);
    }

}