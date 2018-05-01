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

// For  hope on subdomain

Route::domain('hope.localhost')->group(function () {
    Route::get('/{path?}', "HomeController@showHOPE");
});

// if the subdomain didn't work; we have hope on /hope

Route::get('/hope/{path?}','HomeController@showHOPE');

// home page

Route::get("/", "HomeController@index");

// hackaparts

Route::get("/{hackapart}","HackaPartsController@showHackaPart");

