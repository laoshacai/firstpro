var code; //在全局定义验证码   
//产生验证码  
$(function () {
    window.onload = createCode("#code");
    $("#code").click(function () {
        createCode("#code");
    });
    $("#yz").click(function () {
        validate("#input1", "#code");
    });
});
//生成验证码
function createCode(code1) {
    code = "";
    var codeLength = 4;//验证码的长度  
    var checkCode = $(code1);
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//随机数  
    for (var i = 0; i < codeLength; i++) {//循环操作  
        var index = Math.floor(Math.random() * 36);//取得随机数的索引（0~35）  
        code += random[index];//根据索引取得随机数加到code上  
    }
    checkCode.val(code);//把code值赋给验证码    
}
//验证
function validate(txtinput, code1) {
    var inputCode = $(txtinput).val().toUpperCase(); //取得输入的验证码并转化为大写  
    if (inputCode.length <= 0) { //若输入的验证码长度为0  
        alert("请输入验证码！"); //则弹出请输入验证码  
    }
    else if (inputCode != code) { //若输入的验证码与产生的验证码不一致时  
        alert("验证码输入错误！"); //则弹出验证码输入错误  
        createCode(code1);//刷新验证码  
        $(txtinput).val("");//清空文本框  
    }
    else { //输入正确时  
        alert("输入正确"); //弹出^-^  
    }
}  