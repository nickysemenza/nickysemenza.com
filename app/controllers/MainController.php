<?php

class MainController extends BaseController
{

    public function home()
    {
        return View::make('home');
    }
	public function videos()
	{
        $videos=array(
            array(
                "ytid"=>"9RBYU7D77MM",
                'title'=>'Harker Class of 2014',
                'subtitle'=>'Spirit Montage',
                'time'=>'May 2014',
                'description'=>'A montage of various senior class spirit activities over the course of the school year.'
            ),
            array(
                "ytid"=>"_-cqOsKXP70",
                'title'=>'Harker Homecoming 2013',
                'subtitle'=>'Spirit Montage',
                'time'=>'November 2013',
                'description'=>'A short film depicting the spirit of the Fall Homecoming festivities.'
            ),
            array(
                "ytid"=>"vvyLSgLj58w",
                'title'=>'Harker Summer Camp: Mud Day',
                'subtitle'=>'Fun in the sun with mud!',
                'time'=>'July 2013',
                'description'=>'Campers enjoy a bright summer day in the mud!'
            )
        );
		return View::make('videos',compact('videos'));
	}
    public function about()
    {
        return View::make('about');
    }
    public function software()
    {
        $projects=array(
            array(
                'image'=>"http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_500/v1411496134/softwareprojects_screenshot_purduefood_dlv3wr.png",
                'title'=>"Purdue Food",
                'url'=>'purduefood.com',
                'time' => 'July 2014- present',
                'tech'=>'PHP, Laravel, Facebook API, Purdue HFS API',
                'description'=>'Yelp-style for Purdue students to browse food court menus and leave reviews on entrees.'
            ),
            array(
                'image'=>"http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_748/v1411496133/softwareprojects_screenshot_spotifytags_maetej.png",
                'title'=>"Spotify Tags",
                'url'=>'spotifytags.com',
                'time' => 'August 2014- present',
                'tech'=>'PHP, Laravel, Spotify API',
                'description'=>'Easily manage categorization of your spotify library across multiple playlists.'
            ),
            array(
                'image'=>"http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_1214/v1411496134/softwareprojects_screenshot_booktradr_kwjjde.png",
                'title'=>"BookTradr",
                'url'=>'booktradr.com',
                'time' => 'May 2012- November 2013',
                'tech'=>'PHP, Amazon Web Services API',
                'description'=>'Easily manage categorization of your spotify library across multiple playlists.'
            ),
            array(
                'image'=>"http://res.cloudinary.com/nickysemenza/image/upload/bo_0px_solid_rgb:000,c_scale,w_1214/v1414101705/softwareprojects_screenshot_purduefood_rkbyd3.png",
                'title'=>"PicSpace",
                'url'=>'picspace.me',
                'time' => 'October 2014 (boilermake hackathon)',
                'tech'=>'PHP, Laravel, Google Maps API',
                'description'=>'Collaborate on drawings with those nearby!'
            )
        );
        return View::make('software',compact('projects'));
    }
    public function resume()
    {
        return Redirect::to('files/nickysemenza_resume.pdf');
    }
    public function photos()
    {
        return View::make('photos');
    }

}
