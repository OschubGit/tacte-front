<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('psychology_sessions', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('Psicología');
            $table->text('description')->nullable();
            $table->date('date');
            $table->time('start_time');
            $table->time('end_time');
            $table->integer('max_allowed_reserves')->nullable()->default(1);
            $table->integer('current_reserves')->default(0);
            $table->string('status')->default('free');
            $table->foreignId('created_by')->onDelete('cascade')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('psychology_sessions');
    }
};
