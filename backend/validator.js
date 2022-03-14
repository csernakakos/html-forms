const {check} = require("express-validator");

module.exports = {
    requireFirstName:
        check("SERVER-firstName")
            .trim()
            .isLength({min: 4, max: 50})
            .withMessage("Make sure to provide a name between 4 and 50 characters."),
    requireLastName: 
        check("SERVER-lastName")
            .trim()
            .isLength({min: 4, max: 50})
            .withMessage("Make sure to provide a name between 4 and 50 characters."),
    requireEmail: 
        check("SERVER-email")
            .trim()
            .normalizeEmail()
            .isEmail()
            .withMessage("Not a valid email!"),
}