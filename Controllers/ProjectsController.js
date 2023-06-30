const express = require("express");
const router = express.Router();
router.use(express.json());
const cloudinary = require("cloudinary");
const ProjectModel = require("../Models/ProjectsModel");
const SearchProject = require("../Utils/search");

cloudinary.config({
  cloud_name: process.env.CLOUDANIRY_CLOUD_NAME,
  api_key: process.env.CLOUDANIRY_API_KEY,
  api_secret: process.env.CLOUDANIRY_API_SECRET,
});

// Add Project
const addProject = async (req, res) => {
  
  try {
    let projectPic = [];
  if (typeof req.body.projectImg === "string") {
    projectPic.push(req.body.projectImg);
  } else {
    projectPic = req.body.projectImg;
  }
  const projectLink = [];

  for (let i = 0; i < projectPic.length; i++) {
    const result = await cloudinary.v2.uploader.upload(projectPic[i], {
      folder: "xzadik",
    });

    projectLink.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
    const { workType, liscense, keyword, projectType } = req.body;
    console.log(req.body);
    if (!workType || !liscense || !keyword || projectType === null) {
      return res.status(400).json({
        message: "Please fill out all the fields properly",
        success: false,
      });
    }
    console.log("Public Id", projectLink.slice(-1)[0].public_id);
    console.log("url", projectLink.slice(-1)[0].url);
    const newProject = new ProjectModel({
      workType,
      liscense,
      keyword,
      projectType,
      projectImg: {
        public_id: projectLink.slice(-1)[0].public_id,
        url: projectLink.slice(-1)[0].url,
      },
    });
    const result = await newProject.save();
    res
      .status(200)
      .json({ result, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error, success: false });
  }
};

// get All Projects
const getProjects = async (req, res) => {
  try {
    const search = new SearchProject(
      ProjectModel.find({}),
      req.query
    ).searchProject();
    const projects = await search.query;
    res.status(200).json({ projects, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// get Sort Relevant Projects
const getRelevantProjects = async (req, res) => {
  const { query } = req.params;
  try {
    if (query === "newest") {
      const projects = await ProjectModel.find().sort({ createdAt: -1 });
      res.status(200).json({ projects, success: true });
    } else if (query === "oldest") {
      const projects = await ProjectModel.find().sort({ createdAt: 1 });
      res.status(200).json({ projects, success: true });
    } else {
      const projects = await ProjectModel.find().sort({ dealsClosed: -1 });
      res.status(200).json({ projects, success: true });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Filter Projects By work type and liscense type
const filterProjects = async (req, res) => {
  const { workType, liscense } = req.body;
  console.log(workType,liscense);
  try {
    var criteria = {},
      condition = [{ workType: workType }, { liscense: liscense }];

    if (workType !== "" && liscense !== "") {
      criteria["$and"] = condition;
    } else {
      criteria["$or"] = condition;
    }

    const projects = await ProjectModel.find(criteria);
    console.log(projects);
    res.status(200).json({ projects, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = {
  addProject,
  getProjects,
  getRelevantProjects,
  filterProjects,
};
