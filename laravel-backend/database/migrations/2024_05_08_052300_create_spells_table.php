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
        Schema::create('spells', function (Blueprint $table) {
            $table->id();
            $table->string('spellname');
            $table->integer('power');
            $table->integer('mana_cost');
            $table->enum('spell_type', ['offensive','defensive','utility','healing','buff','debuff','summoning','area of effects','control','environmental']);
            $table->enum('spell_target', ['self','enemy','ally','multi','single','area']);
            $table->enum('spell_effects', ['direct damage','damage over time','healing','buffs','debuffs','crowd control','manipulation']);
            $table->integer('duration');
            $table->integer('cooldown');
            $table->text('description');
            $table->enum('status', ['active','deactivate'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spells');
    }
};
