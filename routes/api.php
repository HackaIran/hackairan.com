<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix("index")->group(function(){

    // Events

    Route::get("/getUpComingEvents","EventController@getUpComingEvents");

    Route::get("/getTimeLine","EventController@getTimeLine");

    Route::get("/getEventMainText/{id}","EventController@getEventMainText")->where('id','[0-9]+');

    // For Modals

    Route::get("/getPartial/{partialName}","HomeController@getPartial");

});