var reg = /^(1[0-9]{}-)?\d{5}$/;

    var oUser = document.getElementById("userName");
    var oPhone = document.getElementById("phone");
    oUser.onfocus = function(){
        oPhone.style.display = "none"
    }
    oUser.onblur = function(){
        var sUser = oUser.value;
        if(reg.test(sUser)){
            this.style.border = "1px solid green";
        }else{
            this.style.border = "1px solid red";
            oPhone.style.display = "block";
            oPhone.innerHTML = "请输入正确的信息"
            oPhone.style.color="red"
        }
    }

    var oPassword = document.getElementById("passWord");
    var oPass = document.getElementById("pass");
    var regpwd=/^[a-z0-9\!\@\#\$\%\^\&\*\(\)\_]{6,15}$/;
    oPassword.onfocus = function(){
        oPass.style.display = "none"
    }
    oPassword.onblur = function(){
        var sPassword = oPassword.value;
        if(regpwd.test(sPassword)){
            return 0;
        }else{
            oPass.style.display = "block";
            oPass.style.color = "red";
            oPass.innerHTML = "密码输入错误"
        }
    }

    var land = document.getElementById("land");
    var zs = document.getElementById("zhushi")
    land.onclick = function(){
        var sPhone = oUser.value;
        // var sPwd = oPassword.value;
        if(oUser.value == "" || oPassword.value == ""){
            zs.innerHTML = "您输入的内容为空";
            zs.style.color = "red";
            return false;
        }
        if(getCookie("phone") == oUser.value && getCookie("password")==oPassword.value){
            getCookie("phone",sPhone)
            setCookie("landing" , oUser.value);
            location.href = "index.html"
        }else{
            zs.innerHTML = "账号或密码输入错误";
            zs.style.color = "red";
        }
    }








