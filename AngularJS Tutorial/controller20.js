var app =angular.module("mainApp",[]);

app.controller('app',function($scope){
    var range=10;
    var myRange=[];
    for(i=0;i<range;i++){
        myRange.push(i);
    }
    $scope.myRange=myRange;

    var rangee = new Array(100);
    $scope.rangee=rangee;
})