function Router(){
    this.routes={};
    this.inowHash='';
}

//空函数
var noop=function(){}

//哈希的注册
Router.prototype.route=function(hash,cb){
    this.inowHash=hash;
    this.routes[this.inowHash]=cb||noop;
}

//刷新
Router.prototype.refresh=function(){
    this.inowHash=location.hash;
    this.routes[this.inowHash]();
    this.ibar();
}

//高亮切换
Router.prototype.ibar=function(){
    var arr=['#main','#ides','#collage','#message','#mine'];
    var index=arr.indexOf(this.inowHash);
    //console.log(index);
    // if(index==0){
    //     this.loading();
    // }
    $("footer li").eq(index).addClass("footeractive").siblings().removeClass("footeractive");
}

//监听
Router.prototype.init=function(){
    window.addEventListener('load',this.refresh.bind(this));
    window.addEventListener('hashchange',this.refresh.bind(this));
}

// Router.prototype.loading=function(){
//     setTimeout(() => {
//         location.reload(false);
//     }, 0);
// }

export default Router