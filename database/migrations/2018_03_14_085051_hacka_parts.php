<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class HackaParts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create("hacka_parts",function(Blueprint $table){

            $table->increments("id");
            $table->string("address");
            $table->string("name");
            $table->string("logo_address","400")->nullable();
            $table->text("description");
            $table->string("header_image","400");
            $table->string("keywords","400");
            $table->string("short_description","100");

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
    }
}
