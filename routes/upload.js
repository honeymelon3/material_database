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
        var sql ='copy alloy_param_data from \''+req.file.path +'\' with delimiter as \',\' cav header quote as \'"\' ;';
        console.log(sql);
     }
    //     newDate.setTime(upfdate + localOffset);
    //     var filepath = "/files/" + req.file.filename;
    //     sql = 'insert into cer_files (cer_index,origin_name,filename,file_addr,upload_date) values (\'{' + req.body.id + '}\',\'' + req.file.originalname + '\',\'' + req.file.filename + '\',\'' + filepath + '\',\'' + upftime + '\')';
    //     console.log(sql);
    //     pg2.query(sql, function (result) { });
    // }
    // var tmppath = req.files.file.path;
    // fs.createReadStream(__dirname + '/' + tmppath)
    //     .pipe(parse({ delimiter: "\n" }))
    //     .on('data', function (csvrow) {
    //         console.log(csvrow);
    //         csvData.push(csvrow);
    //     })
    //     .on('end', function () {
    //         console.log(csvData);
    //     });
 



    Wurl = '/data_alloy';
    res.redirect(Wurl);

})

module.exports = router;