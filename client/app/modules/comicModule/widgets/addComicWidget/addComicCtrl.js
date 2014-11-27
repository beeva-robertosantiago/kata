'use strict';

angular.module('kataAngularJsApp').directive('addComicWidget', [ 'MarvelService', function (MarvelService){
     return {
        restrict: 'E',
        transclude: true,
        scope : {},
        templateUrl : 'app/modules/comicModule/widgets/addComicWidget/addComicTemplate.html',
        compile : function(element, attrs) {
            return {
                post: function (scope, element, attrs, controller, transcludefn){
                    scope.addComicModel = {};
                    scope.addComicModel.gridTitle = "Listado de comics para comprar";
                    scope.addComicModel.listType = "buyComics";
                    scope.addComicModel.reloadList = false;

                    scope.addComicToMyList = function (comicToAdd){
                        comicToAdd.buyDate = new Date();
                        MarvelService.addComicToMyList(comicToAdd).then(function success(response){
                            //scope.addComicModel.reloadList = true;
                            MarvelService.reloadMyComicsList = true;
                            console.info("addComicWidget :: addComicToMyList ok");
                            console.info(response);
                        }, function error(error){
                            console.error("addComicWidget :: addComicToMyList error : ");
                            console.error(response.code);
                        });
                        
                    }
                 /* for ng-checked binding */
                    console.log("Entro en la directiva addComicWidget");
                }
            }
        }
    };

}]);