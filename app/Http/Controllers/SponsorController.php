<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Sponsor;
use Validator;

class SponsorController extends Controller
{
    // For Panel

    public function showAddSponsor()
    {

        return view("panel.addSponsor");

    }

    public function addSponsor(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "name" => "required|string|max:100",
            "link" => "required|url",
            "img" => "required|url"
        ]);

        if ($validate->fails()) {
            return $validate->errors();
        }

        $status = Sponsor::create(["name" => $request->input("name"), "link" => $request->input("link"), "logo_link" => $request->input("img")]);

        if ($status) {
            return response()->json(["status" => 1]);
        } else {
            return response()->json(["status" => -1]);
        }

    }

    public function showManageSponsors()
    {

        $data = Sponsor::orderBy("id", "desc")->paginate(5);

        return view("panel.manageSponsors", ['data' => $data]);

    }

    public function deleteSponsor(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "id" => "required|integer"
        ]);

        if ($validate->fails()) {
            return $validate->errors();
        }

        $status = Sponsor::find($request->input("id"))->delete();

        if ($status) {
            return response()->json(["status" => 1]);
        } else {
            return response()->json(["status" => -1]);
        }

    }

    public function showEditSponsor($id)
    {

        $data = Sponsor::findOrFail($id);

        return view('panel.editSponsor', ['data' => $data]);

    }

    public function editSponsor(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "id" => "required|integer",
            "name" => "required|string",
            "link" => "required|string",
            "img" => "required|string"
        ]);

        if ($validate->fails()) {
            return $validate->errors();
        }

        $status = Sponsor::find($request->input("id"))->update(["name" => $request->input("name"),
            "link" => $request->input("link"), "logo_link" => $request->input("img")]);

        if ($status) {
            return response()->json(["status" => 1]);
        } else {
            return response()->json(["status" => -1]);
        }

    }

}
