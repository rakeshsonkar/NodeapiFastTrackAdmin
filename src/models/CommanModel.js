const sql=require('../config/dbConnection');
exports.geoTimezone=(result)=>{
    sql.query(`SELECT * FROM t_geo_timezone ORDER BY  TMZ_DES ASC;`, (err, res) => {
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
exports.geocountry=(result)=>{
    sql.query(`SELECT * FROM t_geo_country ORDER BY COU_ISO_ALPHA  ASC;`, (err, res) => {
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

exports.Tlanguage=(result)=>{
    sql.query(`SELECT * FROM t_language  ORDER BY L_FULL_NAME  ASC;`, (err, res) => {
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