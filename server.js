

const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/hbs')


const port = process.env.PORT || 300;

app.use(express.static( __dirname + '/public'));


//HBS

hbs.registerPartials(__dirname + ('/views/parciales'));



app.set('view engine', 'hbs' );


app.get('/', (req, res) =>{

	res.render('home', {
		nombre: 'anderson',
	})

	
})
 

 app.get('/about', (req, res) =>{

	res.render('about')

	
})


app.listen(port , () =>{

	console.log(`escuchando puerto ${port}`);
})

