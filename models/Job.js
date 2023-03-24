const mongoose = require('mongoose')

const JobSchema = mongoose.Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company'
  },
  job_title: {
    type: String,
    required: true
  },
  term: String,
  location: String,
  job_link: {
    type: String,
    required: true
  },
  multiple_jobs_available: Boolean,
  category: String,
  open_status: Boolean
})

module.exports = job = mongoose.model('job', JobSchema)