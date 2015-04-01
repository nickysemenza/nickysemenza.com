  var app = angular.module('app', ['ngRoute', 'ngAnimate']);

    // configure our routes
    app.config(function($routeProvider,$locationProvider, $sceProvider) {
        $sceProvider.enabled(false);
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
            .when('/projects', {
                templateUrl : 'pages/software.html',
                controller  : 'softwareController'
            })
            .when('/software', {
                templateUrl : 'pages/software.html',
                controller  : 'softwareController'
            })
            .when('/404', {
                templateUrl : 'pages/404.html',
            })
            .otherwise({ redirectTo: '/404' });
            ;
    });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $scope.pageTitle = "Nicky Semenza"
    });

    app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
        $scope.pageTitle = "title"

    });

    app.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
        $scope.pageTitle = "title"
    });

    app.controller('softwareController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
        $scope.pageTitle = "title"
        $scope.projects = [
        
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_500/v1427928960/softwareprojects_screenshot_datahub.png",
                title: "Personal Data Hub",
                url: 'https://github.com/nickysemenza/datahub',
                time: 'August 2014- Present',
                tech: 'PHP, Laravel, Facebook API, d3js,',
                description: 'Analyzing and vizualizing personal facebook chat history data'
            },

            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_500/v1411496134/softwareprojects_screenshot_purduefood_dlv3wr.png",
                title: "Purdue Food",
                url: 'purduefood.com',
                time: 'July 2014- January 2015 (Purdue\'s API Broke)',
                tech: 'PHP, Laravel, Facebook API, Purdue HFS API',
                description: 'Yelp-style system for Purdue students to browse food court menus and leave reviews on entrees. https://github.com/kedarv/PurdueFood'
            },
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_748/v1411496133/softwareprojects_screenshot_spotifytags_maetej.png",
                title: "Spotify Tags",
                url: 'spotifytags.com',
                time: 'August 2014- present',
                tech: 'PHP, Laravel, Spotify API',
                description: 'Easily manage categorization of your spotify library across multiple playlists. Playlists are treated as\'tags\', allowing for logical categorization'
            },
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_1214/v1411496134/softwareprojects_screenshot_booktradr_kwjjde.png",
                title: "BookTradr",
                url: 'booktradr.com',
                time: 'May 2012- November 2013',
                tech: 'PHP, Amazon Web Services API',
                description: 'Defunct project that allowed users to buy and sell books withing their school community.'
            },
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_1214/v1414101705/softwareprojects_screenshot_purduefood_rkbyd3.png",
                title: "PicSpace",
                url: 'https://github.com/kedarv/PurdueFood',
                time: 'October 2014 (boilermake hackathon)',
                tech: 'PHP, Laravel, Google Maps API',
                description: 'Collaborate on drawings with those nearby!'
            }
        ]
    });
    app.controller('photosController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
        $scope.pageTitle = "title"
    });
    app.controller('videosController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
        $scope.pageTitle = "title";

        $scope.videos= [
            {
                yturl: "http://www.youtube.com/v/gRdyBPoAuJA&theme=light",
                title: 'Chicago | The Windy City',
                subtitle: 'Nature Video',
                time: 'December 2014',
                description: 'Exploring downtown Chicago'
            },
            {
                yturl: "http://www.youtube.com/v/9RBYU7D77MM&theme=light",
                title: 'Harker Class of 2014',
                subtitle: 'Spirit Montage',
                time: 'May 2014',
                description: 'A montage of various senior class spirit activities over the course of the school year.'
            },
            {
                yturl: "http://www.youtube.com/v/_-cqOsKXP70&theme=light",
                title: 'Harker Homecoming 2013',
                subtitle: 'Spirit Montage',
                time: 'November 2013',
                description: 'A short film depicting the spirit of the Fall Homecoming festivities.'
            },
            {
                yturl: "http://www.youtube.com/v/vvyLSgLj58w&theme=light",
                title: 'Harker Summer Camp: Mud Day',
                subtitle: 'Fun in the sun with mud!',
                time: 'July 2013',
                description: 'Campers enjoy a bright summer day in the mud!'
            }
        ]
    });
    function HeaderController($scope, $location) 
	{ 
	    $scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	}
