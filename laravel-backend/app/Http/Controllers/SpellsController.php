<?php

namespace App\Http\Controllers;

use App\Models\Spells;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SpellsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Spells::where('status', 'active')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'spellname' => ['required','string','max:255', 'unique'.Spells::class],
            'power' => ['required','max:11'],
            'mana_cost' => ['required', 'max:11'],
            'spell_type' => ['required'],
            'spell_target' => ['required'],
            'spell_effects' => ['required'],
            'duration' => ['required','max:11'],
            'cooldown' => ['required','max:11'],
            'description' => ['required']
        ]);

        $spell = Spells::create([
            'spellname' => $request->spellname,
            'power' => $request->power,
            'mana_cost' => $request->mana_cost,
            'spell_type' => $request->spell_type,
            'spell_target' => $request->spell_target,
            'spell_effects' => $request->spell_effects,
            'duration' => $request->duration,
            'cooldown' => $request->cooldown,
            'description' => $request->description
        ]);

        $spell->save();
        return Spells::all();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $spell = Spells::findOrFail($request->id);
        return response()->json(['data' => $spell]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $spell = Spells::find($request->id);

        $request->validate([
            'spellname' => ['required','string','max:255', 'unique'.Spells::class],
            'power' => ['required','max:11'],
            'mana_cost' => ['required', 'max:11'],
            'spell_type' => ['required'],
            'spell_target' => ['required'],
            'spell_effects' => ['required'],
            'duration' => ['required','max:11'],
            'cooldown' => ['required','max:11'],
            'description' => ['required']
        ]);

        $spell->spellname = $request->spellname;
        $spell->power = $request->power;
        $spell->mana_cost = $request->mana_cost;
        $spell->spell_type = $request->spell_type;
        $spell->spell_target = $request->spell_target;
        $spell->spell_effects = $request->spell_effects;
        $spell->duration = $request->duration;
        $spell->cooldown = $request->cooldown;
        $spell->description = $request->description;

        $spell->save();

        return response()->json(['success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        $spell = Spells::find($request->id);

        $spell->status = 'deactivate';
        $spell->save();
        return response()->json(['success' => true]);
    }
}
