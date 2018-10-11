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
    this.inowHash=location.hash || '#content';
    this.routes[this.inowHash]();
    this.ibar();
}

//高亮切换
Router.prototype.ibar=function(){
    var arr=['#content','#recomend','#hot','#vedio'];
    var index=arr.indexOf(this.inowHash);
    //console.log(index);
    $("nav li").eq(index).addClass("active").siblings().removeClass("active");
}

//监听
Router.prototype.init=function(){
    window.addEventListener('load',this.refresh.bind(this));
    window.addEventListener('hashchange',this.refresh.bind(this));
}

export default Router