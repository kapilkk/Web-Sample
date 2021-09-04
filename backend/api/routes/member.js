const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
    getMembers,
    addMember
} = require('../controllers/member');


//get member route
router.get("/", getMembers);

//add member route
router.post("/",
    [
        check('first_name', 'first_name should be of min 3 char').isLength({ min: 3 }),
        check('last_name', 'last_name should be of min 3 char').isLength({ min: 3 }),
        check('mobile', 'mobile is invalid').isLength({ min: 10, max: 10 }),
        check('gender', 'gender is invalid, should be MALE or FEMALE').isIn(['MALE', 'FEMALE'])
    ],
    addMember
);

module.exports = router;