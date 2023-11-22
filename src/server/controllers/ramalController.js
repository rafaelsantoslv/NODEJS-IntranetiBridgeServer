const { body, validationResult } = require("express-validator");
const { validadeAuth } = require("@middleware/authMiddleware.js")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const tabUsers = require('@models/tabusers');