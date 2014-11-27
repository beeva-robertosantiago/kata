'use strict';

angular.module('kataAngularJsApp')
  .service('MarvelService', function MarvelService(Restangular) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var marvelService = {

    	marvelComicsRestService : Restangular.all("services"),
    	reloadMyComicsList: false,
    
    	getMarvelComicsList : function (){
	    	return marvelService.marvelComicsRestService.customGET('marvelComics').then(function success(callBack){
	    			return callBack;

	    		}, function error (errorMsg){
	    			console.error(":: MarvelService :: getMarvelComicsList error");
	    			return errorMsg;
	    		});

	    },

	    getMarvelComicsAbleToBuy : function (queryObject){
	    	return marvelService.marvelComicsRestService.customGET('marvelComics', queryObject).then(function success(callBack){
	    			return callBack;

	    		}, function error (errorMsg){
	    			console.error(":: MarvelService :: getMarvelComicsAbleToBuy error");
	    			return errorMsg;
	    		});

	    },

	    getMyComicsList : function (){
	    	return marvelService.marvelComicsRestService.customGET('collection').then(function success(callBack){
	    			return callBack;

	    		}, function error (errorMsg){
	    			console.error(":: MarvelService :: getMyComicsList error");
	    			return errorMsg;
	    		});

	    },

	    addComicToMyList : function (comicToAdd){
	    	return marvelService.marvelComicsRestService.customPOST(comicToAdd,'collection').then(function success(callBack){
	    		return callBack;

	    	}, function error(errorMsg){
	    		console.error(":: MarvelService :: addComicToMyList error");
	    		return errorMsg;
	    	});
	    },

	    deleteComicFromMyList : function (comicId){
	    	return marvelService.marvelComicsRestService.one('collection').customDELETE(comicId).then(function success(callBack){
	    			
	    		}, function error (errorMsg){
	    			console.error(":: MarvelService :: getMyComicsList error");
	 
	    		});

	    }

	}

	return marvelService;

});
