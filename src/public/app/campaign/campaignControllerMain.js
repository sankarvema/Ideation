'use strict';

angular.module('campaignModule')
  .controller('campaignControllerMain', ['$scope', 'campaignBinder', function ($scope, campaignBinder) {
    $scope.editing = [];
    $scope.campaignCollection = campaignBinder.query();

    $scope.save = function(){
      if(!$scope.newCampaign || $scope.newCampaign.length < 1) return;
      var campaign = new campaignBinder({ title: $scope.newCampaign});

      campaign.$save(function(){
        $scope.campaignCollection.push(campaign);
        $scope.newCampaign = ''; // clear textbox
      });
    };

    $scope.update = function(index){
      var campaign = $scope.campaignCollection[index];
      campaignBinder.update({id: campaign._id}, campaign);
      $scope.editing[index] = false;
    };

    $scope.edit = function(index){
      $scope.editing[index] = angular.copy($scope.campaignCollection[index]);
    };

    $scope.cancel = function(index){
      $scope.campaignCollection[index] = angular.copy($scope.editing[index]);
      $scope.editing[index] = false;
    };

    $scope.remove = function(index){
      var campaign = $scope.campaignCollection[index];
      campaignBinder.remove({id: campaign._id}, function(){
        $scope.campaignCollection.splice(index, 1);
      });
    };
  }]);
