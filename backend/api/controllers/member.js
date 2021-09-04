const Member = require('../models/member');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');


//controller to get all members
exports.getMembers = (req, res) => {
    console.log("ROUTE ===> GET:members");

    Member
        .find()
        .sort([["createdAt", "desc"]])
        .exec()
        .then((res_member) => {
            return res.status(200).json(res_member);
        })
        .catch((err) => {
            console.log("ERROR: ", err);

            return res.status(500).json({
                error: err
            });
        });
};


//controller to add member
exports.addMember = (req, res) => {
    console.log("ROUTE ===> POST:members");
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()[0].msg
        });
    }

    let memberData = {
        ...req.body,
        fullname: req.body.first_name + " " + req.body.last_name
    };

    const member = new Member({
        _id: new mongoose.Types.ObjectId(),
        ...memberData
    });

    member.save()
        .then((res_member) => {
            //console.log(result);
            return res.status(200).json(res_member);
        })
        .catch((err) => {
            console.log(err);

            return res.status(500).json({
                error: err
            });
        });
};

