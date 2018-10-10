const home_main = ()=>{
    return $.ajax({
        url:'/api/v3/feed/topstory?mobile=true&action_feed=True&limit=7&session_token=26d1a2124787512e88e02637f7eecbce&action=down&after_id=6&desktop=true',
        success:(result)=>{
            console.log(1);
            return result;
        }
    })
}

export default{
    home_main
}