const express = require('express');
const router = express.Router();

const interviewController = require('../controllers/interviewController')

router.get('/interviews', interviewController.getAllInterviews)
//router.get('/interviews/{id}', companyController.getInterviewsByCompany(id))

module.exports = router;