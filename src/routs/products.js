const express = require("express");
const router = express.Router();

// const user_auth = require("../../middleware/user_auth.js");
// const user_auth = require("../../../middleware/patient_auth");

const {
    products
} = require("../controllers/user_validation");

router.get("/products", products);

module.exports = router;




