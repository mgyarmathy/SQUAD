angular.module('squad',['ngRoute', 'ngAnimate', 'squad.services'])

.config(function ($routeProvider) {
   $routeProvider
   .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
   })
   .when('/user/:id', {
      templateUrl: 'views/user.html',
      controller: 'UserController'
   })
   .when('/group/:id', {
      templateUrl: 'views/group.html',
      controller: 'GroupController'
   })
   .when('/add-group', {
      templateUrl: 'views/add-group.html',
      controller: 'AddGroupController'
   })
   .when('/create-goal', {
      templateUrl: 'views/create-goal.html',
      controller: 'CreateGoalController'
   })
   .when('/message-sent/:id', {
      templateUrl: 'views/message-sent.html',
      controller: 'MessageSentController'
   })
   .otherwise({
      redirectTo: '/home'
   });
})

.controller('MainController', function($scope, $route, $routeParams, $location, $window) {
   $scope.$route = $route;
   $scope.$location = $location;
   $scope.$routeParams = $routeParams;

   $scope.users = [
      new User(0, "Michael Gyarmathy", [], '\"I think Michael is a pretty cool guy. Eh writes cdoe and doesnt afraid of anything.\"', 'https://avatars1.githubusercontent.com/u/2754894'),
      new User(1, "Karan Khatter", [1,3], '\"If one day we all go to jail for music piracy, I hope they at least put us in cells based on genres\"', 'https://scontent-b.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10446644_10152989266383327_3424050918188996001_n.jpg?oh=dc3acee03818adfdc0ec7c6e9c933477&oe=551C79F9'),
      new User(2, "Daniel He", [1,4], '\"Nothing to see here. Move along!\"', 'http://i.imgur.com/9gR1kEL.jpg'),
      new User(3, "Corey Hall", [1], '\"Zzz... ZzzZzzz..\"', 'https://scontent-a.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/295420_4331543888096_971527699_n.jpg?oh=531031113f2281801395b45920a874f8&oe=550105AB'),
      new User(4, "Jorge Stevens", [2], '\"Certified food scholar. Travel aficionado. Coffee geek. Bacon lover. Infuriatingly humble beer expert. Professional web fanatic. Devoted alcohol enthusiast.\"', 'http://api.randomuser.me/portraits/med/men/51.jpg'),
      new User(5, "Jon Perkins", [0,3], '\"Total food junkie. Incurable music fan. Avid internet fanatic. Wannabe beer nerd.\"', 'http://api.randomuser.me/portraits/med/men/13.jpg'),
      new User(6, "Claire Walker", [4,6,8], '\"Infuriatingly humble reader. Hardcore gamer. Total tv ninja. Wannabe writer. Twitter scholar. Web junkie.\"', 'http://api.randomuser.me/portraits/med/women/52.jpg'),
      new User(7, "Vickie Barrett", [2,3,6,9], '\"Internet advocate. Total travel buff. Food evangelist. Bacon geek. Problem solver. Entrepreneur.\"', 'http://api.randomuser.me/portraits/med/women/40.jpg'),
      new User(8, "Allen Spencer", [1,3], '\"Thinker. Bacon practitioner. Avid troublemaker. General music enthusiast. Zombieaholic.\"', 'http://api.randomuser.me/portraits/med/men/87.jpg'),
      new User(9, "Hailey Nichols", [0, 7], '\"Food practitioner. Organizer. Music lover. Devoted web fanatic. Twitter fanatic. Hipster-friendly explorer. Thinker\"', 'http://api.randomuser.me/portraits/med/women/95.jpg'),
      new User(10, "Marion Snyder", [2,4], '\"Bacon fanatic. Social media advocate. Typical beer guru. Web scholar. Passionate reader.\"', 'http://api.randomuser.me/portraits/med/women/38.jpg'),
      new User(11, "Reginald Shaw", [1], '\"Hardcore alcohol guru. Proud tv ninja. Friend of animals everywhere. Friendly internet fanatic. Food aficionado. Evil problem solver.\"', 'http://api.randomuser.me/portraits/med/men/4.jpg'),
      new User(12, "Cameron Carlson", [0,4], '\"Explorer. General baconaholic. Friendly organizer. Web buff. Coffee fanatic. Twitter lover.\"', 'http://api.randomuser.me/portraits/med/men/45.jpg'),
      new User(13, "Gilbert Fields", [3,4], '\"Creator. Pop culture geek. Passionate thinker. Analyst. Bacon aficionado. Extreme coffee lover.\"', 'http://api.randomuser.me/portraits/med/men/9.jpg'),
      new User(14, "Vivian Sanchez", [3,6], '\"Travel lover. Music trailblazer. Wannabe bacon guru. Entrepreneur. Coffee scholar.\"', 'http://api.randomuser.me/portraits/med/women/50.jpg'),
      new User(15, "Daryl Bates", [4,5,7], '\"Internet fanatic. Web junkie. Incurable tv ninja. Bacon specialist. Zombie expert.\"', 'http://api.randomuser.me/portraits/med/men/65.jpg'),
      new User(16, "Clayton Howard", [1, 3], '\"Total coffee junkie. Professional twitter fan. Writer. Typical tv guru. Evil problem solver.\"', 'http://api.randomuser.me/portraits/med/men/11.jpg'),
      new User(17, "Sylvia Daniels", [2,4], '\"Certified pop culture scholar. Professional alcohol fan. Subtly charming zombie fanatic. Extreme web aficionado. Passionate internet nerd.\"', 'http://api.randomuser.me/portraits/med/women/8.jpg'),
      new User(18, "Dana Ferguson", [3,4], '\"Typical coffee evangelist. Amateur organizer. Hardcore troublemaker. Internet ninja.\"', 'http://api.randomuser.me/portraits/med/women/10.jpg'),
      new User(19, "Jesus Porter", [3,6], '\"Entrepreneur. Wannabe social media guru. Internet practitioner. Gamer. Troublemaker.\"', 'http://api.randomuser.me/portraits/med/men/42.jpg')
   ];

   $scope.groups = [
      new Group(0, 'Alcoholics Anonymous', 'users', '#FF5722', 'Alcoholics Anonymous is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from alcoholism.'),
      new Group(1, 'GriefShare', 'anchor', '#009688', 'GriefShare is a grief recovery support group where you can find help and healing for the hurt of losing a loved one.'),
      new Group(2, 'Debtors Anonymous', 'line-chart', '#03A9F4', 'Debtors Anonymous is a free debt recovery program to help compulsive debtors stop overspending, avoid unsecured debt, and become solvent.'),
      new Group(3, 'Dual Recovery Anonymous', 'medkit', '#3F51B5', 'Support for those who have both a mental health and alcohol/substance abuse condition.'),
      new Group(4, 'PTSD Sufferers', 'bullseye', '#8BC34A', 'A group aimed at helping veterans and people alike who went through traumatic experiences.'),
      new Group(5, 'OASIS', 'plus-circle', '#00BCD4', 'Autism and Asperger Syndrome support group information for both individuals and their family/friends.'),
      new Group(6, 'Gamblers Anonymous', 'usd', '#673AB7', 'Gamblers Anonymous is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from a gambling problem.'),
      new Group(7, 'The Literal Heart of Jesus', 'heart-o', '#F44336', 'Lord Jesus Christ, we are gathered here in Your heart, literally in Your heart, as cancer survivors.'),
      new Group(8, 'Alzheimer\'s Care', 'lightbulb-o', '#E91E63', 'The Alzheimer’s Association works on a global, national and local level to enhance care and support for all those affected by Alzheimer’s and other dementias.'),
      new Group(9, 'Overeaters Anonymous', 'star', '#FF9800', 'Overeaters Anonymous offers a program of recovery from compulsive overeating, binge eating and other eating disorders'),
   ];

   $scope.myGroups = function() {
      var result = [];
      $.each($scope.groups, function(index, group) {
         if (group.added == true) result.push(group);
      });
      return result;
   }

   $scope.myGoals = [];

   
})

.controller('HomeController', ['$scope', function ($scope) {
   $scope.groups = $scope.$parent.myGroups();
   $scope.goals = $scope.$parent.myGoals;
}])

.controller('AddGroupController', ['$scope', function ($scope) {
   $scope.groups = $scope.$parent.groups;
}])

.controller('UserController', ['$scope', '$routeParams', function ($scope, $routeParams) {
   $scope.user = $scope.$parent.users[$routeParams.id];

   $scope.userGroups = function() {
      var result = [];
      $.each($scope.user.groups, function(index, id) {
         result.push($scope.$parent.groups[id]);
      });
      return result;
   }
}])

.controller('GroupController', ['$scope', '$timeout', '$routeParams', function ($scope, $timeout, $routeParams) {
   $scope.group = $scope.$parent.groups[$routeParams.id];

   $scope.addGroup = function() {
      var fn = function() { $scope.group.added = true };
      $timeout(fn, 750);
   };

   $scope.members = function() {
      var result = [];
      $.each($scope.$parent.users, function(i, user) {
         
         $.each(user.groups, function(j, group_id) {
            if(group_id == $scope.group.id) result.push(user);
         });
      });
      return result;
   };

   $scope.message = "";

   $scope.sendMessage = function() {
      $.get('/message/'+escape($scope.message), function(result) {
         console.log(result);
      });
   };
}])

.controller('MessageSentController', ['$scope', '$routeParams', function ($scope, $routeParams) {
   $scope.group = $scope.$parent.groups[$routeParams.id];
}])

.controller('CreateGoalController', ['$scope', function ($scope) {
   $scope.X = "";
   $scope.forY = 10;
   $scope.Zs = "";

   $scope.createGoal = function() {
      var title = $scope.X+" for " + $scope.forY + " " + $scope.Zs + "s";
      var progress = [];
      var unit = $scope.Zs.charAt(0).toUpperCase() + $scope.Zs.slice(1);
      for(var i = 0; i < $scope.forY; i++) {
         progress.push({val: false});
      }
      $scope.$parent.myGoals.push(new Goal(title, progress, unit));
   };
}])

;

// Material colors palette
// $red: #F44336 !default;
// $pink: #E91E63 !default;
// $purple: #9C27B0 !default;
// $deeppurple: #673AB7 !default;
// $indigo: #3F51B5 !default;
// $lightblue: #03A9F4 !default;
// $cyan: #00BCD4 !default;
// $teal: #009688 !default;
// $lightgreen: #8BC34A !default;
// $lime: #CDDC39 !default;
// $lightyellow: #FFEB3B !default;
// $orange: #FF9800 !default;
// $deeporange: #FF5722 !default;
// $grey: #9E9E9E !default;
// $bluegrey: #607D8B !default;
// $brown: #795548 !default;
// $lightgrey: #ECECEC !default;

// Bootstrap shades
// $primary: #4285F4 !default;
// $success: #0F9D58 !default;
// $info: $lightblue !default;
// $warning: $deeporange !default;
// $danger: $red !default;

var User = function(id, name, groups, bio, avatar) {
   var self = this;
   self.id = id;
   self.name = name;
   self.groups = groups;
   self.bio = bio;
   self.avatar = avatar;
}

var Group = function(id, name, icon, color, description) {
   var self = this;
   self.id = id;
   self.name = name;
   self.description = description;
   self.icon = icon;
   self.color = color;
   self.added = false;
   self.resources = [];

   if (name == "Alcoholics Anonymous") {
      self.resources = [
            {name:'AA Daily Reflections', url:'http://www.aa.org/pages/en_US/daily-reflection'},
            {name:'12 Steps of AA', url:'http://www.aa.org/assets/en_US/smf-121_en.pdf'},
            {name:'AA Recovery Slogans', url:'http://www.bluidkiti.com/recoveryslogans.html'}
         ]
   } else if (name == "GriefShare") {
      self.resources = [
            {name:'Coping With Grief and Loss', url:'http://www.aa.org/pages/en_US/daily-reflection'},
            {name:'GriefShare Daily Emails', url:'http://www.griefshare.org/dailyemails'},
            {name:'Grief Support and Inspirational Quotes', url:'https://www.pinterest.com/jadfh/grief-support-and-inspirational-quotes/'}
         ]
   }
}

var Goal = function(name, progress, unit) {
   var self = this;
   self.name = name;
   self.progress = progress;
   self.progressPercent = function() {
      var count = 0
      for(var i = 0; i < self.progress.length; i++) {
         if (self.progress[i].val == true) count++;
      }
      return (count*100.0)/self.progress.length;
   };
   self.unit = unit;
}