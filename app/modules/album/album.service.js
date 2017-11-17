(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:albumService
	 * @description
	 * # albumService
	 * Service of the app
	 */

  	angular
		.module('album')
		.factory('AlbumService', Album);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Album.$inject = ['$http'];

		function Album ($http) {

		}

})();
