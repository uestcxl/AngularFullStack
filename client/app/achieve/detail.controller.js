'use strict';

angular.module('meanApp')
    .controller('DetailCtrl',function($scope,$stateParams){
        $scope.id=$stateParams.id;
        $scope.passage={};
        $scope.passage.content="Hello ~";
        $scope.passage.createTime="2015-1-1 10:10:10";
        $scope.passage.updateTime="2015-1-11 11:11:11";
        $scope.passage.files={};
        $scope.passage.title='test Passage';
        $scope.passage.picture="body1.jpg";
        $scope.passage.alt="Hello";
        $scope.passage.tags=[
            "Hello",
            "world"
        ]
    });
