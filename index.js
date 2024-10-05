/**
 * title Uptime Monitoring Application
 * Description: A restful Apito monitor upp or downtime of the user defined links
 * 
 */
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes') 
// app object - module scaffolding
const app = {}

//configuration 
app.config = {
    port: 3000
};

app.createServer = () =>{
    const server = http.createServer(app.handleReqs)
    server.listen(app.config.port, () => {
        console.log(`Server is running on port ${app.config.port}`);
    });
};    

app.handleReqs = handleReqRes

//start server

app.createServer();



