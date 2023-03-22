const Job = require('../models/Job')

const getJobsByCompanyId = (req, res) => {
  Job.find({company_id: req.params.id}.sort({created_date: -1}))
  .then(jobs => {
    if(!jobs) {
      return res.status(400).json({
        msg: "No jobs for this company"
      })
    } else {
      return res.status(200).json(jobs)
    }
  })
  .catch(err => {
    return res.status(500).json({
      msg: "Something went wrong"
    })
  })
}

module.exports = {getJobsByCompanyId}