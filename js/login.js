window.onload=function(){
    //获取登陆头部的id在  29行 ul标签
    var allLis = $("login_header").getElementsByTagName("li");
    //遍历监听鼠标点击事件
    for(var i=0;i<allLis.length;i++){
        var li=allLis[i];
        li.onclick=function(){
            for(var j=0;j<allLis.length;j++){
                // allLis[j].addClassName ="list-active";
                
            }
            // this.addClassName="list-active";
            this.$("user_qrcode").style.display="block";

        }
    } 
}
//封装函数id
function $(id){
    return typeof id === "string" ? document.getElementById(id):null;
}