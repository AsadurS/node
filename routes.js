/**
 * 
 */
const {sample} = require('./handlers/route-handler/handlers')
const {user} = require('./handlers/route-handler/user-handler')
const routes ={
    'sample' : sample,
    'user' : user
}

module.exports = routes