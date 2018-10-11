import header from '../indexh/home_main.html'
import home_main_ibar from '../indexh/home_main_ibar.html'
import home_main from '../dataj/home_main'

const render=()=>{
    $(".uncommon").html(home_main_ibar);
    render1();
}

const render1 = async () => {
    console.log("aaaa");
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

export default{
    render,
    ibar
}