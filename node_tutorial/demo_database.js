var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "try_nodejs"
});

//test connection
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

//create database
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE try_nodejs", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

//create table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

//insert into table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

//insert into table with multiple
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ?";
//   var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted, ID: " + result.insertId);
//   });
// });

//select table
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//select table with where
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//select with wildcard characters
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//select with escaping query values
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

//select using ?
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ?';
// con.query(sql, [adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

//select with multiple values
// var name = 'Amy';
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
// con.query(sql, [name, adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

//select with orderby
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//select with orderby desc
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//delete record
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });

//drop table
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE customers";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });

//update table
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });

//limit table
con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//join table
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });