const { Client } = require('pg');

const client = new Client({
	connectionString: process.env.DATABASE_URL || 'postgres://localhost:1337/robots',
});

module.exports = client;