<template>
  <div class="grid grid-cols-3 gap-5">
    <SpellCard v-for="spells in sampleSpellCards" :key="spells.id" v-bind="spells" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import axios from 'axios'
import { User } from '../types/auth'
import { SpellCardInterface } from '../types/spells'
import SpellCardSkeleton from '../components/SpellCardSkeleton.vue'

const user = ref<User | Null>()

const handleLogout = () => {
  try {
  } catch (error) {
    console.error(error)
  }
}

const sampleSpellCards = ref<SpellCardInterface>([
  {
    id: 1,
    spell: 'Fireball',
    power: 50,
    manaCost: 20,
    description: 'Launches a fiery ball at the target.',
    type: 'offensive',
    target: 'enemy',
    effects: 'target',
    duration: 0,
    cooldown: 5,
    created_at: '2024-05-07T12:00:00Z',
    updated_at: '2024-05-07T12:00:00Z'
  },
  {
    id: 2,
    spell: 'Heal',
    power: 40,
    manaCost: 15,
    description: 'Restores health to the target.',
    type: 'defensive',
    target: 'ally',
    effects: 'target',
    duration: 0,
    cooldown: 3,
    created_at: '2024-05-07T12:00:00Z',
    updated_at: '2024-05-07T12:00:00Z'
  },
  {
    id: 3,
    spell: 'Invisibility',
    power: 0,
    manaCost: 25,
    description: 'Makes the caster invisible for a period of time.',
    type: 'utility',
    target: 'self',
    effects: 'self',
    duration: 60,
    cooldown: 60,
    created_at: '2024-05-07T12:00:00Z',
    updated_at: '2024-05-07T12:00:00Z'
  },
  {
    id: 4,
    spell: 'Shield',
    power: 0,
    manaCost: 10,
    description: 'Creates a protective shield around the target.',
    type: 'defensive',
    target: 'ally',
    effects: 'target',
    duration: 30,
    cooldown: 20,
    created_at: '2024-05-07T12:00:00Z',
    updated_at: '2024-05-07T12:00:00Z'
  },
  {
    id: 5,
    spell: 'Teleport',
    power: 0,
    manaCost: 30,
    description: 'Instantly teleports the caster to a designated location.',
    type: 'utility',
    target: 'self',
    effects: 'self',
    duration: 0,
    cooldown: 120,
    created_at: '2024-05-07T12:00:00Z',
    updated_at: '2024-05-07T12:00:00Z'
  },
  {
    id: 6,
    spell: 'Lightning Bolt',
    power: 70,
    manaCost: 25,
    description: 'Strikes the target with a bolt of lightning.',
    type: 'offensive',
    target: 'enemy',
    effects: 'target',
    duration: 0,
    cooldown: 8,
    created_at: '2024-05-07T12:00:00Z',
    updated_at: '2024-05-07T12:00:00Z'
  },
  {
    id: 7,
    spell: 'Regeneration',
    power: 0,
    manaCost: 20,
    description: 'Gradually restores health over time.',
    type: 'defensive',
    target: 'self',
    effects: 'self',
    duration: 60,
    cooldown: 30,
    created_at: '2024-05-07T12:00:00Z',
    updated_at: '2024-05-07T12:00:00Z'
  },
  {
    id: 8,
    spell: 'Freeze',
    power: 0,
    manaCost: 35,
    description: 'Freezes the target in place for a short duration.',
    type: 'offensive',
    target: 'enemy',
    effects: 'target',
    duration: 10,
    cooldown: 15,
    created_at: '2024-05-07T12:00:00Z',
    updated_at: '2024-05-07T12:00:00Z'
  },
  {
    id: 9,
    spell: 'Barrier',
    power: 0,
    manaCost: 15,
    description: 'Creates a barrier that blocks incoming attacks.',
    type: 'defensive',
    target: 'ally',
    effects: 'target',
    duration: 20,
    cooldown: 25,
    created_at: '2024-05-07T12:00:00Z',
    updated_at: '2024-05-07T12:00:00Z'
  },
  {
    id: 10,
    spell: 'Disarm',
    power: 0,
    manaCost: 30,
    description: 'Disarms the target, preventing them from using weapons.',
    type: 'utility',
    target: 'enemy',
    effects: 'target',
    duration: 15,
    cooldown: 40,
    created_at: '2024-05-07T12:00:00Z',
    updated_at: '2024-05-07T12:00:00Z'
  }
])

const SpellCard = defineAsyncComponent({
  loader: () => import('../components/SpellCard.vue'),
  loadingComponent: SpellCardSkeleton,
  delay: 500,
  timeout: 1300,
  suspensible: true
})

onMounted(async () => {
  const response = await axios.get('/api/all')
  const data = response.data
  user.value = data
  console.log(data)
})
</script>
