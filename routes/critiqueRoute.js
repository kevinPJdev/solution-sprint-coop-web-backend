const express = require("express");
const router = express.Router();

const critiqueController = require("../controllers/critiqueController");

router.get("/critiques", critiqueController.getAllCritiques);
router.get("/critiques/:id", critiqueController.getCritiquesById);
router.post("/critiques_add", critiqueController.AddCritique);

module.exports = router;
