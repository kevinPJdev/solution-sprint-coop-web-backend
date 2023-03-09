const Company = require('../models/Company')

const getAllCompanies = (req, res) => {
  Company.find()
    .then(companies => {
      return res.status(200).json(companies)
    })
    .catch(err => {
      return res.status(500).json({
        msg: "Something went wrong"
      })
    })
}

const getCompanyById = (req, res) => {
  Company.findById(req.params.id)
   .then(company => {
      if(!company) {
        return res.status(500).json({
          msg: "No company with that id found"
        })
      } else {
        return res.status(200).json(company)
      }
   })
   .catch((err) => {
      return res.status(500).json({
        msg: "Something went wrong"
      })
   })
}

const getTopCompanies = (req, res) => {
  Company.find().sort({ offer_count: -1 }).limit(8)
    .then(companies => {
      return res.status(200).json(companies)
    })
    .catch(err => {
      return res.status(500).json({
        msg: "Something went wrong"
      })
    })
}

const postCompany = (req, res) => {
  const {company_name, location, website, logo_image_url} = req.body

  const newCompany = new Company({company_name, location, website, logo_image_url})

  newCompany.save()
    .then(company => {
      return res.json(company)
    })
}

module.exports = {getAllCompanies, postCompany, getTopCompanies, getCompanyById}