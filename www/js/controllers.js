angular.module('squad.controllers', [])
.controller('MainController', function($scope, $route, $routeParams, $location) {
   $scope.$route = $route;
   $scope.$location = $location;
   $scope.$routeParams = $routeParams;
})

.controller('IndexController', ['$scope', function ($scope) {
    $scope.status = "It works!";
}])

.controller('GroupsController', ['$scope', function ($scope) {
    $scope.status = "It works!";
}])

.controller('GoalsController', ['$scope', function ($scope) {
    $scope.status = "It works!";
}])