var app =angular.module("mainApp",[]);

app.directive('myFirstDirective',function(){
    function linkFunction(scope,elem,attrs){
        // elem.bind('click',function(){
        //     //alert(elem[0].innerHTML);
        //     elem[0].innerHTML="Clicked!!";
        // })
        scope.name="Hello World!!";
        scope.changeName=function(newName){
            scope.name=newName;
        }
    }
    return {
        restrict:"EA",
        link:linkFunction,
        template:"<span ng-click='changeName(\"Oj!!\")'>Curent text: {{name}}</span>"
    };
})
//restrict: bez(možeš čak koristiti kao tag), "E"(samo element), "A"(samo atribut) "EA"(samo tag)
app.controller('app',function($scope){
    
});