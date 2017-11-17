'use strict';

/**
 * @ngdoc function
 * @name app.route:albumRoute
 * @description
 * # albumRoute
 * Route of the app
 */

angular.module('album')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.album', {
				url:'/album',
				templateUrl: 'app/modules/album/album.html',
				controller: 'AlbumCtrl',
				controllerAs: 'vm'
			});

		
	}]);
