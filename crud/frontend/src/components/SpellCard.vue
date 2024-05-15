<template>
  <div
    class="block rounded-lg text-center text-surface shadow-secondary-1 bg-gray-800 text-gray-100"
  >
    <div class="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
      {{ props.spell }}
    </div>
    <div class="p-6 capitalize">
      <div class="grid grid-cols-2 text-start">
        <h5 class="text-xl font-medium leading-tight">Power:</h5>
        <p class="text-base">{{ props.power }}</p>
      </div>
      <div class="grid grid-cols-2 text-start">
        <h5 class="text-xl font-medium leading-tight">Mana cost:</h5>
        <p class="text-base">{{ props.manaCost }}</p>
      </div>
      <div class="grid grid-cols-2 text-start">
        <h5 class="text-xl font-medium leading-tight">Type:</h5>
        <p class="text-base">{{ props.type }}</p>
      </div>
      <div class="grid grid-cols-2 text-start">
        <h5 class="text-xl font-medium leading-tight">Target:</h5>
        <p class="text-base">{{ props.target }}</p>
      </div>
      <div class="grid grid-cols-2 text-start">
        <h5 class="text-xl font-medium leading-tight">Effect:</h5>
        <p class="text-base">{{ props.effects }}</p>
      </div>
      <div class="grid grid-cols-2 text-start">
        <h5 class="text-xl font-medium leading-tight">Duration</h5>
        <p class="text-base">{{ props.duration }}</p>
      </div>
      <div class="grid grid-cols-2 text-start">
        <h5 class="text-xl font-medium leading-tight">Cooldown</h5>
        <p class="text-base">{{ props.cooldown }}</p>
      </div>
      <div class="grid grid-cols-2 text-start">
        <h5 class="text-xl font-medium leading-tight">Description</h5>
        <p class="text-base">{{ props.description }}</p>
      </div>
      <div class="grid grid-cols-2 text-start">
        <h5 class="text-xl font-medium leading-tight">Added:</h5>
        <p class="text-base">{{ formatDate(props.created_at) }}</p>
      </div>
      <div class="grid grid-cols-2 text-start">
        <h5 class="text-xl font-medium leading-tight">Last Updated:</h5>
        <p class="text-base">{{ formatDate(props.updated_at) }}</p>
      </div>
    </div>
    <div
      class="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300"
    >
      {{ formatDate(props.created_at) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { SpellCardInterface } from '../types/spells'
import { formatDate } from '../functions/format_date'

const props = defineProps<SpellCardInterface>()
</script>
