const express = require('express');
const app = express();
// const router = express.Router();
const PORT = 1337;

const {
	getAllRobots,
} = require('./db/robots.cjs');


app.get('/', async(req, res) => {
	const robots = await getAllRobots();
	res.send(robots);
});

app.get('/robot/:name', async(req, res, next) => {
	try {
		res.send(`<p>Robot: ${req.params.name}</p>`);
	} catch (error) {
		next(error);
	}
});

app.get('/task/:name', async(req, res, next) => {
	try {
		res.send(`<p>Task: ${req.params.name}</p>`);
	} catch (error) {
		next(error);
	}
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));