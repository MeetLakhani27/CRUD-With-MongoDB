var express = require('express');
var router = express.Router();

var user=require('../controller/controller')

/* GET home page. */
router.post('/', user.insert);
router.get('/find', user.find);
router.get('/findid/:id', user.findid);
router.post('/update/:id', user.update_data);
router.get('/delete/:id', user.delete_data);

module.exports = router;
