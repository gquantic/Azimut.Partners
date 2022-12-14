<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->id();
            $table->string('cpa_id');

            $table->foreignId('user_id')->comment('Агент')->constrained('users');
            $table->foreignId('offer_id')->comment('Проект')->constrained('offers');
            $table->foreignId('referral_id')->comment('Реферал')->nullable()->constrained('players');

            $table->string('name')->default('Нет данных');
            $table->string('type')->default('revenue_share'); // RevShare, CPA
            $table->integer('pay_percent')->default(10);

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
        Schema::dropIfExists('players');
    }
};
