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
                'title'=>'Harker Class of 2014 Spirit Montage',
                'subtitle'=>'Spirit Montage',
                'description'=>'A montage of various senior class spirit activities over the course of the school year.'
            ),
            array(
                "ytid"=>"_-cqOsKXP70",
                'title'=>'Harker Homecoming 2013',
                'subtitle'=>'Spirit Montage Video',
                'description'=>'A short film depicting the spirit of the Fall Homecoming festivities.'
            ),
            array(
                "ytid"=>"vvyLSgLj58w",
                'title'=>'Harker Summer Camp: Mud Day',
                'subtitle'=>'Fun in the sun with mud!',
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
                'image'=>"https://i.cloudup.com/EjV0HII2NK.png",
                'title'=>"Purdue Food",
                'url'=>'purduefood.com',
                'tech'=>'PHP, Laravel, Facebook API, Purdue HFS API',
                'description'=>'Yelp-style for Purdue students to browse food court menus and leave reviews on entrees.'
            ),
            array(
                'image'=>"http://placehold.it/500x300",
                'title'=>"Spotify Tags",
                'url'=>'spotifytags.com',
                'tech'=>'PHP, Laravel, Spotify API',
                'description'=>'Easily manage categorization of your spotify library across multiple playlists.'
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