
var myapp=angular.module('myapp', []);

myapp.factory('myfactory',function(){
	
	

  	return {
  		mydata:"my name is mohit",
  		getdata:function()
  		{
  			data:[];
  			return this.mydata;
  		}

  	}
   

});