const express = require("express");
const { body } = require("express-validator");
const validate = require("../middlewares/validate");
const authController = require("../controllers/authController");

const router = express.Router();

// Signup
router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  validate,
  authController.signup
);

// Login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validate,
  authController.login
);

module.exports = router;
