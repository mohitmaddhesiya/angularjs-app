var myApp=angular.module('myApp', ['directives']);
myApp.controller('bodyController',function ($scope,$http){
    $http.get("name.json")
    .success(function(response) {$scope.n = response;});
	$scope.n="mohit";
       $scope.viewdata=function(){
		$scope.names=[{firstname:'',lastname:'',email:'',username:'',password:''}];
       $scope.names.push({firstname:$scope.firstname,
       	lastname:$scope.lastname,
       	email:$scope.email,
       	username:$scope.username,
       	password:$scope.password});
       console.log(JSON.stringify($scope.names));
	};
	
});
