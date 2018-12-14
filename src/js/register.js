    var oPassword = document.getElementById("passWord");
    var oPass = document.getElementById("pstr1");
    var regpwd=/^[a-z0-9\!\@\#\$\%\^\&\*\(\)\_]{0,15}$/;
    oPassword.onfocus = function(){
        oPass.style.display = "block"
    }
    oPassword.onkeyup = function(){
        var sPassword = oPassword.value;
        if(regpwd.test(sPassword)){
            var rate = "";
            var regNum=/\d/;
			var regWord=/[a-z]/;
            var regSymbol=/[\!\@\#\$\%\^\&\*\(\)\_]/;
            if(regNum.test(sPassword)){
                rate++
            }
            if(regWord.test(sPassword)){
                rate++
            }
            if(regSymbol.test(sPassword)){
                rate++
            }
            if(rate == 1 && sPassword.length >= 6 ){
                oPass.style.width = "100px";;
                oPass.style.background = "red";
                oPass.style.transition = "all .6s";
            }
            else if(rate == 2 && sPassword.length >= 8){
                oPass.style.width = "200px";;
                oPass.style.background = "yellow";
                oPass.style.transition = "all .6s";
            }else if(rate == 3 && sPassword.length >= 10){
                oPass.style.width = "300px";;
                oPass.style.background = "green";
                oPass.style.transition = "all .6s";
            }else{
                oPassword.style.border = "1px solid red"
            }
        }
    }

    var oPassword2 = document.getElementById("passWord2")
    var oPass2 = document.getElementById("pstr2");
    oPassword2.onfocus = function(){
        oPass.style.display = "block"
    }
    oPassword2.onkeyup = function(sPassword2){
        var sPassword2 = oPassword2.value;
        if(regpwd.test(sPassword2)){
            var rate2 = "";
            var regNum=/\d/;
			var regWord=/[a-z]/;
            var regSymbol=/[\!\@\#\$\%\^\&\*\(\)\_]/;
            if(regNum.test(sPassword2)){
                rate2++
            }
            if(regWord.test(sPassword2)){
                rate2++
            }
            if(regSymbol.test(sPassword2)){
                rate2++
            }
            if(rate2 == 1 && sPassword2.length >= 6 ){
                oPass2.style.width = "100px";;
                oPass2.style.background = "red";
                oPass2.style.transition = "all .6s";
            }
            else if(rate2 == 2 && sPassword2.length >= 8){
                oPass2.style.width = "200px";;
                oPass2.style.background = "yellow";
                oPass2.style.transition = "all .6s";
            }else if(rate2 == 3 && sPassword2.length >= 10){
                oPass2.style.width = "300px";;
                oPass2.style.background = "green";
                oPass2.style.transition = "all .6s";
            }else{
                oPassword2.style.border = "1px solid red"
            }
        }
    }

    var reg = /^(1[0-9]{}-)?\d{5}$/;

    var oTips1 = document.getElementById("tips1");
    var oPhone = document.getElementById("phone");
    oPhone.onfocus = function(){
        oTips1.style.display = "none"
    }
    oPhone.onblur = function(){
        var sPhone = oPhone.value;
        if(reg.test(sPhone)){
            this.style.border = "1px solid green";
        }else{
            this.style.border = "1px solid red";
            oTips1.style.display = "block";
            oTips1.innerHTML = "请输入正确的手机号码"
            oTips1.style.color="red"
        }
    }


var btn = document.getElementById("agreement-reg")
var box = document.getElementById("box")

btn.onclick = function(){
    if(oPassword2.value === "" || oPassword.value === "" || oPhone.value === ""){
        box.innerHTML = "您的信息输入不完整";
        box.style.color = "red";
        
        return false;
    }
    else if( oPhone.value.length != 5 || oPassword.value.length <6){
        box.innerHTML = "请输入正确位数的手机号或密码";
        box.style.color = "red";
        return 0;
    }
    else if(oPassword2.value != oPassword.value){
        box.innerHTML = "两次密码不一致";
        box.style.color = "red";
        console.log(oPhone.value)
        return 0;
    }else{
        setCookie("phone",oPhone.value);
        setCookie("password",oPassword.value);
        location.href = "land.html";
    }
}




    