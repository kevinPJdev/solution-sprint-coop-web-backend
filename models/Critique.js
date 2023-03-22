const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
  desc: {
    type: String,
    required: true
  },
  pros: [String],
  cons: [String]
})


const Critique = mongoose.Schema({
  user_id: String,
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company'
  },
  title: {
    type:String,
    required: true,
  },
  job_title: {
    type: String,
    required: true
  },
  months_length: {
    type: Number,
    required: true
  },
  review: {
    type: ReviewSchema,
    required: true
  },
  likes: Number,
  dislikes: Number,
  rating: Number,
  created_date: {
    type: Date,
    default: Date.now()
  },
  modified_date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = critique = mongoose.model('critique', Critique)