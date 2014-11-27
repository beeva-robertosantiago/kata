'use strict';

/**
 * @ngdoc function
 * @name kataAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kataAngularJsApp
 */
angular.module('kataAngularJsApp')
  .controller('MarvelComicsCtrl', ['$scope', function ($scope) {

    $scope.marvelComicsModel = {};
    $scope.marvelComicsModel.gridTitle = "Listado de comics";
    $scope.marvelComicsModel.listType = "marvelComics";
    $scope.marvelComicsModel.reloadList = false;

  }]);