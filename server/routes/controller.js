const fs = require("fs");
const path = require("path");

const { pool } = require("../config/database");

module.exports = {

    //ORDERS

    
    
    //PRODUCTS
  products: (req,res)=>{
    try{
      pool.query(`SELECT product_description from products';`,(err,resulset,fields)=>{
        if(err){
          res.json({ message: 'Se ha generado un error' });
          console.log(err);
        }else{
          res.json({rows:resulset.rows, rowsCount:resulset.rowCount});
        }
      })
    }catch(e){
      console.log(e)
      res.json({message:"Error inesperado"})
    }
  }
};
