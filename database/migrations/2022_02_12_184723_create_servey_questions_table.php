<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServeyQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servey_questions', function (Blueprint $table) {
            $table->id();
            $table->string('type', 45);
            $table->string('question', 2000);
            $table->longText('description')->nullable();
            $table->longText('data')->nullable();
            $table->foreignIdFor(\App\Models\Survey::class, 'survey_id');
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
        Schema::dropIfExists('servey_questions');
    }
}
