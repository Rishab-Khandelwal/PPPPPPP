/*
/!**
 * Created by Rishab on 11/21/2016.
 *!/
module.exports = function(){
    
    var mongoose = require("mongoose");
    var PageSchema = require ("./page.schema.server.js")();
    var Page = mongoose.model("Page" , PageSchema);
    
    var api = {
        createpage : createPage,
        deletePage : deletePage,
        updatePage: updatePage,
        findPageById : findPageById,
        findAllPagesForWebsite : findAllPagesForWebsite
    };
    
    return api;
    
    function findAllPagesForWebsite(widgetId)
    {
        return Page.find({"_website" : widgetId});
    }
    function findPageById(pageId){
        return Page.findById(pageId);
    }

    function createPage(page){
        page._website = page.websiteId;
        return Page.create(page);
    }

    function deletePage(pageId){
        return Page.remove({_id: pageId});
    }

    function updatePage(pageId , newPage){
        delete newPage._id;
        return Page
            .update({_id: pageId},{
                $set: newPage
            });
    }
};*/
module.exports=function () {
    var mongoose=require("mongoose")
    var PageSchema=require("./page.schema.server.js")();
    var Page=mongoose.model("Page",PageSchema);

    var api={
        createPage:createPage,
        findAllPagesForWebsite:findAllPagesForWebsite,
        findPageById:findPageById,
        updatePage:updatePage,
        deletePage:deletePage
    }
    return api;

    function createPage(page) {
        return Page.create(page);
    }
    function findAllPagesForWebsite(websiteId){
        return Page.find({_website:websiteId});
    }

    function findPageById(id){
        return Page.findById(id);
    }
    function updatePage(page,id){
        return Page
            .update({_id:id},{
                $set:{
                    name:page.name,
                    title:page.title
                }
            })
    }
    function deletePage(id){
        return Page.remove({_id:id});
    }

};