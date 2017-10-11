const router = require("express").Router();
const customerRoutes = require("./customer");
const userRoutes = require("./user");
const noteRoutes = require("./note");

// Book routes
router.use("/customer", customerRoutes);
router.use("/user", userRoutes);
router.use("/note", noteRoutes);

module.exports = router;