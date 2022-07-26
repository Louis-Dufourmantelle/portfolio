const express = require("express");

const { ProjectController } = require("./controllers");
const { TechnologyController } = require("./controllers");

const router = express.Router();

router.get("/project", ProjectController.browse);
router.get("/project/:id", ProjectController.read);
router.put("/project/:id", ProjectController.edit);
router.post("/project", ProjectController.add);
router.delete("/project/:id", ProjectController.delete);

router.get("/technology", TechnologyController.browse);
router.get("/technology/:id", TechnologyController.read);
router.put("/technology/:id", TechnologyController.edit);
router.post("/technology", TechnologyController.add);
router.delete("/technology/:id", TechnologyController.delete);

module.exports = router;
