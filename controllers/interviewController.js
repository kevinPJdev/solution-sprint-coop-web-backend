const Interview = require("../models/Interview");

const getAllInterviews = (req, res) => {
  Interview.find()
    .then((interviews) => {
      return res.status(200).json(interviews);
    })
    .catch((err) => {
      return res.status(500).json({
        msg: "Something went wrong",
      });
    });
};

const getInterviewsByCompanyId = (req, res) => {
  Interview.find({ company_id: req.params.id })
    .sort({ created_date: -1 })
    .then((interviews) => {
      if (!interviews) {
        return res.status(400).json({
          msg: "No interview reviews for this company",
        });
      } else {
        return res.status(200).json(interviews);
      }
    })
    .catch((err) => {
      return res.status(500).json({
        msg: "Something went wrong XXX",
      });
    });
};

const AddInterviews = (req, res) => {
  console.log(req.body);
  const {
    user_id,
    company_id,
    job_title,
    interview_date,
    review,
    job_offer_flag,
    difficulty_rating,
    positive_flag,
  } = req.body;

  const newInterview = new Interview({
    user_id,
    company_id,
    job_title,
    interview_date,
    review,
    job_offer_flag,
    difficulty_rating,
    positive_flag,
  });

  newInterview.save().then((interview) => {
    return res.status(200).json(interview);
  });
};

module.exports = { getAllInterviews, getInterviewsByCompanyId, AddInterviews };
