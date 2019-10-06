const mysql = require('mysql');
const generateQs = require('./seed.js');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ebid'
})

db.connect((err) => {
  if(err) {
    console.error('Unsuccessful database connection');
  } else {
    console.log('Successful database connection!');
    var queries = generateQs();
    for (var i = 0; i < queries.length; i++){
      console.log(queries[i])
      db.query(queries[i], (err, result) => {
        if(err){
          console.error(`unsuccessful data insertion, ${err}`);
        } else {
          console.log(`successful data insertion`)
        }
      });
    }
  }
});

module.exports= db;