
var http = require('http')
,url = require('url')
,smile = require('cool-ascii-faces')
;


http.createServer(function(req,res){
	var r = url.parse(req.url);
	res.setHeader('Access-Control-Allow-Origin','http://localhost:8000');
	if (r.pathname == '/api/smile') {
		var face = smile();
		console.log(face);
		res.setHeader('Content-Type','text/json');
		//return res.end(new Buffer(face,'utf-8'));
		return res.end(JSON.stringify({
			text: face
		}));
	}
	res.end(':(');
})
.listen(8001)
;
