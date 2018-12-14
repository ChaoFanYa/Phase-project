
var listright =_( ".listSub");
var oImg2 = _("#Img")

var GLOBAL = {
    // 可视区的高度;
    ch : document.documentElement.clientHeight,
    // 是否在加载过程之中
    loading_flag : false

}

_jsonp("https://list.mogujie.com/search")
.then(function(res){
    var goodJosn = res.result.wall.list; 
    // console.log(res)y
    randomPage(goodJosn);
    eleSort(listright.children)
})

var goodsJson = []
function randomPage(json){
    goodsJson = json
    var html = "";
    json.forEach(function(ele){
        html += `
            <div class="example">
                <img id=Img src="${ele.show.img}" alt="">
                <p><a href="#">ROUOSEJFOJOJEFFEOJF</a> </p>
                <p><a href="#">wOJIEJFOJFEJEF</a> </p>

                <p><a href="#">${ele.title}</a></p>
                <ul>
                    <li>★★★★★</li>
                    <li>|</li>
                    <li>${ele.price}</li>
                    <div id="btn-car" data-iid="${ele.iid}">加入购物车</div>
                </ul>
            </div>
        `
    })
    listright.innerHTML = html;
    return html;
}

function eleSort(eles){
    // console.log(eles)
    var heightArray = [];
      eles = _slice(eles);
      eles.forEach(function(ele,index){
            if(index <= 3){
                  heightArray.push(ele.offsetHeight);
            }else{
                  var min = Math.min.apply(false , heightArray);
                  ele.style.position = "absolute";
                  ele.style.top = min + 20 + "px";
                  var minIndex = heightArray.indexOf(min);
                  ele.style.left = eles[minIndex].offsetLeft - 20 + "px"; 

                  heightArray[minIndex] +=  ele.offsetHeight + 20;
            }
      })
      GLOBAL.heightArray = heightArray;
}

onscroll = function(){
    if( !isLoad() || GLOBAL.loading_flag ) return false;
    GLOBAL.loading_flag  = true;

    _jsonp("https://list.mogujie.com/search")
      .then(function(res){
            GLOBAL.loading_flag  = false;
            var goodsJSON = res.result.wall.list;
            randomPage(goodsJSON);
            eleSort(listright.children);
      })
}

function isLoad(){
    if( GLOBAL.heightArray === undefined ) return false;
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        var mh = Math.min.apply(false, GLOBAL.heightArray )
            if(GLOBAL.ch + st >= mh - 2800 ) {
                return true;
            }else{
                return false;
            }
}


var   color = document.getElementById("color");
var   much = document.getElementById("much")
var left = document.getElementById("left-color")
var cb = document.getElementById("color-block")

        color.onclick = function(){
            left.style.height = "200px";
            cb.style.display = "block";
            left.style.transition = "all .6s"
            color.innerHTML = "-";
            // ret(color.innerText)
            if(color.innerHTML = "-"){
                // cb.style.display = "none";
            }
        }

$(".listSub").on("click","#btn-car",handleCarClick);
$(".list-right").on("click","#btn-car",handleCarClick);

function handleCarClick(event){
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var iid = $(target).attr("data-iid");
      var nowMsg = findJson(iid)[0];
      addCar(nowMsg,iid);
}

function addCar(nowMsg,iid){
    $.extend(nowMsg , {count : 1});
    var sNowMsg = JSON.stringify(nowMsg);
    // console.log(sNowMsg)
    if(!localStorage.cart){
        localStorage.setItem("cart",`[${sNowMsg}]`);
        return false;
      }
      var aMsg = JSON.parse(localStorage.cart);
      if(!hasIid(aMsg,iid)){
            aMsg.push(nowMsg);
      }
      localStorage.setItem("cart",JSON.stringify(aMsg));

    //   console.log(JSON.parse(localStorage.cart));   
    }

function hasIid(aMsg,iid){
    for(var i = 0 ; i < aMsg.length ; i ++){
          if(aMsg[i].iid === iid){
            //   console.log(aMsg[i])
                aMsg[i].count ++;
                // console.log(count)
                return true;
          }
    }
    return false;
}    
    

function findJson(iid){
    return  goodsJson.filter(function(item){
      return  item.iid === iid
    })
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