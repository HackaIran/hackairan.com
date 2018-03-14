<?php

namespace App\Http\Controllers;

use App\Gallery;
use App\GalleryImage;
use App\HackaPart;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Validator;

class GalleryController extends Controller
{
    //

    public function showAddGallery(){

        $parts = HackaPart::orderBy("id","desc")->get();

        return view("panel.addGallery",["parts"=>$parts]);
    }

    public function addGallery(Request $request){
        $validate = Validator::make($request->all(),[
            "name"=>"required|string",
            "type"=>"required|exists:hacka_parts,id",
            "images"=>"required|json"
        ]);

        if($validate->fails()){
            return $validate->errors();
        }

        $gallery = Gallery::create(["name"=>$request->input("name"),"type"=>$request->input("type")]);

        if(!$gallery){
            return response()->json(["status"=>-1]);
        }

        $images = json_decode($request->input("images"));

        foreach($images as $image){
            if(!GalleryImage::create(["image_address"=>$image,"gallery_id"=>$gallery->id])){
                return response()->json(["status"=>-1]);
            }
        }

        return response()->json(["status"=>1]);

    }

    public function showEditGallery($id){

        $parts = HackaPart::orderBy("id","desc")->get();

        $data = Gallery::findOrFail($id);

        return view("panel.editGallery",["parts"=>$parts,"data"=>$data,"id"=>$id]);

    }

    public function editGallery(Request $request){
        $validate = Validator::make($request->all(),[
            "id"=>"required|integer|exists:galleries",
            "name"=>"required|string",
            "type"=>"required|exists:hacka_parts,id",
            "images"=>"required|json"
        ]);

        if($validate->fails()){
            return $validate->errors();
        }

        $gallery = Gallery::find($request->input("id"))->update(["name"=>$request->input("name"),"type"=>$request->input("type")]);

        if(!$gallery){
            return response()->json(["status"=>-2]);
        }

        // First delete all images of the gallery

        $this->deleteAllImages($request->input("id"));


        $images = json_decode($request->input("images"));

        foreach($images as $image){
            if(!GalleryImage::create(["image_address"=>$image,"gallery_id"=>$request->input("id")])){
                return response()->json(["status"=>-4]);
            }
        }

        return response()->json(["status"=>1]);
    }

    public function deleteGallery(Request $request){

        $validate = Validator::make($request->all(),[
            "id"=>"required|integer|exists:galleries"
        ]);

        if($validate->fails()){
            return $validate->errors();
        }

        $this->deleteAllImages($request->input("id"));

        if(Gallery::find($request->input("id"))->delete()){
            return response()->json(["status"=>1]);
        }else{
            return response()->json(["status"=>-1]);
        }
    }

    public function showManageGallery(){

        $data = Gallery::orderBy("id","desc")->paginate(5);

        return view("panel.manageGalleries",["data"=>$data]);
    }

    // Privates

    private function deleteAllImages($galleryId){
        if(GalleryImage::where("gallery_id",$galleryId)->delete()){
            return true;
        }else{
            return false;
        }
    }

}
