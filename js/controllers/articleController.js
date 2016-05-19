angular.module("FE-Angular")
	.controller('articleController', ['$scope', '$state', 'appService',
		function ($scope, $state, appService) {

			$scope.article = appService.getArticle($state.params.articleId);

		}])
