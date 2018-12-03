alert(1);
var appX =angular.module("mainApp",[]);

appX.controller('app',function($scope){
    $scope.show='msg2';
    $scope.toggle=function(){
        $scope.show=$scope.show=="msg1"?"msg2":"msg1"
    }
});


//document.getElementById("naslov").append= " - "+$scope.randomNumber;
//alert(num);