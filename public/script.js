  var app = angular.module('app', ['ngRoute']);

    // configure our routes
    app.config(function($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(true)
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })
            .when('/videos', {
                templateUrl : 'pages/videos.html',
                controller  : 'videosController'
            })
            .when('/photos', {
                templateUrl : 'pages/photos.html',
                controller  : 'photosController'
            })

            .when('/software', {
                templateUrl : 'pages/software.html',
                controller  : 'softwareController'
            });
    });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';

    });

    app.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    app.controller('softwareController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
    app.controller('photosController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
    app.controller('videosController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
    function HeaderController($scope, $location) 
	{ 
	    $scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	}
