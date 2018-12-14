function Jump(){};
Jump.prototype.init = function(){
    this.ul = document.querySelector(".list-right");
    this.main = this.ul.children;
    _jsonp("https://list.mogujie.com/search")
    .then(function(res){
        // console.log(res.result.wall.list)
        var goodsjson = res.result.wall.list
        this.renderPage(goodsjson);
        this.handleEvent(goodsjson);
    }.bind(this))
}
Jump.prototype.handleEvent = function(json){
    
    for(let i=0 ; i<this.main.length;i++){
        // console.log(json[i].show.img)
        this.main[i].onclick = function(event){
            document.cookie = this.ary[i].img
            document.cookie = this.ary[i].title
            document.cookie = this.ary[i].jiaqian
            location.href = "details.html"
        }.bind(this)
    }
}

Jump.prototype.renderPage = function(json){
    var html = "";
    var list = json;
    this.ary = [];
    this.list = list;
    for(var i = 0; i<list.length;i++){
        html += `
            <div class="example">
                <img src="${list[i].show.img}" alt="">
                <p><a href="#">ROUOSEJFOJOJEFFEOJF</a> </p>
                <p><a href="#">wOJIEJFOJFEJEF</a> </p>

                <p><a href="#">${list[i].title}</a></p>
                <ul>
                    <li>★★★★★</li>
                    <li>|</li>
                    <li>${list[i].price}</li>
                </ul>
                <div id="btn-car" data-iid="${list[i].iid}">加入购物车</div>
            </div>
        `
        var arr ={
            img:"img=" + this.list[i].show.img,
            title:"title="+this.list[i].title,
            jiaqian:"jiaqian="+this.list[i].price
        }
        this.ary.push(arr)
    }
    this.ul.innerHTML += html
}
var jump = new Jump();
jump.init()

