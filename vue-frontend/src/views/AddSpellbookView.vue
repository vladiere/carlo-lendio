<template>
  <!-- Container -->
  <div class="flex flex-col items-center">
    <div class="mt-10 grid grid-cols-3 gap-5 w-3/5">
      <div class="flex flex-col gap-2 w-full">
        <label for="spellname" class="block text-xs font-semibold text-gray-600 uppercase"
          >Spellname</label
        >
        <input
          id="spellname"
          type="text"
          name="spellname"
          placeholder="Spellname"
          class="block w-full py-3 px-2 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="power" class="block text-xs font-semibold text-gray-600 uppercase">Power</label>
        <input
          id="power"
          type="number"
          min="0"
          name="power"
          placeholder="Power"
          class="block w-full py-3 px-2 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="mana_cost" class="block text-xs font-semibold text-gray-600 uppercase"
          >Mana cost</label
        >
        <input
          id="mana_cost"
          type="number"
          min="0"
          name="mana_cost"
          placeholder="Mana cost"
          class="block w-full py-3 px-2 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="type" class="block text-xs font-semibold text-gray-600 uppercase"
          >Spell type</label
        >
        <input
          id="type"
          type="text"
          name="type"
          placeholder="(e.g. Offensive, defensive, utility)"
          class="block w-full py-3 px-2 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="target" class="block text-xs font-semibold text-gray-600 uppercase"
          >Spell target</label
        >
        <input
          id="target"
          type="text"
          name="target"
          placeholder="(e.g. ally, enemy, self)"
          class="block w-full py-3 px-2 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="effects" class="block text-xs font-semibold text-gray-600 uppercase"
          >Spell effects</label
        >
        <input
          id="effects"
          type="text"
          name="effects"
          placeholder="(e.g. aoe, global, target)"
          class="block w-full py-3 px-2 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="duration" class="block text-xs font-semibold text-gray-600 uppercase"
          >Spell duration</label
        >
        <input
          id="duration"
          type="number"
          min="0"
          name="duration"
          placeholder="Duration"
          class="block w-full py-3 px-2 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="cooldown" class="block text-xs font-semibold text-gray-600 uppercase"
          >Spell CD</label
        >
        <input
          id="cooldown"
          type="number"
          min="0"
          name="cooldown"
          placeholder="Cooldown"
          class="block w-full py-3 px-2 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="cooldown" class="block text-xs font-semibold text-gray-600 uppercase"
          >Spell description</label
        >
        <input
          id="description"
          type="text"
          class="block w-full py-3 px-2 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
          placeholder="Write your spell description..."
        />
      </div>
      <button
        type="submit"
        class="w-full py-3 mt-2 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
      >
        Add Spell
      </button>
    </div>
  </div>
</template>
