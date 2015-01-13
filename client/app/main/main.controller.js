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

    //test code
    var updateclock=function(){
        var now=new Date();
        $scope.clock=now.getFullYear()+'-'+(now.getMonth()+1)+'-'+
        now.getDate()+' '+now.getHours()+':'+
        (now.getMinutes()>9 ? now.getMinutes() : '0'+now.getMinutes() )+':'+
        ((now.getSeconds()>9) ? now.getSeconds() : '0'+now.getSeconds());
    };

    var timer=setInterval(function(){
        $scope.$apply(updateclock);
    },1000);

    updateclock();

    $scope.test=100;

    $scope.addOne=function(){
        $scope.test++;
    };

    $scope.delOne=function(){
        $scope.test--;
    };

    //ajax request example
    $scope.ajax='empty now';
    $http({
        method:'get',
        url:'/api/things'
    }).success(function(data,status){
        $scope.ajax=data;
    }).error(function(data,status){
        $scope.ajax='Error!'+"-----"+data;
    });
  });
