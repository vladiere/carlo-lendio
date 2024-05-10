export interface SpellCardInterface {
  id: number;
  spell: string;
  power: number;
  manaCost: number;
  type: string; // e.g. offensive, defensive, utility,
  target: string; // ally, enemy, self,
  effects: string; // e.g. aoe, global, target,
  duration: number;
  cooldown: number;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface SpellCardForCreate {
  spell: string;
  power: number;
  manaCost: number;
  type: string; // e.g. offensive, defensive, utility,
  target: string; // ally, enemy, self,
  effects: string; // e.g. aoe, global, target,
  duration: number;
  cooldown: number;
  description: string;
}
