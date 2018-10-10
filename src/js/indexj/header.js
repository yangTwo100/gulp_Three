const header=require('../indexh/header.html')

const render=()=>{
    document.querySelector("#root").innerHTML=header;
}

module.exports={
    render
}