'use strict';

angular.module('meanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('achieve',{
        url: '/achieve',
        templateUrl:'app/achieve/achieve.html',
        controller:'AchieveCtrl'
      })
      .state('about',{
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      })
      .state('detail',{
        url:'/detail/:id',
        templateUrl: 'app/achieve/detail.html',
        controller: 'DetailCtrl'
      })
      ;
  });

