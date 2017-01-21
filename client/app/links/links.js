angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  console.log('SCIZOPE: ', Links)
  $scope.update = function() {
    Links.getAll();
  }
});
