var application =angular.module("mainApp",[]);

application.service("fromService",function(){
    this.message="This is from Service.";
});

application.factory("fromFactory",function(){
    var factory={}
    factory.message="This is from Factory.";
    return factory;
});

application.provider("fromProvider",function(){
    //*
    this.mess="This is from Provider.";
    this.$get=function(){
        return {
            message: this.mess
        }
    }
    this.setAName=function(name){
        this.mess+=" "+name
    }
    //*/
    /*
    var mess="This is from Provider.";
    return{
        setAName:function(name){
            mess+=" "+name
        },
        $get:function(){
            return {
                message:mess
            }
        }
    }
    */
})

application.config(function(fromProviderProvider){
    fromProviderProvider.setAName("Vedran");
})


application.controller('app',function($scope,fromService, fromFactory,fromProvider){
    $scope.greetMessage=[fromService.message,fromFactory.message,fromProvider.message];
    var a
    a=function(){return 20}
    $scope.aa=a;
});


//document.getElementById("naslov").append= " - "+$scope.randomNumber;
//alert(num);