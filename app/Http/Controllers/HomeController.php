<?php

namespace App\Http\Controllers;

use App\General;
use App\OurTeam;
use App\Sponsor;
use Illuminate\Routing\Controller;

class HomeController extends Controller
{

    public $allowedPartials = ["hackademy","hackateamup"];

    public function index()
    {

        $description = General::where("id",1)->get(["value"])->first();

        $teams = OurTeam::orderBy("id","desc")->get();

        $sponsors = Sponsor::orderBy("id","desc")->get();

        return view('public/index',['description'=>$description,'teams'=>$teams,'sponsors'=>$sponsors]);
    }

    public function getPartial($partialName){

        if(array_search($partialName,$this->allowedPartials) !== false){

            return View("public.partials.".$partialName);

        }else{

            return response()->json("Security Error!");

        }

    }

}
