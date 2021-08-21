const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game");

router.get("/", gameController.home);

module.exports = router;
