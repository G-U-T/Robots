const client = require('../client.cjs');

async function getAllRobots() {
	try {
		const { rows: robots } = await client.query(`
			SELECT * FROM robots;
		`);
		return robots;
	} catch (error) {
		throw(error);
	}
}

module.exports = {
	getAllRobots,
}