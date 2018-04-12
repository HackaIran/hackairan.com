<?php

namespace App\Http\Controllers;

use App\General;
use App\OurTeam;
use App\Sponsor;
use Illuminate\Routing\Controller;

class HomeController extends Controller{

    public function index()
    {

        $description = General::where("id",1)->get(["value"])->first();

        $teams = OurTeam::orderBy("id","asc")->get();

        $sponsors = Sponsor::get();

        return view('public/index',['description'=>$description,'teams'=>$teams,'sponsors'=>$sponsors]);
    }

}
