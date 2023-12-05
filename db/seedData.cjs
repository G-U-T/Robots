const client = require('../client.cjs');

const dropTables = async() => {
	console.log(`Dropping tables...`);
	try {
		await client.query(`
			DROP TABLE IF EXISTS robots;
		`);
	} catch (error) {
		throw error;
	}
};

const createTables = async() => {
	console.log(`Creating tables...`);
	try {
		await client.query(`
			CREATE TABLE robots (
				id SERIAL PRIMARY KEY,
				name VARCHAR(15) NOT NULL,
				model VARCHAR(15) NOT NULL,
				company VARCHAR(30) NOT NULL,
				img VARCHAR(255) NOT NULL,
				warranty_month INT NOT NULL,
				child_safe BOOLEAN NOT NULL,
				release_data DATE NOT NULL,
			);
		`);
	} catch (error) {
		throw error;
	}
};

const createInitialData = async() => {
	console.log(`Creating initial data...`);
	try {
		
	} catch (error) {
		throw error;
	}
}

const rebuildDB = async() => {
	try {
		client.connect();
		await dropTables();
		await createTables();
		await createInitialData();
	} catch (error) {
		throw error;
	}
};

module.exports = {rebuildDB};