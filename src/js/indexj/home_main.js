import header from '../indexh/home_main.html'
import home_main from '../dataj/home_main'

const render = async () => {
    let result=await home_main.home_main();
    let data=result.data;
    let template=Handlebars.compile(header);
    let html=template({data});
    $("main").html(html);
}

export default {
    render
}