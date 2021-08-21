const express = require("express");
const router = express.Router();
const submissionsController = require("../controllers/submissions");

router.post("/api/submitEntry", submissionsController.submitEntry);

module.exports = router;
