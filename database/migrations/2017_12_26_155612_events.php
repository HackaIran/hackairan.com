<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Events extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create("events",function(Blueprint $table){

            $table->increments('id');
            $table->string("title",100);
            $table->string("short_description",300);
            $table->text("description");
            $table->string("register_link",100)->nullable();
            $table->string("location",300);
            $table->string("time");
            $table->string("to","5");
            $table->string("from","5");
            $table->timestamps();

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
        Schema::dropIfExists("events");
    }
}
