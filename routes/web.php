<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*Route::get('/me', 'userController@login')->name('login');

Route::get('/', 'MainController@welcome');*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/Register', function() {
	return view('Register');
});

Route::get('/Login', function() {
	return view('login');
});

Route::get('/Logout', function() {
	return view('logout');
});
