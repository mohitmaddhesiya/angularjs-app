var my=angular.module('my', ['directives','myapp']);
my.controller('bodController',function ($scope,$http,myfactory){
    $http.get("name.json")
    .success(function(response) {$scope.label = response;});
    //$scope.arr=[{roleid:'',shortDescription:'',description:'',Activation:'',Deactivation:''}] 
 /*$scope.sub=function(){
 	console.log(typeof($scope.arr));
	   $scope.arr.push(
	   	{
	   		"roleid":$scope.roleid,
	   		"shortDescription":$scope.shortDescription,
	   		"description":$scope.description,
	   		"Activation":$scope.Activation,
	   		"Deactivation":$scope.Deactivation
	  }
	  );
        console.log(JSON.stringify($scope.arr));
  console.log(myfactory.getdata());
myfactory.getdata.data=$scope.arr;
   console.log(JSON.stringify(myfactory.getdata.data));

};
    $scope.reset = function() {
    $scope.arr=[{roleid:''}];   
    };*/
    $scope.arr={};
    $scope.submit=function()
    {
      arr={
      	"roleid":$scope.roleid,
        "shortDescription":$scope.shortDescription,
        "description":$scope.description,
        "Activation":$scope.Activation,
        "Deactivation":$scope.Deactivation

        };
        console.log(arr);
    }
    
      
	
});
