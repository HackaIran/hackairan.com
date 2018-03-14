<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GalleryImage extends Model
{
    //

    public $fillable = ["image_address","gallery_id"];

    public $timestamps = false;

}
