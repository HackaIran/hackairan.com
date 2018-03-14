<?php

namespace App\Http\Controllers;

use App\Event;
use App\HackaPart;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class EventController extends Controller
{
    // For Panel

    public function showAddEvent()
    {

        $parts = HackaPart::orderBy("id","desc")->get();


        return view("panel.addEvent",["parts"=>$parts]);


    }

    public function addEvent(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "title" => "required|string",
            "type"=>"required|integer|exists:hacka_parts,id",
            "shortDesc" => "required|string|max:300",
            "fullDesc" => "required|string",
            "registerLink" => "required|url",
            "location" => "required|string|max:300",
            "date" => "required|date",
            "from" => "required|regex:/^[0-9]{2}:[0-9]{2}$/",
            "to" => "required|regex:/^[0-9]{2}:[0-9]{2}$/"
        ]);

        if ($validate->fails()) {
            return $validate->errors();
        }


        $status = Event::create(["title" => $request->input("title"), "short_description" => $request->input("shortDesc"),
            "description" => $request->input("fullDesc"), "register_link" => $request->input("registerLink"),
            "location" => $request->input("location"), "time" => $request->input("date"),
            "from" => $request->input("from"), "to" => $request->input("to"),"type"=>$request->input("type")]);

        if ($status) {
            return response()->json(["status" => 1]);
        } else {
            return response()->json(["status" => -1]);
        }

    }

    public function showManageEvents()
    {

        $data = Event::orderBy("id", "desc")->paginate(5);

        return view("panel.manageEvents", ['data' => $data]);

    }

    public function deleteEvent(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "id" => "required|integer"
        ]);

        if ($validate->fails()) {
            return $validate->errors();
        }

        $status = Event::find($request->input("id"))->delete();

        if ($status) {
            return response()->json(["status" => 1]);
        } else {
            return response()->json(["status" => -1]);
        }

    }

    public function showEditEvent($id)
    {

        $parts = HackaPart::orderBy("id","desc")->get();

        $data = Event::findOrFail($id);

        return view('panel.editEvent', ['data' => $data,'parts'=>$parts]);

    }

    public function editEvent(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "id" => "required|integer",
            "title" => "required|string",
            "type"=>"required|integer|exists:hacka_parts,id",
            "shortDesc" => "required|string|max:300",
            "fullDesc" => "required|string",
            "registerLink" => "required|url",
            "location" => "required|string|max:300",
            "date" => "required|date",
            "from" => "required|regex:/^[0-9]{2}:[0-9]{2}$/",
            "to" => "required|regex:/^[0-9]{2}:[0-9]{2}$/"
        ]);

        if ($validate->fails()) {
            return $validate->errors();
        }

        $status = Event::find($request->input("id"))->update(["title" => $request->input("title"), "short_description" => $request->input("shortDesc"),
            "description" => $request->input("fullDesc"), "register_link" => $request->input("registerLink"),
            "location" => $request->input("location"), "time" => $request->input("date"),
            "from" => $request->input("from"), "to" => $request->input("to"),"type"=>$request->input("type")]);

        if ($status) {
            return response()->json(["status" => 1]);
        } else {
            return response()->json(["status" => -1]);
        }

    }

    // For API

    public function getUpComingEvents($id)// if id ==0 then return all events of types
    {
        $now = time();
        $data = Event::orderBy("id", "desc")->where("time", ">", $now);
        if($id != 0){
            $data = $data->where("type",$id);
        }
        $data = $data->get();
        return response()->json($data);
    }

    public function getTimeLine($id)// if id ==0 then return all events of types
    {
        $end = strtotime("+2 months");
        $start = strtotime("-2 months");
        $data = Event::where("time", ">", $start)->where("time", "<", $end);
        if($id != 0){
            $data = $data->where("type",$id);
        }
        $data = $data->get();
        return response()->json($data);
    }

    public function getEventMainText($id)
    {
        $data = Event::where("id", $id)->get(["description"])->first();
        return response()->json($data);
    }
}
