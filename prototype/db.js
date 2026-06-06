var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('C:/Users/Kaho/Documents/GitHub/prototype_teamF/prototype/people_data.db');

module.exports = db;