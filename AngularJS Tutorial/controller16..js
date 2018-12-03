var app =angular.module("mainApp",[]);

app.controller('people',function($scope, $http){
    $http.get("http://localhost/aa/AngularJS%20Tutorial/database16.json")
    .then(function(response){
        //document.getElementById("naslov").innerHTML=$scope.persons +", "+ response.records;
        $scope.persons=response.data["records"];
        //alert(response.data["records"][1].Name)
        //alert($scope.persons["records"][0].Name)
    })
})