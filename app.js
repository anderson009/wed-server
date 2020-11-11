

const http = require('http');


http.createServer( (req, res) =>{
	res.writeHead(200, {'content-type': 'aplication/json'});

	let salida = {
		nombre: 'anderson',
		edad: 34,
		url:req.url
	}

	res.write(JSON.stringify(salida));

	res.end();
})

.listen(8080);

console.log('escuchando puerto 8080');