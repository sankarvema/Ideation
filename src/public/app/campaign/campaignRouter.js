'use strict';

angular.module('campaignModule')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/campaign/campaign-view-main.html',
        controller: 'campaignControllerMain'
      })

      .when('/:id', {
        templateUrl: '/app/campaign/campaign-view-detail.html',
        controller: 'campaignControllerDetail'
     });
  }]);
