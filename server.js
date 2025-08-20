const http = require ('http');

const server = http.createServer();

const idnumber =[{id : 1, firstname : 'sina', lastname : 'pm'}, {id : 2, fisrstname :'ata', lastname:'gh'}]
// -----------------------------------------------------------
server.on('request', (req, res) =>{
    for(let i = 0; i < idnumber.length; i++ ){
        if(req.url == '/'+ (i + 1)){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(idnumber[i]))
        }
    }
}
);
// -----------------------------------------------------------
server.listen(3000,() =>{
    console.log('server is runing in port 3000')
}
)
