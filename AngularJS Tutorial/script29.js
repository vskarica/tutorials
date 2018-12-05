var appX =angular.module("mainApp",[]);

appX.controller('app',function($scope){
    $scope.tasks=[];

    var taskData=localStorage["taskList"];
    if(taskData!==undefined){
        $scope.tasks=JSON.parse(taskData);
        console.log($scope.tasks);
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
        //localStorage["taskList"]=JSON.stringify($scope.tasks);
        $scope.saveData();
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
        //localStorage["taskList"]=JSON.stringify($scope.tasks);
        $scope.saveData();
    };

    $scope.reenter=function(tekst){
        if(event.which==13){
            event.preventDefault();
            if(event.target.innerText!=""){
                console.log("enter");
                $scope.contentEdit(tekst);
            }else{
                console.log("enter+razmak");
                event.target.contentEditable="false";
                $scope.delItem(tekst);
            }
        };
    };
 
    $scope.saveData =function(){
        localStorage["taskList"]=JSON.stringify($scope.tasks);
    }

    $scope.delAll=function(){
        //localStorage["taskList"].
        //console.log(localStorage)
        if (confirm('Želite SVE izbrisati?')) {
            $scope.tasks=[];
            localStorage.removeItem("taskList");
        }
        $scope.tasks=[];
        localStorage.removeItem("taskList");
    }

    $scope.delItem=function(task){
        //$scope.tasks.removeItem(task);
        //$scope.tasks = $scope.tasks.slice(3,4);
        for(i=0;i<$scope.tasks.length;i++){
            if($scope.tasks[i].task==task){
                if (confirm(task+' izbrisati?')) {
                    $scope.tasks.splice(i,1);
                    $scope.saveData();
                    location.reload();
                    
                }
                //alert($scope.tasks[i].task+" = "+task)
                //console.log($scope.tasks);
            }
        }
    }


});