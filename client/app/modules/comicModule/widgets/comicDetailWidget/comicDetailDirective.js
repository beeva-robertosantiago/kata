'use strict';

angular.module('kataAngularJsApp').directive('comicDetailWidget', function (){
     return {
        restrict: 'E',
        transclude: true,
        scope : {
            selectedComic : '=',
            isMyComics : '='
        },
        templateUrl : 'app/modules/comicModule/widgets/comicDetailWidget/comicDetailWidgetTemplate.html',
        link : function(scope, element, attrs) {
            scope.comicDetailCtrl = {};
            scope.comicDetailCtrl.disabled = true;
         /* for ng-checked binding */
            console.log("Entro en la directiva comicDetailWidget");



        }
    };

});