<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Mews\Purifier\Facades\Purifier;

class General extends Model
{
    //

    protected $fillable = ["value"];

    protected $table = "general";

    public $timestamps = false;
}
