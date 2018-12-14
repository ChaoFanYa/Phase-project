function ajaxGet(url){
    return new Promise(function(succ){
        var xhr = new XMLHttpRequest();
        xhr.open("get",url);
        // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8;");
        xhr.send(null);
        xhr.onload = function(){
            succ(xhr.response)
        }
    })
}