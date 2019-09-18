let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");
router.get("/", (req, res) => {
    burger.all((data) => {
        let hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.get("/api/burgers", (req,res) => {
    res.json()
})

router.post("/api/burgers", (req, res) => {
    burger.create(["name", "eaten"], [req.body.name, req.body.eaten], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    console.log("Condition", condition);

    burger.update({ eaten: req.body.eaten }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;