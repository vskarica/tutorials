var app =angular.module("mainApp",['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "login15.html"
    })
    .when("/dashboard",{
        resolve:{
            "chack":function($location,$rootScope){
                if(!$rootScope.logedIn){
                    $location.path("/");
                } else{
                    //templateUrl: "dashboard15.html";
                }
            }
        },
        templateUrl: "dashboard15.html"
        
    })
    .otherwise({
        template: "Adresa ne postoji."
        //redirectTo: "/"
    })
});

app.controller('loginCtrl',function($scope, $location, $rootScope){
    $scope.submit=function(){
        //$rootScope.username = $scope.username;
        //$rootScope.password = $scope.password;
        if($scope.username=="admin" && $scope.password=="admin"){
            //alert("/dashboard");
            $rootScope.logedIn=true;
            $location.path("/dashboard");
            //alert($scope.username +", "+ $scope.password);
            //document.getElementById("naslov").innerHTML=$scope.username +", "+ $scope.password;
        } else {
            alert("wrong!");
        }
    }
})