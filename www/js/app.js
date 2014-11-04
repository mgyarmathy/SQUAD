angular.module('squad',['ngRoute', 'squad.services', 'squad.controllers'])

.config(function ($routeProvider) {
   $routeProvider
   .when('/', {
      templateUrl: 'views/groups.html',
      controller: 'IndexController'
   })
   .when('/group', {
      templateUrl: 'views/group.html',
      controller: 'GroupsController'
   })
   .when('/goals', {
      templateUrl: 'views/goals.html',
      controller: 'GoalsController'
   })
   .when('/message-sent', {
      templateUrl: 'views/message-sent.html',
   })
   .otherwise({
      redirectTo: '/'
   });
});
