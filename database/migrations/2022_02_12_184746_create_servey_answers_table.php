<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServeyAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servey_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Survey::class, 'survey_id');
            $table->timestamp('start_date')->nullable();
            $table->timestamp('_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('servey_answers');
    }
}
