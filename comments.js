// Create web server
// Create database
// Create schema
// Create model
// Create router
// Create controller

// Import modules
const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// POST request to /comments
router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json(error);
  }
});

// GET request to /comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json(error);
  }
});

// PUT request to /comments/:id
router.put("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json(error);
  }
});

// DELETE request to /comments/:id
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;