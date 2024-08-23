const express = require("express");
const { getEmail, totalusers, getContact, checkEmail } = require("../controller/userctrl");
// const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");


const router = express.Router();


router.get("/details", getEmail);
router.get("/totalusers",totalusers);
router.get("/getContact",getContact);
router.get("/checkemail",checkEmail)
// router.post("/login", loginUserCtrl);
// router.get("/all-users", getallUser);
// router.get("/refresh", handleRefreshToken);
// router.get("/logout", logout);
// router.get("/:id", getaUser);
// router.delete("/:id", deleteaUser);
// router.put("/edite-user", updatedUser);
// router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
// router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
// router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
// router.get("/refresh", handleRefreshToken);
// router.post("/add-payee/:id", createPayee);
// router.get("/payee/:id", getPayee);
// router.get('/successfullPayment/:id', successfullPayment);
// router.get('/total-amount/:id', totalAmount);
// router.put('/update-password', updatePassword);
// router.get('/payee-by-id/:id', getsinglePayee)

// router.post("/contactus", contactUs);


module.exports = router;