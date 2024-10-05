// dependescies
const handler = {};
const url  = require('url');
const routes = require('../routes')
const {StringDecoder}   = require('string_decoder')
const {notFoundHandler} = require('../handlers/route-handler/not-found-handler.js');

handler.handleReqRes = (req, res)=>{
     //request handaling
    //getthe ulr and pars
    const parseUrl = url.parse(req.url, false)
    const path = parseUrl.pathname
    const trimpath = path.replace(/^\/+|\/+$/g,'')
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query
    const header = req.headers;
    const decoder = new StringDecoder('utf-8');
  
    const reqProperty = {
        parseUrl,
        path,
        trimpath,
        method,
        queryStringObject,
        header,
        decoder,
    } 
    const chosenHandler =  routes[trimpath] ?  routes[trimpath] : notFoundHandler;
    chosenHandler(reqProperty, (statustCode,payload)=>{

        statustCode = typeof statustCode === 'number'? statustCode : 500;
        payload = typeof payload ? payload : {};
       
        const payloadString  = JSON.stringify(payload);
        console.log(35)
        res.writeHead(statustCode);
        res.end(payloadString);
    });

    // let realdata = '';
    // req.on('data', (buffer)=>{
    //    realdata = decoder.write(buffer)
    // })
    // req.on('end', ()=>{
    //     realdata +=decoder.end();
    //     res.end(realdata);
    // })
}
module.exports = handler;