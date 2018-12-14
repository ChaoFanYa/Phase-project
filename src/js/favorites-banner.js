var aBtn = document.querySelectorAll("span[data-url]");
     var oContent = document.getElementById("favorites");

     for(var i = 0 ; i < aBtn.length ; i ++){
        aBtn[i].onmouseover = function(event){
          var e = event || window.event;
              var target = e.target || e.srcElement;
              var url = target.getAttribute("data-url");
              var xhr = new XMLHttpRequest();
              xhr.open("GET" , "./"+url);
              xhr.send()
              xhr.onreadystatechange = function(){
                              if(xhr.readyState === 4 && xhr.status === 200){
                                    // console.log(xhr.response);
                                    oContent.innerHTML = `
                                          <p style="color:red">${xhr.response}</p>
                                    `
                              }
                        }
        }
    }