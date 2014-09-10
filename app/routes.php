<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'MainController@home');


Route::get('/test2', array('as' => 'home', function() {
    return View::make('test2');
}));

Route::get('/videos','MainController@videos');
Route::get('/about','MainController@about');
Route::get('/software','MainController@software');
Route::get('/resume','MainController@resume');