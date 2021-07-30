const mongoose = require("mongoose");


const profileSchema = new mongoose.Schema({
    userNAME : {type : String, require : true , unique : true},
  serverNAME : {type : String, require : true },
  districtID : {type : Number}

})


const model = mongoose.model("ProfileModels",profileSchema);

module.exports = model;
