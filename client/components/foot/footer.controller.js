'use strict';

angular.module('meanApp').controller('FootCtrl',function($scope,$location){
    $scope.links=[{
        'title':'Github',
        'link':'https://github.com/uestcxl'
    },
    {
        'title':'OLD VERSION',
        'link':'/'
    }
    ];
});
