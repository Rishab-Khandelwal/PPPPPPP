/*
/!**
 * Created by Rishab on 11/21/2016.
 *!/
module.exports = function(){

    var mongoose = require("mongoose");
    
    var PageSchema = mongoose.Schema({
        _website: {type: mongoose.Schema.ObjectId, ref: "Website"},
        name: {type: String, required: true},
        title: String,
        description: String,
        dateCreated: {type: Date, default: Date.now()}
    },{collection : "assignment.Page"});
    
    return PageSchema;
}*/
module.exports=function () {
    var mongoose=require("mongoose");
    var PageSchema=mongoose.Schema({
        _website:{type:mongoose.Schema.ObjectId,ref:"Website"},
        name:String,
        title:String,
        description:String,
        dateCreated:{type:Date,default:Date.now}

    },{collection:"assignment.page"});
    return PageSchema;
};