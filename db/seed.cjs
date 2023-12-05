const client = require('../client.cjs');
const { rebuildDB } = require('./seedData.cjs');

rebuildDB().catch(console.error);