var mongoose = require('mongoose');
const kecamatan = require('../models/kecamatan');
const pegawai = require('../models/pegawai');
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

// Edit instance pegawai
PegawaiController.edit = function(req, res){
    var id = req.params._id;
    Pegawai.findOne({ _id: id }, function(err, pegawai){
        if(pegawai){
            console.log(pegawai);
            kecamatan.find({}, function(err, kec){
                kecamatan.findOne({ _id:pegawai.id_kec }, function(err, x){
                    console.log(x);
                    res.render('editpegawai', {pegawai: pegawai, title: 'CRUD', kecamatan: kec, x: x});
                });
            });
        } else{
            res.redirect('../');
        }
    })
}

PegawaiController.update = function(req, res){
    pegawai.findByIdAndUpdate(req.params._id, {
        $set: { nama: req.body.nama,
        email: req.body.email,
        umur: req.body.umur,
        id_kec: req.body.id_kec
    }
    }, { new: true }, function(err, pegawai){
        if(err){
            console.log(err);
            res.render('editpegawai', {pegawai: req.body});
        }
        res.redirect('http://localhost:3000')
    })
}

module.exports = PegawaiController;