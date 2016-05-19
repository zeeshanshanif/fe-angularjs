angular.module('FE-Angular')
	.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider

			.state('home', {
				url: '/home',
				templateUrl: 'views/home.html'
			})
			.state('article', {
				url: '/article/:articleId',
				templateUrl: 'views/article.html',
				controller: "articleController"
			})

	})
