const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const path = require('path')
const cors = require('cors');
const { getAllHamsters, getGroupOfHamsters, addHamster, editHamster, deleteHamster, getFixedBattle } = require('./database.js');



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
app.use(express.static(path.join(__dirname, '../assets')))


app.get('/api/getAllHamsters', (req, res) => {
	getAllHamsters(dataOrError => {
		res.send(dataOrError);
	})
})
app.get('/api/fixedBattle/:id1/:id2', (req, res) => {
	getFixedBattle(req.params.id1, req.params.id2, dataOrError => {
		res.send(dataOrError);
	})
})
app.get('/api/randomHamster', (req, res) => {
	getGroupOfHamsters('randomHamster', dataOrError => {
		res.send(dataOrError);
	})
})

app.get('/api/topWinners', (req, res) => {
	getGroupOfHamsters('topWinners', dataOrError => {
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

	addHamster(req.body, dataOrError => {
		res.send(dataOrError);
	})
});

app.post('/api/addhamsterImage', (req, res) => {

	if (!req.files) return
	const file = req.files.file;
	console.log('server.js, file: ', file)
	file.mv(`assets/${file.name}`)
})

app.put('/api/updateHamster/:id', (req, res) => {
	editHamster(req.body, req.params.id, () => {
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

app.get('/api/LatestGames', (req, res) => {
	getGroupOfHamsters('latestGames', dataOrError => {
		res.send(dataOrError);
	})
})
app.get('/api/gallery', (req, res) => {
	console.log('GET / gallery')
	getAllHamsters(dataOrError => {
		res.send(dataOrError);
	})
})
app.delete('/api/deleteHamster/:id', (req, res) => {
	console.log('GET / deleteHamster')
	deleteHamster(req.params.id, dataOrError => {
		console.log(req.params.id)
		res.send(dataOrError)
	})
})

// app.use((req, res, next) => {
// 	res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

app.listen(port, () => {
	console.log("Server is listening on port" + port);
});










