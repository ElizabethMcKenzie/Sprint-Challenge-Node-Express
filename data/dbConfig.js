const knex = require('knex');
const knexConfig = require('../knexfile.js');
//this is okay blank for now, don't freak out
module.exports = knex(knexConfig.development);
