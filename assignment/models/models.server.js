/*
 /!**
 * Created by Rishab on 11/23/2016.
 *!/
 module.exports = function(){

 var models = {
 userModel : require ("./user/user.model.server.js")(),
 websiteModel : require ("./website/website.model.server.js")(),
 pageModel: require("./page/page.model.server.js")(),
 widgetModel: require("./widget/widget.model.server.js")()
 };
 return models;
 };*/
module.exports=function () {
    var models={
        userModel:require("./user/user.model.server")(),
        websiteModel:require("./website/website.model.server")(),
        pageModel:require("./page/page.model.server")(),
        widgetModel:require("./widget/widget.model.server")()
        //TODO:add all the other models:websteModel,pageModel...
    };


    return models;
};