var app =angular.module("mainApp",['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "13.1.html"
        //template: "Wecome user!"
    })
    .when("/halouser",{
        templateUrl: "13.2.html"
        //template: "Wecome user!"
    })
    .when("/anotherPage",{
        template: "Wecome user to another page!!"
    })
    .when("/page3",{
        template: "Wecome user, to page 3!!"
    })
    .otherwise({
        template: "Wecome user, to otherwise!!!"
        //redirectTo: "/"
    })
    //alert($routeProvider);
})