const spell_name = [
  // Мана {0-9} - группировать. Номер єлемента равно стоимость маньі
  {
    name: null,
    details: null,
    expanded: null, // полное описание

    type: null,
    /*
          abjuration: "ограждение",
          conjuration: "вызов",
          divination: "прорицание",
          enchantment: "чары",
          evocation: "воплощение",
          illusion: "иллюзия",
          necromancy: "некромантия",
          transmutation: "преобразование",
    */

    cast_time: null,
    // Время наложения ("reacion" | "bonus_action" | "action" | "ritual").
    cast_duration: null,
    // Длительность наложения
    cast_duration_units: null,
    // Единицьі измерения ("sec" | "round" | "min" | "hour")

    aim_target: null,
    // Цель ("self" | "creature" | "object" | "point")
    aim_type: null,
    // тип атаки ("near" | "in_distance")
    // если in_distance - показать строку дальность

    parts: [null],
    // Компонентьі
    // "verbal" | "somatic" | "touch" | "focus" | "[material]"

    spell_time: null,
    // Время заклинания ( null | "instant" | "concentration" | "till_dissipate")
    // Если concentration - добавить up_to
    spell_duration: null,
    // Длительность заклинания
    spell_duration_units: null,
    // Единицьі измерения ("sec" | "round" | "min" | "hour")

    aim_need: false,
    // нужен ли бросок на попадание
    // если true - показьівать строку aim_bonus - "меткость" - входной параметр (мод характеристики + мастерство)

    aim_range: null,
    // Дальность (ф)
    aim_aoe: null,
    // Тип области ("point" | "line" | "cone" | "cube" | "cilinder" | "sphere")
    aim_aoe_size: null,
    // Размер области (ф)

    impact_type: null,
    // Тип воздействия ( null | "damage" | "heal")
    // Если null - не показьівать строки уронов
    impact_damage_type: null,
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

    impact_size_foo: null,
    impact_size_str: null,
    impact_size_num: null,
    impact_size_dice: null,
    // рассчет урона

    impact_size_pls: null,

    saving_need: false,
    // нужен ли cпасбросок
    // если true - строка Испьітание цели - Сложность входной = 8 + мод характеристики + мастерство + особьіе мод?
    saving_attribute: null,
    // Характеристика ( null - бай дефолт из класса | характеристика)
    impact_size_saved: null,
    // урон если спас пройден — "0", "÷2"
  },
  {
    //1
    //любое из полей
  },
];

export default {

  hellish_rebuke_tiefling: [
    {
      //0
      name: "spell_hellish_rebuke_tiefling",
      details: "spell_hellish_rebuke_tiefling_details",
      expanded: "spell_hellish_rebuke_tiefling_expanded",

      type: "evocation",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 60,
      aim_aoe: "point",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",

      impact_size_saved: "÷2",
    },
  ],

  fire_breath_cone: [
    {
      name: "spell_fire_breath_cone",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Level_6_11_16",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  fire_breath_line: [
    {
      name: "spell_fire_breath_line",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "line",
      aim_aoe_size: 30,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Level_6_11_16", //1lvl + 0, 6lvl + 1, 11lvl + 2, 16lvl + 3
      impact_size_str: null,
      impact_size_num: 2, //1 + 0, 6 + 1, 11 + 2, 16 + 3
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  cold_breath_cone: [
    {
      name: "spell_cold_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "cold_w",

      impact_size_foo: "Num_Level_6_11_16",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
  ],

  electricity_breath_line: [
    {
      name: "spell_electricity_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "line",
      aim_aoe_size: 30,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: "Num_Level_6_11_16",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  acid_breath_line: [
    {
      name: "spell_acid_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "line",
      aim_aoe_size: 30,

      impact_type: "damage",
      impact_damage_type: "acid_w",

      impact_size_foo: "Num_Level_6_11_16",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  poison_breath_cone: [
    {
      name: "spell_poison_breath",
      details: "spell_breath_details",
      expanded: "spell_breath_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 0,
      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "poison_w",

      impact_size_foo: "Num_Level_6_11_16", //done
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
  ],

  darkness_tiefling: [
    {
      name: "spell_darkness_tiefling",
      details: "spell_darkness_tiefling_details",
      expanded: "spell_darkness_tiefling_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 60,
      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  enlargement_self: [
    {
      name: "spell_enlargement_self",
      details: "spell_enlargement_self_details",
      expanded: "spell_enlargement_self_expanded", // полное описание

      type: "transmutation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  invisibility_self: [
    {
      name: "spell_invisibility_self",
      details: "spell_invisibility_self_details",
      expanded: "spell_invisibility_self_expanded", // полное описание

      type: "illusion",
      classes: [],

      cast_time: "action",
      // Время наложения ("reacion" | "bonus_action" | "action" | "ritual"). Ритуал может бьіть входньім параметром (+10 мин)
      cast_duration: null,
      // Длительность наложения
      cast_duration_units: null,
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_target: "self",
      // Цель ("self" | "creature" | "object" | "point")
      aim_type: null,
      // тип атаки ("near" | "touch" | "in_distance")
      // если in_distance - показать строку дальность

      parts: ["somatic", "verbal"],
      // Компонентьі
      // "verbal" | "somatic" | "focus" | "[material]"

      spell_time: "concentration",
      // Время заклинания ( null | "instant" | "concentration" | "till_dissipate")
      // Если concentration - добавить up_to
      spell_duration: 1,
      // Длительность заклинания
      spell_duration_units: "hour",
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_need: false,
      // нужен ли бросок на попадание
      // если true - показьівать строку "меткость" - входной параметр

      aim_range: null,
      // Дальность (ф)
      aim_aoe: null,
      // Тип области ("point" | "line" | "cone" | "cube" | "cilinder" | "sphere")
      aim_aoe_size: null,
      // Размер области

      impact_type: null,
      // Тип воздействия ( null | "damage" | "heal")
      // Если null - не показьівать строку урона
      impact_damage_type: null,
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

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      // рассчет урона

      impact_size_pls: null,

      saving_need: false,
      // нужен ли cпасбросок
      // если true - строка Испьітание цели - Сложность входной = 8 + Характеристика + мастерство + особьіе мод?
      saving_attribute: null,
      // Характеристика ( null - бай дефолт из класса | характеристика)
      impact_size_saved: null,
      // рассчет урона если спас пройден
    },
  ],

  toy: [
    {
      name: "spell_toy",
      details: "spell_toy_details",
      expanded: "spell_toy_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "object",
      aim_type: "near",

      parts: ["material_10gold"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  lighter: [
    {
      name: "spell_lighter",
      details: "spell_lighter_details",
      expanded: "spell_lighter_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "object",
      aim_type: "near",

      parts: ["material_10gold"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  music_box: [
    {
      name: "spell_music_box",
      details: "spell_music_box_details",
      expanded: "spell_music_box_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "object",
      aim_type: "near",

      parts: ["material_10gold"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  faerie_fire: [
    {
      name: "spell_faerie_fire",
      details: "spell_faerie_fire_details",
      expanded: "spell_faerie_fire_expanded", // полное описание

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 60,
      aim_aoe: "cube",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
      // рассчет урона если спас пройден
    },
  ],

  rage: [
    {
      name: "spell_rage",
      details: "spell_rage_details",
      expanded: "spell_rage_expanded", // полное описание

      //level: 15,
      //expanded: "spell_rage_expanded_15",

      type: "ability",
      slot_type: "rage_slot",
      classes: [],

      cast_time: "bonus_action",
      // Время наложения ("reacion" | "bonus_action" | "action" | "ritual"). Ритуал может бьіть входньім параметром (+10 мин)
      cast_duration: null,
      // Длительность наложения
      cast_duration_units: null,
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_target: "self",
      // Цель ("self" | "creature" | "object" | "point")
      aim_type: null,
      // тип атаки ("near" | "touch" | "in_distance")
      // если in_distance - показать строку дальность

      parts: ["none"],
      // Компонентьі
      // "verbal" | "somatic" | "focus" | "[material]" | "none"

      spell_time: null,
      // Время заклинания ( null | "instant" | "concentration" | "till_dissipate")
      // Если concentration - добавить "up_to"
      spell_duration: 1,
      // Длительность заклинания
      spell_duration_units: "min",
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_need: false,
      // нужен ли бросок на попадание
      // если true - показьівать строку aim_bonus - "меткость" - входной параметр (мод характеристики + мастерство)

      aim_range: null,
      // Дальность (ф)
      aim_aoe: null,
      // Тип области ("point" | "line" | "cone" | "cube" | "cilinder" | "sphere")
      aim_aoe_size: null,
      // Размер области (ф)

      impact_type: "damage",
      // Тип воздействия ( null | "damage" | "heal")
      // Если null - не показьівать строки уронов
      impact_damage_type: "bonus_w",
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
      // impact_size_foo: "Num_Barbarian_Rage_Bonus", //done
      impact_size_foo: "Num_Level_9_16", //done
      impact_size_str: null,
      impact_size_num: 2,
      // impact_size_num: null, //this.$root.step2_classes.barbarian_rage_bonus[this.$root.MY.level],
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      // нужен ли cпасбросок
      // если true - строка Испьітание цели - Сложность входной = 8 + мод характеристики + мастерство + особьіе мод?
      saving_attribute: null,
      // Характеристика ( null - бай дефолт из класса | характеристика)
      impact_size_saved: null,
      // рассчет урона если спас пройден
    },
  ],

  reckless_attack: [
    {
      name: "spell_reckless_attack",
      details: "spell_reckless_attack_details",
      expanded: "spell_reckless_attack_expanded", // полное описание

      type: "ability",
      classes: [],

      cast_time: "instant",
      // Время наложения ("reacion" | "bonus_action" | "action" | "ritual"). Ритуал может бьіть входньім параметром (+10 мин)
      cast_duration: null,
      // Длительность наложения
      cast_duration_units: null,
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_target: "self",
      // Цель ("self" | "creature" | "object" | "point")
      aim_type: null,
      // тип атаки ("near" | "touch" | "in_distance")
      // если in_distance - показать строку дальность

      parts: ["none"],
      // Компонентьі
      // "verbal" | "somatic" | "focus" | "[material]"

      spell_time: null,
      // Время заклинания ( null | "instant" | "concentration" | "till_dissipate")
      // Если concentration - добавить up_to
      spell_duration: 1,
      // Длительность заклинания
      spell_duration_units: "round",
      // Единицьі измерения ("sec" | "round" | "min" | "hour")

      aim_need: false,
      // нужен ли бросок на попадание
      // если true - показьівать строку aim_bonus - "меткость" - входной параметр (мод характеристики + мастерство)

      aim_range: null,
      // Дальность (ф)
      aim_aoe: null,
      // Тип области ("point" | "line" | "cone" | "cube" | "cilinder" | "sphere")
      aim_aoe_size: null,
      // Размер области (ф)

      impact_type: null,
      // Тип воздействия ( null | "damage" | "heal")
      // Если null - не показьівать строки уронов
      impact_damage_type: null,
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

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      // рассчет урона

      impact_size_pls: null,

      saving_need: false,
      // нужен ли cпасбросок
      // если true - строка Испьітание цели - Сложность входной = 8 + мод характеристики + мастерство + особьіе мод?
      saving_attribute: null,
      // Характеристика ( null - бай дефолт из класса | характеристика)
      impact_size_saved: null,
      // рассчет урона если спас пройден
    },
  ],

  frenzy: [
    {
      name: "spell_frenzy",
      details: "spell_frenzy_details",
      expanded: "spell_frenzy_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["none"],
      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  intimidating_presence: [
    {
      name: "spell_intimidating_presence",
      details: "spell_intimidating_presence_details",
      expanded: "spell_intimidating_presence_expanded",

      type: "ability",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creatue",
      aim_type: "in_distance",
      parts: ["none"],
      spell_time: "till_dissipate",
      spell_duration: 2,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      //Если оно может видеть или слышать вас, оно должно совершить успешный спасбросок Мудрости (Сл равна 8 + ваш бонус мастерства + ваш модификатор Харизмы)
      impact_size_saved: null,
    },
  ],

  retaliation: [
    {
      name: "spell_retaliation",
      details: "spell_retaliation_details",
      expanded: "spell_retaliation_expanded",

      type: "ability",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creatue",
      aim_type: "near",
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      //Если оно может видеть или слышать вас, оно должно совершить успешный спасбросок Мудрости (Сл равна 8 + ваш бонус мастерства + ваш модификатор Харизмы)
      impact_size_saved: null,
    },
  ],

  beast_sense_ritual: [
    {
      name: "spell_beast_sense_ritual",
      details: "spell_beast_sense_details",
      expanded: "spell_beast_sense_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "creature",
      aim_type: "near",
      parts: ["touch"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  speak_with_animals_ritual: [
    {
      name: "spell_speak_with_animals_ritual",
      details: "spell_speak_with_animals_details",
      expanded: "spell_speak_with_animals_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  commune_with_nature: [
    {},
    {},
    {},
    {},
    {},
    {
      name: "spell_commune_with_nature",
      details: "spell_commune_with_nature_details",
      expanded: "spell_commune_with_nature_expanded",

      type: "divination",
      classes: [],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  commune_with_nature_ritual: [
    {
      name: "spell_commune_with_nature_ritual",
      details: "spell_commune_with_nature_details",
      expanded: "spell_commune_with_nature_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wolf_knock: [
    {
      name: "spell_wolf_knock",
      details: "spell_wolf_knock_details",
      expanded: "spell_wolf_knock_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      parts: ["touch"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  elk_knock: [
    {
      name: "spell_elk_knock",
      details: "spell_elk_knock_details",
      expanded: "spell_elk_knock_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      parts: ["touch"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: "damage",
      impact_damage_type: "bludgeoning_w",

      impact_size_foo: "Pls_STR", //need update
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 12,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: "0",
    },
  ],

  tiger_strike: [
    {
      name: "spell_tiger_strike",
      details: "spell_tiger_strike_details",
      expanded: "spell_tiger_strike_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      parts: ["touch"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  sneaky_attack: [
    {
      name: "spell_sneaky_attack",
      details: "spell_sneaky_attack_details",
      expanded: "spell_sneaky_attack_expanded",

      type: "ability",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_Plus_Level_2", //done
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  cunning_action: [
    {
      name: "spell_cunning_action",
      details: "spell_cunning_action_details",
      expanded: "spell_cunning_action_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  steady_aim: [
    {
      name: "spell_steady_aim",
      details: "spell_steady_aim_details",
      expanded: "spell_steady_aim_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  uncanny_dodge: [
    {
      name: "spell_uncanny_dodge",
      details: "spell_uncanny_dodge_details",
      expanded: "spell_uncanny_dodge_expanded",

      type: "ability",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fast_hands: [
    {
      name: "spell_fast_hands",
      details: "spell_fast_hands_details",
      expanded: "spell_fast_hands_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["none"],
      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fake_identity: [
    {
      name: "spell_fake_identity",
      details: "spell_fake_identity_details",
      expanded: "spell_fake_identity_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 7,
      cast_duration_units: "days",

      aim_target: "self",
      aim_type: null,
      parts: ["gold_25"],
      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fake_presence: [
    {
      name: "spell_fake_presence",
      details: "spell_fake_presence_details",
      expanded: "spell_fake_presence_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 3,
      cast_duration_units: "hour",

      aim_target: "self",
      aim_type: null,
      parts: ["creature"],
      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_sense: [
    {
      //0
      name: "spell_divine_sense",
      details: "spell_divine_sense_details",
      expanded: "spell_divine_sense_expanded",

      type: "ability",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["divine_sense_slot"],

      spell_time: null,
      spell_duration: 2,
      spell_duration_units: "rounda",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  lay_on_hands: [
    {
      //0
      name: "spell_lay_on_hands",
      details: "spell_lay_on_hands_details",
      expanded: "spell_lay_on_hands_expanded",

      type: "ability",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: "stock",

      impact_size_foo: "Num_LevelX", //done
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  side_pary: [
    {
      //0
      name: "spell_side_pary",
      details: "spell_side_pary_details",
      expanded: "spell_side_pary_expanded",

      type: "ability",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["shield"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_mana: [
    {
      //0
      name: "spell_divine_channel_mana",
      details: "spell_divine_channel_mana_details",
      expanded: "spell_divine_channel_mana_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "slot_lvl",
      impact_damage_type: null,

      impact_size_foo: "Num_Mastery_05",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_devotion_1: [
    {
      //0
      name: "spell_divine_channel_devotion_1",
      details: "spell_divine_channel_devotion_1_details",
      expanded: "spell_divine_channel_devotion_1_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "weapons",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "aim_bonus",
      impact_damage_type: null,

      impact_size_foo: "Pls_CHA", 
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_devotion_2: [
    {
      //0
      name: "spell_divine_channel_devotion_2",
      details: "spell_divine_channel_devotion_2_details",
      expanded: "spell_divine_channel_devotion_2_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  divine_channel_antients_1: [
    {
      //0
      name: "spell_divine_channel_antients_1",
      details: "spell_divine_channel_antients_1_details",
      expanded: "spell_divine_channel_antients_1_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    },
  ],

  divine_channel_antients_2: [
    {
      //0
      name: "spell_divine_channel_antients_2",
      details: "spell_divine_channel_antients_2_details",
      expanded: "spell_divine_channel_antients_2_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  divine_channel_vengence_1: [
    {
      //0
      name: "spell_divine_channel_vengence_1",
      details: "spell_divine_channel_vengence_1_details",
      expanded: "spell_divine_channel_vengence_1_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  divine_channel_vengence_2: [
    {
      //0
      name: "spell_divine_channel_vengence_2",
      details: "spell_divine_channel_vengence_2_details",
      expanded: "spell_divine_channel_vengence_2_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  maneuver_evasive_footwork: [
    {
      name: "spell_maneuver_evasive_footwork",
      details: "spell_maneuver_evasive_footwork_details",
      expanded: "spell_maneuver_evasive_footwork_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: "bonus_w_fem",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_lunging_attack: [
    {
      name: "spell_maneuver_lunging_attack",
      details: "spell_maneuver_lunging_attack_details",
      expanded: "spell_maneuver_lunging_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_maneuvering_attack: [
    {
      name: "spell_maneuver_maneuvering_attack",
      details: "spell_maneuver_maneuvering_attack_details",
      expanded: "spell_maneuver_maneuvering_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_menacing_attack: [
    {
      name: "spell_maneuver_menacing_attack",
      details: "spell_maneuver_menacing_attack_details",
      expanded: "spell_maneuver_menacing_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  maneuver_feinting_attack: [
    {
      name: "spell_maneuver_feinting_attack",
      details: "spell_maneuver_feinting_attack_details",
      expanded: "spell_maneuver_feinting_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_disarming_attack: [
    {
      name: "spell_maneuver_disarming_attack",
      details: "spell_maneuver_disarming_attack_details",
      expanded: "spell_maneuver_disarming_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    }
  ],

  maneuver_trip_attack: [
    {
      name: "spell_maneuver_trip_attack",
      details: "spell_maneuver_trip_attack_details",
      expanded: "spell_maneuver_trip_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    }
  ],

  maneuver_riposte: [
    {
      name: "spell_maneuver_riposte",
      details: "spell_maneuver_riposte_details",
      expanded: "spell_maneuver_riposte_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_distracting_strike: [
    {
      name: "spell_maneuver_distracting_strike",
      details: "spell_maneuver_distracting_strike_details",
      expanded: "spell_maneuver_distracting_strike_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_parry: [
    {
      name: "spell_maneuver_parry",
      details: "spell_maneuver_parry_details",
      expanded: "spell_maneuver_parry_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "reduction_w",

      impact_size_foo: "Pls_DEX",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_goading_attack: [
    {
      name: "spell_maneuver_goading_attack",
      details: "spell_maneuver_goading_attack_details",
      expanded: "spell_maneuver_goading_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 2,
      spell_duration_units: "rounda",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  maneuver_rally: [
    {
      name: "spell_maneuver_rally",
      details: "spell_maneuver_rally_details",
      expanded: "spell_maneuver_rally_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Pls_CHA",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_pushing_attack: [
    {
      name: "spell_maneuver_pushing_attack",
      details: "spell_maneuver_pushing_attack_details",
      expanded: "spell_maneuver_pushing_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    }
  ],

  maneuver_precision_attack: [
    {
      name: "spell_maneuver_precision_attack",
      details: "spell_maneuver_precision_attack_details",
      expanded: "spell_maneuver_precision_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "aim_bonus",
      impact_damage_type: "bonus_w_fem",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_commanders_strike: [
    {
      name: "spell_maneuver_commanders_strike",
      details: "spell_maneuver_commanders_strike_details",
      expanded: "spell_maneuver_commanders_strike_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  maneuver_sweeping_attack: [
    {
      name: "spell_maneuver_sweeping_attack",
      details: "spell_maneuver_sweeping_attack_details",
      expanded: "spell_maneuver_sweeping_attack_expanded",

      type: "ability",
      slot_type: "superiority_dice_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  inspiration: [
    {
      name: "spell_inspiration",
      details: "spell_inspiration_details",
      expanded: "spell_inspiration_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Num_Lvl_Plus_CHA",
      impact_size_str: 6,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  grapple: [
    {
      name: "spell_grapple",
      details: "spell_grapple_details",
      expanded: "spell_grapple_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  healer_tooling: [
    {
      name: "spell_healer_tooling",
      details: "spell_healer_tooling_details",
      expanded: "spell_healer_tooling_expanded",

      type: "ability",
      slot_type: "healers_tool_slot",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["healers_tool"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: 4,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  extra_strike: [
    {
      name: "spell_extra_strike",
      details: "spell_extra_strike_details",
      expanded: "spell_extra_strike_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  heavy_strike: [
    {
      name: "spell_heavy_strike",
      details: "spell_heavy_strike_details",
      expanded: "spell_heavy_strike_expanded",

      type: "ability",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  polearm_strike: [
    {
      name: "spell_polearm_strike",
      details: "spell_polearm_strike_details",
      expanded: "spell_polearm_strike_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: 10,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bludgeoning_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  shield_push: [
    {
      name: "spell_shield_push",
      details: "spell_shield_push_details",
      expanded: "spell_shield_push_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "push",
      impact_damage_type: null,

      impact_size_foo: "Num_Feet",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  shield_block: [
    {
      name: "spell_shield_block",
      details: "spell_shield_block_details",
      expanded: "spell_shield_block_expanded",

      type: "ability",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  heavy_shot: [
    {
      name: "spell_heavy_shot",
      details: "spell_heavy_shot_details",
      expanded: "spell_heavy_shot_expanded",

      type: "ability",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  charge_attack: [
    {
      name: "spell_charge_attack",
      details: "spell_charge_attack_details",
      expanded: "spell_charge_attack_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  charge_push: [
    {
      name: "spell_charge_push",
      details: "spell_charge_push_details",
      expanded: "spell_charge_push_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "push",
      impact_damage_type: null,

      impact_size_foo: "Num_Feet",
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  learn_ritual: [
    {
      name: "spell_learn_ritual",
      details: "spell_learn_ritual_details",
      expanded: "spell_learn_ritual_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 2,
      cast_duration_units: "hour_per_lvl",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["gold50_per_lvl"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  crossbow_shot: [
    {
      name: "spell_crossbow_shot",
      details: "spell_crossbow_shot_details",
      expanded: "spell_crossbow_shot_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  create_crypt: [
    {
      name: "spell_create_crypt",
      details: "spell_create_crypt_details",
      expanded: "spell_create_crypt_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligenct",
      impact_size_saved: null,
    }
  ],

  bardic_inspiration: [
    {
      name: "spell_bardic_inspiration",
      details: "spell_bardic_inspiration_details",
      expanded: "spell_bardic_inspiration_expanded",

      type: "ability",
      slot_type: "bardic_inspiration_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "dice",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Dice_16_58_1010_1512",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  song_of_rest: [
    {
      name: "spell_song_of_rest",
      details: "spell_song_of_rest_details",
      expanded: "spell_song_of_rest_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "heal",
      impact_damage_type: "bonus_o_w",

      impact_size_foo: "Dice_16_98_1310_1712",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  cutting_word: [
    {
      name: "spell_cutting_word",
      details: "spell_cutting_word_details",
      expanded: "spell_cutting_word_expanded",

      type: "ability",
      slot_type: "bardic_inspiration_slot",
      classes: [],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "reduction_w",
      impact_damage_type: null,

      impact_size_foo: "Dice_16_58_1010_1512",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  second_wind: [
    {
      name: "spell_second_wind",
      details: "spell_second_wind_details",
      expanded: "spell_second_wind_expanded",

      type: "ability",
      slot_type: "second_wind_slot",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Pls_Lvl",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  action_surge: [
    {
      name: "spell_action_surge",
      details: "spell_action_surge_details",
      expanded: "spell_action_surge_expanded",

      type: "ability",
      slot_type: "action_surge_slot",
      classes: [],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  weapon_bond: [
    {
      name: "spell_weapon_bond",
      details: "spell_weapon_bond_details",
      expanded: "spell_weapon_bond_expanded",

      type: "ability",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  call_bonbed_weapon: [
    {
      name: "spell_call_bonbed_weapon",
      details: "spell_call_bonbed_weapon_details",
      expanded: "spell_call_bonbed_weapon_expanded",

      type: "ability",
      classes: [],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  druid_message: [
    {
      //0
      name: "spell_druid_message",
      details: "spell_druid_message_details",
      expanded: "spell_druid_message_expanded",

      type: "ability",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  prepare_shield: [
    {
      //0
      name: "spell_prepare_shield",
      details: "spell_prepare_shield_details",
      expanded: "spell_prepare_shield_expanded",

      type: "ability",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "armor_shield",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: 2,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wild_shape: [
    {
      //0
      name: "spell_wild_shape",
      details: "spell_wild_shape_details",
      expanded: "spell_wild_shape_expanded",

      type: "ability",
      slot_type: "wild_shape_slot",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_2_4_8_Lvl__Dur_05_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wild_shape_combat: [
    {
      //0
      name: "spell_wild_shape_combat",
      details: "spell_wild_shape_combat_details",
      expanded: "spell_wild_shape_combat_expanded",

      type: "ability",
      classes: ["druid"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_2_4_8_9_10_12_15_18_Lvl__Dur_05_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  wild_shape_heal: [
    {},
    {
      //1
      name: "spell_wild_shape_heal",
      details: "spell_wild_shape_heal_details",
      expanded: "spell_wild_shape_heal_expanded",

      type: "ability",
      classes: ["druid"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["spell_wild_shape_combat"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},{},{},{},{},{},{},{}
  ],

  find_familiar_druid: [
    {
      name: "spell_find_familiar_druid",
      details: "spell_find_familiar_druid_details",
      expanded: "spell_find_familiar_druid_expanded",

      type: "ability",
      slot_type: "wild_shape_slot",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Dur_05_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  alter_self_druid: [
    {
      name: "spell_alter_self_druid",
      details: "spell_alter_self_details",
      expanded: "spell_alter_self_expanded",

      type: "ability",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_undead: [
    {
      //0
      name: "spell_divine_channel_undead",
      details: "spell_divine_channel_undead_details",
      expanded: "spell_divine_channel_undead_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_5_8_11_14_17_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  divine_intervention: [
    {
      //0
      name: "spell_divine_intervention",
      details: "spell_divine_intervention_details",
      expanded: "spell_divine_intervention_expanded",

      type: "ability",
      slot_type: "divine_intervention_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_20_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  thunder_wrath: [
    {
      //0
      name: "spell_thunder_wrath",
      details: "spell_thunder_wrath_details",
      expanded: "spell_thunder_wrath_expanded",

      type: "ability",
      slot_type: "thunder_wrath_slot",
      classes: ["cleric"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  thunder_strike: [
    {
      //0
      name: "spell_thunder_strike",
      details: "spell_thunder_strike_details",
      expanded: "spell_thunder_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "push",
      impact_damage_type: null,

      impact_size_foo: "Num_Feet",
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  inspired_attack: [
    {
      name: "spell_inspired_attack",
      details: "spell_inspired_attack_details",
      expanded: "spell_inspired_attack_expanded",

      type: "ability",
      slot_type: "inspired_attack_slot",
      classes: ["cleric"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  cleric_extra_damage: [
    {
      name: "spell_cleric_extra_damage",
      details: "spell_cleric_extra_damage_details",
      expanded: "spell_cleric_extra_damage_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_WIS",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  cleric_see_past: [
    {
      name: "spell_cleric_see_past",
      details: "spell_cleric_see_past_details",
      expanded: "spell_cleric_see_past_expanded",

      type: "ability",
      slot_type: "cleric_see_past_slot",
      classes: ["cleric"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "concentration",
      spell_duration: null,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 50,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Dur_Wisdom_Total",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  tricker_bless: [
    {
      name: "spell_tricker_bless",
      details: "spell_tricker_bless_details",
      expanded: "spell_tricker_bless_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  dampen_elements: [
    {
      name: "spell_dampen_elements",
      details: "spell_dampen_elements_details",
      expanded: "spell_dampen_elements_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  warding_flare: [
    {
      name: "spell_warding_flare",
      details: "spell_warding_flare_details",
      expanded: "spell_warding_flare_expanded",

      type: "ability",
      slot_type: "warding_flare_slot",
      classes: ["cleric"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_6_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  crown_of_light: [
    {
      name: "spell_crown_of_light",
      details: "spell_crown_of_light_details",
      expanded: "spell_crown_of_light_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 60,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  // ==

  divine_channel_wrath: [
    {
      //0
      name: "spell_divine_channel_wrath",
      details: "spell_divine_channel_wrath_details",
      expanded: "spell_divine_channel_wrath_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_directed_strike: [
    {
      //0
      name: "spell_divine_channel_directed_strike",
      details: "spell_divine_channel_directed_strike_details",
      expanded: "spell_divine_channel_directed_strike_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "aim_bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: 10,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_war_god_bless: [
    {
      //0
      name: "spell_divine_channel_war_god_bless",
      details: "spell_divine_channel_war_god_bless_details",
      expanded: "spell_divine_channel_war_god_bless_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "aim_bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: 10,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_save_life: [
    {
      //0
      name: "spell_divine_channel_save_life",
      details: "spell_divine_channel_save_life_details",
      expanded: "spell_divine_channel_save_life_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: "sum_w",

      impact_size_foo: "Num_LevelX",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  divine_channel_learn_tool: [
    {
      name: "spell_divine_channel_learn_tool",
      details: "spell_divine_channel_learn_tool_details",
      expanded: "spell_divine_channel_learn_tool_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: "Pls_Mastery",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  divine_channel_read_thoughts: [
    {
      name: "spell_divine_channel_read_thoughts",
      details: "spell_divine_channel_read_thoughts_details",
      expanded: "spell_divine_channel_read_thoughts_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  divine_channel_mirror_image: [
    {
      name: "spell_divine_channel_mirror_image",
      details: "spell_divine_channel_mirror_image_details",
      expanded: "spell_divine_channel_mirror_image_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_17_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  divine_channel_cloak_of_shadows: [
    {
      name: "spell_divine_channel_cloak_of_shadows",
      details: "spell_divine_channel_cloak_of_shadows_details",
      expanded: "spell_divine_channel_cloak_of_shadows_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  divine_channel_charm_alimal_plant: [
    {
      name: "spell_divine_channel_charm_alimal_plant",
      details: "spell_divine_channel_charm_alimal_plant_details",
      expanded: "spell_divine_channel_charm_alimal_plant_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["focus", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: "Det_17_Lvl",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  divine_channel_radiance_dawn: [
    {
      name: "spell_divine_channel_radiance_dawn",
      details: "spell_divine_channel_radiance_dawn_details",
      expanded: "spell_divine_channel_radiance_dawn_expanded",

      type: "ability",
      slot_type: "divine_channel_slot",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["focus"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Pls_Lvl",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    }
  ],

  // --

  divine_strike_sound: [
    {
      //1
      name: "spell_divine_strike_sound",
      details: "spell_divine_strike_details",
      expanded: "spell_divine_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "sound_w",

      impact_size_foo: "Num_Lvl14_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  divine_strike_weapon: [
    {
      //1
      name: "spell_divine_strike_weapon",
      details: "spell_divine_strike_details",
      expanded: "spell_divine_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_Lvl14_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  divine_strike_radiant: [
    {
      //1
      name: "spell_divine_strike_radiant",
      details: "spell_divine_strike_details",
      expanded: "spell_divine_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Lvl14_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  divine_strike_poison: [
    {
      //1
      name: "spell_divine_strike_poison",
      details: "spell_divine_strike_details",
      expanded: "spell_divine_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "poison_w",

      impact_size_foo: "Num_Lvl14_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  divine_strike_nature: [
    {
      //1
      name: "spell_divine_strike_nature",
      details: "spell_divine_strike_nature_details",
      expanded: "spell_divine_strike_expanded",

      type: "ability",
      classes: ["cleric"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: null,

      impact_size_foo: "Num_Lvl14_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  // ------

  fey_presence: [
    {
      name: "spell_fey_presence",
      details: "spell_fey_presence_details",
      expanded: "spell_fey_presence_expanded",

      type: "ability",
      slot_type: "fey_presence_slot",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 10,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  create_weapon: [
    {
      name: "spell_create_weapon",
      details: "spell_create_weapon_details",
      expanded: "spell_create_weapon_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  convert_weapon: [
    {
      name: "spell_convert_weapon",
      details: "spell_convert_weapon_details",
      expanded: "spell_convert_weapon_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  find_familiar_warlock: [
    {
      //0
      name: "spell_find_familiar_warlock",
      details: "spell_find_familiar_warlock_details",
      expanded: "spell_find_familiar_warlock_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["material_familiar_10gold", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  gaze_of_two_minds: [
    {
      //0
      name: "spell_gaze_of_two_minds",
      details: "spell_gaze_of_two_minds_details",
      expanded: "spell_gaze_of_two_minds_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: null,
      spell_duration: 2,
      spell_duration_units: "rounda",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  investment_of_the_chain_master: [
    {
      //0
      name: "spell_investment_of_the_chain_master",
      details: "spell_investment_of_the_chain_master_details",
      expanded: "spell_investment_of_the_chain_master_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "familiar",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  mage_armor_shadow: [
    {
      //0
      name: "spell_mage_armor_shadow",
      details: "spell_mage_armor_details",
      expanded: "spell_mage_armor_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: 3,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  speak_with_animals_warlock: [
    {
      name: "spell_speak_with_animals_warlock",
      details: "spell_speak_with_animals_details",
      expanded: "spell_speak_with_animals_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  eldritch_blast_slow: [
    {
      //0
      name: "spell_eldritch_blast_slow",
      details: "spell_eldritch_blast_slow_details",
      expanded: "spell_eldritch_blast_slow_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "slowing",
      impact_damage_type: null,

      impact_size_foo: "Num_Feet",
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  disguise_self_warlock: [
    {
      //0
      name: "spell_disguise_self_warlock",
      details: "spell_disguise_self_details",
      expanded: "spell_disguise_self_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  eldritch_blast_distant: [
    {
      //0
      name: "spell_eldritch_blast_distant",
      details: "spell_eldritch_blast_distant_details",
      expanded: "spell_eldritch_blast_distant_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 300,

      parts: ["none"],

      spell_time: "always",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  false_life_warlock: [
    {
      //1
      name: "spell_false_life_warlock",
      details: "spell_false_life_details",
      expanded: "spell_false_life_warlock_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: null, 
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: 4,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  eldritch_blast_damage: [
    {
      //0
      name: "spell_eldritch_blast_damage",
      details: "spell_eldritch_blast_damage_details",
      expanded: "spell_eldritch_blast_damage_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_CHA",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  eldritch_blast_push: [
    {
      //0
      name: "spell_eldritch_blast_push",
      details: "spell_eldritch_blast_push_details",
      expanded: "spell_eldritch_blast_push_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "push",
      impact_damage_type: null,

      impact_size_foo: "Num_Feet",
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  rebuke_of_the_talisman: [
    {
      //0
      name: "spell_rebuke_of_the_talisman",
      details: "spell_rebuke_of_the_talisman_details",
      expanded: "spell_rebuke_of_the_talisman_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: "Num_Mastery",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  detect_magic_warlock: [
    {
      //0
      name: "spell_detect_magic_warlock",
      details: "spell_detect_magic_details",
      expanded: "spell_detect_magic_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: null,
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["somatic", "verbal"],

      spell_time: "contentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  silent_image_warlock: [
    {
      //1
      name: "spell_silent_image_warlock",
      details: "spell_silent_image_details",
      expanded: "spell_silent_image_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: null,
      aim_range: 60,
      aim_aoe: "cube",
      aim_aoe_size: 15,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  restore_mana_warlock: [
    {
      //1
      name: "spell_restore_mana_warlock",
      details: "spell_restore_mana_warlock_details",
      expanded: "spell_restore_mana_warlock_expanded",

      type: "ability",
      slot_type: "inner_reserve_slot",
      classes: ["warlock"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: null,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  misty_escape: [
    {
      name: "spell_misty_escape",
      details: "spell_misty_escape_details",
      expanded: "spell_misty_escape_expanded",

      type: "ability",
      slot_type: "misty_escape_slot",
      classes: ["warlock"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 60,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  beguiling_defenses: [
    {
      name: "spell_beguiling_defenses",
      details: "spell_beguiling_defenses_details",
      expanded: "spell_beguiling_defenses_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  dark_delirium: [
    {
      name: "spell_dark_delirium",
      details: "spell_dark_delirium_details",
      expanded: "spell_dark_delirium_expanded",

      type: "ability",
      slot_type: "dark_delirium_slot",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 60,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  dark_ones_blessing: [
    {
      name: "spell_dark_ones_blessing",
      details: "spell_dark_ones_blessing_details",
      expanded: "spell_dark_ones_blessing_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: "temporary",

      impact_size_foo: "Num_CHA_Plus_Lvl_Min1",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  dark_ones_own_luck: [
    {
      name: "spell_dark_ones_own_luck",
      details: "spell_dark_ones_own_luck_details",
      expanded: "spell_dark_ones_own_luck_expanded",

      type: "ability",
      slot_type: "dark_ones_own_luck_slot",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  hurl_through_hell: [
    {
      name: "spell_hurl_through_hell",
      details: "spell_hurl_through_hell_details",
      expanded: "spell_hurl_through_hell_expanded",

      type: "ability",
      slot_type: "hurl_through_hell_slot",
      classes: ["warlock"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 10,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  entropic_ward: [
    {
      name: "spell_entropic_ward",
      details: "spell_entropic_ward_details",
      expanded: "spell_entropic_ward_expanded",

      type: "ability",
      slot_type: "entropic_ward_slot",
      classes: ["warlock"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  create_thrall: [
    {
      name: "spell_create_thrall",
      details: "spell_create_thrall_details",
      expanded: "spell_create_thrall_expanded",

      type: "ability",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  unarmed_strike_bonus: [
    {
      name: "spell_unarmed_strike_bonus",
      details: "spell_unarmed_strike_bonus_details",
      expanded: "spell_unarmed_strike_bonus_expanded",

      type: "ability",
      classes: ["monk"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  step_of_the_wind: [
    {
      name: "spell_step_of_the_wind",
      details: "spell_step_of_the_wind_details",
      expanded: "spell_step_of_the_wind_expanded",

      type: "ability",
      slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  patient_defense: [
    {
      name: "spell_patient_defense",
      details: "spell_patient_defense_details",
      expanded: "spell_patient_defense_expanded",

      type: "ability",
      slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  flurry_of_blows: [
    {
      name: "spell_flurry_of_blows",
      details: "spell_flurry_of_blows_details",
      expanded: "spell_flurry_of_blows_expanded",

      type: "ability",
      slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  dedicated_weapon: [
    {
      name: "spell_dedicated_weapon",
      details: "spell_dedicated_weapon_details",
      expanded: "spell_dedicated_weapon_expanded",

      type: "ability",
      //slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "short_rest",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  deflect_missiles: [
    {
      name: "spell_deflect_missiles",
      details: "spell_deflect_missiles_details",
      expanded: "spell_deflect_missiles_expanded",

      type: "ability",
      //slot_type: "chi_slot",
      classes: ["monk"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: 60,

      parts: ["touch"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "reduction_w",

      impact_size_foo: "Pls_DEX_Plus_Lvl",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  // All spells / 0 ----------------------------------------------------------

  acid_splash: [
    {
      //0

      name: "spell_acid_splash",
      details: "spell_acid_splash_details",
      expanded: "spell_acid_splash_expanded",

      type: "evocation",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 60,
      aim_aoe: "point",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "acid_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
  ],

  blade_ward: [
    {
      //0
      name: "spell_blade_ward",
      details: "spell_blade_ward_details",
      expanded: "spell_blade_ward_expanded",

      type: "abjuration",
      classes: ["warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  chill_touch: [
    {
      //0

      name: "spell_chill_touch",
      details: "spell_chill_touch_details",
      expanded: "spell_chill_touch_expanded",

      type: "evocation",
      classes: ["sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: true,
      aim_range: 120,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  dancing_lights: [
    {
      name: "spell_dancing_lights",
      details: "spell_dancing_lights_details",
      expanded: "spell_dancing_lights_expanded", // полное описание

      type: "evocation",
      classes: ["artificer", "bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_range: 120,
      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  druidcraft: [
    {
      //0
      name: "spell_druidcraft",
      details: "spell_druidcraft_details",
      expanded: "spell_druidcraft_expanded",

      type: "transmutation",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: 30,
      aim_aoe: "cube",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  eldritch_blast: [
    {
      //0

      name: "spell_eldritch_blast",
      details: "spell_eldritch_blast_details",
      expanded: "spell_eldritch_blast_expanded",

      type: "evocation",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: 120,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "force_w",

      impact_size_foo: "Str_X_Level_5_11_17", //1lvl = 1×, 5lvl = 2×, 11lvl = 3×, 17lvl = 4×
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fire_bolt: [
    {
      //0

      name: "spell_fire_bolt",
      details: "spell_fire_bolt_details",
      expanded: "spell_fire_bolt_expanded",

      type: "evocation",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: 120,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  friends: [
    {
      //0

      name: "spell_friends",
      details: "spell_friends_details",
      expanded: "spell_friends_expanded",

      type: "enchantment",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: null,

      parts: ["focus", "somatic"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  guidance: [
    {
      //0
      name: "spell_guidance",
      details: "spell_guidance_details",
      expanded: "spell_guidance_expanded",

      type: "divination",
      classes: ["artificer", "cleric", "druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",

      parts: ["touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "dice_throw",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  light: [
    {
      //0

      name: "spell_light",
      details: "spell_light_details",
      expanded: "spell_light_expanded",

      type: "evocation",
      classes: ["artificer", "bard", "cleric", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",

      parts: ["focus", "touch", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_range: null,
      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  mage_hand: [
    {
      //0

      name: "spell_mage_hand",
      details: "spell_mage_hand_details",
      expanded: "spell_mage_hand_expanded",

      type: "conjuration",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  mending: [
    {
      //0
      name: "spell_mending",
      details: "spell_mending_details",
      expanded: "spell_mending_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "cleric", "druid", "sorcerer", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "near",

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  message: [
    {
      //0
      name: "spell_message",
      details: "spell_message_details",
      expanded: "spell_message_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: 120,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  poison_spray: [
    {
      //0

      name: "spell_poison_spray",
      details: "spell_poison_spray_details",
      expanded: "spell_poison_spray_expanded",

      type: "conjuration",
      classes: ["artificer", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 10,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "poison_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 12,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "0",
    },
  ],

  prestidigitation: [
    {
      //0
      name: "spell_prestidigitation",
      details: "spell_prestidigitation_details",
      expanded: "spell_prestidigitation_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",

      parts: ["somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  produce_flame: [
    {
      //0
      name: "spell_produce_flame",
      details: "spell_produce_flame_details",
      expanded: "spell_produce_flame_expanded",

      type: "conjuration",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "up_to",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: true,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  resistance: [
    {
      //0
      name: "spell_resistance",
      details: "spell_resistance_details",
      expanded: "spell_resistance_expanded",

      type: "abjuration",
      classes: ["artificer", "cleric", "druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "dice_throw",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  ray_of_frost: [
    {
      //0

      name: "spell_ray_of_frost",
      details: "spell_ray_of_frost_details",
      expanded: "spell_ray_of_frost_expanded",

      type: "evocation",
      classes: ["artificer", "druid", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: 60,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "cold_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  sacred_flame: [
    {
      //0

      name: "spell_sacred_flame",
      details: "spell_sacred_flame_details",
      expanded: "spell_sacred_flame_expanded",

      type: "evocation",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: 60,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "0",
    },
  ],

  shillelagh: [
    {
      //0
      name: "spell_shillelagh",
      details: "spell_shillelagh_details",
      expanded: "spell_shillelagh_expanded",

      type: "transmutation",
      classes: ["druid"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "material_shillelagh",
      aim_type: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "new_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  shocking_grasp: [
    {
      //0

      name: "spell_shocking_grasp",
      details: "spell_shocking_grasp_details",
      expanded: "spell_shocking_grasp_expanded",

      type: "evocation",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",

      parts: ["touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  small_illusion: [
    {
      name: "spell_small_illusion",
      details: "spell_small_illusion_details",
      expanded: "spell_small_illusion_expanded", // полное описание

      type: "illusion",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["focus", "somatic"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 30,
      aim_aoe: "cube",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      // рассчет урона

      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  spare_the_dying: [
    {
      //0
      name: "spell_spare_the_dying",
      details: "spell_spare_the_dying_details",
      expanded: "spell_spare_the_dying_expanded",

      type: "necromancy",
      classes: ["artificer", "cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",

      parts: ["touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  thaumaturgy: [
    {
      //0
      name: "spell_thaumaturgy",
      details: "spell_thaumaturgy_details",
      expanded: "spell_thaumaturgy_expanded",

      type: "transmutation",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["verbal"],

      spell_time: "up_to",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 30,
      aim_aoe: "sphere",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  true_strike: [
    {
      //0
      name: "spell_true_strike",
      details: "spell_true_strike_details",
      expanded: "spell_true_strike_expanded",

      type: "divination",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  vicious_mockery: [
    {
      //0

      name: "spell_vicious_mockery",
      details: "spell_vicious_mockery_details",
      expanded: "spell_vicious_mockery_expanded",

      type: "enchantment",
      classes: ["bard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,
      aim_range: 60,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: "0",
    },
  ],

  thorn_whip: [
    {
      //0
      name: "spell_thorn_whip",
      details: "spell_thorn_whip_details",
      expanded: "spell_thorn_whip_expanded",

      type: "transmutation",
      classes: ["artificer", "druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: 30,
      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "piercing_w",

      impact_size_foo: "Num_Level_5_11_17", //1lvl + 0, 5lvl + 1, 11lvl + 2, 17lvl + 3
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  // All spells / 1 -----------------------------------------------------------

  hellish_rebuke: [
    {
      //0
    },
    {
      //1
      name: "spell_hellish_rebuke",
      details: "spell_hellish_rebuke_details",
      expanded: "spell_hellish_rebuke_expanded",

      type: "evocation",
      classes: ["warlock"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,
      aim_range: 60,
      aim_aoe: "point",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "slashing_w",

      impact_size_foo: "Num_Plus_1", //spell{1} = num, spell{2} = num+1, spell{3} = num+2 ...
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
    {
      //2
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 3,
      // impact_size_dice: 10,
    },
    {
      //3
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 4,
      // impact_size_dice: 10,
    },
    {
      //4
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 5,
      // impact_size_dice: 10,
    },
    {
      //5
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 6,
      // impact_size_dice: 10,
    },
    {
      //6
      // name: "spell_hellish_rebuke",
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 7,
      // impact_size_dice: 10,
    },
    {
      //7
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 8,
      // impact_size_dice: 10,
    },
    {
      //8
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 9,
      // impact_size_dice: 10,
    },
    {
      //9
      // impact_size_foo: null,
      // impact_size_str: null, impact_size_num: 10,
      // impact_size_dice: 10,
    },
  ],

  silent_image: [
    {
      //0
    },
    {
      //1
      name: "spell_silent_image",
      details: "spell_silent_image_details",
      expanded: "spell_silent_image_expanded",

      type: "illusion",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: null,
      aim_range: 60,
      aim_aoe: "cube",
      aim_aoe_size: 15,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  bless: [
    {
      //0
    },
    {
      //1
      name: "spell_bless",
      details: "spell_bless_details",
      expanded: "spell_bless_expanded",

      type: "enchantment",
      classes: ["cleric", "paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_range: 30,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "dice_throw",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Str_X_Plus_1", //spell{1} = 3×, spell{2} = 4×, spell{3} = 5× ...
      impact_size_str: 3,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  divine_favor: [
    {
      //0
    },
    {
      //1
      name: "spell_divine_favor",
      details: "spell_divine_favor_details",
      expanded: "spell_divine_favor_expanded",

      type: "evocation",
      classes: ["paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_range: null,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  witch_bolt: [
    {
      //0
    },
    {
      //1
      name: "spell_witch_bolt",
      details: "spell_witch_bolt_details",
      expanded: "spell_witch_bolt_expanded",

      type: "evocation",
      classes: ["sorcerer", "warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "electricity_w",

      impact_size_foo: "Num_Plus_1", //spell{1} = num, spell{2} = num+1, spell{3} = num+2 ...
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 12,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  thunderwave: [
    {
      //0
    },
    {
      //1
      name: "spell_thunderwave",
      details: "spell_thunderwave_details",
      expanded: "spell_thunderwave_expanded",

      type: "evocation",
      classes: ["bard", "druid", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "sound_w",

      impact_size_foo: "Num_Plus_1", //spell{1} = num, spell{2} = num+1, spell{3} = num+2 ...
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  magic_missile: [
    {
      //0
    },
    {
      //1
      name: "spell_magic_missile",
      details: "spell_magic_missile_details",
      expanded: "spell_magic_missile_expanded",

      type: "evocation",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "force_w",

      impact_size_foo: "Str_X_Plus_1", //spell{1} = 3× 1d4+1 , spell{2} = 4× 1d4+1, spell{3} = 5× 1d4+1
      impact_size_str: 3,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: 1,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  compelled_duel: [
    {
      //0
    },
    {
      //1
      name: "spell_compelled_duel",
      details: "spell_compelled_duel_details",
      expanded: "spell_compelled_duel_expanded",

      type: "enchantment",
      classes: ["paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  heroism: [
    {
      //0
    },
    {
      //1
      name: "spell_heroism",
      details: "spell_heroism_details",
      expanded: "spell_heroism_expanded",

      type: "enchantment",
      classes: ["bard", "paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Str_X_Plus_1__Num_MOD",
      //Cущество в начале каждого своего хода получает временные хиты, равные модификатору вашей базовой характеристики.
      //Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, вы можете сделать целью одно дополнительное существо за каждый уровень ячейки выше первого.
      impact_size_str: 1,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  wrathful_smite: [
    {
      //0
    },
    {
      //1
      name: "spell_wrathful_smite",
      details: "spell_wrathful_smite_details",
      expanded: "spell_wrathful_smite_expanded",

      type: "evocation",
      classes: ["paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  hail_of_thorns: [
    {
      //0
    },
    {
      //1
      name: "spell_hail_of_thorns",
      details: "spell_hail_of_thorns_details",
      expanded: "spell_hail_of_thorns_expanded",

      type: "conjuration",
      classes: ["ranger"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 10,

      impact_type: "damage",
      impact_damage_type: "piercing_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
  ],

  thunderous_smite: [
    {
      //0
    },
    {
      //1
      name: "spell_thunderous_smite",
      details: "spell_thunderous_smite_details",
      expanded: "spell_thunderous_smite_expanded",

      type: "evocation",
      classes: ["paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "thunder_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    },
  ],

  dissonant_whispers: [
    {
      //0
    },
    {
      //1
      name: "spell_dissonant_whispers",
      details: "spell_dissonant_whispers_details",
      expanded: "spell_dissonant_whispers_expanded",

      type: "enchantment",
      classes: ["bard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  armor_of_agathys: [
    {
      //0
    },
    {
      //1
      name: "spell_armor_of_agathys",
      details: "spell_armor_of_agathys_details",
      expanded: "spell_armor_of_agathys_expanded",

      type: "abjuration",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Pls_Plus_5", 
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: 5,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  mage_armor: [
    {
      //0
    },
    {
      //1
      name: "spell_mage_armor",
      details: "spell_mage_armor_details",
      expanded: "spell_mage_armor_expanded",

      type: "abjuration",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: 3,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  animal_friendship: [
    {
      //0
    },
    {
      //1
      name: "spell_animal_friendship",
      details: "spell_animal_friendship_details",
      expanded: "spell_animal_friendship_expanded",

      type: "enchantment",
      classes: ["bard", "druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  tashas_hideous_laughter: [
    {
      //0
    },
    {
      //1
      name: "spell_tashas_hideous_laughter",
      details: "spell_tashas_hideous_laughter_details",
      expanded: "spell_tashas_hideous_laughter_expanded",

      type: "enchantment",
      classes: ["bard", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  protection_from_evil_and_good: [
    {
      //0
    },
    {
      //1
      name: "spell_protection_from_evil_and_good",
      details: "spell_protection_from_evil_and_good_details",
      expanded: "spell_protection_from_evil_and_good_expanded",

      type: "abjuration",
      classes: ["druid", "cleric", "paladin", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  healing_word: [
    {
      //0
    },
    {
      //1
      name: "spell_healing_word",
      details: "spell_healing_word_details",
      expanded: "spell_healing_word_expanded",

      type: "evocation",
      classes: ["bard", "cleric", "druid"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1__Pls_MOD",
      //Example: 
        //base_stat = strenth
        //num = base_stat_mod = strength.mod = 3
        //spell{1} = 1d4+3 ⬜️⬜️⬜️ ⬜️🔳🔳🔳
        //spell{2} = 2d4+3 ⬜️⬜️⬜️ ⬜️⬜️🔳🔳🔳🔳🔳🔳
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  cure_wounds: [
    {
      //0
    },
    {
      //1
      name: "spell_cure_wounds",
      details: "spell_cure_wounds_details",
      expanded: "spell_cure_wounds_expanded",

      type: "evocation",
      classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1__Pls_MOD",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  ray_of_sickness: [
    {
      //0
    },
    {
      //1
      name: "spell_ray_of_sickness",
      details: "spell_ray_of_sickness_details",
      expanded: "spell_ray_of_sickness_expanded",

      type: "necromancy",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "poison_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  disguise_self: [
    {
      //0
    },
    {
      //1
      name: "spell_disguise_self",
      details: "spell_disguise_self_details",
      expanded: "spell_disguise_self_expanded",

      type: "illusion",
      classes: ["artificer", "bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  hunters_mark: [
    {
      //0
    },
    {
      //1
      name: "spell_hunters_mark",
      details: "spell_hunters_mark_details",
      expanded: "spell_hunters_mark_expanded",

      type: "divination",
      classes: ["ranger"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {
      spell_duration: 8,
    },
    {},
    {
      spell_duration: 24,
    },
  ],

  inflict_wounds: [
    {
      //0
    },
    {
      //1
      name: "spell_inflict_wounds",
      details: "spell_inflict_wounds_details",
      expanded: "spell_inflict_wounds_expanded",

      type: "necromancy",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  guiding_bolt: [
    {
      //0
    },
    {
      //1
      name: "spell_guiding_bolt",
      details: "spell_guiding_bolt_details",
      expanded: "spell_guiding_bolt_expanded",

      type: "evocation",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  illusory_script: [
    {
      //0
    },
    {
      //1
      name: "spell_illusory_script",
      details: "spell_illusory_script_details",
      expanded: "spell_illusory_script_expanded",

      type: "illusion",
      classes: ["bard", "warlock", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["material_ink_10gold", "somatic"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "day",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  unseen_servant: [
    {
      //0
    },
    {
      //1
      name: "spell_unseen_servant",
      details: "spell_unseen_servant_details",
      expanded: "spell_unseen_servant_expanded",

      type: "conjuration",
      classes: ["bard", "warlock", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  detect_poison_and_disease: [
    {
      //0
    },
    {
      //1
      name: "spell_detect_poison_and_disease",
      details: "spell_detect_poison_and_disease_details",
      expanded: "spell_detect_poison_and_disease_expanded",

      type: "divination",
      classes: ["cleric", "druid", "paladin", "ranger"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  detect_evil_and_good: [
    {
      //0
    },
    {
      //1
      name: "spell_detect_evil_and_good",
      details: "spell_detect_evil_and_good_details",
      expanded: "spell_detect_evil_and_good_expanded",

      type: "divination",
      classes: ["cleric", "paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  detect_magic: [
    {
      //0
    },
    {
      //1
      name: "spell_detect_magic",
      details: "spell_detect_magic_details",
      expanded: "spell_detect_magic_expanded",

      type: "divination",
      classes: ["bard", "warlock", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["somatic", "verbal"],

      spell_time: "contentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  burning_hands: [
    {
      //0
    },
    {
      //1
      name: "spell_burning_hands",
      details: "spell_burning_hands_details",
      expanded: "spell_burning_hands_expanded",

      type: "evocation",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  faerie_fire_1: [
    {},
    {
      name: "spell_faerie_fire_1",
      details: "spell_faerie_fire_details",
      expanded: "spell_faerie_fire_expanded", // полное описание

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 60,
      aim_aoe: "cube",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
      // рассчет урона если спас пройден
    },
  ],

  identify: [
    {
      //0
    },
    {
      //1
      name: "spell_identify",
      details: "spell_identify_details",
      expanded: "spell_identify_expanded",

      type: "divination",
      classes: ["artificer", "bard", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["material_pearl_100gold", "focus", "touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  entangle: [
    {
      //0
    },
    {
      //1
      name: "spell_entangle",
      details: "spell_entangle_details",
      expanded: "spell_entangle_expanded",

      type: "conjuration",
      classes: ["druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "square",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    },
  ],

  ensnaring_strike: [
    {
      //0
    },
    {
      //1
      name: "spell_ensnaring_strike",
      details: "spell_ensnaring_strike_details",
      expanded: "spell_ensnaring_strike_expanded",

      type: "conjuration",
      classes: ["ranger"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "piercing_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  charm_person: [
    {
      //0
    },
    {
      //1
      name: "spell_charm_person",
      details: "spell_charm_person_details",
      expanded: "spell_charm_person_expanded",

      type: "enchantment",
      classes: ["bard", "druid", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  purify_food_and_drink: [
    {
      //0
    },
    {
      //1
      name: "spell_purify_food_and_drink",
      details: "spell_purify_food_and_drink_details",
      expanded: "spell_purify_food_and_drink_expanded",

      type: "transmutation",
      classes: ["artificer", "cleric", "druid", "paladin"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 10,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  feather_fell: [
    {
      //0
    },
    {
      //1
      name: "spell_feather_fell",
      details: "spell_feather_fell_details",
      expanded: "spell_feather_fell_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "sorcerer", "wizard"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  searing_smite: [
    {
      //0
    },
    {
      //1
      name: "spell_searing_smite",
      details: "spell_searing_smite_details",
      expanded: "spell_searing_smite_expanded",

      type: "evocation",
      classes: ["paladin", "ranger"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  find_familiar: [
    {
      //0
    },
    {
      //1
      name: "spell_find_familiar",
      details: "spell_find_familiar_details",
      expanded: "spell_find_familiar_expanded",

      type: "conjuration",
      classes: ["wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "hour",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["material_familiar_10gold", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  comprehend_languages: [
    {
      //0
    },
    {
      //1
      name: "spell_comprehend_languages",
      details: "spell_comprehend_languages_details",
      expanded: "spell_comprehend_languages_expanded",

      type: "divination",
      classes: ["bard", "sorcerer", "wwarlock", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  bane: [
    {
      //0
    },
    {
      //1
      name: "spell_bane",
      details: "spell_bane_details",
      expanded: "spell_bane_expanded",

      type: "enchantment",
      classes: ["bard", "cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  expeditious_retreat: [
    {
      //0
    },
    {
      //1
      name: "spell_expeditious_retreat",
      details: "spell_expeditious_retreat_details",
      expanded: "spell_expeditious_retreat_expanded",

      type: "transmutation",
      classes: ["artificer", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  command: [
    {
      //0
    },
    {
      //1
      name: "spell_command",
      details: "spell_command_details",
      expanded: "spell_command_expanded",

      type: "enchantment",
      classes: ["bard", "cleric", "paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  jump: [
    {
      //0
    },
    {
      //1
      name: "spell_jump",
      details: "spell_jump_details",
      expanded: "spell_jump_expanded",

      type: "transmutation",
      classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  false_life: [
    {
      //0
    },
    {
      //1
      name: "spell_false_life",
      details: "spell_false_life_details",
      expanded: "spell_false_life_expanded",

      type: "necromancy",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Pls_Plus_5", 
      //return to: impact_size_pls
        //Exapmle: pls = 4
        //spell{1}: 1d4+4 ⬜️⬜️⬜️⬜️ ⬜️🔳🔳🔳
        //spell{2}: 1d4+9 ⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️ ⬜️🔳🔳🔳
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: 4,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  speak_with_animals: [
    {},
    {
      name: "spell_speak_with_animals",
      details: "spell_speak_with_animals_details",
      expanded: "spell_speak_with_animals_expanded",

      type: "divination",
      classes: ["bard", "druid", "ranger"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "self",
      aim_type: null,
      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  arms_of_hadar: [
    {
      //0
    },
    {
      //1
      name: "spell_arms_of_hadar",
      details: "spell_arms_of_hadar_details",
      expanded: "spell_arms_of_hadar_expanded",

      type: "conjuration",
      classes: ["warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  color_spray: [
    {
      //0
    },
    {
      //1
      name: "spell_color_spray",
      details: "spell_color_spray_details",
      expanded: "spell_color_spray_expanded",

      type: "illusion",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: "cone",
      aim_aoe_size: 15,

      impact_type: "hp_bonus",
      impact_damage_type: "sum_w",

      impact_size_foo: "Num_Plus_2",
      impact_size_str: null,
      impact_size_num: 6,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  hex: [
    {
      //0
    },
    {
      //1
      name: "spell_hex",
      details: "spell_hex_details",
      expanded: "spell_hex_expanded",

      type: "enchantment",
      classes: ["warlock"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "necrotic_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {
      spell_duration: 8,
    },
    {},
    {
      spell_duration: 24,
    },
  ],

  alarm: [
    {
      //0
    },
    {
      //1
      name: "spell_alarm",
      details: "spell_alarm_details",
      expanded: "spell_alarm_expanded",

      type: "abjuration",
      classes: ["artificer", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  grease: [
    {
      //0
    },
    {
      //1
      name: "spell_grease",
      details: "spell_grease_details",
      expanded: "spell_grease_expanded",

      type: "conjuration",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "square",
      aim_aoe_size: 10,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  longstrider: [
    {
      //0
    },
    {
      //1
      name: "spell_longstrider",
      details: "spell_longstrider_details",
      expanded: "spell_longstrider_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "druid", "ranger", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "target_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  create_or_destroy_water: [
    {
      //0
    },
    {
      //1
      name: "spell_create_or_destroy_water",
      details: "spell_create_or_destroy_water_details",
      expanded: "spell_create_or_destroy_water_expanded",

      type: "transmutation",
      classes: ["cleric", "druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 30,

      impact_type: "liters_number",
      impact_damage_type: null,

      impact_size_foo: "Str_Plus_40",
      impact_size_str: 40,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {
      aim_aoe_size: 35,
    },
    {
      aim_aoe_size: 40,
    },
    {
      aim_aoe_size: 45,
    },
    {
      aim_aoe_size: 50,
    },
    {
      aim_aoe_size: 55,
    },
    {
      aim_aoe_size: 60,
    },
    {
      aim_aoe_size: 65,
    },
    {
      aim_aoe_size: 70,
    },
  ],

  tensers_floating_disk: [
    {
      //0
    },
    {
      //1
      name: "spell_tensers_floating_disk",
      details: "spell_tensers_floating_disk_details",
      expanded: "spell_tensers_floating_disk_expanded",

      type: "conjuration",
      classes: ["wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "cilinder",
      aim_aoe_size: 3,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  fog_cloud: [
    {
      //0
    },
    {
      //1
      name: "spell_fog_cloud",
      details: "spell_fog_cloud_details",
      expanded: "spell_fog_cloud_expanded",

      type: "conjuration",
      classes: ["druid", "ranger", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {
      aim_aoe_size: 80,
    },
    {
      aim_aoe_size: 120,
    },
    {
      aim_aoe_size: 160,
    },
    {
      aim_aoe_size: 200,
    },
    {
      aim_aoe_size: 240,
    },
    {
      aim_aoe_size: 280,
    },
    {
      aim_aoe_size: 320,
    },
    {
      aim_aoe_size: 360,
    },
  ],

  sanctuary: [
    {
      //0
    },
    {
      //1
      name: "spell_sanctuary",
      details: "spell_sanctuary_details",
      expanded: "spell_sanctuary_expanded",

      type: "abjuration",
      classes: ["artificer", "cleric"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  sleep: [
    {
      //0
    },
    {
      //1
      name: "spell_sleep",
      details: "spell_sleep_details",
      expanded: "spell_sleep_expanded",

      type: "enchantment",
      classes: ["bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: "hp_bonus",
      impact_damage_type: "sum_w",

      impact_size_foo: "Num_Plus_2",
      impact_size_str: null,
      impact_size_num: 5,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  chromatic_orb: [
    {
      //0
    },
    {
      //1
      name: "spell_chromatic_orb",
      details: "spell_chromatic_orb_details",
      expanded: "spell_chromatic_orb_expanded",

      type: "evocation",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["material_diamond_50gold", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  goodberry: [
    {
      //0
    },
    {
      //1
      name: "spell_goodberry",
      details: "spell_goodberry_details",
      expanded: "spell_goodberry_expanded",

      type: "transmutation",
      classes: ["druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: 10,
      impact_size_num: 1,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  shield: [
    {
      //0
    },
    {
      //1
      name: "spell_shield",
      details: "spell_shield_details",
      expanded: "spell_shield_expanded",

      type: "abjuration",
      classes: ["sorcerer", "wizard"],

      cast_time: "reaction",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: 5,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  shield_of_faith: [
    {
      //0
    },
    {
      //1
      name: "spell_shield_of_faith",
      details: "spell_shield_of_faith_details",
      expanded: "spell_shield_of_faith_expanded",

      type: "abjuration",
      classes: ["cleric", "paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: 2,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  // All spells / 2 -----------------------------------------------------------

  pass_without_trace: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_pass_without_trace",
      details: "spell_pass_without_trace_details",
      expanded: "spell_pass_without_trace_expanded",

      type: "abjuration",
      classes: ["druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "stealth",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: 10,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  spiritual_weapon: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_spiritual_weapon",
      details: "spell_spiritual_weapon_details",
      expanded: "spell_spiritual_weapon_expanded",

      type: "evocation",
      classes: ["cleric"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "force_w",

      impact_size_foo: "Num_Plus_1__Pls_MOD",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  continual_flame: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_continual_flame",
      details: "spell_continual_flame_details",
      expanded: "spell_continual_flame_expanded",

      type: "evocation",
      classes: ["artificer", "cleric", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["material_flave_ruby_50gold", "touch", "somatic", "verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  see_invisibility: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_see_invisibility",
      details: "spell_see_invisibility_details",
      expanded: "spell_see_invisibility_expanded",

      type: "divination",
      classes: ["artificer", "bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  suggestion: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_suggestion",
      details: "spell_suggestion_details",
      expanded: "spell_suggestion_expanded",

      type: "enchantment",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "verbal"],

      spell_time: "concentration",
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  magic_mouth: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_magic_mouth",
      details: "spell_magic_mouth_details",
      expanded: "spell_magic_mouth_expanded",

      type: "illusion",
      classes: ["bard", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["material_magic_mouth_50gold", "somatic", "verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  arcane_lock: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_arcane_lock",
      details: "spell_arcane_lock_details",
      expanded: "spell_arcane_lock_expanded",

      type: "abjuration",
      classes: ["artificer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["material_golden_dust_25gold", "touch", "somatic", "verbal"],

      spell_time: "till_dissipate",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 5,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  phantasmal_force: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_phantasmal_force",
      details: "spell_phantasmal_force_details",
      expanded: "spell_phantasmal_force_expanded",

      type: "illusion",
      classes: ["bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 10,

      impact_type: "damage",
      impact_damage_type: "psychic_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "intelligence",
      impact_size_saved: null,
    },
  ],

  augury: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_augury",
      details: "spell_augury_details",
      expanded: "spell_augury_expanded",

      type: "divination",
      classes: ["cleric"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "min",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["material_augury_25gold", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  blindness_deafness: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_blindness_deafness",
      details: "spell_blindness_deafness_details",
      expanded: "spell_blindness_deafness_expanded",

      type: "necromancy",
      classes: ["bard", "cleric", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  flame_blade: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_flame_blade",
      details: "spell_flame_blade_details",
      expanded: "spell_flame_blade_expanded",

      type: "evocation",
      classes: ["druid"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_05",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  shatter: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_shatter",
      details: "spell_shatter_details",
      expanded: "spell_shatter_expanded",

      type: "evocation",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: "damage",
      impact_damage_type: "thunder_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 3,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  barkskin: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_barkskin",
      details: "spell_barkskin_details",
      expanded: "spell_barkskin_expanded",

      type: "transmutation",
      classes: ["druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "armor_class",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 16,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  beast_sense: [
    {},
    {},
    {
      name: "spell_beast_sense",
      details: "spell_beast_sense_details",
      expanded: "spell_beast_sense_expanded",

      type: "divination",
      classes: [],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "creature",
      aim_type: "near",
      parts: ["touch"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,
      aim_range: null,
      aim_aoe: null,
      aim_aoe_size: null,
      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  cordon_of_arrows: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_cordon_of_arrows",
      details: "spell_cordon_of_arrows_details",
      expanded: "spell_cordon_of_arrows_expanded",

      type: "transmutation",
      classes: ["ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: 5,

      parts: ["bullets", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 60,

      impact_type: "damage",
      impact_damage_type: "piercing_w",

      impact_size_foo: "Str_X_Plus_2",
      //Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, количество боеприпасов увеличивается на два за каждый уровень ячейки выше второго.
      impact_size_str: 3,
      impact_size_num: 1,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: "0",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  protection_from_poison: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_protection_from_poison",
      details: "spell_protection_from_poison_details",
      expanded: "spell_protection_from_poison_expanded",

      type: "abjuration",
      classes: ["artificer", "druid", "cleric", "paladin", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  branding_smite: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_branding_smite",
      details: "spell_branding_smite_details",
      expanded: "spell_branding_smite_expanded",

      type: "evocation",
      classes: ["paladin"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  crown_of_madness: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_crown_of_madness",
      details: "spell_crown_of_madness_details",
      expanded: "spell_crown_of_madness_expanded",

      type: "enchantment",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  levitate: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_levitate",
      details: "spell_levitate_details",
      expanded: "spell_levitate_expanded",

      type: "transmutation",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
  ],

  moonbeam: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_moonbeam",
      details: "spell_moonbeam_details",
      expanded: "spell_moonbeam_expanded",

      type: "evocation",
      classes: ["druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cilinder",
      aim_aoe_size: 10,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 10,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  ray_of_enfeeblement: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_ray_of_enfeeblement",
      details: "spell_ray_of_enfeeblement_details",
      expanded: "spell_ray_of_enfeeblement_expanded",

      type: "necromancy",
      classes: ["warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
  ],

  magic_weapon: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_magic_weapon",
      details: "spell_magic_weapon_details",
      expanded: "spell_magic_weapon_expanded",

      type: "transmutation",
      classes: ["artificer", "paladin", "ranger", "sorcerer", "wizard"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: "Num_Plus_05",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
  ],

  lesser_restoration: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_lesser_restoration",
      details: "spell_lesser_restoration_details",
      expanded: "spell_lesser_restoration_expanded",

      type: "abjuration",
      classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["touch", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  melfs_acid_arrow: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_melfs_acid_arrow",
      details: "spell_melfs_acid_arrow_details",
      expanded: "spell_melfs_acid_arrow_expanded",

      type: "evocation",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 90,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "acid_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: "÷2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  prayer_of_healing: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_prayer_of_healing",
      details: "spell_prayer_of_healing_details",
      expanded: "spell_prayer_of_healing_expanded",

      type: "evocation",
      classes: ["cleric"],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,
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

      impact_size_foo: "Num_Plus_1__Pls_MOD",
      // Каждое из шести существ на ваш выбор, видимых в пределах дистанции, восстанавливает количество хитов, равное 2d8 + модификатор вашей базовой характеристики.
      // На более высоких уровнях: Если вы накладываете это заклинание, используя ячейку 3 уровня или выше, лечение увеличивается на 1d8 за каждый уровень ячейки выше второго.
      impact_size_str: 6,
      impact_size_num: 2,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  invisibility: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_invisibility",
      details: "spell_invisibility_details",
      expanded: "spell_invisibility_expanded",

      type: "illusion",
      classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  gentle_repose: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_gentle_repose",
      details: "spell_gentle_repose_details",
      expanded: "spell_gentle_repose_expanded",

      type: "necromancy",
      classes: ["cleric", "wizard"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "day",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  nystuls_magic_aura: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_nystuls_magic_aura",
      details: "spell_nystuls_magic_aura_details",
      expanded: "spell_nystuls_magic_aura_expanded",

      type: "illusion",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 24,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  cloud_of_daggers: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_cloud_of_daggers",
      details: "spell_cloud_of_daggers_details",
      expanded: "spell_cloud_of_daggers_expanded",

      type: "conjuration",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "slashing_w",

      impact_size_foo: "Num_Plus_2",
      impact_size_str: null,
      impact_size_num: 4,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  zone_of_truth: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_zone_of_truth",
      details: "spell_zone_of_truth_details",
      expanded: "spell_zone_of_truth_expanded",

      type: "enchantment",
      classes: ["bard", "cleric", "paladin"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    },
  ],

  detect_thoughts: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_detect_thoughts",
      details: "spell_detect_thoughts_details",
      expanded: "spell_detect_thoughts_expanded",

      type: "divination",
      classes: ["bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  knock: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_knock",
      details: "spell_knock_details",
      expanded: "spell_knock_expanded",

      type: "transmutation",
      classes: ["bard", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 300,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  mirror_image: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_mirror_image",
      details: "spell_mirror_image_details",
      expanded: "spell_mirror_image_expanded",

      type: "illusion",
      classes: ["bard", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  warding_bond: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_warding_bond",
      details: "spell_warding_bond_details",
      expanded: "spell_warding_bond_expanded",

      type: "abjuration",
      classes: ["cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["material_warding_bond_50gold", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "bonus",
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: 1,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  scorching_ray: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_scorching_ray",
      details: "spell_scorching_ray_details",
      expanded: "spell_scorching_ray_expanded",

      type: "evocation",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: true,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Str_X_Plus_1",
      //Вы создаете три огненных луча и направляете их на целей, находящихся в пределах дистанции.
      //Вы создаете один дополнительный луч за каждый уровень ячейки выше второго.
      impact_size_str: 3,
      impact_size_num: 2,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  spider_climb: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_spider_climb",
      details: "spell_spider_climb_details",
      expanded: "spell_spider_climb_expanded",

      type: "transmutation",
      classes: ["artificer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  web: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_web",
      details: "spell_web_details",
      expanded: "spell_web_expanded",

      type: "conjuration",
      classes: ["sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
  ],

  aid: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_aid",
      details: "spell_aid_details",
      expanded: "spell_aid_expanded",

      type: "abjuration",
      classes: ["artificer", "bard", "cleric", "paladin", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "heal",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_5",
      impact_size_str: 3,
      impact_size_num: 5,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  locate_animals_or_plants: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_locate_animals_or_plants",
      details: "spell_locate_animals_or_plants_details",
      expanded: "spell_locate_animals_or_plants_expanded",

      type: "divination",
      classes: ["bard", "druid", "ranger"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "self",
      aim_type: null,
      aim_range: 5 * 5280,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  find_traps: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_find_traps",
      details: "spell_find_traps_details",
      expanded: "spell_find_traps_expanded",

      type: "divination",
      classes: ["cleric", "druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  locate_object: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_locate_object",
      details: "spell_locate_object_details",
      expanded: "spell_locate_object_expanded",

      type: "divination",
      classes: ["bard", "cleric", "druid", "paladin", "ranger", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 1000,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  find_steed: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_find_steed",
      details: "spell_find_steed_details",
      expanded: "spell_find_steed_expanded",

      type: "conjuration",
      classes: ["paladin"],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["somatic", "verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  gust_of_wind: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_gust_of_wind",
      details: "spell_gust_of_wind_details",
      expanded: "spell_gust_of_wind_expanded",

      type: "evocation",
      classes: ["druid", "ranger", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "line",
      aim_aoe_size: 60,

      impact_type: "push",
      impact_damage_type: null,

      // impact_size_foo: "Num_Feet",
      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 15,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "strength",
      impact_size_saved: null,
    },
  ],

  animal_messenger: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_animal_messenger",
      details: "spell_animal_messenger_details",
      expanded: "spell_animal_messenger_expanded",

      type: "enchantment",
      classes: ["bard", "druid", "ranger"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "day",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {
      spell_duration: 3,
    },
    {
      spell_duration: 5,
    },
    {
      spell_duration: 7,
    },
    {
      spell_duration: 9,
    },
    {
      spell_duration: 11,
    },
    {
      spell_duration: 13,
    },
    {
      spell_duration: 15,
    },
  ],

  flaming_sphere: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_flaming_sphere",
      details: "spell_flaming_sphere_details",
      expanded: "spell_flaming_sphere_expanded",

      type: "conjuration",
      classes: ["druid", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 5,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 6,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "dexterity",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  blur: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_blur",
      details: "spell_blur_details",
      expanded: "spell_blur_expanded",

      type: "illusion",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  heat_metal: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_heat_metal",
      details: "spell_heat_metal_details",
      expanded: "spell_heat_metal_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "druid"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "fire_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  enthrall: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_enthrall",
      details: "spell_enthrall_details",
      expanded: "spell_enthrall_expanded",

      type: "enchantment",
      classes: ["bard", "warlock"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
  ],

  alter_self: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_alter_self",
      details: "spell_alter_self_details",
      expanded: "spell_alter_self_expanded",

      type: "transmutation",
      classes: ["artificer", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  darkvision: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_darkvision",
      details: "spell_darkvision_details",
      expanded: "spell_darkvision_expanded",

      type: "transmutation",
      classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 8,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  silence: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_silence",
      details: "spell_silence_details",
      expanded: "spell_silence_expanded",

      type: "illusion",
      classes: ["bard", "cleric", "ranger"],

      cast_time: "ritual",
      cast_duration: 1,
      cast_duration_units: "action",

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 120,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 40,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  rope_trick: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_rope_trick",
      details: "spell_rope_trick_details",
      expanded: "spell_rope_trick_expanded",

      type: "transmutation",
      classes: ["artificer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  misty_step: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_misty_step",
      details: "spell_misty_step_details",
      expanded: "spell_misty_step_expanded",

      type: "conjuration",
      classes: ["sorcerer", "warlock", "wizard"],

      cast_time: "bonus_action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: 30,

      parts: ["verbal"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  darkness: [
    {},
    {},
    {
      name: "spell_darkness",
      details: "spell_darkness_details",
      expanded: "spell_darkness_expanded",

      type: "evocation",
      classes: [],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,
      aim_range: 60,
      aim_aoe: "sphere",
      aim_aoe_size: 30,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  enlarge: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_enlarge",
      details: "spell_enlarge_details",
      expanded: "spell_enlarge_expanded",

      type: "transmutation",
      classes: ["artificer", "bard", "druid", "sorcerer", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "object",
      aim_type: "in_distance",
      aim_range: 30,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "bonus_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "constitution",
      impact_size_saved: null,
    },
  ],

  hold_person: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_hold_person",
      details: "spell_hold_person_details",
      expanded: "spell_hold_person_expanded",

      type: "enchantment",
      classes: ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_disttance",
      aim_range: 60,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  enhance_ability: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_enhance_ability",
      details: "spell_enhance_ability_details",
      expanded: "spell_enhance_ability_expanded",

      type: "transmutation",
      classes: [
        "artificer",
        "bard",
        "cleric",
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
      ],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["focus", "touch", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "targets_number",
      impact_damage_type: null,

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 1,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: false,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],

  calm_emotions: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_calm_emotions",
      details: "spell_calm_emotions_details",
      expanded: "spell_calm_emotions_expanded",

      type: "enchantment",
      classes: ["bard", "cleric"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 60,

      parts: ["somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "sphere",
      aim_aoe_size: 20,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "charisma",
      impact_size_saved: null,
    },
  ],

  spike_growth: [
    {
      //0
    },
    {
      //1
    },
    {
      //2
      name: "spell_spike_growth",
      details: "spell_spike_growth_details",
      expanded: "spell_spike_growth_expanded",

      type: "transmutation",
      classes: ["druid", "ranger"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 150,

      parts: ["focus", "somatic", "verbal"],

      spell_time: "concentration",
      spell_duration: 10,
      spell_duration_units: "min",

      aim_need: false,

      aim_aoe: "cilinder",
      aim_aoe_size: 40,

      impact_type: "damage",
      impact_damage_type: "piercing_w",

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 4,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
  ],

  // ------------------------------------------------------------

  paladin_divine_smite: [
    {
      //0
    },
    {
      //1
      name: "spell_paladin_divine_smite",
      details: "spell_paladin_divine_smite_details",
      expanded: "spell_paladin_divine_smite_expanded",

      type: "ability",
      classes: ["paladin"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "damage",
      impact_damage_type: "radiant_w",

      impact_size_foo: "Num_Plus_1",
      impact_size_str: null,
      impact_size_num: 2,
      impact_size_dice: 8,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    },
    {},
    {},
    {},
  ],

  learn_spell: [
    {
      name: "spell_learn_spell",
      details: "spell_learn_spell_details",
      expanded: "spell_learn_spell_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "ritual",
      cast_duration: 2,
      cast_duration_units: "hour_per_lvl",

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["gold50_per_lvl"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  small_conjuration: [
    {
      name: "spell_small_conjuration",
      details: "spell_small_conjuration_details",
      expanded: "spell_small_conjuration_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "point",
      aim_type: "in_distance",
      aim_range: 10,

      parts: ["none"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  magical_protection: [
    {
      name: "spell_magical_protection",
      details: "spell_magical_protection_details",
      expanded: "spell_magical_protection_expanded",

      type: "ability",
      slot_type: "magical_protection",
      classes: ["wizard"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "end_of_the_day",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: "hp_bonus",
      impact_damage_type: "temporary",

      impact_size_foo: "Num_2xLvl_plus_INT",
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  hypnotic_look: [
    {
      name: "spell_hypnotic_look",
      details: "spell_hypnotic_look_details",
      expanded: "spell_hypnotic_look_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "action",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "near",
      aim_range: 5,

      parts: ["verbal","look"],

      spell_time: null,
      spell_duration: 1,
      spell_duration_units: "round",

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: true,
      saving_attribute: "wisdom",
      impact_size_saved: null,
    }
  ],

  small_alchemy: [
    {
      name: "spell_small_alchemy",
      details: "spell_small_alchemy_details",
      expanded: "spell_small_alchemy_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "ritual",
      cast_duration: 10,
      cast_duration_units: "min",

      aim_target: "object",
      aim_type: "near",
      aim_range: null,

      parts: ["none"],

      spell_time: "concentration",
      spell_duration: 1,
      spell_duration_units: "hour",

      aim_need: false,

      aim_aoe: "cube",
      aim_aoe_size: 1,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  portent: [
    {
      name: "spell_portent",
      details: "spell_portent_details",
      expanded: "spell_portent_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "creature",
      aim_type: "in_distance",
      aim_range: null,

      parts: ["none"],

      spell_time: "end_of_the_day",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],

  overload: [
    {
      name: "spell_overload",
      details: "spell_overload_details",
      expanded: "spell_overload_expanded",

      type: "ability",
      classes: ["wizard"],

      cast_time: "none",
      cast_duration: null,
      cast_duration_units: null,

      aim_target: "self",
      aim_type: null,
      aim_range: null,

      parts: ["none"],

      spell_time: "instant",
      spell_duration: null,
      spell_duration_units: null,

      aim_need: false,

      aim_aoe: null,
      aim_aoe_size: null,

      impact_type: null,
      impact_damage_type: null,

      impact_size_foo: null,
      impact_size_str: null,
      impact_size_num: null,
      impact_size_dice: null,
      impact_size_pls: null,

      saving_need: null,
      saving_attribute: null,
      impact_size_saved: null,
    }
  ],
};
