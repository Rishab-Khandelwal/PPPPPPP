/**
 * Created by Rishab on 10/6/2016.
 */

angular.module('WebAppMaker',['ngRoute'])
        .config(Config);
function Config($routeProvider) {
    $routeProvider
        .when('/login',{
        templateUrl: 'login.html'
    })
        .when('/register',{
        templateUrl: 'register.html'
    });
}