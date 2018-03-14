<?php

namespace App\Http\Controllers;

use App\Gallery;
use App\HackaPart;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Routing\Controller;

class HackaPartsController extends Controller
{
    //

    public function showAddHackaPart()
    {
        return view("panel.addHackaPart");
    }

    public function addHackaPart(Request $request)
    {
        $validate = Validator::make($request->all(), [
            "name" => "required|string",
            "address" => "required|string",
            "description" => "required|string",
            "short_description" => "required|string",
            "keywords" => "required|string",
            "logo_image" => "nullable|url",
            "header_image" => "required|url"
        ]);

        if ($validate->fails()) {
            return $validate->errors();
        }

        $status = HackaPart::create(["name" => $request->input("name"), "address" => $request->input("address"),
            "description" => $request->input("description"), "short_description" => $request->input("short_description"),
            "logo_address" => $request->input("logo_image"), "header_image" => $request->input("header_image"), "keywords" => $request->input("keywords")]);

        if ($status) {
            return response()->json(["status" => 1]);//success
        } else {
            return response()->json(["status" => -1]);//error
        }

    }

    public function showEditHackaPart($id)
    {
        $data = HackaPart::findOrFail($id);

        return view("panel.editHackaPart",["data"=>$data,"id"=>$id]);

    }

    public function editHackaPart(Request $request)
    {
        $validate = Validator::make($request->all(), [
            "id"=>"required|integer|exists:hacka_parts",
            "name" => "required|string",
            "address" => "required|string",
            "description" => "required|string",
            "short_description" => "required|string",
            "keywords" => "required|string",
            "logo_image" => "nullable|url",
            "header_image" => "required|url"
        ]);

        if ($validate->fails()) {
            return $validate->errors();
        }

        $status = HackaPart::find($request->input("id"))->update(["name" => $request->input("name"), "address" => $request->input("address"),
            "description" => $request->input("description"), "short_description" => $request->input("short_description"),
            "logo_address" => $request->input("logo_image"), "header_image" => $request->input("header_image"), "keywords" => $request->input("keywords")]);

        if ($status) {
            return response()->json(["status" => 1]);//success
        } else {
            return response()->json(["status" => -1]);//error
        }
    }

    public function showManageHackaParts()
    {

        $data = HackaPart::orderBy("id","desc")->paginate(5);

        return view("panel.manageHackaParts",["data"=>$data]);

    }

    public function deleteHackaPart(Request $request)
    {
        $validate = Validator::make($request->all(),[
            "id"=>"required|integer|exists:hacka_parts"
        ]);

        if($validate->fails()){
            return $validate->errors();
        }

        $status = HackaPart::find($request->input("id"))->delete();

        if ($status) {
            return response()->json(["status" => 1]);//success
        } else {
            return response()->json(["status" => -1]);//error
        }

    }

    // public viewing system

    public function showHackaPart($address)
    {
        $data = HackaPart::where("address",$address)->first();

        if(count($data) != 0){

            $gallery = Gallery::where("type",$data->id)->orderBy("id","desc")->first();

            // Hacka Part Exists

            return view("public.hackapart",["data"=>$data,"gallery"=>$gallery]);

        }else{
            abort(404);// hacka part not found
        }

    }

}
