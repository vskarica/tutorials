var application =angular.module("mainApp",[]);

application.service("random", function(){   //singleton
    var num =Math.floor(Math.random()*10);
    //alert(num);
    this.generate =function(){
        return num;
    }
});

application.controller('app',function($scope, random){
    $scope.generateRandom=function(){
        $scope.randomNumber=random.generate();
        //document.getElementById("naslov").append= " - "+$scope.randomNumber;
    };
});