<?php


/**
 *
 * This file is for panel routing
 *
 */

Route::get("login", "Auth\LoginController@showLoginForm")->name("login");

Route::post("login", "Auth\LoginController@login");

Route::middleware("auth")->group(function () {

    //    panel

    Route::get("/", "Panel\PanelController@showIndex")->name("panelIndex");

    Route::post("/", "Panel\PanelController@updateGenerals");

    //

    Route::get("/addEvent", "EventController@showAddEvent")->name("addEvent");

    Route::post("/addEvent", "EventController@addEvent");

    Route::get("/editEvent/{id}", "EventController@showEditEvent")->name("showEditEvent")->where('id', '[0-9]+');

    Route::post("/editEvent", "EventController@editEvent")->name("editEventAction");

    Route::get("/manageEvents", "EventController@showManageEvents")->name("manageEvents");

    Route::post("/deleteEvent", "EventController@deleteEvent")->name("deleteEventAction");

    //

    Route::get("/addMember", "OurTeamController@showAddTeamMember")->name("addMember");

    Route::post("/addMember", "OurTeamController@addTeamMember");

    Route::get("/editMember/{id}", "OurTeamController@showEditMember")->name("showEditMember")->where('id', '[0-9]+');

    Route::post("/editMember", "OurTeamController@editMember")->name("editMemberAction");

    Route::get("/manageMembers", "OurTeamController@showManageMembers")->name("manageMembers");;

    Route::post("/deleteMember", "OurTeamController@deleteMember")->name("deleteMemberAction");

    //

    Route::get("/addSponsor", "SponsorController@showAddSponsor")->name("addSponsor");

    Route::post("/addSponsor", "SponsorController@addSponsor");

    Route::get("/editSponsor/{id}", "SponsorController@showEditSponsor")->name("showEditSponsor")->where('id', '[0-9]+');

    Route::post("/editSponsor", "SponsorController@editSponsor");

    Route::get("/manageSponsors", "SponsorController@showManageSponsors")->name("manageSponsors");

    Route::post("/deleteSponsor", "SponsorController@deleteSponsor")->name("deleteSponsorAction");

    // Hacka Parts

    Route::get("/addHackaPart", "HackaPartsController@showAddHackaPart")->name("addHackaPart");

    Route::post("/addHackaPart", "HackaPartsController@addHackaPart");

    Route::get("/editHackaPart/{id}", "HackaPartsController@showEditHackaPart")->name("editHackaPart")->where("id", "[0-9]+");

    Route::post("editHackaPart", "HackaPartsController@editHackaPart")->name("editHackaPartAction");

    Route::get("/manageHackaParts", "HackaPartsController@showManageHackaParts")->name("manageHackaParts");

    Route::post("/deleteHackaPart", "HackaPartsController@deleteHackaPart")->name("deleteHackaPartAction");

    // Galleries

    Route::get("addGallery", "GalleryController@showAddGallery")->name("addGallery");

    Route::post("addGallery", "GalleryController@addGallery");

    Route::get("editGallery/{id}", "GalleryController@showEditGallery")->name("editGallery")->where("id", "[0-9]+");

    Route::post("editGallery", "GalleryController@editGallery")->name("editGalleryAction");

    Route::get("manageGalleries", "GalleryController@showManageGallery")->name("manageGalleries");

    Route::post("deleteGallery", "GalleryController@deleteGallery")->name("deleteGalleryAction");

    //utilities

    Route::post("/uploadVideo", "Panel\UtilityController@uploadVideo")->name("uploadVideo");

    Route::post("/uploadImage", "Panel\UtilityController@uploadImage")->name("uploadImage");

    //logout

    Route::get("logOut", "Auth\LoginController@logout")->name("logOut");

});
