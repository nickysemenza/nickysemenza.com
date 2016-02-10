  var app = angular.module('app', ['ngRoute', 'ngAnimate','wu.masonry']);
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
            .when('/key', {
                templateUrl : 'pages/key.html',
                controller  : 'keyController'
            })
            .when('/resume', {
                templateUrl : 'pages/resume.html',
                controller  : 'mainController'
            })
            .otherwise({ redirectTo: '/' });
    });
   app.controller('keyController', function($scope, $rootScope) {
       $rootScope.bodyClass="pathway-body";
   });
    app.controller('mainController', function($scope, $rootScope,anchorSmoothScroll, $location) {
        $rootScope.bodyClass="stars-body";
        $scope.pageTitle = "Nicky Semenza";
        $scope.projects = [
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_500/v1453701847/softwareprojects_screenshot_parachute.png",
                title: "Parachute",
                url: 'parachute.co',
                time: 'August 2014- Present',
                tech: ['PHP','Laravel', 'AngularJS', 'Ionic', 'MySQL'],
                description: 'I currently work as one two developers at Parachute, building up an API, website, and mobile apps'
            },
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_500/v1453701491/softwareprojects_screenshot_boilermake.png",
                title: "BoilerMake Website",
                url: 'boilermake.org',
                time: 'August 2014- Present',
                tech: ['Ruby', 'Rails', 'AngularJS', 'Ionic'],
                description: 'Hackathon Website + Mobile Checkin app for participants'
            },
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_500/v1427928960/softwareprojects_screenshot_datahub.png",
                title: "Personal Data Hub",
                url: 'github.com/nickysemenza/datahub',
                time: 'August 2014- Present',
                tech: ['PHP', 'Laravel', 'Facebook API', 'd3js'],
                description: 'Analyzing and vizualizing personal facebook chat history data'
            },
            {
                image: "http://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/221/629/datas/gallery.jpg",
                title: "QRBlast",
                url: 'devpost.com/software/qr-blast',
                time: 'August 2014- Present',
                tech: ['android'],
                description: 'QR Blaster splits up a file onto one device into a sequence of QR codes, which can then be read and assembled together on another device.'
            },
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_500/v1411496134/softwareprojects_screenshot_purduefood_dlv3wr.png",
                title: "Purdue Food",
                url: 'github.com/kedarv/PurdueFood',
                tech: ['PHP', 'Laravel', 'Facebook API', 'Purdue Housing API'],
                description: 'Yelp-style system for Purdue students to browse food court menus and leave reviews on entrees.'
            },
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_748/v1411496133/softwareprojects_screenshot_spotifytags_maetej.png",
                title: "Spotify Tags",
                url: 'github.com/nickysemenza/spotify-tags',
                tech: ['PHP', 'Laravel', 'Spotify API'],
                description: 'Easily manage categorization of your spotify library across multiple playlists. Playlists are treated as\'tags\', allowing for logical categorization'
            },
            {
                image: "http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_1214/v1414101705/softwareprojects_screenshot_purduefood_rkbyd3.png",
                title: "PicSpace",
                url: 'github.com/kedarv/picspace',
                tech: ['PHP', 'Laravel', 'Google Maps API'],
                description: 'Collaborate on drawings with those nearby!'
            },
            {
                image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=&w=300&h=180",
                title: "Coming Soon!",
                url: 'github.com/nickysemenza',
                tech: ['secret sauce','magic'],
                description: ';)'
            }
        ];


        $scope.videos= [
            {
                yturl: "http://www.youtube.com/embed/fJVEEszJPEE",
                title: 'Purdue Solidarity Rally | November 13 2015',
                description: 'Protesters gathered  let the Purdue community know that they are tired of racism on campus.'
            },
            {
                yturl: "http://www.youtube.com/embed/5mCiAwCGNy4",
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
        ];
$scope.bricks=[];
        function pic() {
            for(i=1; i<35; i++)
            {
                $scope.bricks.push({src: 'http://cdn.nickysemenza.com/assets/photogrid/'+i+'.jpg'})
                i++;
            }
        }
        pic();


        $scope.gotoElement = function (eID){
          // set the location.hash to the id of
          // the element you wish to scroll to.
          $location.hash('about');
     
          // call $anchorScroll()
          anchorSmoothScroll.scrollTo(eID);
      
        };
        
    });
  app.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});



  $(document).ready(function() {

      $(window).scroll(function () {
          //if you hard code, then use console
          //.log to determine when you want the
          //nav bar to stick.
          console.log($(window).scrollTop())
          if ($(window).scrollTop() > 1020) {
              $('.nav-sticky').addClass('nav-fixed');
          }
          if ($(window).scrollTop() < 1020) {
              $('.nav-sticky').removeClass('nav-fixed');
          }

          if ($(window).scrollTop() > 20) {
              $('.arrow').addClass('hidden');
          }
          if ($(window).scrollTop() < 20) {
              $('.arrow').removeClass('hidden');
          }
      });
  });