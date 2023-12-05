const express = require('express');
const app = express();
// const router = express.Router();
const PORT = 1337;

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

app.get('/robot/:name', (req, res, next) => {
	try {
		res.send('<p>Robot</p>');
	} catch (error) {
		next(error);
	}
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));