<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class OurTeam extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //

        Schema::create("our_team",function(Blueprint $table){

            $table->increments('id');
            $table->string("full_name",50);
            $table->string("position",200);
            $table->string("video_link",300)->nullable();
            $table->string("linkedin_link",150);
            $table->string("email",100);
            $table->string("site",200)->nullable();
            $table->string("skype",100)->nullable();
            $table->string("twitter",100)->nullable();
            $table->string("dribble",100)->nullable();

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists("our_team");
    }
}
