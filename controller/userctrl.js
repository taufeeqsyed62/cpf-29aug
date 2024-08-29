// userctrl.js

const asyncHandler = require('express-async-handler');
const conn = require('../config/dbConnect'); // Your database connection file

// Controller methods

// Handler for fetching emails
const getEmail = asyncHandler(async (req, res) => {
    try {
        conn.query("SELECT Phone FROM Lead", (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Handler for checking email by phone number
const checkEmail = asyncHandler(async (req, res) => {
    const { phone } = req.body;
    try {
        const sql = "SELECT Id, Name FROM Lead WHERE Phone = ?";
        conn.query(sql, [phone], (err, result) => {  // Use parameterized query
            if (err) throw err;
            if (result.length > 0) {
                res.send(result);
            } else {
                res.status(400).json({ message: "Invalid credentials" });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Handler for getting contact information
const getContact = asyncHandler(async (req, res) => {
    try {
        conn.query("SELECT Phone FROM Lead", (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Handler for counting total users
const totalusers = asyncHandler(async (req, res) => {
    try {
        conn.query("SELECT COUNT(*) AS total FROM Lead", (err, result) => {  // Corrected COUNT syntax
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Export all controller functions
module.exports = {
    getEmail,
    checkEmail,
    getContact,
    totalusers
};
