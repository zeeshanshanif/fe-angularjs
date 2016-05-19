angular.module("FE-Angular")
	.service("appService", ['$q', '$http',
		function ($q, $http) {

			var scope = this;
			scope.articles = [];
			scope.getArticle = getArticle;
			scope.getArticles = getArticles;
			scope.getCategories = getCategories;


			function getArticle(id) {
				for (var i = 0; i < scope.articles.length; i++) {
					if (scope.articles[i].id == id)
						return scope.articles[i];
				}
			}

			function getArticles() {
				var deffered = $q.defer();
				$http.get("response.json")
					.success(function (responseData) {
						scope.articles = responseData.data.articles;
						deffered.resolve(scope.articles);
					})
					.error(function (responseError) {
						deffered.reject(responseError);
					})
				return deffered.promise;
			}

			function getCategories() {
				var deffered = $q.defer();
				$http.get("response.json")
					.success(function (responseData) {
						scope.categories = responseData.data.categories;
						deffered.resolve(scope.categories);
					})
					.error(function (responseError) {
						deffered.reject(responseError);
					})
				return deffered.promise;
			}
		}])
