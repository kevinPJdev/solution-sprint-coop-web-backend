const Critique = require("../models/Critique");

const getAllCritiques = (req, res) => {
  Critique.find()
    .then((critiques) => {
      if (!critiques) {
        return res.status(400).json({
          msg: "No critiques exist",
        });
      } else {
        return res.status(200).json(critiques);
      }
    })
    .catch((err) => {
      return res.status(500).json({
        msg: "Something went wrong",
      });
    });
};

const getCritiquesById = (req, res) => {
  Critique.find({ company_id: req.params.id })
    .sort({ created_date: -1 })
    .then((critiques) => {
      if (!critiques) {
        return res.status(400).json({
          msg: "No critiques for this company",
        });
      } else {
        return res.status(200).json(critiques);
      }
    })
    .catch((err) => {
      return res.status(500).json({
        msg: "Something went wrong",
      });
    });
};

const AddCritique = (req, res) => {
  const { user_id, company_id, job_title, months_length, review } = req.body;

  const newCritique = new Critique({
    user_id,
    company_id,
    job_title,
    months_length,
    review,
  });

  newCritique.save().then((critique) => {
    return res.status(200).json(critique);
  });
};

module.exports = { getAllCritiques, getCritiquesById, AddCritique };
