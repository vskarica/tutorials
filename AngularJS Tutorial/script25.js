var application =angular.module("mainApp",[]);

application.provider("date", function(){
    return {    //returnes provider of value
        $get:function(){
            return{ //returnes injector of value
                showDate:function(){    
                    var date = new Date();
                    return date.getHours();   //returnes showDate value
                }
            }
        }
    }
});

application.controller('app',function($scope, date){
    $scope.greetMessage=date.showDate();
});


//document.getElementById("naslov").append= " - "+$scope.randomNumber;
//alert(num);