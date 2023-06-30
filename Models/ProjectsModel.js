const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    workType: {
      type: String,
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
    projectType: {
      type: Number,
      required: true,
    },
    liscense: {
      type: String,
      required: true,
    },
    projectImg: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },
  { timestamps: true }
);
  
  const ProjectModel = mongoose.model("Projects", projectSchema);
  module.exports = ProjectModel;