var application =angular.module("mainApp",[]);

application.factory("random", function(){
    var num =Math.floor(Math.random()*10);
    var randomObject={};
    randomObject.generate =function(){
        return num;
    }
    return randomObject;
});

application.controller('app',function($scope, random){
    $scope.generateRandom=function(){
        $scope.randomNumber=random.generate();
    };
});


//document.getElementById("naslov").append= " - "+$scope.randomNumber;
//alert(num);