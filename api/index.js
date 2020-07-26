var express = require('express');
var router = express.Router();


const object ={
    data:{},
    date: new Date().toString()
}

/* GET users listing. */
router.get('/', function (req, res) {

    res.json(object);
});

router.post('/', function (req, res) {
    const data = req.body;
    if (!data) {
        res.status(406);
        res.send({message: "no valid 'name' key provided "});
        return;
    }
    object.data=data;
    object.date=new Date().toString()
    object.headers = req.headers;
    res.status(201);
    res.json("created");
});


module.exports = router;