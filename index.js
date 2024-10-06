/**
 * title Uptime Monitoring Application
 * Description: A restful Apito monitor upp or downtime of the user defined links
 * 
 */
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes') 
const environments = require('./helpers/enviroment')
const lib = require('./lib/data');
// app object - module scaffolding
const app = {}
// lib.create('test','test-muhammad', {name:"muhammad", age:2.5}, (err)=>{
// console.log(err)
// })

// lib.update('test','test-muhammad', {name:"muhammad sona", age:2.5}, (err)=>{
//     console.log(err)
//     })
// lib.delete('test','test-muhammad', (err)=>{
//     console.log(err)
// })
//configuration 
app.config = {};

app.createServer = () =>{
    const server = http.createServer(app.handleReqs)
    server.listen(app.config.port, () => {
        console.log(`Server is running on port ${environments.port}`);
    });
};    

app.handleReqs = handleReqRes

//start server

app.createServer();



