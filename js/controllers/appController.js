angular.module("FE-Angular")
	.controller('appController', ['$scope', 'appService',
		function ($scope, appService) {

			$scope.appName = 'FE-Angular';
			$scope.articles = [];
			$scope.categories = [];
			$scope.selectCategory = selectCategory;

			$scope.selectedCategory = {
				"id": "",
				"title": "",
				"image": "",
				"body": "",
				"datePublished": "",
				"categoryId": ""
			};

			function selectCategory(index) {
				console.log(index)
				$scope.selectedCategory.categoryId = index;
			}

			appService.getArticles()
				.then(function (data) {
					$scope.articles = data;
				}, function (error) {
					console.log(error)
				});

			appService.getCategories()
				.then(function (data) {
					$scope.categories = data;
					$scope.selectedCategory.categoryId = $scope.categories[0].id;
				}, function (error) {
					console.log(error)
				});

		}])
