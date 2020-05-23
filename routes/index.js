const express = require('express');
const router = express.Router();
const con = require('../db_connection')


//Get all flowers
router.get('/', (req, res, next) =>{
  //res.render('index', { title: 'Express' });
  con.query("SELECT * from flowers",  (err, result) =>{
    if (err) throw err;
    res.status(200).json(result);
  });
  

});

//Add a new flower
router.post('/add', async (req, res, next) => {
  console.log("req: ", req);
  const {name, scientificName, description} = req.body;
  if(!name || !scientificName || !description){
    res.status(200).json({info: "Could not be added a new flower. Missing some field"})
  }else{
    const query = `INSERT INTO flowers (name, scientificName, description) VALUES (?, ?, ?)`
    let queryData = [name, scientificName, description]
    con.query(query, queryData, (err, result) =>{
      if (err)  res.status(500).json({error: err});;
      res.status(200).json({info: "Added flower correctly"});
    });
  }  
});

//Delete a flower
router.post('/delete', async (req, res, next) => {
  const {id} = req.body;
  if(!id){
    res.status(200).json({info: "Any flower could not be deleted. Missing flower id."})
  }else{
    let queryData = [id];
    con.query("SELECT * from flowers WHERE id=?", [id], (err, result) =>{
      if (err)  res.status(500).json({error: err});
      if(result.length === 0){
        res.status(200).json({info: "Id was not found."});
      }else{
        const query = `DELETE from flowers WHERE id=?`
        con.query(query, queryData, (err, result) =>{
          if (err)  res.status(500).json({error: err});
            res.status(200).json({info: "Deleted flower correctly"});
        });
      }
    });
  }  
});

//Update a flower
router.post('/update', async (req, res, next) => {
  const {id, name, scientificName, description} = req.body;
  if(!id){
    res.status(200).json({info: "Any flower could not be updated. Missing flower id."})
  }else if(!name && !scientificName && !description){
    res.status(200).json({info: "Missing fields to be updated"});
  } else{
    con.query("SELECT * from flowers WHERE id=?", [id], (err, result) =>{
      if (err)  res.status(500).json({error: err});
      if(result.length === 0){
        res.status(200).json({info: "Id was not found."});
      }else{
        console.log("going to update")
        let queryData = [];
        let queryNames = [];
        if(name){
          queryData.push(name)
          queryNames.push("name=?")
        };
        if(scientificName){
          queryData.push(scientificName)
          queryNames.push("scientificName=?")
        };
        if(description){
          queryData.push(description)
          queryNames.push("description=?")
        };
        const query = `UPDATE flowers SET ${queryNames.join(", ")} WHERE id=?`
        queryData.push(id);
        con.query(query, queryData, (err, result) =>{
          if (err) res.status(500).json({error: err});
          res.status(200).json({info: "Updated flower correctly"});
        });
      }
    });
  }  
});

module.exports = router;
