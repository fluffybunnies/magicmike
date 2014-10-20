
var http = require('http')
,url = require('url')
,cool = require('cool-ascii-faces')
;


http.createServer(function(req,res){
	var r = url.parse(req.url);
	if (r.pathname == '/face') {
		var face = cool();
		console.log(face);
		res.setHeader('Content-Type','text/json')
		//return res.end(new Buffer(face,'utf-8'));
		return res.end(face);
	}
	res.end(':(');
})
.listen(8001)
;
