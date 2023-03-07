const express = require('express');
const router = express.Router();

const companyController = require('../controllers/companyController')

router.get('/companies', companyController.getAllCompanies)
router.get('/companies/top', companyController.getTopCompanies)
router.post('/companies', companyController.postCompany)

module.exports = router;