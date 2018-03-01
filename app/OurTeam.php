<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OurTeam extends Model
{
    //

    protected $fillable = ["full_name","position","video_link","linkedin_link","email","twitter","dribble","skype","site"];

    protected $table = "our_team";

    public $timestamps = false;



}
