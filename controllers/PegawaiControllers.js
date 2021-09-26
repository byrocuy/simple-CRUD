var mongoose = require('mongoose');
var Pegawai = require('../models/pegawai');

var PegawaiController = {};

PegawaiController.save = function(req, res){
    var pegawai = new Pegawai(req.body);

    pegawai.save(function(err){
        if(err){
            console.log(err);
            res.render('index');
        } else{
            console.log('Berhasil disimpan...');
            res.redirect('../');
        }
    })
}

// Hapus data pegawai
PegawaiController.delete = function(req, res){
    Pegawai.findOne({ _id: req.params._id }, function(err, row){
        if(row){
            console.log(row);
            Pegawai.remove({ _id: req.params._id }, function(err){
                if(err){
                    console.log('Gagal menghapus', err);
                } else{
                    console.log('Berhasil menghapus...');
                    res.redirect('http://localhost:3000');
                }
            })
        } else{
            res.redirect('http://localhost:3000')
        }
    })
}

// Edit data pegawai


module.exports = PegawaiController;