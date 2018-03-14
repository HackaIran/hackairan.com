<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HackaPart extends Model
{
    //
    public $timestamps = false;
    protected $fillable = ["address","name","logo_address","description","header_image","keywords","short_description"];
}
