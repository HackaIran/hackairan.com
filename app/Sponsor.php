<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sponsor extends Model
{
    //

    protected $fillable = ["name","link","logo_link"];

    public $timestamps = false;

}
