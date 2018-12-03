var appX =angular.module("mainApp",[]);
appX.controller('app',function($scope){
    $scope.tasks=[];

    var taskData=localStorage["taskList"];
    if(taskData!==undefined){
        $scope.tasks=JSON.parse(taskData);
        console.log($scope.tasks);
    }else{
        console.log("not defined")
    }

    $scope.searchEnter=function(){
        if(event.which==13 && $scope.task!=""){
            $scope.addTask();
        };
    };

    $scope.addTask=function(){
        $scope.tasks.push({
            "task":$scope.task,
            "status":false
        });
        $scope.task="";
        localStorage["taskList"]=JSON.stringify($scope.tasks);
    };
    $scope.contentEdit=function(tekst){
        event.target.contentEditable=event.target.contentEditable=="false"?"true":"false";
        //event.target.contentEditable="true";
        //console.log($scope.tasks.);
        for(i=0;i<$scope.tasks.length;i++){
            if($scope.tasks[i].task==tekst){
                $scope.tasks[i].task=event.target.innerText;
            }
        }
        localStorage["taskList"]=JSON.stringify($scope.tasks);
    };

    $scope.reenter=function(tekst){
        if(event.which==13 && tekst!=""){
            //event.target.contentEditable="false";
            $scope.contentEdit(tekst);
        };
    };

});