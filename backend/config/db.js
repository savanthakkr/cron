const { Sequelize } = require('sequelize');
require('dotenv').config();
const { QueryTypes } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

async function testConnection(req, res) {
  try {
     sequelize.authenticate();
     
    console.log('database connected!.');
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { sequelize, testConnection };
