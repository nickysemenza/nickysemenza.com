  var app = angular.module('app', ['ngRoute', 'ngAnimate']);
    app.config(function($routeProvider,$locationProvider, $sceProvider) {
        $sceProvider.enabled(false);
        $locationProvider.html5Mode(true)
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            .when('/404', {
                templateUrl : 'pages/404.html',
            })
            .when('/resume', {
                templateUrl : 'pages/resume.html',
                controller  : 'mainController'
            })
            .otherwise({ redirectTo: '/404' });
    });
    app.controller('mainController', function($scope) {
        $scope.pageTitle = "Nicky Semenza"
        $scope.projects = [
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_500/v1427928960/softwareprojects_screenshot_datahub.png",
                title: "Personal Data Hub",
                url: 'github.com/nickysemenza/datahub',
                time: 'August 2014- Present',
                tech: 'PHP, Laravel, Facebook API, d3js,',
                description: 'Analyzing and vizualizing personal facebook chat history data'
            },
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_500/v1411496134/softwareprojects_screenshot_purduefood_dlv3wr.png",
                title: "Purdue Food",
                url: 'github.com/kedarv/PurdueFood',
                tech: 'PHP, Laravel, Facebook API, Purdue HFS API',
                description: 'Yelp-style system for Purdue students to browse food court menus and leave reviews on entrees. https://github.com/kedarv/PurdueFood'
            },
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_748/v1411496133/softwareprojects_screenshot_spotifytags_maetej.png",
                title: "Spotify Tags",
                url: 'github.com/nickysemenza/spotify-tags',
                tech: 'PHP, Laravel, Spotify API',
                description: 'Easily manage categorization of your spotify library across multiple playlists. Playlists are treated as\'tags\', allowing for logical categorization'
            },
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_1214/v1414101705/softwareprojects_screenshot_purduefood_rkbyd3.png",
                title: "PicSpace",
                url: 'github.com/kedarv/picspace',
                tech: 'PHP, Laravel, Google Maps API',
                description: 'Collaborate on drawings with those nearby!'
            }
        ]


        $scope.videos= [
            {
                yturl: "http://www.youtube.com/v/5mCiAwCGNy4&theme=light",
                title: 'Jump Smokers @ Purdue',
                description: 'Jump Smokers perform at Slayter Hill'
            },
            {
                yturl: "http://www.youtube.com/v/gRdyBPoAuJA&theme=light",
                title: 'Chicago | The Windy City',
                description: 'Exploring downtown Chicago'
            },
            {
                yturl: "http://www.youtube.com/v/UVCjwq78g9U&theme=light",
                title: 'Purdue Grand Prix 2015',
                description: 'Purdue\'s Grand Prix Race'
            },
            {
                yturl: "http://www.youtube.com/v/9RBYU7D77MM&theme=light",
                title: 'Harker Class of 2014',
                description: 'A montage of various senior class spirit activities over the course of the school year.'
            },
            {
                yturl: "http://www.youtube.com/v/_-cqOsKXP70&theme=light",
                title: 'Harker Homecoming 2013',
                description: 'A short film depicting the spirit of the Fall Homecoming festivities.'
            },
            {
                yturl: "http://www.youtube.com/v/N77N1Lv1Usg&theme=light",
                title: 'Purdue BMOC 2014',
                description: 'Purdue\'s greek life talent show'
            }
        ]
    });

    
