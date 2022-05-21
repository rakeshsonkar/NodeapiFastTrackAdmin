
const { imagechecker } = require('../helper/imagechecker');
const companymodel=require('../models/companymodels');

exports.List = (req, res) => {
    companymodel.ListCom((err, data) => {
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
  };

  exports.customersPlans=(req,res)=>{

    if (!req.body.Uid && req.body.Uid==null) {
      res.status(400).send({
        success:'false',
        message: "missing Uid"
      });
    }
    companymodel.customersPlan(req,(err, data) => {
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


  exports.addCompany= async(req,res)=>{
   
    if (!req.body.CompanyName && req.body.CompanyName==null) {
      res.status(400).send({
        success:'false',
        message: "missing CompanyName"
      });
    }
    if (!req.body.comUrl && req.body.comUrl==null) {
      res.status(400).send({
        success:'false',
        message: "missing comUrl"
      });
    }
    if (!req.body.mainMail && req.body.mainMail==null) {
      res.status(400).send({
        success:'false',
        message: "missing mainMail"
      });
    }
    if (!req.body.timeZone && req.body.timeZone==null) {
      res.status(400).send({
        success:'false',
        message: "missing timeZone"
      });
    }
    if (!req.body.State && req.body.State==null) {
      res.status(400).send({
        success:'false',
        message: "missing State"
      });
    }
    if (!req.body.country && req.body.country==null) {
      res.status(400).send({
        success:'false',
        message: "missing country"
      });
    }
    if (!req.body.language && req.body.language==null) {
      res.status(400).send({
        success:'false',
        message: "missing language"
      });
    }
    if (!req.body.style && req.body.style==null) {
      res.status(400).send({
        success:'false',
        message: "missing style"
      });
    }
    if (!req.body.comType && req.body.comType==null) {
      res.status(400).send({
        success:'false',
        message: "missing comType"
      });
    }
    if (!req.body.contactNumber && req.body.contactNumber==null) {
      res.status(400).send({
        success:'false',
        message: "missing contactNumber"
      });
    }
   imagechecker(req.body.comImage);
   imagechecker(req.body.urlcombanner);

    await companymodel.addCompany(req,(err, data) => {
      if (err)
        res.status(500).send({
          success: 'false',
          message:
            err.message || "Some error occurred while creating the Fasttrack."
        });
      else res.status(200).send({
        success: 'true',
        data:data,
        message:'Added company successfully'
      });
    });
  }
exports.singleCompaniesList=(req,res)=>{
    
}