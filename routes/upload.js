var express = require('express');
var router = express.Router();
var my_conn = require("./pgconn");
var multer = require('multer');
var fs = require('fs')
var exec = require('child_process').exec

var storage3 = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null,process.cwd() + "/public/csvs");    // 保存的路径，备注：需要自己创�?
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
             var sql = 'set client_encoding = \'GBK\'';
             console.log(sql);
             my_conn.query(sql, function (result) {
                 console.log(result.rows);
                 var sql = 'copy alloy_param_data(alloy_grade,alloy_batch_id,test_temp,effect_factor1_value,effect_factor1_name,effect_factor2_value,effect_factor2_name,standard_id,param_id,report_id,test_stress,alloy_shape_id,material_source,material_name_id,test_time,test_duration,test_direction_id,test_org_id,effect_factor3_value,effect_factor3_name,db_type,note,"alloy_spec.No","alloy_type/grade",effect_factor4_value,effect_factor4_name,fracture_profile,creep_curve,metallograph,param_value,effect_factor_name,effect_factor_value,data_category) from \'' + req.file.path + '\' with delimiter as \',\' csv header;';
                 console.log(sql);
                 my_conn.query(sql, function (result) {
                   
                    console.error('query reslut:',result );


                     var sql = 'set client_encoding = \'UTF8\'';
                     console.log(sql);
                     my_conn.query(sql, function (result) {
                     });
                     Wurl = '/data_alloy/1';
                     res.redirect(Wurl);
                 });
             });



         });


     }

    

    
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
                var sql = 'copy graphite_param_data("material_grade","material_batch","standard_id","param_value","param_id","report_id","material_block_size","data_source","test_time","test_infiltration_duration","test_org","note","material_manufacturer","material_block_num","material_produce_date","sample_direction","sample_num_avg","sample_num","molten_salt_composition_id","molten_salt_batch","inflitration_experiment_no","test_preset_pres","test_inflitration_pres","test_inflitration_temp","molten_salt_content","test_notch_depth","test_support_span","molten_salt_distribution","db_type","sample_org","sample_index","sample_position_id","maintainer_id","test_temp","test_temp_span","sample_size","data_category") from \'' + req.file.path + '\' with delimiter as \',\' csv header;';
                console.log(sql);
                my_conn.query(sql, function (result) {
                    console.log(result.rows);
                    var sql = 'set client_encoding = \'UTF8\'';
                    console.log(sql);
                    my_conn.query(sql, function (result) {
                    });

                    Wurl = '/data_graphite/1';
                    res.redirect(Wurl);
                });
            });



        });


    }



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
                var sql = 'copy salt_param_data(comp_purity,ele_impurity,salt_batch,salt_state,salt_pretreatment,salt_test_temp,salt_test_temp_range,param_id,param_value,param_uncertainty,param_value_fitting,param_method,param_source,param_check,note,param_report,salt_id,data_category) from \'' + req.file.path + '\' with delimiter as \',\' csv header;';
                console.log(sql);
                my_conn.query(sql, function (result) {
                    console.log(result.rows);
                    var sql = 'set client_encoding = \'UTF8\'';
                    console.log(sql);
                    my_conn.query(sql, function (result) {
                    });
                    Wurl = '/data_salt/2';
                    res.redirect(Wurl);
                });
            });
         

        });


    }




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
                var sql = 'copy alloy_irradiant_data("sample_id","alloy_name","alloy_shape","sample_direction","annealing_temp","irradiation_reactor","enviroment","temperature_lower_limit","temperature_upper_limit","ave_temperature","time_at_temperature","neutron_dose_1","neutron_dose_2","neutron_dose_3","neutron_dose_4","neutron_dose_5","neutron_dose_6","DPA","He","test_time","test_temp","test_env","strain_rate","test_stress","param_id","param_value","source","test_standard","report_name","alloy_batch","annealing_time","neutron_dose","data_category") from \'' + req.file.path + '\' with delimiter as \',\' csv header;';
                console.log(sql);
                my_conn.query(sql, function (result) {
                    console.log(result.rows);

                    var sql = 'set client_encoding = \'UTF8\'';
                    console.log(sql);
                    my_conn.query(sql, function (result) {
                    });

                    Wurl = '/data_irradiation/1';
                    res.redirect(Wurl);
                });

            });


        });


    }



})
router.post('/corrode', multer({ storage: storage3 }).single('file'), function (req, res, next) {
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
                var sql = 'copy alloy_salt_corrod("alloy_name","alloy_state","alloy_batch","salt_batch","salt_batch_add","methods","test_temp","duration","environment","crucible","setup","fixing","weight_loss","uncertainty","morphology","standard_name","param_maintainer","param_check","note","salt_name_id","report_name","depth_in_base","depth_in_weld","dt","flow_rate","references","corrdepth_morphology(um)","corrodepth_Cr(um)","corrdepth_weight(um)","data_category") from \'' + req.file.path + '\' with delimiter as \',\' csv header;';
                console.log(sql);
                my_conn.query(sql, function (result) {
                    console.log(result.rows);
                    var sql = 'set client_encoding = \'UTF8\'';
                    console.log(sql);
                    my_conn.query(sql, function (result) {
                    });
                    Wurl = '/data_corrode/1';
                    res.redirect(Wurl);
                });
            });




        });


    }


    
})

router.post('/salt_mech', multer({ storage: storage3 }).single('file'), function (req, res, next) {
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
                var sql = 'copy salt_mech_data(data_category,data_source_type,data_source_name,param_id,param_value,material_name,material_batch,material_source,material_pre_treatment,salt_type,salt_nominal_composition,salt_batch,salt_source,salt_pre_treatment,salt_containing_material,test_type,test_standard,test_starting_date,test_duration,test_temp,test_atmosphere,test_stress,test_strain_rate,strain_measurement_method,specimen_type,gauge_area,gauge_length,note,param_maintainer) from \'' + req.file.path + '\' with delimiter as \',\' csv header;';
                console.log(sql);
                my_conn.query(sql, function (result) {
                    console.log(result.rows);
                    var sql = 'set client_encoding = \'UTF8\'';
                    console.log(sql);
                    my_conn.query(sql, function (result) {
                    });
                    Wurl = '/data_salt_mech/3';
                    res.redirect(Wurl);
                });
            });
         

        });


    }




})
module.exports = router;