const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
   username:{
    type:String,
    require:true,
    unique:true
   },
   password:{
    type:String,
    require:true
   }
});
module.exports=new mongoose.model("user",UserSchema);