'use strict';

angular.module('kataAngularJsApp')
	.factory('MarvelComic', ['$log', function($log) {
		
		var marvelComic = {
			
			marvelComicConstructor : function (object){
				try{
					var newMarvelComic = {
						id : object.id,
						title : object.title,
						description : object.description,
						pageCount : object.pageCount,
						salesDate : new Date(object.dates[0].date),
						series : object.series.name,
						price : object.prices[0].price,
						creators : object.creators,
						characters : object.characters
					};

					return newMarvelComic;
				}catch(e){
					console.error("MarvelComicFactory :: marvelComicConstructor error : "+e.message);
				}
			},

		};
		
		return marvelComic;
}]);