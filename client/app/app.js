'use strict';

/**
 * @ngdoc overview
 * @name kataAngularJsApp
 * @description
 * # kataAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('kataAngularJsApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'restangular',
    'ui.bootstrap',
    'mgcrea.ngStrap',
    'trNgGrid'
  ])
  .config([ '$httpProvider', '$routeProvider', 'RestangularProvider', '$sceDelegateProvider', function ($httpProvider, $routeProvider, RestangularProvider, $sceDelegateProvider) {
    
    RestangularProvider.setBaseUrl('http://localhost:9000');

    $routeProvider
      .when('/marvelComics', {
        templateUrl: 'app/modules/appModule/widgets/marvelComicsWidget/marvelComicsTemplate.html',
        controller: 'MarvelComicsCtrl'
      })
      .when('/myComics', {
        templateUrl: 'app/modules/appModule/widgets/myComicsWidget/myComicsTemplate.html',
        controller: 'MyComicsCtrl'
      })
      .otherwise({
        redirectTo: '/marvelComics'
      });
  }]).run(['$rootScope', '$location', function($rootScope, $location) {

    $rootScope.go = function(pathToGo){
      $location.path(pathToGo);
      };

  }]);
