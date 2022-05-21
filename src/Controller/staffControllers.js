const staffModel=require('../models/staffModel');

exports.staffByCompany = (req,res)=>{
    
    if (!req.body.Uid && req.body.Uid==null) {
        
        res.status(400).send({
          success:'false',
          message: "missing Uid"
        });
    }
    staffModel.staffByCompanys(req,(err, data) => {
            console.log("testing")
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
