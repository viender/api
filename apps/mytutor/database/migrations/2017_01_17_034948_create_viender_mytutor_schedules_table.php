<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVienderMytutorSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('viender_mytutor_schedules', function (Blueprint $table) {
            $table->increments('id');
            $table->string('day');
            $table->time('from');
            $table->time('to');
            $table->integer('tutoring_id')->unsigned();
            $table->foreign('tutoring_id')->references('id')->on('viender_mytutor_tutorings')->onDelete('cascade');
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
        Schema::dropIfExists('viender_mytutor_schedules');
    }
}
