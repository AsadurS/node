const handler ={}


handler.user = (reqProperty, callback)=>{
    const acceptedMethod = ['get', 'post','put', 'delete'];
    if(acceptedMethod.includes(reqProperty.method)){
        handler._user[reqProperty.method](reqProperty, callback)
    }else{
        callback(405, {message:"route method does not match"})
    }
   
}
handler._user = {};
handler._user.post = (reqProperty, callback)=>{
    callback(200, {message:"I am Post"})
}
handler._user.get = (reqProperty, callback)=>{
    console.log(19)
    callback(200, {message:"I am Get"})
}
handler._user.put = (reqProperty, callback)=>{
   return callback(200, {message:"I am put"})
}
handler._user.delete = (reqProperty, callback)=>{
    
}
module.exports = handler;