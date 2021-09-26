var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var pegawai = require('../controllers/PegawaiControllers');
var kecamatan = require('../models/kecamatan');

router.get('/', function(req, res){
  kecamatan.find({}, function(err, kec){
  console.log(kec);
  res.render('pegawai', { kecamatan: kec, title: 'CRUD Pegawai' });
 }).select('_id nama');
 
});

router.post('/tambah', function(req, res){
 pegawai.save(req, res);
});

// Menghapus data pegawai
router.get('/delete/:_id', function(req, res){
    pegawai.delete(req, res)
})

// Edit data pegawai
router.get('/edit/:_id', function(req, res){
    pegawai.edit(req, res);
})

// Update data pegawai
router.post('/update/:_id', function(req, res){
    pegawai.update(req, res);
})

module.exports = router;