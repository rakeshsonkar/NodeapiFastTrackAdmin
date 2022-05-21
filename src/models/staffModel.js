const sql=require('../config/dbConnection');

exports.staffByCompanys=(request,result)=>{
    console.log("testing model");
    sql.query(`SELECT a.ACC_ID,a.STAFF_ID,a.CUSR_FNAME,a.CUSR_LNAME,a.CUSR_EMAIL (select * from t_company_role where CROL_ID IN (SELECT CROL_ID FORM t_company_staff_role WHERE t_company_staff_role.STAFF_ID=a.STAFF_ID)) As role FROM t_company_staff a  WHERE  a.ACC_ID = '${request.body.Uid}'`,(err,res)=>{
        console.log(res)
        // ,
        
        // select * from t_company_role where CROL_ID IN (SELECT CROL_ID FORM t_company_staff_role WHERE t_company_staff_role.STAFF_ID=a.STAFF_ID);
        if (err) {
          result(err, null);
          return;
        }
    
        if (res.length) {
         // console.log(res);
          result(null,res);
          return;
        }
        // not found Tutorial with the id
        result({message: "not_found" }, null);
      });

}