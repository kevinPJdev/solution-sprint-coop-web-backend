const express = require('express');
const router = express.Router();

const jobController = require('../controllers/jobController')

router.get('/jobs/:id', jobController.getJobsByCompanyId)
router.get('/jobs/top/:id', jobController.getTopOpenJobsByCompanyId)

module.exports = router