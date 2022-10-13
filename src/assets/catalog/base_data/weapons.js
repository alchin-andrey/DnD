import weaponry from "./weaponry.js";

export default {

// Простое рукопашное

      quarterstaff: 
      {
        name: "quarterstaff",
        detais: "quarterstaff_details",

        type: [weaponry.simple],

        range_min: 5,
        // если 5 то ближнее, если больше то дальнобойное
        // если ближнее, то меткость и урон от Силы
        // если дальнее, то меткость и урон от Ловкости
        throwing: null, 
        // не null - метательное - мин расстояние
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "bludgeoning_w",
      // Тип урона
      /* 
        bonus_w
        poison_w:"🧪 Ядом",
        fire_w:"🔥 Огнем",
        cold_w:"❄️ Холодом",
        electricity_w:"⚡️ Электричеством",
        acid_w:"⚗️ Кислотой",
        thunder_w: "🔊 Звуком",
        radiant_w: "✨ Светом",
        force_w: "🌈 Cиловым полем",

        piercing_w: "🗡 колющий",
        slashing_w: "🪓 рубящий",
        bludgeoning_w: "🔨 дробящий",
            
        necrotic_w: "💀 Некротический",
        psychic_w: "🧠 Психический",
      */

        damage_1_hand_num: 1,
        damage_1_hand_dice: 6,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 8,

        cost: 20,
        weight: 4,
      },

      mace: 
      {
        name: "mace",
        detais: "mace_details",

        type: [weaponry.simple],

        range_min: 5,
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        throwing: null, // метательное
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "bludgeoning_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 6,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 500,
        weight: 4,
      },

      club:
      {
        name: "club",
        detais: "club_details",

        type: [weaponry.simple],

        range_min: 5,
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        throwing: null, // метательное
        loading: null, // перезаряжающееся (надо ли??)

        light: true, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "bludgeoning_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 4,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 10,
        weight: 2,
      },

      dagger:
      {
        name: "dagger",
        detais: "dagger_details",

        type: [weaponry.simple],

        range_min: 5,
        throwing: 20, // метательное
        range_max: 60,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: true, // легкое
        heavy: null, // тяжелое
        finesse: true, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 4,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 200,
        weight: 1,
      },

      spear:
      {
        name: "spear",
        detais: "spear_details",

        type: [weaponry.simple],

        range_min: 5,
        throwing: 20, // метательное
        range_max: 60,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 6,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 8,

        cost: 100,
        weight: 3,
      },

      light_hammer:
      {
        name: "light_hammer",
        detais: "light_hammer_details",

        type: [weaponry.simple,weaponry.light_hammers],

        range_min: 5,
        throwing: 20, // метательное
        range_max: 60,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: true, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "bludgeoning_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 4,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 200,
        weight: 2,
      },
      
      javelin:
      {
        name: "javelin",
        detais: "javelin_details",

        type: [weaponry.simple],

        range_min: 5,
        throwing: 30, // метательное
        range_max: 120,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 6,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 50,
        weight: 2,
      },

      greatclub:
      {
        name: "greatclub",
        detais: "greatclub_details",

        type: [weaponry.simple],

        range_min: 5,
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        throwing: null, // метательное
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "bludgeoning_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 8,

        cost: 20,
        weight: 10,
      },

      handaxe: 
      {
        name: "handaxe",
        detais: "handaxe_details",

        type: [weaponry.simple,weaponry.hand_axes],

        range_min: 5,
        throwing: 20,
        range_max: 60,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: true, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "slashing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 6,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 50,
        weight: 2,
      },

      sickle: 
      {
        name: "sickle",
        detais: "sickle_details",

        type: [weaponry.simple],

        range_min: 5,
        throwing: null,
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: true, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "slashing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 4,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 100,
        weight: 2,
      },

// Простое дальнобойное

      light_crossbow:
      {
        name: "light_crossbow",
        detais: "light_crossbow_details",

        type: [weaponry.simple],

        range_min: 80,
        throwing: null, // метательное
        range_max: 320,

        ammunition: "bolt", // боеприпасьі (надо ли??)
        loading: true, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 8,

        cost: 2500,
        weight: 5,
      },

      dart:
      {
        name: "dart",
        detais: "dart_details",

        type: [weaponry.simple],

        range_min: 20,
        throwing: 20, // метательное
        range_max: 60,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: true, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 4,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 5,
        weight: 0.25,
      },

      shortbow:
      {
        name: "shortbow",
        detais: "shortbow_details",

        type: [weaponry.simple,weaponry.short_bows],

        range_min: 80,
        throwing: null, // метательное
        range_max: 320,

        ammunition: "arrow", // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 6,

        cost: 2500,
        weight: 2,
      },

      sling:
      {
        name: "shortbow",
        detais: "shortbow_details",

        type: [weaponry.simple],

        range_min: 80,
        throwing: null, // метательное
        range_max: 320,

        ammunition: "bullet", // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 4,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 10,
        weight: 0.1,
      },

// Воинское рукопашное

      halberd: 
      {
        name: "halberd",
        detais: "halberd_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null,
        range_max: 10,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: true, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "slashing_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 10,

        cost: 200,
        weight: 6,
      },

      war_pick:
      {
        name: "war_pick",
        detais: "war_pick_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 8,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 500,
        weight: 2,
      },

      warhammer: 
      {
        name: "warhammer",
        detais: "warhammer_details",

        type: [weaponry.military,weaponry.battle_hammers],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "bludgeoning_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 8,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 10,

        cost: 1500,
        weight: 2,
      },

      battleaxe: 
      {
        name: "battleaxe",
        detais: "battleaxe_details",

        type: [weaponry.military,weaponry.battle_axes],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "slashing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 8,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 10,

        cost: 1000,
        weight: 4,
      },

      glaive: 
      {
        name: "glaive",
        detais: "glaive_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null, // метательное
        range_max: 10,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: true, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "slashing_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 10,

        cost: 2000,
        weight: 6,
      },

      greatsword: 
      {
        name: "greatsword",
        detais: "greatsword_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: true, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "slashing_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 2,
        damage_2_hand_dice: 6,

        cost: 5000,
        weight: 6,
      },

      lance: 
      {
        name: "lance",
        detais: "lance_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null, // метательное
        range_max: 10,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piersing_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 12,

        cost: 1000,
        weight: 6,
      },

      longsword: 
      {
        name: "longsword",
        detais: "longsword_details",

        type: [weaponry.military,weaponry.long_swords],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "slashing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 8,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 10,

        cost: 1500,
        weight: 3,
      },

      whip: 
      {
        name: "whip",
        detais: "whip_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null, // метательное
        range_max: 10,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: true, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "slashing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 4,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 2000,
        weight: 3,
      },

      shortsword: 
      {
        name: "shortsword",
        detais: "shortsword_details",

        type: [weaponry.military,weaponry.short_swords],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: true, // легкое
        heavy: null, // тяжелое
        finesse: true, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piersing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 6,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 1000,
        weight: 2,
      },

      maul: 
      {
        name: "maul",
        detais: "maul_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: true, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "bludgeoning_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 2,
        damage_2_hand_dice: 6,

        cost: 1000,
        weight: 10,
      },

      morningstar: 
      {
        name: "morningstar",
        detais: "morningstar_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: true, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piersing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 8,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 1500,
        weight: 4,
      },

      pike: 
      {
        name: "pike",
        detais: "pike_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null, // метательное
        range_max: 10,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: true, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piersing_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 10,

        cost: 500,
        weight: 18,
      },

      rapier: 
      {
        name: "rapier",
        detais: "rapier_details",

        type: [weaponry.military,weaponry.rapires],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: true, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piersing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 8,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 2500,
        weight: 2,
      },

      greataxe: 
      {
        name: "greataxe",
        detais: "greataxe_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: true, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "slashing_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 12,

        cost: 3000,
        weight: 7,
      },

      scimitar: 
      {
        name: "scimitar",
        detais: "scimitar_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: true, // легкое
        heavy: null, // тяжелое
        finesse: true, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "slashing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 6,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 2500,
        weight: 3,
      },

      trident: 
      {
        name: "trident",
        detais: "trident_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: 20, // метательное
        range_max: 60,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piersing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 6,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 8,

        cost: 500,
        weight: 4,
      },

      flail: 
      {
        name: "flail",
        detais: "flail_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: null, // метательное
        range_max: null,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "bludgeoning_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 8,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 1000,
        weight: 2,
      },

// Воинское дальнобойное

      hand_crossbow:
      {
        name: "hand_crossbow",
        detais: "hand_crossbow_details",

        type: [weaponry.military,weaponry.hand_arbalets],

        range_min: 30,
        throwing: null, // метательное
        range_max: 120,

        ammunition: "bolt", // боеприпасьі (надо ли??)
        loading: true, // перезаряжающееся (надо ли??)

        light: true, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 6,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 7500,
        weight: 3,
      },

      heavy_crossbow:
      {
        name: "heavy_crossbow",
        detais: "heavy_crossbow_details",

        type: [weaponry.military],

        range_min: 100,
        throwing: null, // метательное
        range_max: 400,

        ammunition: "bolt", // боеприпасьі (надо ли??)
        loading: true, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: true, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 10,

        cost: 5000,
        weight: 18,
      },

      longbow:
      {
        name: "longbow",
        detais: "longbow_details",

        type: [weaponry.military,weaponry.long_bows],

        range_min: 150,
        throwing: null, // метательное
        range_max: 600,

        ammunition: "arrow", // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: true, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: null,
        damage_1_hand_dice: null,

        damage_2_hand_num: 1,
        damage_2_hand_dice: 8,

        cost: 5000,
        weight: 2,
      },

      blowgun:
      {
        name: "blowgun",
        detais: "blowgun_details",

        type: [weaponry.military],

        range_min: 25,
        throwing: null, // метательное
        range_max: 100,

        ammunition: "dart", // боеприпасьі (надо ли??)
        loading: true, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 1,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 1000,
        weight: 1,
      },

      net:
      {
        name: "net",
        detais: "net_details",

        type: [weaponry.military],

        range_min: 5,
        throwing: 5, // метательное
        range_max: 15,

        ammunition: null, // боеприпасьі (надо ли??)
        loading: null, // перезаряжающееся (надо ли??)

        light: null, // легкое
        heavy: null, // тяжелое
        finesse: null, // фехтовальное - меткость и урон от большего между Силой и Ловкостью

        damage_type: "piercing_w",

        damage_1_hand_num: 1,
        damage_1_hand_dice: 1,

        damage_2_hand_num: null,
        damage_2_hand_dice: null,

        cost: 100,
        weight: 3,
      },


}