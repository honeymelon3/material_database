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
                 var sql = 'copy alloy_param_data(alloy_grade,alloy_batch,test_temp,effect_factor1_value,effect_factor1_name,effect_factor2_value,effect_factor2_name,standard_id,param_id,report_id,test_stress,alloy_shape,material_source,material_name,test_time,test_duration,test_direction,test_org,effect_factor3_value,effect_factor3_name,db_type,note,"alloy_spec.No","alloy_type/grade",effect_factor4_value,effect_factor4_name,fracture_profile,creep_curve,metallograph,param_value,effect_factor_name,effect_factor_value) from \'' + req.file.path + '\' with delimiter as \',\' csv header;';
                 console.log(sql);
                 my_conn.query(sql, function (result) {
                     console.log(result.rows);
                 });                 
             });

         });


     }

    
    Wurl = '/home';
    res.redirect(Wurl);
    
})

router.post('/graphite', multer({ storage: storage3 }).single('file'), function (req, res, next) {
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
        var commands_string = 'scp ' + req.file.path + ' root@cu01:' + req.file.path;
        console.log(commands_string);
        exec(commands_string, function (error, stdout, stderr) {
            if (error) {
                console.error('error: ' + error);
                return;
            }
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + typeof stderr);
            var sql = 'set client_encoding = \'GBK\'';
            console.log(sql);
            my_conn.query(sql, function (result) {
                console.log(result.rows);
                var sql = 'copy alloy_irradiant_data("alloy_name","alloy_shape","sample_direction","annealing_temp","irradiation_reactor","enviroment","temperature_lower_limit ","temperature_upper_limit","ave_temperature","time_at_temperature","neutron_dose_1","neutron_dose_2","neutron_dose_3","neutron_dose_4","neutron_dose_5","neutron_dose_6","DPA","He","test_time","test_temp","test_env","strain_rate","test_stress","param_id","param_value","source","test_standard","report_name","alloy_batch","alloy_data_id","annealing_time","neutron_dose") from \'' + req.file.path + '\' with delimiter as \',\' csv header;';
                console.log(sql);
                my_conn.query(sql, function (result) {
                    console.log(result.rows);
                });
            });

        });


    }


    Wurl = '/home';
    res.redirect(Wurl);

})

router.post('/salt', multer({ storage: storage3 }).single('file'), function (req, res, next) {
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
        var commands_string = 'scp ' + req.file.path + ' root@cu01:' + req.file.path;
        console.log(commands_string);
        exec(commands_string, function (error, stdout, stderr) {
            if (error) {
                console.error('error: ' + error);
                return;
            }
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + typeof stderr);
            var sql = 'set client_encoding = \'GBK\'';
            console.log(sql);
            my_conn.query(sql, function (result) {
                console.log(result.rows);
                var sql = 'copy salt_param_data("alloy_name","alloy_shape","sample_direction","annealing_temp","irradiation_reactor","enviroment","temperature_lower_limit ","temperature_upper_limit","ave_temperature","time_at_temperature","neutron_dose_1","neutron_dose_2","neutron_dose_3","neutron_dose_4","neutron_dose_5","neutron_dose_6","DPA","He","test_time","test_temp","test_env","strain_rate","test_stress","param_id","param_value","source","test_standard","report_name","alloy_batch","alloy_data_id","annealing_time","neutron_dose") from \'' + req.file.path + '\' with delimiter as \',\' csv header;';
                console.log(sql);
                my_conn.query(sql, function (result) {
                    console.log(result.rows);
                });
            });

        });


    }


    Wurl = '/home';
    res.redirect(Wurl);

})
router.post('/irradiation', multer({ storage: storage3 }).single('file'), function (req, res, next) {
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
        var commands_string = 'scp ' + req.file.path + ' root@cu01:' + req.file.path;
        console.log(commands_string);
        exec(commands_string, function (error, stdout, stderr) {
            if (error) {
                console.error('error: ' + error);
                return;
            }
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + typeof stderr);
            var sql = 'set client_encoding = \'GBK\'';
            console.log(sql);
            my_conn.query(sql, function (result) {
                console.log(result.rows);
                var sql = 'copy alloy_irradiant_data(comp_purity,ele_impurity,salt_batch,salt_state,salt_pretreatment,salt_test_temp,salt_test_temp_range,param_id,param_value,param_uncertainty,param_value_fitting,param_method,param_source,param_check,note,param_report,salt_id) from \'' + req.file.path + '\' with delimiter as \',\' csv header;';
                console.log(sql);
                my_conn.query(sql, function (result) {
                    console.log(result.rows);
                });
            });

        });


    }


    Wurl = '/home';
    res.redirect(Wurl);

})

module.exports = router;