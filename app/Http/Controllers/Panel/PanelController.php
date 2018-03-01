<?php

namespace App\Http\Controllers\Panel;

use App\General;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PanelController extends Controller
{
    //

    public function showIndex()
    {

        $data = General::orderBy("id", "desc")->get(['value']);


        return view("panel.index", ['data' => $data]);

    }

    public function updateGenerals(Request $request)
    {

        $validate = Validator::make($request->all(), [
            "shortDesc" => "required|string"
        ]);

        if($validate->fails()){
            return $validate->errors();
        }

        $status = General::find(1)->update(["value" => $request->input("shortDesc")]);

        if ($status) {
            return response()->json(["status" => 1]);
        } else {
            return response()->json(["status" => -1]);
        }

    }

}
