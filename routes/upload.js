var express = require('express');
var router = express.Router();
var my_conn = require("./pgconn");
var multer = require('multer');
var fs = require('fs')
var exec = require('child_process').exec

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
         var commands_string = 'scp ' + req.file.path + ' root@cu01:'+ req.file.path;
         console.log(commands_string);
         exec(commands_string, function (error, stdout, stderr) {
             if (error) {
                 console.error('error: ' + error);
                 return;
             }
             console.log('stdout: ' + stdout);
             console.log('stderr: ' + typeof stderr);
             var sql= 'set client_encoding = \'GBK\''; 
             console.log(sql);
             my_conn.query(sql, function (result) {
                 console.log(result.rows);
             });
             var sql = 'copy alloy_param_data(alloy_grade,alloy_batch,test_temp,effect_factor1_value,effect_factor1_name,effect_factor2_value,effect_factor2_name,standard_id,param_id,report_id,test_stress,alloy_shape,material_source,material_name,test_time,test_duration,test_direction,test_org,effect_factor3_value,effect_factor3_name,db_type,note,"alloy_spec.No","alloy_type/grade",effect_factor4_value,effect_factor4_name,fracture_profile,creep_curve,metallograph,param_value,effect_factor_name,effect_factor_value) from \'' + req.file.path + '\' with delimiter as \',\' csv header;';
             console.log(sql);
             my_conn.query(sql, function (result) {
                 console.log(result.rows);
             });
         });


     }




    Wurl = '/data_alloy';
    res.redirect(Wurl);

})

module.exports = router;