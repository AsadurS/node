const handlers ={}


handlers.sample = (reqProperty, callback)=>{
    callback(200, {message:"this is sapme "})
}

module.exports = handlers;