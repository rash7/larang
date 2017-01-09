<?php
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    //return view('welcome');
    return view('master');
});

Route::resource('user', 'UserController');

Route::post('auth', 'UserController@checkAuth');

Route::resource('gallery', 'GalleryController');

Route::post('upload-file', function(Request $request){
	return response($request->all(), 201);
});