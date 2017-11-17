(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:albumTest
	 * @description
	 * # albumTest
	 * Test of the app
	 */

	describe('album test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('cardsandcharts');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('AlbumCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
