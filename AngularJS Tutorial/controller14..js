var app =angular.module("mainApp",['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "login14..html"
    })
    .when("/dashboard",{
        templateUrl: "dashboard14..html"
    })
    .otherwise({
        template: "Adresa ne postoji."
        //redirectTo: "/"
    })
});

app.controller('loginCtrl',function($scope, $location){
    $scope.submit=function(){
        var user = $scope.username;
        var pass = $scope.password;
        if($scope.username=="admin" && $scope.password=="admin"){
            //alert("/dashboard");
            $location.path("/dashboard");
            //alert($scope.username +", "+ $scope.password);
            //document.getElementById("naslov").innerHTML=$scope.username +", "+ $scope.password;
        } else {
            alert("wrong!");
        }
    }
})