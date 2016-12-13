/*
/!*
module.exports = function(){

    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server.js");
    var Website = mongoose.model("Website" , WebsiteSchema);

    var api = {
        findAllWebsitesForUser : findAllWebsitesForUser,
        findWebsiteById :findWebsiteById,
        createWebsite : createWebsite,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite
    };
    return api;

    function deleteWebsite(websiteId){
        return Website.remove({_id : websiteId});
    }

    function updateWebsite(websiteId, newWebsite)
    {
        delete newWebsite._id;
        return Website
            .update({_id: websiteId},{
                $set : newWebsite
            });
    }

    function createWebsite(website){
        website._user = website.developerId;
        return Website.create(website);
    }
    function findWebsiteById(websiteId){
        return Website.findById(websiteId);
    }

    function findAllWebsitesForUser(userId){
        return Website.find({"_user": userId});
    } 

}*!/
module.exports=function () {

    var mongoose=require("mongoose");
    var WebsiteSchema=require("./website.schema.server.js")();
    var Website=mongoose.model("Website",WebsiteSchema);
    var api={
        findAllWebsitesForUser:findAllWebsitesForUser,
        createWebsite:createWebsite,
        findWebsiteById:findWebsiteById,
        updateWebsite:updateWebsite,
        deleteWebsite:deleteWebsite
    };
    return api;

    function findAllWebsitesForUser(userId) {
        return Website.find({"_user":userId});
    }

    function createWebsite(userId,website) {
        return Website.create(website);
    }

    function findWebsiteById(websiteId) {
        return Website.findById(websiteId);
    }

    function updateWebsite(id,website) {
        return Website
            .update({_id:id},{$set:{
                name:website.name,
                description:website.description
            }})
    }

    function deleteWebsite(id) {
        return Website.remove({_id:id});
    }
}*/
module.exports=function () {

    var mongoose=require("mongoose");
    var WebsiteSchema=require("./website.schema.server.js")();
    var Website=mongoose.model("Website",WebsiteSchema);
    var api={
        findAllWebsitesForUser:findAllWebsitesForUser,
        createWebsite:createWebsite,
        findWebsiteById:findWebsiteById,
        updateWebsite:updateWebsite,
        deleteWebsite:deleteWebsite
    };
    return api;

    function findAllWebsitesForUser(userId) {
        return Website.find({"_user":userId});
    }

    function createWebsite(userId,website) {
        return Website.create(website);
    }

    function findWebsiteById(websiteId) {
        return Website.findById(websiteId);
    }

    function updateWebsite(id,website) {
        return Website
            .update({_id:id},{$set:{
                name:website.name,
                description:website.description
            }})
    }

    function deleteWebsite(id) {
        return Website.remove({_id:id});
    }
}
