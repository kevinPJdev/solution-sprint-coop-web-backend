const mongoose = require('mongoose')

const CompanySchema = mongoose.Schema({
  company_name: {
    type: String,
    required: true
  },
  company_size: {
    type: String,
    required: true,
    enum: ['1 to 100', '100+ to 1000', '1000+ to 5000', '10000+']
  },
  company_founded: String,
  industry: String,
  company_type: String,
  location: String,
  website: String,
  logo_image_url: String,
  review_count: {
    type: Number,
    default: 0
  },
  interview_count: {
    type: Number,
    default: 0
  },
  difficult_rating: {
    type: Number,
    default: 0,
  },
  acceptance_rate:{
    type: Number,
    default: 0,
  },
  offer_count: {
    type: Number,
    default:0
  },
  common_job_posts: {
    type: [String],
    default: [""]
  },
})

//create mongoose model. The mongoose.model() function of the mongoose module is used to create a collection of a particular database of MongoDB.
module.exports = company = mongoose.model('company', CompanySchema)