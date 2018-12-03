var app =angular.module("mainApp",[]);

app.controller('app',function($scope){
    $scope.counter=0;
    $scope.$watch("myText",function(newValue, oldValue){
        //document.getElementById("naslov").innerHTML= oldValue +", "+ newValue;
        //console.log("old "+oldValue);
        //console.log("new "+newValue);
        $scope.counter++;
    })
})