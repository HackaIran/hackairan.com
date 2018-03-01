<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Validator;
use App\OurTeam;

class OurTeamController extends Controller
{
    // For Panel

    public function showAddTeamMember()
    {


        return view("panel.addTeamMember");

    }

    public function addTeamMember(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "name" => "required|string|max:50",
            "vid" => "nullable|url",
            "linkedin" => "required|url",
            "email" => "required|email",
            "dribble" => "nullable|string",
            "twitter" => "nullable|string",
            "skype" => "nullable|string",
            "site" => "nullable|url",
            "position" => "required|string"
        ]);

        if ($validate->fails()) {
            return $validate->errors();
        }

        $status = OurTeam::create(["full_name" => $request->input("name"), "position" => $request->input("position"),
            "video_link" => $request->input("vid"), "linkedin_link" => $request->input("linkedin"),
            "email" => $request->input("email"), "dribble" => $request->input("dribble"),
            "site" => $request->input("site"), "twitter" => $request->input("twitter"),
            "skype" => $request->input("skype")]);

        if ($status) {
            return response()->json(["status" => 1]);
        } else {
            return response()->json(["status" => -1]);
        }

    }

    public function showManageMembers()
    {

        $data = OurTeam::orderBy("id", "desc")->paginate(5);

        return view("panel.manageTeams", ['data' => $data]);

    }

    public function deleteMember(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "id" => "required|integer"
        ]);

        if ($validate->fails()) {
            return $validate->errors();
        }

        $status = OurTeam::find($request->input("id"))->delete();

        if ($status) {
            return response()->json(["status" => 1]);
        } else {
            return response()->json(["status" => -1]);
        }

    }

    public function showEditMember($id)
    {

        $data = OurTeam::findOrFail($id);

        return view('panel.editMember', ['data' => $data]);

    }

    public function editMember(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "name" => "required|string",
            "vid" => "nullable|string",
            "linkedin" => "required|url",
            "email" => "required|email",
            "dribble" => "nullable|string",
            "twitter" => "nullable|string",
            "skype" => "nullable|string",
            "site" => "nullable|url",
            "position" => "required|string"
        ]);

        if ($validate->fails()) {
            return $validate->errors();
        }

        $status = OurTeam::find($request->input("id"))->update(["full_name" => $request->input("name"), "position" => $request->input("position"),
            "video_link" => $request->input("vid"), "linkedin_link" => $request->input("linkedin"),
            "email" => $request->input("email"), "dribble" => $request->input("dribble"),
            "site" => $request->input("site"), "twitter" => $request->input("twitter"),
            "skype" => $request->input("skype")]);

        if ($status) {
            return response()->json(["status" => 1]);
        } else {
            return response()->json(["status" => -1]);
        }

    }

}
