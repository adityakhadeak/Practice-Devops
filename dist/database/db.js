"use strict";

var _require = require('pg'),
  Pool = _require.Pool;
var dotenv = require('dotenv');
var fs = require('fs');
var path = require('path');
dotenv.config({
  path: path.resolve(__dirname, '../../.env')
});
var dirPath = path.join(__dirname, '../../ca-certificate.crt');

// use for local

var pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  // password:"sbnraju",
  password: "2915",
  database: "swasthmind_dev" //name of database
});

// use for deployed server

// const pool = new Pool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     port: process.env.DB_PORT,
//     password: process.env.DB_PASS,
//     database: process.env.DB_DATABASE_NAME,//name of database    
// })

module.exports = pool;