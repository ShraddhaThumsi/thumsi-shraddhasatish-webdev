/**
 * Created by shraddha on 10/16/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);
    function ProfileController($routeParams, UserService) {
        var vm = this;
        var userId = parseInt($routeParams.uid);
        var user = UserService.findUserById(userId);
        if(user != null){
            vm.user = user;
            console.log("found user");
        }

        var updatedUser = UserService.updateUser(userId, vm.user);
        vm.updatedUser = updatedUser;

    }
})();