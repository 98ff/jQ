(function(){
    console.log("自运行匿名函数");
})();
$(function(){
    console.log("自运行匿名函数");
});
// 作用域： 1.全局域 2.函数域 3.block (域)
// 1.全局域   ：页面打开到页面关闭
// 2.函数域   ：函数调用一瞬间(这个不一定，因为要考虑到闭包)
// 闭包的作用 ： 保留函数的作用域
// 闭包形成的必要条件 ：函数套用函数(内部函数使用外部函数的变量)
// 全局域能形成闭包吗？  不能全局域的作用域在全局
(function(){
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
})();
//  总结：  目前轮播图不能作为插件使用的原因
//  1.插件不能使用id，因为插件会重复使用，页面上id要确保唯一性，不允许重复
//  2.定义了很多变量和函数名，比较大众，如果引入其他插件，可能会冲突
//  3.class的起名用prev和next也比较大众化。
//  4.文件名命名上，我们推荐是基于jQuery写的插件
//  命名如：jQuery.zyslides.js(这样使用就会知道我这个插件是有用到jQuery的)。