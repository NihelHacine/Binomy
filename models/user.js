const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    nom : {type:String , required:true},
    prenom : {type:String , required:true},
    cin : {type:Number , required:true},
    tel : {type:Number , required:true},
    email : {type:String , required:true},
    password : {type:String , required:true},
    gouvernorat : {type:String, required:true},
    adresse : {type:String, required: true},
    code_postal : {type:String, required:true},
    about : {type:String, required:true},
    photo : {type:String, required:true},
    role : {type:String, required:true},
    etat : {type: String, default:'en cours'},

    }
  );
  
  const User = mongoose.model('User', userSchema);
  module.exports = User ;
  