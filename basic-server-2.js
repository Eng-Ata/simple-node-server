
const http = require('http')

const app=http.createServer()

const database=[{id:1,name:'sina'},{id:2,name:'ali'},{id:3,name:'ata'},{id:4,name:'arman'}]

//------------------------------------------------------------------------------

app.on('request',(req,res)=>{
	const url=req.url.substring(1)
	for(const user of database){
    	if (user.id==parseInt(url) || user.name==url){
        	res.statusCode=200
        	res.setHeader('Content-Type','application/json')
        	return res.end(JSON.stringify(user))
    	}
	}
        	res.statusCode=404
        	res.setHeader('Content-Type','application/json')
        	return res.end('user ot found!!!')
})

//------------------------------------------------------------------------------

app.listen('3000',()=>{
	console.log('the server is running on the port of 3000');
})
