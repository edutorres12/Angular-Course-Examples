var myApp = angular.module('myApp', ['ngRoute']);
myApp.config( function ($routeProvider){
	
	$routeProvider 
	
	.when('/',{ 
		templateUrl: 'pages/main.html',
		controller:  'mainController'
	})
	.when('/second/:num',{
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
	.when('/second',{
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})	
});

myApp.service('nameService', function(){
	var self = this;
	this.name = 'John Doe';
	this.namelength= function(){
		return self.name.length;
	};
});

myApp.controller('mainController', ['$scope','$log','$location','nameService', function($scope,$log,$location,nameService) {
	$scope.name=nameService.name;  
	
	$scope.$watch('name', function(){
		nameService.name=$scope.name;
	});

	$log.log(nameService.name);
	$log.log(nameService.namelength());

}]);

myApp.controller('secondController', ['$scope','$location','$routeParams','nameService', function($scope,$location,$routeParams,nameService) {
    
	$scope.num = $routeParams.num || 1;
	$scope.name = nameService.name;
	
	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	});
}]);