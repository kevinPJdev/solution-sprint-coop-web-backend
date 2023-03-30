const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  desc: {
    type: String,
    required: true,
  },
  questions: [String],
});

const InterviewSchema = mongoose.Schema({
  user_id: String,
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
  },
  job_title: {
    type: String,
    required: true,
  },
  job_field: {
    type: String,
    enum: ['Computer Science', 'Data Analytics', 'Finance', 'Accounting', 'Mechanical', 'Civil', 'Education', 'Biology', 'Electronics', 'Psycology'],
    required: true
  },
  interview_date: {
    type: Date,
    required: true,
  },
  review: {
    type: ReviewSchema,
    required: true,
  },
  positive_flag: {
    type: Boolean,
  },
  job_offer_flag: Boolean,
  difficulty_rating: Number,
  created_date: {
    type: Date,
    default: Date.now(),
  },
  modified_date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = interview = mongoose.model("interview", InterviewSchema);
