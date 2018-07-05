var states = [
    {ZIndex: 1,width: 120,height: 150,top: 69,left: 134,ZOpacity: 0.2},
    {ZIndex: 2,width: 130,height: 170,top: 59,left: 0,ZOpacity: 0.5},
    {ZIndex: 3,width: 170,height: 218,top: 35,left: 110,ZOpacity: 0.7},
    {ZIndex: 4,width: 224,height: 288,top: 0,left: 263,ZOpacity: 1},
    {ZIndex: 3,width: 170,height: 218,top: 35,left: 470,ZOpacity: 0.7},
    {ZIndex: 2,width: 130,height: 170,top: 59,left: 620,ZOpacity: 0.5},
    {ZIndex: 1,width: 120,height: 150,top: 69,left: 500,ZOpacity: 0.2}
 ];

var lis=$("#box li");
// 让所有li展开
function move(){
    lis.each(function(index,ele){
        var state=states[index];
        $(ele).css("zIndex",state.ZIndex)
        .finish().animate(state,1000)
        .find("img").css("opacity",state.ZOpacity);
    });
}
function prev(){
    states.push(states.shift());
    move();
}
function next(){
    states.unshift(states.pop());
    move();
}
$("#box .prev").click(prev);
$("#box .next").click(next);
move();


// 保存定时器
var interval=null;
function autoPlay(){
    interval=setInterval(next,1000);
}
autoPlay();
$("#box section").add("#box li").hover(function(){
    clearInterval(interval);
},function(){
    interval=setInterval(next,1000);
})