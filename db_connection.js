require('dotenv').config();
const mysql = require('mysql');

let con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});




//Connecta amb la base de dades. No és necessaria si creem abans la connexió
// con.connect((err) =>{
//   if (err) throw err;
//   console.log("Connected!");
// });


//Crea la base de dades
//const databaseQuery = "CREATE DATABASE microservice_db";
// con.query(databseQuery, (err, result) => {
//   if (err) throw err;
//   console.log("Database created");
// });


//Crea la taula flowers
//const tableQuery = "CREATE TABLE flowers (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), scientificName VARCHAR(255), description VARCHAR(255))";
// con.query(tableQuery,  (err, result) =>{
//   if (err) throw err;
//   console.log("Table created");
// });


const flowers = [
  {
    name: "Rosa", 
    scientificName: "Rosa", 
    description:"Tenen cinc sèpals i cinc pètals o més. Pot ser d\'una gran varietat de colors."
  },
  {
    name: "Lliri", 
    scientificName: "Lilium", 
    description:"Flor gran i molt aromàtica amb sis llargs pètals. Pot ser de color blanc, groc, taronja o lila."
  },
  {
    name: "Tulipa", 
    scientificName: "Tulipa",
    description:"Pètals rectes i verticals. Pot ser d\'una gran varietat de colors."
  },
  {
    name: "Crisantem", 
    scientificName: "Chrysanthemum", 
    description:"Formada per multitud de pètals petits. De color blanc, groc, vermellós, rosat o lila."
  },
  // {
  //   name: "Orquídea", 
  //   scientificName: "Orchidaceae", 
  //   description:"Té dos sèpals laterals i un de dorsal, i tres pètals, un d'ells més gran i allargat que els altres i d'un color més intens. Pot tenir varis colors."
  // }

];

//Inserta flors a la taula flowers
// flowers.forEach(f=>{
//   let flowerQuery = `INSERT INTO flowers (name, scientificName, description) VALUES (?, ?, ?)`
//   let queryData = [f.name, f.scientificName, f.description]
//   con.query(flowerQuery, queryData, (err, result) =>{
//     if (err) throw err;
//     console.log("Added flower: ", f.name);
//   });
// });


//Finalitza la connexió
// con.end((err) => {
//   if (err) throw err;
//   console.log("Disconnected");
// });

module.exports = con