/*
/!**
 * Created by Rishab on 11/21/2016.
 *!/
module.exports = function(){

    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username: {type: String, required: true},
        password: String,
        firstName: String,
        lastName: String,
        dob: Date,
        dateCreated: {type: Date, default: Date.now}
    },{collection : "assignment.user"});

    return UserSchema;
}*/
module.exports=function () {
    var mongoose=require("mongoose");

    var UserSchema= mongoose.Schema({
        username:{type:String,required:true},
        password:String,
        firstName:String,
        lastName:String,
        facebook:{
            token:String,
            id:String,
            displayName:String
        },
        email:String,
        dob:Date,
        dateCreated: {type:Date,default:Date.now}
    },{collection:"assignment.user"});

    return UserSchema;
};