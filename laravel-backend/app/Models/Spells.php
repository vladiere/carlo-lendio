<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spells extends Model
{
    use HasFactory;

    protected $fillables = [
        'spellname',
        'power',
        'mana_cost',
        'spell_type',
        'spell_target',
        'spell_effects',
        'duration',
        'cooldown',
        'description',
    ];

    protected $attributes = [
        'status' => 'active',
    ];
}
