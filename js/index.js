//轮播图
    (function(){
      var i=0;
    var LIWIDTH=1210;
    var DURATION=500;
    var LICOUNT=4;
    var ulImgs=document.getElementById("ul-imgs");
    var ulIdxs=document.getElementById("ul-idxs");
    var lis=ulIdxs.children;
    function moveTo(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==0){
        if(to>i){
          ulImgs.className="transition";
        }else{
          ulImgs.className="";
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgs.style.marginLeft=-i*LIWIDTH+"px";
      for(var li of lis){
        li.className=""
      }
     // console.log(i);
      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgs.className="";
          ulImgs.style.marginLeft=0;
        },DURATION)
      }
      lis[i].className="active";
    }
    var btnLeft=document.getElementById("btn-left");
    var btnRight=document.getElementById("btn-right");
    var canClick=true;
    btnRight.onclick=function(){
      move(1)
    }
    function move(n){
      if(canClick){
        //console.log(i+n);
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },DURATION+100);
      }
    }
    btnLeft.onclick=function(){
      move(-1);
    }
    var interval=3000;
    var timer=setInterval(function(){
      moveTo()
    },3000);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
      clearInterval(timer);
    }
    banner.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },3000);
    }
    var ulIdxs=document.getElementById("ul-idxs");
    var canClick=true;
    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lis.length;i++){
              if(lis[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
    })(),
// 轮播图结束
// 商场同款  热卖品牌  新品推荐  生活方式开始
(function(){
  var spans=document.querySelectorAll(".storesame_link>li");
  var ul=document.querySelector(".storesame>.storesame_box")
  for(var i=0;i<spans.length;i++){
    spans[i].index=i;
    spans[i].onclick=function(){
      for(var j=0;j<spans.length;j++){
        spans[j].className='';
      }
      this.className='active';
      animate(ul,-1210*this.index);
    }
  }
  function animate(obj,target){
    clearInterval(obj.timer);
    var speed=(target>obj.offsetLeft)?100:-100;
    obj.timer=setInterval(function(){
      var result=target-obj.offsetLeft;
      obj.style.left=obj.offsetLeft+speed+"px";
    if(Math.abs(result)<=100){
      obj.style.left=target+"px";
      clearInterval(obj.timer);
    }
    },5)
  }
})(),
// 商场同款  热卖品牌  新品推荐  生活方式结束

//热门旗舰店的js
(function(){
  //左箭头
  var hot_pre=document.querySelector(".hot_pre");
  //右箭头
  var hot_next=document.querySelector(".hot_next");
  // 获取父元素
  var hotflag=document.querySelector(".hotflag");
  var li=hotflag.children.children;
  console.log(li);
  var target=0;
  //左
  hot_pre.onclick=function(){
    target+=1210;
    if(target>0){
      target=0;
    }
    animate(hotflag.children[0],target);
  }
  //右
  hot_next.onclick=function(){
    target-=1210;
    if(target<-1210*2){
      target=-1210*2;
    };
    animate(hotflag.children[0],target)
    console.log(hotflag.children[0].children);
  }
  //运动功能函数封装
  function animate(obj,target){
    clearInterval(obj.timer);
    var speed=(target>obj.offsetLeft)?100:-100;
    obj.timer=setInterval(function(){
      var result=target-obj.offsetLeft;
      //运动公式
      obj.style.left=obj.offsetLeft+speed+"px";
      if(Math.abs(result)<=100){
        obj.style.left=target+"px";
        clearInterval(obj.timer)
      }
    },5)
  }
})()
