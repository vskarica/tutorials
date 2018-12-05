var app =angular.module("mainApp",[]);

app.directive('myFirstDirective',function(){
    function linkFunction(scope,elem,attrs){
        // elem.bind('click',function(){
        //     //alert(elem[0].innerHTML);
        //     elem[0].innerHTML="Clicked!!";
        // })
        scope.name="Hello World!!";
        scope.changeName=function(newName){
            scope.name=scope.controllerProperiy;
        }
    }
    return {
        restrict:"EA",
        scope:{},
        link:linkFunction,
        template:"<span ng-click='changeName()'>Curent text: {{name}}</span>"
    };
    //scope:
    //false(svi se ponašaju kao klonovi),
    //true(svaki ima svoju instancu $scope ali i pristup višoj instanci),
    //{}(svaki ima svoju instancu $scope bez pristupa višoj instanci)
})
//restrict: bez(možeš čak koristiti kao tag), "E"(samo element), "A"(samo atribut) "EA"(samo tag)
app.controller('app',function($scope){
    $scope.controllerProperiy ="This is controller specific propertie.";
});