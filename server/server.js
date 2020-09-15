const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors');
const { getAllHamsters, getGroupOfHamsters } = require('./database.js');



const port = process.env.PORT || 5000;

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
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
app.get('/api/top', (req, res)=>{
	getGroupOfHamsters('battle',dataOrError => {
		res.send(dataOrError);
	})
})
app.get('/api/Battle', (req, res)=>{
	getGroupOfHamsters('battle',dataOrError => {
		res.send(dataOrError);
	})
})

app.put('/api/updateHamster/:id', (req, res)=>{
	updateCompetitor(req.body, req.params.id, () => {
		res.send(req.body);
	})
})



app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


app.listen(port, () => {
	console.log("Server is listening on port" + port);
});