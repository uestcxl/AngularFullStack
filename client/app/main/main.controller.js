'use strict';

angular.module('meanApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.works=[{
        'src':'port01.jpg',
        'title':'work1',
        'name':'work1',
        'links':'/'
    },
    {
        'src':'port02.jpg',
        'title':'work2',
        'name':'work2',
        'links':'/'
    },
    {
        'src':'port03.jpg',
        'title':'work3',
        'name':'work3',
        'links':'/'
    },
    ];
  });
