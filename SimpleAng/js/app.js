var app=angular.module("expensesApp",[]);

app.controller("ExpensesViewController",[$scope, function($scope){
    $scope.name="Vedran";
    $scope.expense={
        description:"food",
        amount:10
    };

    $scope.phrase="sky id blue";
}])