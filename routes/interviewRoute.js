const express = require("express");
const router = express.Router();

const interviewController = require("../controllers/interviewController");

router.get("/interviews", interviewController.getAllInterviews);
router.get("/interviews/:id", interviewController.getInterviewsByCompanyId);
router.post("/interviews_add", interviewController.AddInterviews);

module.exports = router;
