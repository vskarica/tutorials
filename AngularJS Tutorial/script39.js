var app =angular.module("mainApp",[]);

app.directive('myFirstDirective',function(){
    return {
        templateUrl:"39.1.html",
        restrict:"A"
    };
})
//restrict: bez(možeš čak koristiti kao tag), "E"(samo element), "A"(samo atribut) "EA"(samo tag)
app.controller('app',function($scope){
    
});