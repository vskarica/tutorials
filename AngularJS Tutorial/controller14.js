var app =angular.module("mainApp",['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "login14.html"
    })
    .when("/dashboard",{
        templateUrl: "dashboard14.html"
    })
    .otherwise({
        redirectTo: "/"
    })
});

app.controller('loginCtrl',function($scope, $location){
    $scope.submit=function(){
        var user = $scope.username;
        var pass = $scope.password;
        alert(1)
        if($scope.username=="admin" && $scope.password=="admin"){
            $location.path=("/dashboard");
        }
    }
})