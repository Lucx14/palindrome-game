const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game");
const scoresController = require("../controllers/api/v1/scores");
const submissionsController = require("../controllers/api/v1/submissions");

router.get("/", gameController.home);
router.get("/api/v1/getScores", scoresController.getScores);
router.post("/api/v1/submitEntry", submissionsController.submitEntry);

module.exports = router;
