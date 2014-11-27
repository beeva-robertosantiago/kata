'use strict';

/**
 * @ngdoc function
 * @name kataAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kataAngularJsApp
 */
angular.module('kataAngularJsApp')
  .controller('MyComicsCtrl', ['$scope', function ($scope) {

    $scope.myComicsModel = {};
    $scope.myComicsModel.gridTitle = "Mis comics";
    $scope.myComicsModel.listType = "myComics";
    $scope.myComicsModel.reloadList = false;
  
  }]);
