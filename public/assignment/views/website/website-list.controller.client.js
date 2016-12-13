(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController",WebsiteListController)
    
     function WebsiteListController($routeParams,WebsiteService) {
        var vm=this;
         vm.id=$routeParams.uid;
         function init() {

             WebsiteService.findWebsitesByUser(vm.id)
                 .then(function (response) {
                     vm.websites=response.data;
                 })
         }
         init();
    }
})();
