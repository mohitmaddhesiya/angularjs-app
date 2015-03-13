var demoModule = angular.module('demoModule', []);
demoModule.factory('mySharedService', function($rootScope) {
    var sharedService = {};

    sharedService.sharedmessage  = '';

    sharedService.prepForPublish = function(msg) {
        this.sharedmessage  = msg;
        this.publishItem();
    };

    sharedService.publishItem = function() {
        $rootScope.$broadcast('handlePublish');
    };

    return sharedService;
});

function FirstController($scope, sharedService) {
    $scope.publishClick = function(msg) {
        sharedService.prepForPublish(msg);
    };

    $scope.$on('handlePublish', function() {
        $scope.sharedmessage  = sharedService.sharedmessage ;
    });
}

function SecondController($scope, sharedService) {
    $scope.$on('handlePublish', function() {
        $scope.sharedmessage  = 'SecondController : ' + sharedService.sharedmessage ;
    });
}

function ThirdController($scope, sharedService) {
    $scope.$on('handlePublish', function() {
        $scope.sharedmessage  = 'ThirdController: ' + sharedService.sharedmessage ;
    });
}

FirstController.$inject = ['$scope', mySharedService];

SecondController.$inject = ['$scope', mySharedService];

ThirdController.$inject = ['$scope', mySharedService];