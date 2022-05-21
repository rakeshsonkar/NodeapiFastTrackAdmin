const res = require("express/lib/response");
const commanModel=require("../models/CommanModel");

exports.geoTimezone=(req,res)=>{
    commanModel.geoTimezone((err, data) => {
        if (err)
          res.status(500).send({
            success: 'false',
            message:
              err.message || "Some error occurred while creating the Fasttrack."
          });
        else res.status(200).send({
          success: 'true',
          data:data
        });
      });
    }
 exports.geocountry=(req,res)=>{
    commanModel.geocountry((err, data) => {
        if (err)
          res.status(500).send({
            success: 'false',
            message:
              err.message || "Some error occurred while creating the Fasttrack."
          });
        else res.status(200).send({
          success: 'true',
          data:data
        });
      });

 }
 exports.Tlanguage=(req,res)=>{
     commanModel.Tlanguage((err,data)=>{
        if(err)
        res.status(500).send({
            success:'false',
            message:
            err.message || "Some error occurred while creating the Fasttrack."
        });
        else res.status(200).send({
            success: 'true',
          data:data
        });
     })
 }
