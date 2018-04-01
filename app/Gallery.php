<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    //

    public $fillable = ["name","type"];

    //Relations

    public function part(){
        return $this->belongsTo("App\HackaPart","type","id");
    }

    public function images(){
        return $this->hasMany("App\GalleryImage","gallery_id","id");
    }

}
