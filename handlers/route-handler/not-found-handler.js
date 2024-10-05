const handlers ={}


handlers.notFoundHandler =(reqProperty, callback)=>{
    callback(404, {message:"not found "})
}

module.exports = handlers;