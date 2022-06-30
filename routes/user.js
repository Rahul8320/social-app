const express = require("express");
const router = express.Router();

const userController = require("../controllers/profile");

router.get("/profile", userController.profile);

module.exports = router;
