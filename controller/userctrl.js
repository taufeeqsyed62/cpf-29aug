// const { generateToken } = require('../config/jwtToken');

const asyncHandler = require('express-async-handler');

// const { generateRefreshToken } = require("../config/refreshtoken");

// const jwt = require("jsonwebtoken");
const conn = require('../config/dbConnect');






const getEmail = asyncHandler(async (req, res) => {
      try {
        conn.query("SELECT Phone FROM lead", function(err, result) { 
        res.send(result);
        });
        
      } catch (error) {
        throw new Error(error)
    }
});
const checkEmail = asyncHandler(async (req, res) => {
  const data = req.body.phone
  try {
   await conn.query(`SELECT Id,Name FROM Lead WHERE Phone = '${data}'`, function(err, result) { 
    res.send(result);
    });
    
  } catch (error) {
    throw new Error(error)
}
});
const getContact = asyncHandler(async (req, res) => {
  try {
    conn.query("SELECT Phone FROM lead", function(err, result){
      res.send(result);
    });
  } catch (error) {
    throw new Error(error)
  }
});

const totalusers = asyncHandler(async (req, res) => {
   
  try {
    // var records = []; 

    conn.query("SELECT COUNT() FROM lead", function(err, result) { 
        
        
      res.send(result);
      });
    
  } catch (error) {
    throw new Error(error)
}
});
     
module.exports = {
    getEmail,
    totalusers,
    getContact,
    checkEmail
};