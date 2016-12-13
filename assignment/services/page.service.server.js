/*
module.exports=function (app,models) {
    
    var pageModel = models.pageModel;
    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
    ];

    app.get("/api/website/:websiteId/page",findAllPagesForWebsite);
    app.post("/api/website/:websiteId/page",createPage);
    app.get("/api/page/:pageId",findPageById);
    app.put("/api/page/:pageId",updatePage);
    app.delete("/api/page/:pageId",deletePage);
    


    function deletePage(req,res) {
        
        var id = req.params.pageId;
        pageModel
            .deletePage(id)
            .then(
                function(stats){
                    console.log(stats);
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400);
                }
            );
        /!*var pageId=req.params.pageId;
        for(var i in pages){
            if(pages[i]._id===pageId){
                pages.splice(i,1);
                res.send(true);
                return;
            }
        }
        res.send(false);
        return;*!/
    }




   function findAllPagesForWebsite(req,res) {
       var websiteId = req.params.websiteId;
       pageModel
           .findAllPagesForWebsite(websiteId)
           .then(
               function(pages){
                   console.log(pages);
                   res.json(pages);
               },
               function(error){
                   res.sendStatus(400);
               }
           );


       /!*var websiteId=req.params.websiteId;
       var resultset=[];
       for(var i in pages){
           if(pages[i].websiteId===websiteId){
               resultset.push(pages[i]);
           }
       }
       res.send(resultset);
       return;*!/
   }



    function createPage(req,res) {
        var page = req.body;
        pageModel
            .createPage(page)
            .then(
                function(page){
                    console.log(page);
                    res.json(page);
                },
                function(error){
                    res.sendStatus(400);
                }
            );

        /!*var newPage=req.body;
        pages.push(newPage);
        res.send(newPage);
        return;*!/
    }



    function findPageById(req,res) {

        var id = req.params.pageId;
        pageModel
            .findPageById(id)
            .then(
                function(page){
                    console.log(page);
                    res.json(page);
                },
                function(error)
                {
                    res.sendStatus(400);
                }
            )
    }
        /!*var pageId=req.params.pageId;
        for(var i in pages){
            if(pages[i]._id===pageId){
                res.send(pages[i]);
                return;
            }
        }
        res.send(null);
        return;*!/

    


    function updatePage(req,res) {
        var id = req.params.pageId;
        var newPage = req.body;
        pageModel
            .updatePage(id, newPage)
            .then(
                function(newPage){
                    console.log(newPage);
                    res.json(newPage);
                },
                function(error){
                    res.sendStatus(400);
                }
            );
        /!*var page=req.body;
        for(var i in pages){
            if(pages[i]._id===page._id){
                pages[i].name=page.name;
                pages[i].title=page.title;
                res.send(true);
                return;
            }
        }
        res.send(false);
        return;*!/
    }
};

*/
module.exports=function (app,models) {
    var pageModel=models.pageModel;
   /* var pages=[
        { "_id": "321", "name": "Post 1", "websiteId": "456", "title":"sanam" },
        { "_id": "432", "name": "Post 2", "websiteId": "456" },
        { "_id": "543", "name": "Post 3", "websiteId": "456" }
    ]*/

    app.get("/api/website/:websiteId/page",findAllPagesForWebsite);
    app.post("/api/website/:websiteId/page",createPage);
    app.get("/api/page/:pageId",findPageById);
    app.put("/api/page/:pageId",updatePage);
    app.delete("/api/page/:pageId",deletePage);


    function deletePage(req,res) {
        var pageId=req.params.pageId;
        // for(var i in pages){
        //     if(pages[i]._id===pageId){
        //         pages.splice(i,1);
        //         res.send(true);
        //         return;
        //     }
        // }
        // res.send(false);
        // return;

        pageModel
            .deletePage(pageId)
            .then(function () {
                res.send(200);
            },function (error) {
                res.statusCode(404).send(error);
            })

    }


    function findAllPagesForWebsite(req,res) {
        var websiteId=req.params.websiteId;
        // var resultset=[];
        // for(var i in pages){
        //     if(pages[i].websiteId===websiteId){
        //         resultset.push(pages[i]);
        //     }
        // }
        // res.send(resultset);
        // return;

        pageModel
            .findAllPagesForWebsite(websiteId)
            .then(function (pages) {
                res.json(pages);
            },function (error) {
                res.statusCode(404).send(error);
            })

    }

    function createPage(req,res) {
        var newPage=req.body;
        // pages.push(newPage);
        // res.send(newPage);
        // return;

        pageModel
            .createPage(newPage)
            .then(function (status) {
                res.send(200);
            },function (error) {
                res.statusCode(404).send(error);
            })

    }

    function findPageById(req,res) {
        var pageId=req.params.pageId;
        // for(var i in pages){
        //     if(pages[i]._id===pageId){
        //         res.send(pages[i]);
        //         return;
        //     }
        // }
        // res.send(null);
        // return;

        pageModel
            .findPageById(pageId)
            .then(function (page) {
                res.json(page);
            },function (error) {
                res.statusCode(404).send(error);
            })

    }

    function updatePage(req,res) {
        var page=req.body;
        var pageId=req.params.pageId;
        // console.log("service")
        // console.log(page);
        // for(var i in pages){
        //     if(pages[i]._id===page._id){
        //         pages[i].name=page.name;
        //         pages[i].title=page.title;
        //         res.send(true);
        //         return;
        //     }
        // }
        // res.send(false);
        // return;

        pageModel
            .updatePage(page,pageId)
            .then(function (status) {
                res.send(200);
            },function (error) {
                res.statusCode(404).send(error);
            })
    }
};