const express = require("express");
const { addProject, getProjects, getRelevantProjects, filterProjects } = require("../Controllers/ProjectsController");
const router = express.Router();

router.post('/project', addProject);
router.get('/project', getProjects);
router.post('/project/sort/:query', getRelevantProjects);
router.post('/project/filter', filterProjects);

module.exports = router;