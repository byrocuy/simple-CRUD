var express = require('express');
var router = express.Router();
var Pegawai = require('../models/pegawai');

/* GET home page. */
router.get('/', function(req, res, next) {
  Pegawai.find({}, function(err, pegawai){
    console.log(pegawai);
    res.render('index', { pegawai: pegawai, title: 'CRUD Pegawai' });
  }).populate('id_kec').select('_id nama email umur');
  
});

module.exports = router;
