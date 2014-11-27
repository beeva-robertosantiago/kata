'use strict';

angular.module('kataAngularJsApp').directive('comicGridWidget', [ 'MarvelComic', 'MyComic', 'MarvelService', function (MarvelComic, MyComic, MarvelService){
     return {
        restrict: 'E',
        transclude : true,
        scope : {
            title : '=',
            listType : '=',
            comicSelected : '='
        },
        templateUrl : 'app/modules/comicModule/widgets/comicGridWidget/comicGridWidgetTemplate.html',
        link : function(scope, element, attrs) {
            console.log("Entro en la directiva comicGridWidget");
            scope.comicGridCtrl = {};
            scope.marvelService = MarvelService;
            scope.loadDataGrid = null;
            scope.comicGridCtrl.mySelectedItems = [];
            
            scope.$watch("comicGridCtrl.mySelectedItems.length", function(newLength){
                if(scope.comicGridCtrl.mySelectedItems.length >0){
                  scope.comicSelected = angular.copy(scope.comicGridCtrl.mySelectedItems[scope.comicGridCtrl.mySelectedItems.length-1]);
                  if(scope.comicGridCtrl.mySelectedItems.length >1){
                    scope.comicGridCtrl.mySelectedItems.splice(0,1);
                  }
                }
            });

            scope.$watch("marvelService.reloadMyComicsList", function(newValue){
                if(newValue == true){
                  loadMyComicsList();
                  scope.marvelService.reloadMyComicsList = false;
                }
            });

            var loadMarvelComicsList = function (){
                scope.comicGridCtrl.gridData = [];
                MarvelService.getMarvelComicsList().then(
                    function success(response){
                  angular.forEach(response, function(comic){
                    scope.comicGridCtrl.gridData.push(MarvelComic.marvelComicConstructor(comic));
                  });
                    },
                    function error(error){

                    });
            };

            var loadMarvelComicsAbleToBuy = function (){
                scope.comicGridCtrl.gridData = [];
                var queryObject = {
                    userId : 'X'
                };

                MarvelService.getMarvelComicsAbleToBuy(queryObject).then(
                    function success(response){
                  angular.forEach(response, function(comic){
                    scope.comicGridCtrl.gridData.push(MarvelComic.marvelComicConstructor(comic));
                  });
                    },
                    function error(error){

                    });
            };

            var loadMyComicsList = function (){
                scope.comicGridCtrl.gridData = [];
                MarvelService.getMyComicsList().then(
                    function success(response){
                  angular.forEach(response, function(comic){
                    scope.comicGridCtrl.gridData.push(MyComic.myComicConstructor(comic));
                  });
                    },
                    function error(error){

                    });
            };

            var init = function(){
                switch(scope.listType){
                    case "marvelComics":
                        scope.loadDataGrid = loadMarvelComicsList; 
                        break;
                    case "myComics":
                        scope.loadDataGrid = loadMyComicsList; 
                        break;
                    case "buyComics":
                        scope.loadDataGrid = loadMarvelComicsAbleToBuy; 
                        break;
                    default:
                        console.error("comicGridWidget :: loadDataGrid error : Type not recognized");
                        break;
                }

                scope.loadDataGrid();
            };

            scope.deleteItem = function(gridItem){
                 MarvelService.deleteComicFromMyList(gridItem.id).then(
                    function success(response){
                        scope.comicSelected = null;
                        MarvelService.reloadMyComicsList = true;
                    },
                    function error(error){

                    });
            };

            init();
            

        }
    };

}]);