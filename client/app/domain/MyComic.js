'use strict';

angular.module('kataAngularJsApp')
	.factory('MyComic', ['$log', function($log) {
		
		var myComic = {
			
			myComicConstructor : function (object){
				try{
					var newMyComic = {
						id : object.id,
						idComic : object.idComic,
						title : object.title,
						description : object.description,
						pageCount : object.pageCount,
						buyDate : new Date(object.buyDate),
						salesDate : new Date(object.salesDate),
						series : object.series,
						price : object.price,
						creators : object.creators,
						characters : object.characters
					};

					return newMyComic;
				}catch(e){
					console.error("MyComicFactory :: myComicConstructor error : "+e.message);
				}
			},

		};
		
		return myComic;
}]);