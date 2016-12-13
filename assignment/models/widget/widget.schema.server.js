/*
/!**
 * Created by Rishab on 11/21/2016.
 *!/
module.exports = function () {
    var mongoose = require ("mongoose");
    
    var WidgetSchema = mongoose.Schema({
        order : Number ,
        _page: {type : mongoose.Schema.ObjectId , ref : "Page"},
        name : {type : String , required : true},
        type : {type : String , enum : ['HEADING','IMAGE','YOUTUBE','HTML','INPUT']},
        text:String,
        placeholder:String,
        description : String ,
        url : String,
        width: String ,
        height: String,
        rows: Number,
        size : Number,
        Class : String,
        icon : String,
        deletable : Boolean,
        formatted: Boolean,
        dateCreated : {type : Date,default: Date.now()}

    },{collection : "assignment.widget"});

return WidgetSchema;
};*/
module.exports=function () {
    var mongoose=require("mongoose")
    var WidgetSchema=mongoose.Schema({
        order:Number,
        _page:{type:mongoose.Schema.ObjectId,ref:"Page"},
        type:String,
        name:String,
        text:String,
        placeholder:String,
        description:String,
        url:String,
        width:String,
        height:String,
        rows:Number,
        size:Number,
        class:String,
        icon:String,
        deletetable:Boolean,
        formatted:Boolean,
        dateCreated:{type:Date,default:Date.now}
    },{collection:"assignment.widget"});
    return WidgetSchema;
};
