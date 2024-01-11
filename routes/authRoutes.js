const express = require('express');
const { registerController, loginController, logout,} = require('../controllers/authControllers');
const authMiddleware = require('../middlewares/authMiddleware');


const router = express.Router();


//routes
//Register \\ post
router.post('/register',registerController) 

//LOGIN || POST
router.post('/login',loginController);

//logout
router.get("/logout",authMiddleware,logout);

module.exports = router