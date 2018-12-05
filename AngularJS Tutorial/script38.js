var app =angular.module("mainApp",[]);

app.directive('myFirstDirective',function(){
    return {
        template:"Go"
    };
})

app.controller('app',function($scope){
    
});