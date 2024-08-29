// authRoute.js

const express = require("express");
const { getEmail, totalusers, getContact, checkEmail } = require("../controller/userctrl");

const router = express.Router();

// Define routes with their respective handler functions
router.get("/details", getEmail);
router.get("/totalusers", totalusers);
router.get("/getContact", getContact);
router.get("/checkemail", checkEmail);

// Export the router
module.exports = router;
