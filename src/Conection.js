var mysql =require("mysql")

var con =mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"school"

})
con.connect(function(error){
    if(error)throw error;
    console.log("connect");
    

});

module.exports =con;