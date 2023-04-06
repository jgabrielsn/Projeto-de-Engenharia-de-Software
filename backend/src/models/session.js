const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

require('dotenv').config();

const options = {
    host: process.env.MYSQL_HOST,
    port : 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};

const sessionStore = new MySQLStore(options);

module.exports = sessionStore;