var table=document.getElementsByTagName("table")[0];
var as=table.querySelectorAll("tbody td>.cart_goods_num>a");
// input输入框 数量
var input=table.querySelector("tbody td>.cart_goods_num>input");
// 小计 价格；
var price=parseFloat(table.querySelector("tbody tr>td.td_price").innerHTML)
;
// 小计
var xiaoji=table.querySelectorAll("tbody tr>td.tr_price");
var price=xiaoji.innerHTML;
console.log(xiaoji)
var n=parseInt(input.value);
// 总和
var btn_price=document.getElementsByClassName("btn_price_area")[0];
var total_price=btn_price.getElementsByClassName("total_price")[0]
// console.log(n);
// console.log(input);
//console.log(btn);
for(var a of as){
    a.onclick=function(){
       // alert("1");
       //console.log();
       //console.log(a.innerHTML);
       if(this.innerHTML=="+"){
            n++;
       }else if(n>1){
           n--;
       }
       input.value=n;
    //   var sub=price*n;
    }
}
var total=0


