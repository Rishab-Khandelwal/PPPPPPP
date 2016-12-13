/*
/!**
 * Created by Rishab on 11/21/2016.
 *!/
module.exports = function(){

    var mongoose = require("mongoose");
    
    var WebsiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.ObjectId, ref: "User"},
        name: String,
        description: String,
        dateCreated: {type: Date, default: Date.now}
    },{collection : "assignment.website"});
    
    return WebsiteSchema;
}*/
module.exports=function () {
    var mongoose=require("mongoose");

    var WebsiteSchema=mongoose.Schema({
        _user:{type: mongoose.Schema.ObjectId, ref: "User"},
        name:String,
        description:String,
        dateCreated:{type:Date,default: Date.now}
    },{collection: "assignment.website"});
    return WebsiteSchema;
};