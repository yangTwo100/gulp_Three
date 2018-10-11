import header from '../indexh/header.html'

const render=()=>{
    document.querySelector("#root").innerHTML=header;
}

const ibar=()=>{
    $("footer li").on("tap",function(){
        let hashes=['#main','#ides','#collage','#message','#mine'];
        location.hash=hashes[$(this).index()];
        $(this).addClass("footeractive").siblings().removeClass("footeractive");
    })
}

export default{
    render,
    ibar
}
    
