var app =angular.module("mainApp",[]);

app.filter('base',function(){
    var Xxx=function(input,base){
        var parsed=parseInt(input,10);
        var based=parseInt(base,10);
        if(isNaN(parsed) || isNaN(based) || based<=1 ||based>=37) return "Error: baza mora biti <2,26>, a sve moraju biti brojevi.";

        return parsed.toString(based);
    }
    return Xxx;
})

app.controller('app',function($scope){
    
});