var application =angular.module("mainApp",[]);

application.provider("date", function(){
    var greet;
    return {    //returnes provider of value
        setGreeting:function(value){
            greet=value;
        },
        $get:function(){
            return{ //returnes injector of value
                showDate:function(){    
                    var date = new Date();
                    return greet + " Sad je " + date.getHours() + "sati.";   //returnes showDate value (pozdrav i sat)
                },
                devShowDate:function(){    
                    var date = new Date();
                    return date.getHours();   //returnes devShowDate value (Sat)
                }
            }
        }
    }
});

application.config(function(dateProvider){
    //console.log(dateProvider.$get().showDate());
    var time=dateProvider.$get().devShowDate();
    if(time>0 && time<12){
        dateProvider.setGreeting("Dobro jutro!");
    } else if(time>=12 && time<17){
        dateProvider.setGreeting("Dobar dan!");
    } else if(time>=17 && time<19){
        dateProvider.setGreeting("Gobro večer!");
    } else if(time>=17 && time<19){
        dateProvider.setGreeting("Gobro večer!");
    } if(time>=19 && time<=0){
        dateProvider.setGreeting("Što još radiš budan/na?!");
    }
});

application.controller('app',function($scope, date){
    $scope.greetMessage=date.showDate();
});


//document.getElementById("naslov").append= " - "+$scope.randomNumber;
//alert(num);