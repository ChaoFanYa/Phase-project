    var oSmall = document.getElementById("small");
    var oSmall_img = oSmall.children[1];
    var oBig = document.getElementById("big");
    var oFrame = document.getElementById("frame");
    var oBig_img = oBig.children[0];    
    var oSmall_img2 = oSmall.children[0];

    oSmall.onmouseenter = function(){
        oBig.style.display = "block";
        oFrame.style.display = "block";
        // 让图片模糊;
        oSmall_img.style.opacity = "0.3";
    }
    oSmall.onmouseleave = function(){
        oBig.style.display = "none";
        oFrame.style.display = "none";
        oSmall_img.style.opacity = "1";
    }
    
    oSmall.onmousemove = function(event){
        var e = event || window.event;
        var nLeft = e.offsetX - size / 2;
        var nTop = e.offsetY - size / 2;
        // console.log(nLeft)   
        if(nLeft <= 0){
            nLeft = 0;
        }
        if(nTop <= 0){
            nTop = 0;
        }
        var maxLeft = oSmall.offsetWidth - oFrame.offsetWidth;
        if(nLeft >= maxLeft){
            nLeft = maxLeft
        }
        var maxTop = oSmall.offsetHeight - oFrame.offsetHeight;
        if(nTop >= maxTop){
            nTop = maxTop;
        }
        oFrame.style.left = nLeft + "px";
        oFrame.style.top = nTop + "px";  

        var propX = oBig.offsetWidth / oFrame.offsetWidth;
        // 根据比例算出位移值;
        oBig_img.style.left = -nLeft * propX + "px";
        var propY = oBig.offsetHeight / oFrame.offsetHeight;
        oBig_img.style.top = -nTop * propY + "px";
        // 设置背景的位置;
        oFrame.style.backgroundPosition = `${-nLeft}px ${-nTop}px`
    }

    var size = 125;
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',handleEvent,false);}
        window.onmousewheel = document.onmousewheel = handleEvent;
        function handleEvent(event){
        var e = event || window.event;
        var flag = true 
        if(e.detail != 0 ){ 
            if(e.detail > 0){
                flag = false// 向下;
            }else{
                flag = true; // 向上;
            }
        }else{
            if(e.deltaY > 0){
                flag = false// 向下;
            }else{
                flag = true; // 向上;
            }
        }
        if(flag){
            size ++;
        }else{
            size --;
        }
        oFrame.style.width =  size + "px";
        oFrame.style.height = size + "px";
        oSmall.onmousemove(e);
        var prop = 500 / size;
        oBig_img.style.width = 500 * prop + "px";
        oBig_img.style.height = 500 * prop + "px";
    }



    var img1 = document.getElementById("left-img1");
    var img2 = document.getElementById("left-img2");

    img1.onclick = function(){
        this.style.border = "1px solid black";
        img2.style.border = "none";
        oSmall_img2.src = "https://res.yslbeautycn.com/resources/2018/11/15/15422709632328293_500X500.jpg?version=20181211171139895";
        oBig_img.src = "https://res.yslbeautycn.com/resources/2018/11/15/15422709632328293_500X500.jpg?version=20181211171139895"
    }
    img2.onclick = function(){
        this.style.border = "1px solid black";
        img1.style.border = "none";
        oSmall_img2.src = "https://res.yslbeautycn.com/resources/2018/11/15/15422711104893973_500X500.jpg?version=20181211171139895";
        oBig_img.src = "https://res.yslbeautycn.com/resources/2018/11/15/15422711104893973_500X500.jpg?version=20181211171139895"
    }

    function getCookie(name){
        var cookieArray = document.cookie.split("; ");  
        for(var i = 0 ; i < cookieArray.length ; i ++){
            var cookieItem = cookieArray[i];
            var cookieName = cookieItem.split("=")[0];
            var cookieValue = cookieItem.split("=")[1];
            if(cookieName == name){
                return cookieValue;
            }
        }
        return "";
    }
    var oPrice = document.getElementById("price");
    var oTitle = document.getElementById("title")
    if(getCookie("img")){
        oSmall_img2.src = getCookie("img");
        oBig_img.src  = getCookie("img");
    }
    if(getCookie("jiaqian")){
        oPrice.innerHTML= getCookie("jiaqian")
    }
    if(getCookie("title")){
        oTitle.innerHTML = getCookie("title")
    }

    $(".car-item").on("mouseenter",function(){
        $(".car-list").show();
        $("#clear").show()
        // console.log(getCart())
       $(".car-list ul").html(renderCart());
       
    })
    $(".car-item").on("mouseleave",function(){
        $(".car-list").hide();
        $("#clear").hide();
    })
    
    function renderCart(){
        var html = "";
        var cart_json = getCart();
        var sumlist = 0;
        if(!cart_json) return 0;
        for(var i = 0 ; i < cart_json.length ; i ++){
              html +=
               `<li>
                    <img src="${cart_json[i].show.img}">
                    <span>${cart_json[i].title}</span>
                    <span>${cart_json[i].price}</span>
                    <span>${cart_json[i].count}</span>
                </li>
               `    
               sumlist += cart_json[i].count;
        }
        $("#shopPage").html(sumlist);
        return html;
    }
    
    
    
    function getCart(){
        if(!localStorage.cart) return 0;
        var aMsg = JSON.parse(localStorage.cart);
        return aMsg;
    }
    
    $("#clear").on("click",function(){
        localStorage.clear("cart");
    })
