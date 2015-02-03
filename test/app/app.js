var app=angular.module('directives', []);
app.directive('test',function()
{
	return{
		restrict:'EA',
		templateUrl:'test.html'
	};
});