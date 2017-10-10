const router = require("express").Router();
const customerRoutes = require("./customer");
const userRoutes = require("./user");

// Book routes
router.use("/customer", customerRoutes);
router.use("/user", userRoutes);

module.exports = router;