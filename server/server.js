const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const path = require('path')
const cors = require('cors');
const { getAllHamsters, getGroupOfHamsters, addHamster, editHamster } = require('./database.js');



const port = process.env.PORT || 5000;

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(fileUpload())
// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));



app.get('/api/getAllHamsters', (req, res)=>{
	getAllHamsters(dataOrError => {
		res.send(dataOrError);
	})
})
app.get('/api/Battle', (req, res)=>{
	getGroupOfHamsters('battle',dataOrError => {
		res.send(dataOrError);
	})
})
app.get('/api/topWinners', (req, res)=>{
	getGroupOfHamsters('topWinners',dataOrError => {
		res.send(dataOrError);
	})
});

app.get('/api/topLoosers', (req, res) => {
	getGroupOfHamsters('topLoosers', dataOrError => {
		res.send(dataOrError);
	})
})

app.post('/api/addhamster', (req, res) => {
	console.log('POST / addhamster', req.body)

	// const file=req.files.imageName
	// console.log("server.js, file: ", file)

	addHamster(req.body, dataOrError => {
		res.send(dataOrError);
	})
})

app.put('/api/updateHamster/:id', (req, res)=>{
	editHamster(req.body, () => {
		res.send(req.body);
	})
})

app.get('/api/TotalGamesEachHamster', (req, res) => {
	getGroupOfHamsters('totalGamesEachHamster', dataOrError => {
		res.send(dataOrError);
	})
})

app.get('/api/SumAllWins', (req, res) => {
	getGroupOfHamsters('sumAllWins', dataOrError => {
		res.send(dataOrError);
	})
})

app.get('/api/SumAllDefeats', (req, res) => {
	getGroupOfHamsters('sumAllDefeats', dataOrError => {
		res.send(dataOrError);
	})
})

app.get('/api/SumAllGames', (req, res) => {
	getGroupOfHamsters('sumAllGames', dataOrError => {
		res.send(dataOrError);
	})
})

app.get('/api/MostGames', (req, res) => {
	getGroupOfHamsters('mostGames', dataOrError => {
		res.send(dataOrError);
	})
})

app.get('/api/LeastGames', (req, res) => {
	getGroupOfHamsters('leastGames', dataOrError => {
		res.send(dataOrError);
	})
})


app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


app.listen(port, () => {
	console.log("Server is listening on port" + port);
});










