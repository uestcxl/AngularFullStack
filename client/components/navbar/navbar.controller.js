'use strict';

angular.module('meanApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
        'title':'Achieve',
        'link':'achieve'
    },
    {
        'title':'Message',
        'link':'message'
    },
    {
        'title':'About Me',
        'link':'about'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
