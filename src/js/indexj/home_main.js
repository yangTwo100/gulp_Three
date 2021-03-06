import header from '../indexh/home_main.html'
import home_main from '../dataj/home_main'

const render = async () => {
    let result=await home_main.home_main();
    let data=result.data;
    let template=Handlebars.compile(header);
    let html=template({data});
    $("main").html(html);
}

const ibar=function(){
    $("nav li").on("tap",function(){
        let hashs=['#content','#recomend','#hot','#vedio'];
        location.hash = hashs[$(this).index()];
        $(this).addClass('active').siblings().removeClass('active');
    })
}

export default {
    render,
    ibar
}