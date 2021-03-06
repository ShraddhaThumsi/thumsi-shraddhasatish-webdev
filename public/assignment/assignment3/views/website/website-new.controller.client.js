/**
 * Created by shraddha on 10/18/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("newWebsiteController", newWebsiteController);

    function newWebsiteController($location, $routeParams, WebsiteService)
    {
        var vm = this;
        var userId = $routeParams['uid'];
        vm.userId = userId;
        var websiteId = $routeParams['wid'];
        vm.websiteId = websiteId;
        var websites = WebsiteService.findWebsitesByUser(userId);
        vm.websites = websites;
        vm.createWebsite = createWebsite;
        function createWebsite(name, description){

            var website = {name: name, uid: userId, description: description};
            var promise = WebsiteService.createWebsite(userId, website);
            promise
                .success(function website(website){

                        $location.url("/user/" + vm.userId+"/website");

                })
                .error(function(aaa){
                    console.log(aaa);
                });

        }

        vm.goToPageList = goToPageList;
        function goToPageList(website)
        {

            $location.url("/user/" + userId.toString() + "/website/" + website._id.toString() + "/page");
        }


        function init(){
            var promise = WebsiteService.findWebsitesByUser(userId);
            promise
                .success(function website(user){
                    if(user.websites)
                    {

                        vm.websites = user.websites;
                        console.log(user.websites);
                    }

                })
                .error(function errorHandler(aaa){
                    console.log(aaa);
                });

        }
        init();
    }
})();
