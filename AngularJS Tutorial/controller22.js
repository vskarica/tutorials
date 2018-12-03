var app =angular.module("mainApp",[]);

app.controller('app',function($scope){
    $scope.myRandomNumber=Math.random();
    document.querySelector("input").addEventListener("click",function(){
        console.log("kliknut botun");
        $scope.myRandomNumber=Math.random();
        $scope.$digest();   //tjeraangularda probavi dodjele u ovoj funkciji tj. tretira ove varijable kao angularoc $scopeiako nisu.
    }, false);
})