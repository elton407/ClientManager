module.exports = function (passport) {

const router = require("express").Router();
const customerRoutes = require("./customer")(passport);
const userRoutes = require("./user")(passport);
const noteRoutes = require("./note")(passport);

// Book routes
router.use("/customer", customerRoutes);
router.use("/user", userRoutes);
router.use("/note", noteRoutes);

return router;

}

