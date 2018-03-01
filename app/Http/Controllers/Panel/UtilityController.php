<?php

namespace App\Http\Controllers\Panel;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class UtilityController extends Controller
{
    //For Panel

    public function uploadVideo(Request $request)
    {

        if ($request->hasFile('file')) {
            if ($request->file('file')->extension() == "mp4") {

                return $request->file('file')->store('assets/uploads', 'uploads');

            } else {
                return abort(404);
            }
        } else {
            return abort(404);
        }

    }

    public function uploadImage(Request $request)
    {

        if ($request->hasFile('file')) {
            if ($request->file('file')->extension() == "jpeg" || $request->file('file')->extension() == "jpg" || $request->file('file')->extension() == "png") {

                return $request->file('file')->store('assets/uploads', 'uploads');

            } else {
                return abort(404);
            }
        } else {
            return abort(404);
        }

    }

}
