var express = require('express');
var router = express.Router();
var my_conn = require("./pgconn");
var multer = require('multer');
var fs = require('fs')

var storage3 = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null,process.cwd() + "/public/csvs");    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now());
    }

});


router.post('/alloy', multer({ storage: storage3 }).single('file'), function (req, res, next) {
    console.log(req.file);
    // console.log(req.file);
    // console.log(process.cwd());
    // var upfdate = Date.now();
    // var newDate = new Date();
    // var filename = '';
    // var localOffset = newDate.getTimezoneOffset() * 60000;

    // var upftime = newDate.toISOString();
    // console.log(upftime);
     if (req.file != null) {
         console.log(req.file.path);
        var sql ='copy alloy_param_data from \''+req.file.path +'\' with delimiter as \',\' csv header quote as \'"\' ;';
        console.log(sql);
         my_conn.query(sql, function (result) { 
             console.log(result.rows);
         });
     }




    Wurl = '/data_alloy';
    res.redirect(Wurl);

})

module.exports = router;