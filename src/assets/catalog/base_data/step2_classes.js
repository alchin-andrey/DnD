import spells from "./list_spells.js";
import lang from "./list_languages.js";
import weaponry from "./kinds_weapons.js";
import tools from "./kinds_tools.js";
import armory from "./kinds_armor.js";
import weapons from "./list_weapons.js";
import armors from "./list_armor.js";
import packs from "./list_packs.js";
import items from "./list_items.js";

export default {
  //NOTE - Ranger

  ranger: {
      name: "ranger",
      details: "ranger_details",
  
      hp_dice: 10,
  
      proficiencies: {
        armor: [armory.light, armory.medium, armory.shields],
        weapons: [weaponry.simple, weaponry.military],
      },
  
      saving: ["strength", "dexterity"],
      stats_base: [
        "dexterity",
        "strength",
        "wisdom",
        "constitution",
        "intelligence",
        "charisma",
      ],
      spell_attribute: "wisdom",
  
      equipment: [
        {
          level: 1,
          weapon: [[weapons.longbow, 1]],
          inventory: [
            [items.arrow, 20],
            [items.quiver, 1],
          ],
        },
        {
          level: 2,
          inventory: [
            [items.focus, 1],
          ],
        },
      ],
  
      charges: [
        {
          level: 2,
          name: "spell_slots",
          type: "long_rest",
          list: [
            ["[1]", 0, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            ["[2]", 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            ["[3]", 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            ["[4]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3],
            ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
          ],
        },
      ],
  
      fines: [
        {
          level: 8,
          type: "plus",
          keyword: "no_speed_fee",
          details: "on_nonmagic_hard_area",
        },
        {
          level: 8,
          type: "advantage",
          keyword: "advantage",
          details: "on_saving_from_plants",
        },
        {
          level: 18,
          type: "advantage",
          keyword: "no_disadvantage",
          details: "on_attacking_invisible",
        },
        {
          level: 18,
          type: "plus",
          keyword: "knowledge",
          details: "of_all_invisible_30",
        },
      ],
  
      spells: [
        {
          level:5,
          spell:spells.extra_attack,
        },
        {
          level:14,
          spell:spells.disappearance,
        },
        {
          level:20,
          spell:spells.enemy_killer,
        },
      ],
  
      settings: [
        {
          level:3,
          type:"custom",
          name:"subclass",
          select: 1,
          list: [
            {
              name:"hunter",
              details:"hunter_details",
  
              settings: [
                {
                  level:3,
                  type:"custom",
                  name:"prey",
                  select: 1,
                  list: [
                    {
                      spells: [
                        {
                          spell:spells.horde_breaker,
                        }
                      ]
                    },
                    {
                      spells: [
                        {
                          spell:spells.giant_killer,
                        }
                      ]
                    },
                    {
                      spells: [
                        {
                          spell:spells.colossus_slayer,
                        }
                      ]
                    },
                  ],
                },
                {
                  level:7,
                  type:"custom",
                  name:"style_protection",
                  select: 1,
                  list: [
                    {
                      fines: [
                        {
                          type: "plus",
                          keyword: "plus_4_armor",
                          on_provoked_attacks: "on_next_attacks",
                        },
                      ]
                    },
                    {
                      fines: [
                        {
                          type: "advantage",
                          keyword: "disadvantage",
                          on_provoked_attacks: "on_attacking_invisible",
                        }
                      ]
                    },
                    {
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          on_provoked_attacks: "fear_against",
                        }
                      ]
                    },
                  ],
                },
                {
                  level:11,
                  type:"custom",
                  name:"multiattack",
                  select: 1,
                  list: [
                    {
                      spells: [
                        {
                          spell:spells.whirlwind_attack,
                        }
                      ]
                    },
                    {
                      spells: [
                        {
                          spell:spells.volley,
                        }
                      ]
                    },
                  ]
                },
                {
                  level:15,
                  type:"custom",
                  name:"style_protection",
                  select: 1,
                  list: [
                    {
                      spells: [
                        {
                          spell:spells.uncanny_dodge,
                        }
                      ]
                    },
                    {
                      spells: [
                        {
                          spell:spells.stand_against_the_tide,
                        }
                      ]
                    },
                    {
                      fines: [
                        {
                          type: "resistance",
                          keyword: "fine_dodge",
                          details: "from_aoe_effects",
                        },
                      ]
                    },
                  ]
                }
              ]
            },
            {
              name:"beastmaster",
              details:"beastmaster_details",
  
              settings: [
                {
                  level:3,
                  type:"custom",
                  name:"companion",
                  select: 1,
                  list: [
                    {
                      spells: [
                        {
                          spell:spells.rangers_companion,
                        }
                      ]
                    },
                    {
                      spells: [
                        {
                          spell:spells.primal_companion,
                        }
                      ]
                    },
                  ]
                },
              ]
            }
          ],
        },
        {
          level:1,
          type:"custom",
          name:"favor",
          select: 1,
          list: [
            {
              name:"favored_enemy",
              details:"favored_enemy_details",
  
              settings: [
                {
                  level: 1,
                  type: "custom",
                  name: "favored_enemy",
                  select: [1,1,1,1,1, 2,2,2,2,2, 2,2,2,3,3, 3,3,3,3,3],
                  list: [
                    {
                      name: "aberrations",
                      details: "aberrations_details",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_aberrations_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_aberrations_against",
                        },
                      ],
  
                      proficiencies: {
                        languages: [lang.deep],
                      },
                    },
                    {
                      name: "beasts",
                      details: "beasts_details",
                      
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_beasts_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_beasts_against",
                        },
                      ],
  
                      proficiencies: {
                        languages: [lang.animal],
                      },
                    },
                    {
                      name: "celestials",
                      details: "celestials_details",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_celestials_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_celestials_against",
                        },
                      ],
  
                      proficiencies: {
                        languages: [lang.sky],
                      },
                    },
                    {
                      name: "constructs",
                      details: "constructs_details",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_constructs_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_constructs_against",
                        },
                      ],
                    },
                    {
                      name: "dragons",
                      details: "dragons_details",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_dragons_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_dragons_against",
                        },
                      ],
          
                      proficiencies: {
                        languages: [lang.dragon],
                      },
                    },
                    {
                      name: "elementals",
                      details: "elementals_details",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_elementals_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_elementals_against",
                        },
                      ],
  
                      proficiencies: {
                        languages: [lang.primordial],
                      },
                    },
                    {
                      name: "feys",
                      details: "feys_details",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_feys_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_feys_against",
                        },
                      ],
          
                      proficiencies: {
                        languages: [lang.sylvan],
                      },
                    },
                    {
                      name: "fiends",
                      details: "fiends_details",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_fiends_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_fiends_against",
                        },
                      ],
  
                      proficiencies: {
                        languages: [lang.demonic,lang.tiefling],
                      },
                    },
                    {
                      name: "giants",
                      details: "giants_details",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_giants_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_giants_against",
                        },
                      ],
  
                      proficiencies: {
                        languages: [lang.giant],
                      },
                    },
                    {
                      name: "monstrosities",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_monstrosities_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_monstrosities_against",
                        },
                      ],
                    },
                    {
                      name: "oozes",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_oozes_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_oozes_against",
                        },
                      ]
                    },
                    {
                      name: "plants",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_plants_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_plants_against",
                        },
                      ]
                    },
                    {
                      name: "undeads",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_undeads_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_undeads_against",
                        },
                      ],                    
                    },
                    {
                      name: "two_other_races",
          
                      fines: [
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "wisdom_two_other_races_against",
                        },
                        {
                          type: "advantage",
                          keyword: "advantage",
                          details: "intelligence_two_other_races_against",
                        },
                      ]
                    },
          
                  ]
                },
              ]
            },
            {
              name:"favored_foe",
              details:"favored_foe_details",
  
              charges: [
                {
                  level: 3,
                  name: "favored_foe_slots",
                  type: "long_rest",
                  foo: "Num_Mastery",
                  list: [
                    [ "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
                  ],
                },
              ],
  
              spells: [
                {
                  level:1,
                  spell:spells.favored_foe,
                }
              ]
            }
          ]
        },
        {
          level:1,
          type:"custom",
          name:"exploration",
          select: 1,
          list: [
            {
              name:"natural_explorer",
              details:"natural_explorer_details",
  
              settings: [
                {
                  level: 1,
                  type: "custom",
                  name: "favored_terrain",
                  select: [1,1,1,1,1, 2,2,2,2,3, 3,3,3,3,3, 3,3,3,3,3],
                  list: [
                    {
                      name: "arctic",
  
                      fines: [
                        {
                          type: "plus",
                          keyword: "proficiency_bonus",
                          details: "intelligence_wisdom_arctic",
                        },
                        {
                          type: "plus",
                          keyword: "travel_arctic",
                          details: "terrain_advantages",
                        },
                      ],
                    },  
                    {
                      name: "coast",
  
                      fines: [
                        {
                          type: "plus",
                          keyword: "proficiency_bonus",
                          details: "intelligence_wisdom_coast",
                        },
                        {
                          type: "plus",
                          keyword: "travel_coast",
                          details: "terrain_advantages",
                        },
                      ],
                    },  
                    {
                      name: "desert",
  
                      fines: [
                        {
                          type: "plus",
                          keyword: "proficiency_bonus",
                          details: "intelligence_wisdom_desert",
                        },
                        {
                          type: "plus",
                          keyword: "travel_desert",
                          details: "terrain_advantages",
                        },
                      ],
                    }, 
                    {
                      name: "forest_terrain",
  
                      fines: [
                        {
                          type: "plus",
                          keyword: "proficiency_bonus",
                          details: "intelligence_wisdom_forest",
                        },
                        {
                          type: "plus",
                          keyword: "travel_forest",
                          details: "terrain_advantages",
                        },
                      ],
                    },  
                    {
                      name: "grassland",
  
                      fines: [
                        {
                          type: "plus",
                          keyword: "proficiency_bonus",
                          details: "intelligence_wisdom_grassland",
                        },
                        {
                          type: "plus",
                          keyword: "travel_grassland",
                          details: "terrain_advantages",
                        },
                      ],
                    },
                    {
                      name: "mountain_terrain",
  
                      fines: [
                        {
                          type: "plus",
                          keyword: "proficiency_bonus",
                          details: "intelligence_wisdom_mountain",
                        },
                        {
                          type: "plus",
                          keyword: "travel_mountain",
                          details: "terrain_advantages",
                        },
                      ],
                    },
                    {
                      name: "swamp",
  
                      fines: [
                        {
                          type: "plus",
                          keyword: "proficiency_bonus",
                          details: "intelligence_wisdom_swamp",
                        },
                        {
                          type: "plus",
                          keyword: "travel_swamp",
                          details: "terrain_advantages",
                        },
                      ],
                    },
                    {
                      name: "underdark",
  
                      fines: [
                        {
                          type: "plus",
                          keyword: "proficiency_bonus",
                          details: "intelligence_wisdom_underdark",
                        },
                        {
                          type: "plus",
                          keyword: "travel_underdark",
                          details: "terrain_advantages",
                        },
                      ],
                    },
                  ]
                },
              ]
            },
            {
              name:"deft_explorer",
              details:"deft_explorer_details",
  
              qualities: [
                {
                  level: 6,
                  speed_bonus: 5,
                }
              ],
  
              fines: [
                {
                  level: 6,
                  type: "plus",
                  keyword: "climbing_and_swimming",
                  details: "without_speed_fee",
                },
                {
                  level: 10,
                  type: "plus",
                  keyword: "exhaust_rediction",
                  details: "in_short_rest",
                },
              ],
  
              charges: [
                {
                  level: 10,
                  name: "tireless_slots",
                  type: "long_rest",
                  foo: "Num_Mastery",
                  list: [
                    [ "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
                  ],
                },
              ],
  
              spells: [
                {
                  level: 10,
                  spell: spells.tireless,
                }
              ],
  
              settings: [
                {
                  level: 1,
                  type: "custom",
                  name: "skills",
                  select: 1,
                  list: [
                    {
                      skills: [ { investigation: "Mastery", }, ],
                    },
                    {
                      skills: [ { athletics: "Mastery", }, ],
                    },
                    {
                      skills: [ { perception: "Mastery", }, ],
                    },
                    {
                      skills: [ { survival: "Mastery", }, ],
                    },
                    {
                      skills: [ { nature: "Mastery", }, ],
                    },
                    {
                      skills: [ { insight: "Mastery", }, ],
                    },
                    {
                      skills: [ { stealth: "Mastery", }, ],
                    },
                    {
                      skills: [ { animal_hanging: "Mastery", }, ],
                    },
                  ],
                },
                {
                    level: 1,
                    type: "languages",
                    name: "languages",
                    select: 2,
                    filter: "no_used",
                },
              ]
            }
          ]
        },
        {
          level:4,
          type:"custom",
          name:"primal_sense",
          select: 1,
          list: [
            {
              spells: [
                {
                  level:3,
                  spell:spells.primeval_awareness_favored,
                },
                {
                  level:3,
                  spell:spells.primeval_awareness_favored,
                },
              ]
            },
            {
              spells: [
                {
                  level:3,
                  spell:spells.speak_with_animals_ranger,
                },
                {
                  level:5,
                  spell:spells.beast_sense_ranger,
                },
                // {
                //   level:9,
                //   spell:spells.speak_with_plants_ranger,
                // },
                // {
                //   level:13,
                //   spell:spells.locate_creature_ranger,
                // },
                {
                  level:17,
                  spell:spells.commune_with_nature_ranger,
                },
              ]
            },
          ],
        },
        {
          level:10,
          type:"custom",
          name:"disguise",
          select: 1,
          list: [
            {
              spells: [
                {
                  spell:spells.disguise_on_sight
                }
              ]
            },
            {
              charges: [
                {
                  level: 2,
                  name: "disguise_nature_slots",
                  type: "long_rest",
                  foo: "Num_Mastery",
                  list: [
                    ["", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  ],
                },
              ],
  
              spells: [
                {
                  spell:spells.disguise_nature
                }
              ]
            }
          ]
        },
        {
          level: 1,
          type: "custom",
          name: "skills",
          select: 3,
          list: [
            {
              skills: [ { investigation: "Mastery", }, ],
            },
            {
              skills: [ { athletics: "Mastery", }, ],
            },
            {
              skills: [ { perception: "Mastery", }, ],
            },
            {
              skills: [ { survival: "Mastery", }, ],
            },
            {
              skills: [ { nature: "Mastery", }, ],
            },
            {
              skills: [ { insight: "Mastery", }, ],
            },
            {
              skills: [ { stealth: "Mastery", }, ],
            },
            {
              skills: [ { animal_hanging: "Mastery", }, ],
            },
          ],
        },
        {
          level: 1,
          type: "custom",
          name: "armor_class",
          select: 1,
          list: [
            {
              equipment: [
                {
                  level: 1,
                  armor: [[armors.scalemail, 1]],
                },
              ],
              fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
            },
            {
              equipment: [
                {
                  level: 1,
                  armor: [[armors.leather, 1]],
                },
              ],
            },
          ],
        },
        {
          level: 1,
          type: "custom",
          name: "weapons",
          select: 1,
          list: [
            {
              equipment: [
                {
                  weapon: [ [weapons.shortsword, 2]],
                },
              ],
            },
            {
              settings: [
                {
                  type: "custom",
                  name: "weapons",
                  select: 1,
                  list: [
                    {equipment: [{ weapon: [ [weapons.quarterstaff, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.mace, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.club, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.dagger, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.spear, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.light_hammer, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.javelin, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.greatclub, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.handaxe, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.sickle, 1],], },],},
                  ],
                },
                {
                  type: "custom",
                  name: "weapons",
                  select: 1,
                  list: [
                    {equipment: [{ weapon: [ [weapons.quarterstaff, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.mace, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.club, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.dagger, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.spear, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.light_hammer, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.javelin, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.greatclub, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.handaxe, 1],], },],},
                    {equipment: [{ weapon: [ [weapons.sickle, 1],], },],},
                  ],
                },
              ]
            }
          ]
        },
        {
          level: 1,
          type: "custom",
          name: "packs",
          select: 1,
          list: [
            {equipment: [{ inventory_packs:[[packs.dungeoneers, 1],],}]},
            {equipment: [{ inventory_packs:[[packs.explorers, 1],],}]}
          ],
        },
        {
          level: 2,
          type: "custom",
          name: "battle_style",
          select: 1,
          list: [
            {
              name: "style_dueling",
              fines: [
                {
                  level: 2,
                  type: "plus",
                  keyword: "bonus",
                  details: "on_attack_signle_one_handed",
                },
              ],
            },
            {
              name: "style_defence",
              fines: [
                {
                  level: 2,
                  type: "plus",
                  keyword: "bonus",
                  details: "on_armor_if_armor",
                },
              ],
  
              qualities: [
                {
                  armor_bonus: 1,
                }
              ]
            },
            {
              name: "style_double_weapon",
              fines: [
                {
                  level: 2,
                  type: "plus",
                  keyword: "bonus",
                  details: "on_damage_second_attack",
                },
              ],
            },
            {
              name: "style_archery",
              fines: [
                {
                  level: 2,
                  type: "plus",
                  keyword: "aim_bonus",
                  details: "plus_2_on_ranged",
                },
              ],
  
              specials: [
                {
                  level: 1,
                  type: "weapon_ranged",
                  aim_bonus: 2,
                },
              ],
            },
          ],
        },
        {
          level: 3,
          type: "spells",
          name: "spells",
          select: [ 0, 2, 3, 3, 4,  4, 5, 5, 6, 6,  7, 7, 8, 8, 9,   9, 10, 11, 11, 11],
          mana_min: 1,
          mana_max: [ 0, 1, 1, 1, 2,  2, 2, 2, 3, 3,  3, 3, 4, 4, 4,  4, 5, 5, 5, 5, ],
          classes: ["ranger"],
        },
        {
          level: 4,
          type: "feats",
        },
        {
          level: 8,
          type: "feats",
        },
        {
          level: 12,
          type: "feats",
        },
        {
          level: 16,
          type: "feats",
        },
        {
          level: 19,
          type: "feats",
        },
      ]
  }, // 20

  //NOTE - Rogue -------------------------------------------------------------------------

  rogue: {
    name: "rogue",
    details: "rogue_details",

    hp_dice: 8,

    proficiencies: {
      armor: [armory.light],
      weapons: [weaponry.simple, weaponry.short_swords, weaponry.long_swords, weaponry.rapires, weaponry.hand_arbalets],
      tools: [tools.thief],
      languages: [lang.thieves],
    },

    saving: ["dexterity", "intelligence"],
    stats_base: [
      "dexterity",
      "charisma",
      "wisdom",
      "constitution",
      "strength",
      "intelligence",
    ],
    spell_attribute: "intelligence",

    equipment: [
      {
        level: 1,
        armor: [[armors.leather, 1]],
        weapon: [ [weapons.dagger, 2], [weapons.unarmed, 1], ],
        inventory: [[items.arrow, 1]],
        inventory_packs: [[packs.thieves, 1]],
      },
    ],

    fines: [
      {
        level: 7,
        type: "resistance",
        keyword: "fine_dodge",
        details: "from_aoe_effects",
      },
      {
        level: 11,
        type: "advantage",
        keyword: "min_10",
        details: "on_dice_mastery_skill",
      },
      {
        level: 14,
        type: "plus",
        keyword: "always_hear",
        details: "invisible_creatures_10f",
      },
      {
        level: 18,
        type: "plus",
        keyword: "no_advantage",
        details: "on_attacks_on_you",
      },
      {
        level: 20,
        type: "advantage",
        keyword: "min_20",
        details: "on_dice_d20",
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.sneaky_attack,
      },
      {
        level: 2,
        spell: spells.cunning_action,
      },
      {
        level: 3,
        spell: spells.steady_aim,
      },
      {
        level: 5,
        spell: spells.uncanny_dodge,
      },
    ],

    specials: [
      {
        level: 15,
        type: "saving",
        saving: ["wisdom"],
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "thief",
            details: "thief_details",

            spells: [
              {
                level: 3,
                spell: spells.fast_hands,
              },
            ],

            fines: [
              {
                level: 3,
                type: "plus",
                keyword: "climbing",
                details: "without_speed_fee",
              },
              {
                level: 3,
                type: "plus",
                keyword: "dex_bonus",
                details: "on_size_jumps",
              },
              {
                level: 9,
                type: "advantage",
                keyword: "advantage",
                details: "on_size_jumps",
              },
              {
                level: 13,
                type: "plus",
                keyword: "an_ability",
                details: "to_use_magic_items",
              },
              {
                level: 17,
                type: "plus",
                keyword: "bonus_move",
                details: "in_first_round",
              },
            ],
          },
          {
            name: "assasin",
            details: "assasin_details",

            proficiencies: {
              tools: [tools.disguise, tools.poisoner],
            },

            fines: [
              {
                level: 3,
                type: "advantage",
                keyword: "advantage",
                details: "on_not_moved",
              },
              {
                level: 3,
                type: "plus",
                keyword: "double_damage",
                details: "on_sudden_attack",
              },
              {
                level: 17,
                type: "plus",
                keyword: "double_damage",
                details: "on_sudden_attack_extra",
              },
            ],

            spells: [
              {
                level: 9,
                spell: spells.fake_identity,
              },
              {
                level: 13,
                spell: spells.fake_presence,
              },
            ],
          },
          {
            name: "arcane_trickster",
            details: "arcane_trickster_details",

            spells: [
              {
                level: 3,
                spell: spells.mage_hand_rogue,
              },
              {
                level: 17,
                spell: spells.steal_spell,
              },
            ],

            charges: [
              {
                level: 3,
                name: "spell_slots",
                type: "long_rest",
                list: [
                  [ "[1]", 0, 0, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, ],
                  [ "[2]", 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, ],
                  [ "[3]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 3, ],
                  [ "[4]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, ],
                ],
              },
              {
                level: 17,
                name: "spell_steal_slots",
                type: "long_rest",
                list: [
                  [ "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, ],
                ],
              },
            ],

            fines: [
              {
                level: 9,
                type: "plus",
                keyword: "disadvantage",
                details: "on_saving_against_your_spells",
              },
            ],

            settings: [
              {
                level: 3,
                type: "spells",
                name: "spells_0",
                select: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, ],
                mana_min: 0,
                mana_max: 0,
                classes: ["wizard"],
              },
              {
                level: 3,
                type: "spells",
                name: "spells",
                select: [ 0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13, ],
                mana_min: 1,
                mana_max: [ 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, ],
                classes: ["wizard"],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "skills",
        select: 4,
        list: [
          {
            skills: [ { acrobatics: "Mastery", }, ],
          },
          {
            skills: [ { investigation: "Mastery", }, ],
          },
          {
            skills: [ { athletics: "Mastery", }, ],
          },
          {
            skills: [ { perception: "Mastery", }, ],
          },
          {
            skills: [ { performance: "Mastery", }, ],
          },
          {
            skills: [ { intimidation: "Mastery", }, ],
          },
          {
            skills: [ { sleight_of_hand: "Mastery", }, ],
          },
          {
            skills: [ { deception: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { stealth: "Mastery", }, ],
          },
          {
            skills: [ { persuasion: "Mastery", }, ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            fines: [
              {
                type: "plus",
                keyword: "proficiency_bonus",
                details: "on_thieves_tools",
              },
            ],
          },
          {
            skills: [ { sleight_of_hand: "Mastery", }, ],
          },
          {
            skills: [ { acrobatics: "Mastery", }, ],
          },
          {
            skills: [ { investigation: "Mastery", }, ],
          },
          {
            skills: [ { athletics: "Mastery", }, ],
          },
          {
            skills: [ { perception: "Mastery", }, ],
          },
          {
            skills: [ { performance: "Mastery", }, ],
          },
          {
            skills: [ { intimidation: "Mastery", }, ],
          },
          {
            skills: [ { acrobatics: "Mastery", }, ],
          },
          {
            skills: [ { deception: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { stealth: "Mastery", }, ],
          },
          {
            skills: [ { persuasion: "Mastery", }, ],
          },
        ],
      },
      {
        level: 6,
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            fines: [
              {
                type: "plus",
                keyword: "proficiency_bonus",
                details: "on_thieves_tools",
              },
            ],
          },
          {
            skills: [ { sleight_of_hand: "Mastery", }, ],
          },
          {
            skills: [ { acrobatics: "Mastery", }, ],
          },
          {
            skills: [ { investigation: "Mastery", }, ],
          },
          {
            skills: [ { athletics: "Mastery", }, ],
          },
          {
            skills: [ { perception: "Mastery", }, ],
          },
          {
            skills: [ { performance: "Mastery", }, ],
          },
          {
            skills: [ { intimidation: "Mastery", }, ],
          },
          {
            skills: [ { acrobatics: "Mastery", }, ],
          },
          {
            skills: [ { deception: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { stealth: "Mastery", }, ],
          },
          {
            skills: [ { persuasion: "Mastery", }, ],
          },
        ],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          {equipment: [{ weapon: [ [weapons.rapier, 1],]}]},
          {equipment: [{ weapon: [ [weapons.shortsword, 1],]}]}
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "equipment",
        select: 1,
        list: [
          {
            name: "ranged_fight",

            equipment: [
              {
            weapon: [[weapons.shortbow, 1]],
            inventory: [
              [items.quiver, 1],
              [items.arrow, 20],
            ],
          }
        ]
          },
          {
            name: "melee_fight",

            equipment: [
              {
            weapon: [[weapons.shortsword, 1]],
              }
            ]
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {equipment: [{ inventory_packs:[[packs.burglars, 1],],}]},
          {equipment: [{ inventory_packs:[[packs.dungeoneers, 1],],}]},
          {equipment: [{ inventory_packs:[[packs.explorers, 1],],}]},
        ],
      },
    ],
  }, //20

  //NOTE - Fighter -------------------------------------------------------------------------

  fighter: {
    name: "fighter",
    details: "fighter_details",

    hp_dice: 10,

    proficiencies: {
      armor: [armory.light, armory.medium, armory.heavy, armory.shields],
      weapons: [weaponry.simple, weaponry.military],
      tools: [],
      languages: [],
    },

    saving: ["strength", "constitution"],
    stats_base: [
      "strength",
      "constitution",
      "dexterity",
      "charisma",
      "wisdom",
      "intelligence",
    ],
    spell_attribute: "intelligence",

    equipment: [
      {
        level: 1,
        weapon: [[weapons.unarmed, 1]],
      },
    ],

    charges: [
      {
        level: 1,
        name: "second_wind_slots",
        type: "short_rest",
        list: [
          ["d10", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 2,
        name: "action_surge_slots",
        type: "short_rest",
        list: [
          ["", 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
        ],
      },
      {
        level: 9,
        name: "indomity_slots",
        type: "long_rest",
        list: [
          ["", 0,0,0,0,0, 0,0,0,1,1, 1,1,2,2,2, 2,3,3,3,3],
        ],
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.second_wind,
      },
      {
        level: 5,
        spell: spells.extra_attack_fighter,
      },
      {
        level: 5,
        spell: spells.indomity,
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "battle_master",
            details: "battle_master_details",

            spell_attribute: "strength",

            charges: [
              {
                level: 3,
                name: "superiority_dice_slots",
                foo: "Str_Level_10_18",
                type: "short_rest",
                list: [
                  [ "", 0, 0, 4, 4, 4,   4, 5, 5, 5, 5,   5, 5, 5, 5, 6,   6, 6, 6, 6, 6, ],
                ],
              },
            ],

            fines: [
              {
                level: 5,
                type: "plus",
                keyword: "plus_1_maneuver",
                details: "on_initiative_and_0_maneuver",
              },
            ],

            spells: [
              {
                level:7,
                spell:spells.know_your_enemy
              }
            ],

            settings: [
              {
                level: 3,
                type: "spells",
                name: "maneuvers",
                select: [0,0,3,3,3, 3,5,5,5,7, 7,7,7,7,9, 9,9,9,9,9],
                list: [
                  {spells: [{spell:spells.maneuver_evasive_footwork,}]},
                  {spells: [{spell:spells.maneuver_lunging_attack,}]},
                  {spells: [{spell:spells.maneuver_maneuvering_attack,}]},
                  {spells: [{spell:spells.maneuver_menacing_attack,}]},
                  {spells: [{spell:spells.maneuver_feinting_attack,}]},
                  {spells: [{spell:spells.maneuver_disarming_attack,}]},
                  {spells: [{spell:spells.maneuver_trip_attack,}]},
                  {spells: [{spell:spells.maneuver_riposte,}]},
                  {spells: [{spell:spells.maneuver_distracting_strike,}]},
                  {spells: [{spell:spells.maneuver_parry,}]},
                  {spells: [{spell:spells.maneuver_goading_attack,}]},
                  {spells: [{spell:spells.maneuver_rally,}]},
                  {spells: [{spell:spells.maneuver_pushing_attack,}]},
                  {spells: [{spell:spells.maneuver_precision_attack,}]},
                  {spells: [{spell:spells.maneuver_commanders_strike,}]},
                  {spells: [{spell:spells.maneuver_sweeping_attack,}]},
                ],
              },
              {
                level: 3,
                type: "custom",
                name: "proficiencies",
                select: 1,
                list: [
                  {
                    proficiencies: { tools: [tools.blacksmith], },
                  },
                  {
                    proficiencies:  { tools: [tools.brewer], }, 
                  },
                  {
                    proficiencies:  { tools: [tools.mason], }, 
                  },
                  {
                    proficiencies: { tools: [tools.alchemists_supplies], }, 
                  },
                  {
                    proficiencies: { tools: [tools.blacksmith], }, 
                  },
                  {
                    proficiencies: { tools: [tools.brewer], }, 
                  },
                  {
                    proficiencies: { tools: [tools.calligraphers_supplies], }, 
                  },
                  {
                    proficiencies:  { tools: [tools.carpenters_tools], }, 
                  },
                  {
                    proficiencies: { tools: [tools.cartographers_tools], }, 
                  },
                  {
                    proficiencies: { tools: [tools.cobblers_tools], }, 
                  },
                  {
                    proficiencies: { tools: [tools.cooks_tools], }, 
                  },
                  {
                    proficiencies: { tools: [tools.disguise], }, 
                  },
                  {
                    proficiencies:  { tools: [tools.glassblowers_tools], }, 
                  },
                  {
                    proficiencies: { tools: [tools.jewelers_tools], }, 
                  },
                  {
                    proficiencies:  { tools: [tools.leatherworkers_tools], }, 
                  },
                  {
                    proficiencies:  { tools: [tools.mason], }, 
                  },
                  {
                    proficiencies:  { tools: [tools.navigators_tools], }, 
                  },
                  {
                    proficiencies:  { tools: [tools.painters_supplies], }, 
                  },
                  {
                    proficiencies:  { tools: [tools.poisoner], }, 
                  },
                  {
                    proficiencies: { tools: [tools.potters_tools], }, 
                  },
                  {
                    proficiencies:  { tools: [tools.tinkers_tools], }, 
                  },
                  {
                    proficiencies:  { tools: [tools.weavers_tools], }, 
                  },
                  {
                    proficiencies:  { tools: [tools.woodcarvers_tools], }, 
                  },
                ],
              },
            ],
          },
          {
            name: "eldritch_knight",
            details: "eldritch_knight_details",

            fines: [
              {
                level: 10,
                type: "advantage",
                keyword: "disadvantage",
                details: "on_spell_saving_after_hit",
              },
            ],

            spells: [
              {
                spell: spells.weapon_bond,
              },
              {
                spell: spells.call_bonbed_weapon,
              },
              {
                level:7,
                spell: spells.bonus_attack_fighter,
              },
              {
                level:15,
                spell: spells.arcane_charge,
              },
            ],

            charges: [
              {
                level: 1,
                name: "spell_slots",
                type: "long_rest",
                list: [
                  [ "[1]", 0, 0, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, ],
                  [ "[2]", 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, ],
                  [ "[3]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 3, ],
                  [ "[4]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, ],
                ],
              },
            ],

            settings: [
              {
                level: 3,
                type: "spells",
                name: "spells_0",
                select: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, ],
                mana_min: 0,
                mana_max: 0,
                classes: ["wizard"],
              },
              {
                level: 3,
                type: "spells",
                name: "spells",
                select: [0,0,3,4,4, 4,5,6,6,7, 8,8,9,10,10, 11,11,11,12,13],
                mana_min: 1,
                mana_max: [ 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, ],
                classes: ["wizard"],
                filter: "type: [abjuration,evocation]",
              },
            ],
          },
          {
            name: "champion",
            details: "champion_details",

            fines: [
              {
                level: 3,
                type: "plus",
                keyword: "ctit_damage",
                details: "on_dice_19_20",
              },
              {
                level: 15,
                type: "plus",
                keyword: "ctit_damage",
                details: "on_dice_18",
              },
              {
                level: 7,
                type: "plus",
                keyword: "proficiency_bonus_half",
                details: "on_mastery_str_dex_con_checks",
              },
            ],

            spells: [
              {
                level:7,
                spell:spells.athletic_jump,
              },
              {
                level:18,
                spell:spells.survivor,
              }
            ],

            settings: [
              {
                // TODO - отфильтровать вьібранньій стиль
                // На 10 уровне вьі можете вьібрать второй боевой стиль.
                level: 10,
                type: "custom",
                name: "battle_style",
                filter: "no_used",
                select: 1,
                list: [
                  {
                    name: "style_dueling",
                    fines: [
                      {
                        level: 2,
                        type: "plus",
                        keyword: "bonus",
                        details: "on_attack_signle_one_handed",
                      },
                    ],
                  },
                  {
                    name: "style_protection",
                    spells: [
                      {
                        level: 2,
                        spell: spells.side_pary,
                      },
                    ],
                  },
                  {
                    name: "style_defence",
                    fines: [
                      {
                        level: 2,
                        type: "plus",
                        keyword: "bonus",
                        details: "on_armor_if_armor",
                      },
                    ],
        
                    qualities: [
                      {
                        armor_bonus: 1,
                      }
                    ]
                  },
                  {
                    name: "style_great_weapon",
                    fines: [
                      {
                        level: 2,
                        type: "advantage",
                        keyword: "rethrow",
                        details: "if_1_or_2_on_two_handed_weapon",
                      },
                    ],
                  },
                  {
                    name: "style_double_weapon",
                    fines: [
                      {
                        level: 2,
                        type: "plus",
                        keyword: "bonus",
                        details: "on_damage_second_attack",
                      },
                    ],
                  },
                  {
                    name: "style_archery",
                    fines: [
                      {
                        level: 2,
                        type: "plus",
                        keyword: "aim_bonus",
                        details: "plus_2_on_ranged",
                      },
                    ],
        
                    specials: [
                      {
                        level: 1,
                        type: "weapon_ranged",
                        aim_bonus: 2,
                      },
                    ],
                  },
                ],
              },
            ]
          },
        ],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
      {
        level: 1,
        type: "custom",
        name: "skills",
        select: 4,
        list: [
          {
            skills: [ { acrobatics: "Mastery", }, ],
          },
          {
            skills: [ { athletics: "Mastery", }, ],
          },
          {
            skills: [ { perception: "Mastery", }, ],
          },
          {
            skills: [ { survival: "Mastery", }, ],
          },
          {
            skills: [ { intimidation: "Mastery", }, ],
          },
          {
            skills: [ { history: "Mastery", }, ],
          },
          {
            skills: [ { animal_hanging: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "equipment",
        select: 1,
        list: [
          {
            equipment: [
              {
                level: 1,
                armor: [[armors.chainmail, 1]], // Condition - Str Base = 13
              },
            ],
            fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
          },
          {
            equipment: [
              {
                level: 1,
                armor: [[armors.leather, 1]],
                weapon: [[weapons.longbow, 1]],
                inventory: [
                  [items.arrow, 20],
                  [items.quiver, 1],
                ],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 2,
        list: [
          {
            equipment: [{ inventory: [[items.shield, 1]] }],
            spells: [
              {
                spell: spells.prepare_shield,
              },
            ],
          },
          {
            equipment: [{ weapon: [[weapons.greataxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.halberd, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.war_pick, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.warhammer, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.battleaxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.glaive, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.greatsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.lance, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.longsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.whip, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.shortsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.maul, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.morningstar, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.pike, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.rapier, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.scimitar, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.trident, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.flail, 1]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.hand_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.heavy_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.longbow, 1]],
                inventory: [[items.arrow, 20],[items.quiver, 1],],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.blowgun, 1]],
                inventory: [[items.dart, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          {
            equipment: [{ weapon: [[weapons.handaxe, 2]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {equipment: [{ inventory_packs:[[packs.dungeoneers, 1],],}]},
          {equipment: [{ inventory_packs:[[packs.explorers, 1],],}]},
        ],
      },
      {
        level: 2,
        type: "custom",
        name: "battle_style",
        select: 1,
        list: [
          {
            name: "style_dueling",
            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "bonus",
                details: "on_attack_signle_one_handed",
              },
            ],
          },
          {
            name: "style_protection",
            spells: [
              {
                level: 2,
                spell: spells.side_pary,
              },
            ],
          },
          {
            name: "style_defence",
            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "bonus",
                details: "on_armor_if_armor",
              },
            ],

            qualities: [
              {
                armor_bonus: 1,
              }
            ]
          },
          {
            name: "style_great_weapon",
            fines: [
              {
                level: 2,
                type: "advantage",
                keyword: "rethrow",
                details: "if_1_or_2_on_two_handed_weapon",
              },
            ],
          },
          {
            name: "style_double_weapon",
            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "bonus",
                details: "on_damage_second_attack",
              },
            ],
          },
          {
            name: "style_archery",
            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "aim_bonus",
                details: "plus_2_on_ranged",
              },
            ],

            specials: [
              {
                level: 1,
                type: "weapon_ranged",
                aim_bonus: 2,
              },
            ],
          },
        ],
      },
    ],
  }, //20

  //NOTE - Barbarian -------------------------------------------------------------------------

  barbarian: {
    name: "barbarian",
    details: "barbarian_details",

    hp_dice: 12,
    // x: hp_dice/2 + 1;
    // hp_max: hp_dice + con.mod + ( x + con.mod ) * ( lvl - 1 ) + hp_bonus
    //regen: = lvl * hp_dice

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [weaponry.simple, weaponry.military], // all ?
    },

    saving: ["strength", "constitution"],
    stats_base: [
      "strength", // 15
      "constitution", // 14
      "dexterity", // 13
      "charisma", // 12
      "wisdom", // 10
      "intelligence", // 8
    ],
    spell_attribute: "strength",

    qualities: [
      {
        level: 5,
        speed_bonus: 10,
      },
    ],

    fines: [
      {
        level: 1,
        type: "resistance",
        keyword: "no_armor_protection",
        details: "armor_constitution",
      },
      {
        level: 2,
        type: "advantage",
        keyword: "advantage",
        details: "saving_dex_visible",
      },
      {
        level: 5,
        type: "plus",
        keyword: "speed_plus_10",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 7,
        type: "advantage",
        keyword: "advantage",
        details: "on_initiative",
      },
      {
        level: 7,
        type: "plus",
        keyword: "extra_movement",
        details: "rage_half_speed",
      },
      {
        level: 9,
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        level: 11,
        type: "plus",
        keyword: "rage_persistence",
        details: "rage_persistence_details",
      },
      {
        level: 13,
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        level: 15,
        type: "plus",
        keyword: "rage_sustainability",
        details: "only_if_uncontious",
      },
      {
        level: 17,
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        level: 18,
        type: "plus",
        keyword: "saving_strength",
        details: "min_base_strength",
      },
    ],

    stats: [
      {
        level: 20,

        strength_max: 24,
        strength: 4,

        constitution_max: 24,
        constitution: 4,
      },
    ],

    charges: [
      {
        level: 1,
        name: "rage_slots",
        type: "long_rest",
        list: [
          ["", 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, "inf"],
        ],
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.rage,
      },
      {
        level: 2,
        spell: spells.reckless_attack,
      },
    ],

    equipment: [
      {
        level: 1,
        weapon: [
          [weapons.javelin, 4],
          [weapons.unarmed, 1],
        ],
        inventory_packs: [
          [packs.explorers, 1], // нужно как-то распаковьівать 😅
        ],
      },
    ],

    specials: [
      {
        level: 1,
        type: "armor_bonus",
        foo: "Num_CON",
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "berserker",
            details: "berserker_details",

            fines: [
              {
                level: 6,
                type: "resistance",
                keyword: "immunity",
                details: "charmed_while_raging",
              },
              {
                level: 6,
                type: "resistance",
                keyword: "immunity",
                details: "frightened_while_raging",
              },
            ],

            spells: [
              {
                level: 3,
                spell: spells.frenzy,
              },
              {
                level: 10,
                spell: spells.intimidating_presence,
              },
              {
                level: 14,
                spell: spells.retaliation,
              },
            ],
          },
          {
            name: "totem_warrior",
            details: "totem_warrior_details",

            equipment: [
              {
                level: 3,
                inventory: [[items.totem, 1]],
              },
            ],

            spells: [
              {
                level: 3,
                spell: spells.beast_sense_ritual,
              },
              {
                level: 3,
                spell: spells.speak_with_animals_ritual,
              },
              {
                level: 10,
                spell: spells.commune_with_nature_ritual,
              },
            ],

            settings: [
              {
                level: 3,
                type: "custom",
                name: "totem_spirit",
                delails: "totem_spirit_details",
                select: 1,
                list: [
                  {
                    name: "wolf",
                    fines: [
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "near_friends_attack_in_rage",
                      },
                    ],
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        type: "resistance",
                        keyword: "resistance",
                        details: "any_damage_but_psy",
                      },
                    ],
                  },
                  {
                    name: "eagle",
                    fines: [
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "on_dodging_in_rage",

                        condition: "if_no_heavy_armor",
                      },
                      {
                        type: "plus",
                        keyword: "rush",
                        details: "as_bonus_action",

                        condition: "if_no_heavy_armor",
                      },
                    ],
                  },
                  {
                    name: "elk",
                    fines: [
                      {
                        // when without heavy armor
                        condition: "if_no_heavy_armor",
                        key: "speed_bonus",
                        value: "15",
                      },
                    ],
                  },
                  {
                    name: "tiger",
                    fines: [
                      {
                        type: "plus",
                        keyword: "long_jumps",
                        details: "in_rage",
                      },
                    ],
                  },
                ],
              },
              {
                level: 6,
                type: "custom",
                name: "totem_aspect",
                delails: "totem_aspect_details",
                select: 1,
                list: [
                  {
                    name: "wolf",
                    fines: [
                      {
                        type: "plus",
                        keyword: "fast_tempo",
                        details: "while_following_prints",
                      },
                      {
                        type: "plus",
                        keyword: "normal_tempo",
                        details: "in_stealth",
                      },
                    ],
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        type: "plus",
                        keyword: "double_weight",
                        details: "weight_capacity_details",
                      },
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "str_check_on_move",
                      },
                    ],
                  },
                  {
                    name: "eagle",
                    fines: [
                      {
                        type: "plus",
                        keyword: "to_see",
                        details: "one_mile_100f_details",
                      },
                      {
                        type: "advantage",
                        keyword: "no_disadvantage",
                        details: "on_perception_in_lowlight",
                      },
                    ],
                  },
                  {
                    name: "elk",
                    fines: [
                      {
                        type: "plus",
                        keyword: "double_speed",
                        details: "travel_elk",
                        key: "speed_bonus_x",
                        value: 2,
                      },
                    ],
                  },
                  {
                    name: "tiger",
                    settings: [
                      {
                        level: 6,
                        type: "custom",
                        name: "skills",
                        select: 1,
                        list: [
                          {skills: [ { athletics: "Mastery", }, ],},
                          {skills: [ { acrobatics: "Mastery", }, ],},
                          {skills: [ { stealth: "Mastery", }, ],},
                          {skills: [ { survival: "Mastery", }, ],},
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                level: 14,
                type: "custom",
                name: "totem_harmony",
                delails: "totem_aspect_details",
                select: 1,
                list: [
                  {
                    name: "wolf",
                    spells: [
                      {
                        spell: spells.wolf_knock,
                      },
                    ],
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "on_dodging_in_rage_bear",
                      },
                    ],
                  },
                  {
                    name: "eagle",
                    fines: [
                      {
                        type: "plus",
                        keyword: "flight",
                        details: "as_walking_speed_in_rage",
                      },
                    ],
                  },
                  {
                    name: "elk",
                    spells: [
                      {
                        spell: spells.elk_knock,
                      },
                    ],
                  },
                  {
                    name: "tiger",
                    spells: [
                      {
                        spell: spells.tiger_strike,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            skills: [ { athletics: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { survival: "Mastery", }, ],
          },
          {
            skills: [ { intimidation: "Mastery", }, ],
          },
          {
            skills: [ { nature: "Mastery", }, ],
          },
          {
            skills: [ { animal_hanging: "Mastery", }, ],
          },
        ],
      },
      {
        level: 3,
        type: "custom",
        name: "skills",
        select: 1,
        list: [
          {
            skills: [ { athletics: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { survival: "Mastery", }, ],
          },
          {
            skills: [ { intimidation: "Mastery", }, ],
          },
          {
            skills: [ { nature: "Mastery", }, ],
          },
          {
            skills: [ { animal_hanging: "Mastery", }, ],
          },
        ],
      },
      {
        level: 10,
        type: "custom",
        name: "skills",
        select: 1,
        list: [
          {
            skills: [ { athletics: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { survival: "Mastery", }, ],
          },
          {
            skills: [ { intimidation: "Mastery", }, ],
          },
          {
            skills: [ { nature: "Mastery", }, ],
          },
          {
            skills: [ { animal_hanging: "Mastery", }, ],
          },
        ],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          {equipment: [{ weapon: [[weapons.greataxe, 1]] }],},
          {equipment: [{ weapon: [[weapons.halberd, 1]] }],},
          {equipment: [{ weapon: [[weapons.war_pick, 1]] }],},
          {equipment: [{ weapon: [[weapons.warhammer, 1]] }],},
          {equipment: [{ weapon: [[weapons.battleaxe, 1]] }],},
          {equipment: [{ weapon: [[weapons.glaive, 1]] }],},
          {equipment: [{ weapon: [[weapons.greatsword, 1]] }],},
          {equipment: [{ weapon: [[weapons.lance, 1]] }],},
          {equipment: [{ weapon: [[weapons.longsword, 1]] }],},
          {equipment: [{ weapon: [[weapons.whip, 1]] }],},
          {equipment: [{ weapon: [[weapons.shortsword, 1]] }],},
          {equipment: [{ weapon: [[weapons.maul, 1]] }],},
          {equipment: [{ weapon: [[weapons.morningstar, 1]] }],},
          {equipment: [{ weapon: [[weapons.pike, 1]] }],},
          {equipment: [{ weapon: [[weapons.rapier, 1]] }],},
          {equipment: [{ weapon: [[weapons.scimitar, 1]] }],},
          {equipment: [{ weapon: [[weapons.trident, 1]] }],},
          {equipment: [{ weapon: [[weapons.flail, 1]] }],},
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          {equipment: [{ weapon: [[weapons.handaxe, 1]] }],},
          {equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],},
          {equipment: [{ weapon: [[weapons.mace, 1]] }],},
          {equipment: [{ weapon: [[weapons.club, 1]] }],},
          {equipment: [{ weapon: [[weapons.dagger, 1]] }],},
          {equipment: [{ weapon: [[weapons.spear, 1]] }],},
          {equipment: [{ weapon: [[weapons.light_hammer, 1]] }],},
          {equipment: [{ weapon: [[weapons.javelin, 1]] }],},
          {equipment: [{ weapon: [[weapons.greatclub, 1]] }],},
          {equipment: [{ weapon: [[weapons.sickle, 1]] }],},
        ],
      },
    ],
  }, //20

  //NOTE - Monk

  monk: {
    name: "monk",
    details: "monk_details",

    hp_dice: 8,
    // x: hp_dice/2 + 1;
    // hp_max: hp_dice + con.mod + ( x + con.mod ) * ( lvl - 1 ) + hp_bonus
    //regen: = lvl * hp_dice

    proficiencies: {
      weapons: [weaponry.simple, weaponry.short_swords], // all ?
    },

    saving: ["strength", "dexterity"],
    stats_base: [
      "dexterity", // 15
      "wisdom", // 14
      "constitution", // 13
      "strength", // 12
      "charisma", // 10
      "intelligence", // 8
    ],
    spell_attribute: "wisdom",

    charges: [
      {
        level: 2,
        name: "chi_slots",
        type: "short_rest",
        list: [
          [ "", 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ],
        ],
      },
    ],

    equipment: [
      {
        level: 1,
        weapon: [
          [weapons.dart, 10],
          [weapons.unarmed, 1],
        ],
      },
    ],

    fines: [
      {
        level: 1,
        type: "resistance",
        keyword: "no_armor_protection",
        details: "armor_wisdom",
      },
      {
        level: 1,
        type: "plus",
        keyword: "bonus",
        details: "to_damage_fist_and_weapon",
      },
      {
        level: 2,
        type: "plus",
        keyword: "speed_plus_10",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 6,
        type: "plus",
        keyword: "speed_plus_5",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 10,
        type: "plus",
        keyword: "speed_plus_5",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 14,
        type: "plus",
        keyword: "speed_plus_5",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 18,
        type: "plus",
        keyword: "speed_plus_5",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 6,
        type: "plus",
        keyword: "magical_unarmed_strike",
        details: "on_immunity_cheks",
      },
      {
        level: 7,
        type: "resistance",
        keyword: "fine_dodge",
        details: "from_aoe_effects",
      },
      {
        level: 9,
        type: "plus",
        keyword: "able_to_walk",
        details: "on_walls_and_water",
      },
      {
        level: 10,
        type: "resistance",
        keyword: "immunity",
        details: "on_sick",
      },
      {
        level: 10,
        type: "resistance",
        keyword: "immunity",
        details: "poison_against",
      },
      {
        level: 15,
        type: "resistance",
        keyword: "immunity",
        details: "aging_against",
      },
      {
        level: 15,
        type: "resistance",
        keyword: "immunity",
        details: "on_hunger_and_thirst",
      },
      {
        level: 20,
        type: "plus",
        keyword: "plus_4_chi",
        details: "on_initiative_throw",
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.unarmed_strike_bonus,
      },
      {
        level: 2,
        spell: spells.step_of_the_wind,
      },
      {
        level: 2,
        spell: spells.patient_defense,
      },
      {
        level: 2,
        spell: spells.flurry_of_blows,
      },
      {
        level: 2,
        spell: spells.dedicated_weapon,
      },
      {
        level: 3,
        spell: spells.deflect_missiles,
      },
      {
        level: 3,
        spell: spells.weapon_strike_bonus,
      },
      {
        level: 4,
        spell: spells.slow_fall,
      },
      {
        level: 4,
        spell: spells.quickened_healing,
      },
      {
        level: 5,
        spell: spells.extra_strike_monk,
      },
      {
        level: 5,
        spell: spells.stunning_strike,
      },
      {
        level: 5,
        spell: spells.focused_aim,
      },
      {
        level: 7,
        spell: spells.stillness_of_mind,
      },
      {
        level: 14,
        spell: spells.diamond_soul,
      },
      {
        level: 14,
        spell: spells.empty_body,
      },
    ],

    qualities: [
      {
        level: 2,
        speed_bonus: 10,
      },
      {
        level: 6,
        speed_bonus: 5,
      },
      {
        level: 10,
        speed_bonus: 5,
      },
      {
        level: 14,
        speed_bonus: 5,
      },
      {
        level: 18,
        speed_bonus: 5,
      },
    ],

    specials: [
      {
        level: 1,
        type: "armor_bonus",
        foo: "Num_WIS",
      },
      {
        level: 1,
        type: "weapon",
        finesse: true,
        // Вьі можете использовать Ловкость вместо Сильі для бросков атак и урона ваших безоружньіх ударов и атак монашеским оружием. — Надо вьібирать большее.
      },
      {
        level: 1,
        type: "weapon",
        dice_foo: "Dic_14_56_118_1710_Lvl_or_Default",
        // MonkMartial 4,4,4,4,6, 6,6,6,6,6, 8,8,8,8,8, 8,10,10,10,10
        // Вьі можете использовать кость d4 вместо обьічной кости урона ваших безоружньіх ударов или атак монашеским оружием. Эта кость увеличивается с вашим уровнем, как показано в колонке «боевьіе искусства».
      },
      {
        level: 13,
        type: "proficiencies",
        languages: "any",
        //Вьі понимаете речь на любом язьіке. Кроме того, все существа, способньіе понимать хотя бьі один язьік, понимают то, что вьі сказали.
      },
      {
        level: 14,
        type: "saving",
        saving: ["constitution", "intelligence","wisdom", "charisma"],
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "way_of_the_open_hand",
            details: "way_of_the_open_hand_details",

            charges: [
              {
                level: 6,
                name: "wholeness_body_slots",
                type: "long_rest",
                list: [
                  [ "", 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
                ],
              },
            ],

            spells: [
              {
                level: 3,
                spell: spells.open_hand_tech_knock,
              },
              {
                level: 3,
                spell: spells.open_hand_tech_push,
              },
              {
                level: 3,
                spell: spells.open_hand_tech_confuse,
              },
              {
                level: 6,
                spell: spells.wholeness_of_body,
              },
              {
                level: 11,
                spell: spells.sanctuary_monk,
              },
              {
                level: 17,
                spell: spells.quivering_palm,
              },
            ],
          },
          {
            name: "way_of_the_shadow",
            details: "way_of_the_shadow_details",

            spells: [
              {
                level: 3,
                spell: spells.small_illusion,
              },
              {
                level: 3,
                spell: spells.pass_without_trace_monk,
              },
              {
                level: 3,
                spell: spells.darkvision_monk,
              },
              {
                level: 3,
                spell: spells.silence_monk,
              },
              {
                level: 3,
                spell: spells.darkness_monk,
              },
              {
                level: 6,
                spell: spells.shadow_step,
              },
              {
                level: 11,
                spell: spells.cloak_of_shadows_monk,
              },
              {
                level: 17,
                spell: spells.opportunist,
              },
            ],
          },
          {
            name: "way_of_the_four_elements",
            details: "way_of_the_four_elements_details",

            spells: [
              {
                level: 3,
                spell: spells.element_bond,
              },
            ],

            settings: [
              {
                level:3,
                type:"custom",
                name:"practices",
                select: [1,1,1,1,1, 2,2,2,2,2, 3,3,3,3,3, 3,4,4,4,4],
                list: [

                  {spells: [ { level: 3, spell: spells.water_whip, }, ],},
                  {spells: [ { level: 3, spell: spells.fire_snake_teeth, }, ],},
                  {spells: [ { level: 3, spell: spells.ashing_strike, }, ],},
                  {spells: [ { level: 3, spell: spells.four_thunder_fist, }, ],},
                  {spells: [ { level: 3, spell: spells.gust_of_wind_monk, }, ],},
                  {spells: [ { level: 3, spell: spells.air_fist, }, ],},
                  {spells: [ { level: 3, spell: spells.form_river, }, ],},
                
                  {spells: [ { level: 6, spell: spells.shatter_monk, }, ],},
                  {spells: [ { level: 6, spell: spells.hold_person_monk, }, ],},

                  //TODO - дописати спели

                  // {spells: [ { level:11, spell: spells.fly_monk }, ],},
                  // {spells: [ { level:11, spell: spells.fireball_monk }, ],},
                  // {spells: [ { level:11, spell: spells.gaseous_form_monk }, ],},

                  // {spells: [ { level:17, spell: spells.winter_breath }, ],},
                  // {spells: [ { level:17, spell: spells.earth_val }, ],},
                  // {spells: [ { level:17, spell: spells.stoneskin_monk }, ],},
                  // {spells: [ { level:17, spell: spells.wall_of_fire_monk }, ],},
                ]
              },
            ]
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            skills: [ { acrobatics: "Mastery", }, ],
          },
          {
            skills: [ { athletics: "Mastery", }, ],
          },
          {
            skills: [ { history: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { religion: "Mastery", }, ],
          },
          {
            skills: [ { stealth: "Mastery", }, ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "proficiencies",
        select: 1,
        list: [
          {
            proficiencies: {
                tools: [tools.alchemists_supplies],
              },
          },
          {
            proficiencies: 
              {
                tools: [tools.potters_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.tinkers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.calligraphers_supplies],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.cobblers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.cartographers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.leatherworkers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.blacksmith],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.brewer],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.carpenters_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.cooks_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.woodcarvers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.glassblowers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.weavers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.painters_supplies],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.jewelers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_dulcimer],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_flute],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_horn],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_lute],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_lyre],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_pan_flute],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_shawm],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_viol],
              },
            
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        details: "monk_weapons",
        select: 1,
        list: [
          {
            equipment: [{ weapon: [[weapons.shortsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.sling, 1]],
                inventory: [[items.bullet, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {equipment: [{ inventory_packs:[[packs.dungeoneers, 1],],}]},
          {equipment: [{ inventory_packs:[[packs.explorers, 1],],}]},
        ],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
    ],
  }, // 20 окрім 18: Пусте тіло (8 Чі) та Шлях стихій (11 17 lvl)

  //NOTE - Paladin -------------------------------------------------------------------------

  paladin: {
    name: "paladin",
    details: "paladin_details",

    hp_dice: 10,
    // x: hp_dice/2 + 1;
    // hp_bonus: (x+con.mod)*lvl + hp_dice - x
    //lvl1 = (6+con)*1 + (10-6), lvl2 = (6+con)*2 + (10-6), lvl3 = (6+con)*3 + (10-6),
    //regen: = lvl * hp_dice

    proficiencies: {
      armor: [armory.light, armory.medium, armory.heavy, armory.shields],
      weapons: [weaponry.simple, weaponry.military], // all ?
    },

    saving: ["wisdom", "charisma"],
    stats_base: [
      "strength", // 15
      "charisma", // 14
      "constitution", // 13
      "wisdom", // 12
      "dexterity", // 10
      "intelligence", // 8
    ],
    spell_attribute: "charisma",

    equipment: [
      {
        level: 1,
        armor: [[armors.chainmail, 1]],
        weapon: [[weapons.unarmed, 1]],
        inventory: [[items.holy_symbol, 1]],
      },
    ],

    fines: [
      {level: 1, type: "disadvantage", keyword: "disadvantage", details: "on_stealth",},
      {
        level: 3,
        type: "plus",
        keyword: "immunity",
        details: "on_sick",
      },
    ],

    charges: [
      {
        level: 1,
        name: "divine_sense_slots",
        type: "long_rest",
        foo: "Num_CHA_Min0", //Str_Plus_CHA
        list: [
          ["", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 3,
        name: "divine_channel_slots",
        type: "short_rest",
        list: [
          ["", 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 14,
        name: "cleansing_touch_slots",
        type: "long_rest",
        foo: "Num_CHA_Min1", //Str_Plus_CHA
        list: [
          ["", 0,0,0,0,0, 0,0,0,0,0,  0,0,0,0,0, 0,0,0,0,0],
        ],
      },
      {
        level: 2,
        name: "spell_slots",
        type: "long_rest",
        list: [
          ["[1]", 0, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          ["[2]", 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[3]", 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[4]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
        ],
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.divine_sense,
      },
      {
        level: 1,
        spell: spells.lay_on_hands,
      },
      {
        level: 2,
        spell: spells.paladin_divine_smite,
      },
      {
        level: 3,
        spell: spells.divine_channel_mana,
      },
      {
        level: 5,
        spell: spells.extra_attack,
      },
      {
        level: 6,
        spell: spells.aura_of_protection,
      },
      {
        level: 10,
        spell: spells.aura_of_courage,
      },
      {
        level: 11,
        spell: spells.paladin_divine_smite_free,
      },
      {
        level: 14,
        spell: spells.cleansing_touch,
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "oath_of_devotion",
            details: "oath_of_devotion_details",

            charges: [
              {
                level: 20,
                name: "holy_nimbus_slots",
                type: "long_rest",
                list: [
                  ["", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ],
              },
            ],

            spells: [
              {
                level: 3,
                spell: spells.divine_channel_devotion_1,
              },
              {
                level: 3,
                spell: spells.divine_channel_devotion_2,
              },
              {
                level: 3,
                spell: spells.protection_from_evil_and_good,
              },
              {
                level: 3,
                spell: spells.sanctuary,
              },
              {
                level: 7,
                spell: spells.aura_of_devotion,
              },
              {
                level: 15,
                spell: spells.protection_from_evil_and_good_paladin,
              },
              {
                level: 20,
                spell: spells.holy_nimbus,
              },
            ],
          },
          {
            name: "oath_of_antients",
            details: "oath_of_antients_details",

            charges: [
              {
                level: 15,
                name: "undying_sentinel_slots",
                type: "long_rest",
                list: [
                  ["", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ],
              },
              {
                level: 20,
                name: "elder_champion_slots",
                type: "long_rest",
                list: [
                  ["", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ],
              },
            ],

            fines: [
              {
                level: 15,
                type: "resistance",
                keyword: "immunity",
                details: "aging_against",
              },
            ],

            spells: [
              {
                level: 3,
                spell: spells.divine_channel_antients_1,
              },
              {
                level: 3,
                spell: spells.divine_channel_antients_2,
              },
              {
                level: 3,
                spell: spells.ensnaring_strike,
              },
              {
                level: 3,
                spell: spells.speak_with_animals,
              },
              {
                level: 7,
                spell: spells.aura_of_warding,
              },
              {
                level: 15,
                spell: spells.undying_sentinel,
              },
              {
                level: 20,
                spell: spells.elder_champion,
              },
            ],
          },
          {
            name: "oath_of_vengence",
            details: "oath_of_vengence_details",

            charges: [
              {
                level: 20,
                name: "avenging_angel_slots",
                type: "long_rest",
                list: [
                  ["", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ],
              },
            ],

            spells: [
              {
                level: 3,
                spell: spells.divine_channel_vengence_1,
              },
              {
                level: 3,
                spell: spells.divine_channel_vengence_2,
              },
              {
                level: 3,
                spell: spells.hunters_mark,
              },
              {
                level: 3,
                spell: spells.bane,
              },
              {
                level: 7,
                spell: spells.relentless_avenger,
              },
              {
                level: 15,
                spell: spells.soul_of_vengeance,
              },
              {
                level: 20,
                spell: spells.avenging_angel,
              },
            ],
          },
        ],
      },
      {
        level: 2,
        type: "custom",
        name: "battle_style",
        select: 1,
        list: [
          {
            name: "style_dueling",
            fines: [
              {
                type: "plus",
                keyword: "bonus",
                details: "on_attack_signle_one_handed",
              },
            ],
          },
          {
            name: "style_protection",
            spells: [
              {
                spell: spells.side_pary,
              },
            ],
          },
          {
            name: "style_defence",
            fines: [
              {
                type: "plus",
                keyword: "bonus",
                details: "on_armor_if_armor",
              },
            ],

            qualities: [
              {
                armor_bonus: 1,
              }
            ]
          },
          {
            name: "style_great_weapon",
            fines: [
              {
                type: "advantage",
                keyword: "rethrow",
                details: "if_1_or_2_on_two_handed_weapon",
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            skills: [ { athletics: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { intimidation: "Mastery", }, ],
          },
          {
            skills: [ { medicine: "Mastery", }, ],
          },
          {
            skills: [ { religion: "Mastery", }, ],
          },
          {
            skills: [ { persuasion: "Mastery", }, ],
          },
        ],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 2,
        list: [
          {
            equipment: [{ inventory: [[items.shield, 1]] }],
            spells: [
              {
                spell: spells.prepare_shield,
              },
            ],
          },
          {
            equipment: [{ weapon: [[weapons.greataxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.halberd, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.war_pick, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.warhammer, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.battleaxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.glaive, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.greatsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.lance, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.longsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.whip, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.shortsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.maul, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.morningstar, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.pike, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.rapier, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.scimitar, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.trident, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.flail, 1]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.hand_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.heavy_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.longbow, 1]],
                inventory: [[items.arrow, 20],[items.quiver, 1],],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.blowgun, 1]],
                inventory: [[items.dart, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          {equipment: [{ weapon: [[weapons.javelin, 1]] }],},
          {equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],},
          {equipment: [{ weapon: [[weapons.mace, 1]] }],},
          {equipment: [{ weapon: [[weapons.club, 1]] }],},
          {equipment: [{ weapon: [[weapons.dagger, 1]] }],},
          {equipment: [{ weapon: [[weapons.spear, 1]] }],},
          {equipment: [{ weapon: [[weapons.light_hammer, 1]] }],},
          {equipment: [{ weapon: [[weapons.greatclub, 1]] }],},
          {equipment: [{ weapon: [[weapons.handaxe, 1]] }],},
          {equipment: [{ weapon: [[weapons.sickle, 1]] }],},
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {equipment: [{ inventory_packs:[[packs.priests, 1],],}]},
          {equipment: [{ inventory_packs:[[packs.explorers, 1],],}]},
        ],
      },
      {
        level: 2,
        type: "spells",
        name: "spells",
        select: [0,1,1,2,2, 3,3,4,4,5, 5,6,6,7,7, 8,8,9,9,10],
        foo: "Sel_Plus_CHA_Min1",
        mana_min: 1,
        mana_max: [0,1,1,1,2, 2,2,2,3,3, 3,3,4,4,4, 4,5,5,5,5],
        classes: ["paladin"],
      },
    ],
  },

  //NOTE - Cleric

  cleric: {
    name: "cleric",
    details: "cleric_details",

    hp_dice: 8,

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [weaponry.simple],
      tools: [],
      languages: [],
    },

    saving: ["wisdom", "charisma"],
    stats_base: [
      "wisdom",
      "constitution",
      "dexterity",
      "strength",
      "intelligence",
      "charisma",
    ],
    spell_attribute: "wisdom",

    charges: [
      {
        level: 1,
        name: "divine_channel_slots",
        type: "short_rest",
        list: [
          ["", 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
        ],
      },
      {
        level: 10,
        name: "divine_intervention_slots",
        type: "long_rest",
        list: [
          ["", 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 1,
        name: "spell_slots",
        type: "long_rest",
        list: [
          ["[1]", 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          ["[2]", 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[3]", 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[4]", 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
          ["[6]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
          ["[7]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
          ["[8]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          ["[9]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
      },
    ],

    equipment: [
      {
        weapon: [[weapons.unarmed, 1]],
        inventory: [
          [items.shield, 1],
          [items.holy_symbol, 1],
        ],
      },
    ],

    spells: [
      {
        level: 2,
        spell: spells.divine_channel_undead,
      },
      {
        level: 2,
        spell: spells.divine_channel_mana,
      },
      {
        level: 10,
        spell: spells.divine_intervention,
      },
      {
        level: 1,
        spell: spells.prepare_shield,
      },
    ],

    settings: [
      {
        level: 1,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            //домен бури
            name: "domain_thunder",
            details: "domain_thunder_details",

            charges: [
              {
                level: 1,
                name: "thunder_wrath_slots",
                type: "long_rest",
                foo: "Num_WIS_Min1",
                list: [
                  [ "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
                ],
              },
            ],

            fines: [
              {
                level: 17,
                type: "plus",
                keyword: "flight",
                details: "as_walking_speed",
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.thunder_wrath,
              },
              {
                level: 2,
                spell: spells.divine_channel_wrath,
              },
              {
                level: 6,
                spell: spells.thunder_strike,
              },
              {
                level: 8,
                spell: spells.divine_strike_sound,
              },
              {
                level: 1,
                spell: spells.thunderwave,
              },
              {
                level: 1,
                spell: spells.fog_cloud,
              },
              {
                level: 3,
                spell: spells.shatter,
              },
              {
                level: 3,
                spell: spells.gust_of_wind,
              },
            ],

            proficiencies: {
                armor: [armory.heavy],
                weapons: [weaponry.military],
              },

            settings: [
              {
                level: 1,
                type: "custom",
                name: "armor_class",
                select: 1,
                list: [
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
                  },
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
                      },
                    ],
                  },
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.chainmail, 1]],
                      },
                    ],
                    fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
                  },
                ],
              },
            ],
          },
          {
            //домен войньі
            name: "domain_war",
            details: "domain_war_details",

            charges: [
              {
                level: 1,
                name: "inspired_attack_slots",
                type: "long_rest",
                foo: "Num_WIS_Min1",
                list: [
                  [ "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
                ],
              },
            ],

            fines: [
              {
                level: 17,
                type: "resistance",
                keyword: "resistance",
                details: "to_no_magic_weapon",
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.inspired_attack,
              },
              {
                level: 2,
                spell: spells.divine_channel_directed_strike,
              },
              {
                level: 6,
                spell: spells.divine_channel_war_god_bless,
              },
              {
                level: 8,
                spell: spells.divine_strike_weapon,
              },
              {
                level: 1,
                spell: spells.divine_favor,
              },
              {
                level: 1,
                spell: spells.shield_of_faith,
              },
              {
                level: 3,
                spell: spells.spiritual_weapon,
              },
              {
                level: 3,
                spell: spells.magic_weapon,
              },
            ],

            proficiencies: {
                armor: [armory.heavy],
                weapons: [weaponry.military],
              },


            settings: [
              {
                level: 1,
                type: "custom",
                name: "armor_class",
                select: 1,
                list: [
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
                  },
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
                      },
                    ],
                  },
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.chainmail, 1]],
                      },
                    ],
                    fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
                  },
                ],
              },
            ],
          },
          {
            //домен жизни
            name: "domain_life",
            details: "domain_life_details",

            fines: [
              {
                level: 1,
                type: "plus",
                keyword: "extra_healing",
                details: "two_plus_spell_level",
              },
              {
                level: 6,
                type: "plus",
                keyword: "heal",
                details: "self_two_plus_spell_level",
              },
              {
                level: 17,
                type: "advantage",
                keyword: "always_max_heal",
                details: "from_spells",
              },
            ],

            spells: [
              {
                level: 2,
                spell: spells.divine_channel_save_life,
              },
              {
                level: 6,
                spell: spells.divine_channel_save_life,
              },
              {
                level: 8,
                spell: spells.divine_strike_radiant,
              },

              {
                level: 1,
                spell: spells.bless,
              },
              {
                level: 1,
                spell: spells.cure_wounds,
              },
              {
                level: 3,
                spell: spells.spiritual_weapon,
              },
              {
                level: 3,
                spell: spells.lesser_restoration,
              },
            ],

            proficiencies: {
                armor: [armory.heavy],
              },


            settings: [
              {
                level: 1,
                type: "custom",
                name: "armor_class",
                select: 1,
                list: [
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
                  },
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
                      },
                    ],
                  },
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.chainmail, 1]],
                      },
                    ],
                    fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
                  },
                ],
              },
            ],
          },
          {
            //домен знания
            name: "domain_knowledge",
            details: "domain_knowledge_details",

            charges: [
              {
                level: 17,
                name: "cleric_see_past_slots",
                type: "short_rest",
                list: [
                  [ "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, ],
                ],
              },
            ],

            spells: [
              {
                level: 2,
                spell: spells.divine_channel_learn_tool,
              },
              {
                level: 6,
                spell: spells.divine_channel_read_thoughts,
              },
              {
                level: 8,
                spell: spells.cleric_extra_damage,
              },
              {
                level: 17,
                spell: spells.cleric_see_past,
              },
              {
                level: 1,
                spell: spells.identify,
              },
              {
                level: 1,
                spell: spells.command,
              },
              {
                level: 3,
                spell: spells.suggestion,
              },
              {
                level: 3,
                spell: spells.augury,
              },
            ],

            settings: [
              {
                level: 1,
                type: "custom",
                name: "armor_class",
                select: 1,
                list: [
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
                  },
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
                      },
                    ],
                  },
                ],
              },
              {
                level: 1,
                type: "languages",
                name: "languages",
                select: 2,
                filter: "no_used",
              },
              {
                level: 1,
                type: "custom",
                name: "skills",
                select: 2,
                list: [
                  {
                    skills: [ { history: "Mastery_x2", }, ],
                  },
                  {
                    skills: [ { arcana: "Mastery_x2", }, ],
                  },
                  {
                    skills: [ { nature: "Mastery_x2", }, ],
                  },
                  {
                    skills: [ { religion: "Mastery_x2", }, ],
                  },
                ],
              },
            ],
          },
          {
            //домен обмана
            name: "domain_trickery",
            details: "domain_trickery_details",

            spells: [
              {
                level: 1,
                spell: spells.disguise_self,
              },
              {
                level: 1,
                spell: spells.charm_person,
              },
              {
                level: 3,
                spell: spells.pass_without_trace,
              },
              {
                level: 3,
                spell: spells.mirror_image,
              },
            ],

            settings: [
              {
                level: 1,
                type: "custom",
                name: "armor_class",
                select: 1,
                list: [
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
                  },
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            //домен природьі
            name: "domain_nature",
            details: "domain_nature_details",

            spells: [
              {
                level: 2,
                spell: spells.divine_channel_charm_alimal_plant,
              },
              {
                level: 6,
                spell: spells.dampen_elements,
              },
              {
                level: 8,
                spell: spells.divine_strike_nature,
              },

              {
                level: 1,
                spell: spells.animal_friendship,
              },
              {
                level: 1,
                spell: spells.speak_with_animals,
              },
              {
                level: 3,
                spell: spells.barkskin,
              },
              {
                level: 3,
                spell: spells.spike_growth,
              },
            ],

            proficiencies: {
                armor: [armory.heavy],
              },


            settings: [
              {
                level: 1,
                type: "spells",
                name: "spells_0",
                select: 1,
                mana_min: 0,
                mana_max: 0,
                classes: ["druid"],
              },
              {
                level: 1,
                type: "custom",
                name: "skills",
                select: 1,
                list: [
                  {
                    skills: [ { survival: "Mastery", }, ],
                  },
                  {
                    skills: [ { nature: "Mastery", }, ],
                  },
                  {
                    skills: [ { animal_hanging: "Mastery", }, ],
                  },
                  ],
              },
              {
                level: 1,
                type: "custom",
                name: "armor_class",
                select: 1,
                list: [
                  {
                    equipment: [ { level: 1, armor: [[armors.scalemail, 1]], }, ],
                    fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
                  },
                  {
                    equipment: [ { level: 1, armor: [[armors.leather, 1]], }, ],
                  },
                  {
                    equipment: [ { level: 1, armor: [[armors.chainmail, 1]], }, ],
                    fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
                  },
                ],
              },
            ],
          },
          {
            //домен света
            name: "domain_light",
            details: "domain_light_details",

            charges: [
              {
                level: 1,
                name: "warding_flare_slots",
                type: "long_rest",
                foo: "Num_WIS_Min1",
                list: [
                  [ "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
                ],
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.light,
              },
              {
                level: 1,
                spell: spells.warding_flare,
              },
              {
                level: 2,
                spell: spells.divine_channel_radiance_dawn,
              },
              {
                level: 8,
                spell: spells.cleric_extra_damage,
              },
              {
                level: 17,
                spell: spells.crown_of_light,
              },

              {
                level: 1,
                spell: spells.burning_hands,
              },
              {
                level: 1,
                spell: spells.faerie_fire,
              },
              {
                level: 3,
                spell: spells.scorching_ray,
              },
              {
                level: 3,
                spell: spells.flaming_sphere,
              },
            ],

            settings: [
              {
                level: 1,
                type: "custom",
                name: "armor_class",
                select: 1,
                list: [
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines:[{type: "disadvantage", keyword: "disadvantage", details: "on_stealth",}]
                  },
                  {
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            skills: [ { history: "Mastery", }, ],
          },
          {
            skills: [ { medicine: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { religion: "Mastery", }, ],
          },
          {
            skills: [ { persuasion: "Mastery", }, ],
          },  
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          {equipment: [{ weapon: [[weapons.mace, 1]] }],},
          {equipment: [{ weapon: [[weapons.warhammer, 1]] }],},
          // TODO - давай если нет мастери - подсвечивать имя желтьім
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          {
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.sling, 1]],
                inventory: [[items.bullet, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {equipment: [{ inventory_packs:[[packs.priests, 1],],}]},
          {equipment: [{ inventory_packs:[[packs.explorers, 1],],}]},
        ],
      },
      {
        level: 1,
        type: "spells",
        name: "spells_0",
        select: [3,3,3,4,4,  4,4,4,4,5,  5,5,5,5,5,  5,5,5,5,5],
        mana_min: 0,
        mana_max: 0,
        classes: ["cleric"],
      },
      {
        level: 1,
        type: "spells",
        name: "spells",
        select: [1,2,3,4,5, 6,7,8,9,10, 11,12,13,14,15, 16,17,18,19,20],
        foo: "Sel_Plus_WIS_Min1",
        mana_min: 1,
        mana_max: [1,1,2,2,3, 3,4,4,5,5, 6,6,7,7,8, 8,9,9,9,9],
        classes: ["cleric"],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
    ],
  }, // Almost 20 (spells)

  //NOTE - Druid -------------------------------------------------------------------------

  druid: {
    name: "druid",
    details: "druid_details",

    hp_dice: 8,

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [
        weaponry.quarterstaffs,
        weaponry.maces,
        weaponry.darts,
        weaponry.clubs,
        weaponry.daggers,
        weaponry.spears,
        weaponry.javelins,
        weaponry.slings,
        weaponry.sickles,
        weaponry.scimitars,
      ],
      tools: [tools.herbalists_tools],
      languages: [lang.druid],
    },

    saving: ["intelligence", "wisdom"],
    stats_base: [
      "intelligence",
      "wisdom",
      "constitution",
      "dexterity",
      "charisma",
      "strength",
    ],
    spell_attribute: "wisdom",

    spells: [
      {
        level: 1,
        spell: spells.druid_message,
      },
      {
        level: 2,
        spell: spells.wild_shape,
      },
      {
        level: 1,
        spell: spells.wild_shape_heal,
      },
      {
        level: 2,
        spell: spells.find_familiar_druid,
      },
    ],

    fines: [
      {
        level: 1,
        type: "minus",
        keyword: "unability",
        details: "to_wear_metal_armor",
      },
      {
        level: 18,
        type: "plus",
        keyword: "aging_slow",
        details: "ten_times",
      },
      {
        level: 20,
        type: "plus",
        keyword: "ignoring",
        details: "free_spell_parts_in_wildshape",
      },
    ],

    charges: [
      {
        level: 2,
        name: "wild_shape_slots",
        type: "short_rest",
        list: [
          ["", 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, "inf"],
        ],
      },
      {
        level: 1,
        name: "spell_slots",
        type: "long_rest",
        list: [
          ["[1]", 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          ["[2]", 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[3]", 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[4]", 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
          ["[6]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
          ["[7]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
          ["[8]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          ["[9]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
      },
    ],

    equipment: [
      {
        armor: [[armors.leather, 1]],
        weapon: [[weapons.unarmed, 1]],
        inventory: [[items.focus, 1]],
        inventory_packs: [[packs.explorers, 1]],
      },
    ],

    settings: [
      {
        level: 2,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "circle_of_the_land",
            details: "circle_of_the_land_details",

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "restoring",
                details: "mana_slots_short_rest_lvl_05_up_to_5",
              },
              {
                level: 6,
                type: "plus",
                keyword: "no_speed_fee",
                details: "on_nonmagic_hard_area",
              },
              {
                level: 6,
                type: "advantage",
                keyword: "advantage",
                details: "on_saving_from_plants",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_enchantment_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_fear_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "poison_against",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_sick",
              },
              {
                level: 14,
                type: "plus",
                keyword: "saving_wisdom",
                details: "on_any_animal_or_plant_attack",
              },
            ],

            spells: [
              {
                level: 2,
                spell: spells.wild_shape,
              },
            ],

            settings: [
              {
                level: 2,
                type: "spells",
                name: "spells_0",
                select: 1,
                mana_min: 0,
                mana_max: 0,
                classes: ["druid"],
              },
              {
                level:3,
                type: "custom",
                name: "favored_terrain",
                select: 1,
                list: [
                  {
                    name: "circle_of_the_land_arctic",
                    details: "circle_of_the_land_arctic_details",
        
                    spells: [
                      {
                        level: 2,
                        spell: spells.hold_person,
                      },
                      {
                        level: 2,
                        spell: spells.spike_growth,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_swamp",
                    details: "circle_of_the_land_swamp_details",
        
                    spells: [
                      {
                        level: 2,
                        spell: spells.melfs_acid_arrow,
                      },
                      {
                        level: 2,
                        spell: spells.darkness,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_mountain",
                    details: "circle_of_the_land_mountain_details",
        
                    spells: [
                      {
                        level: 2,
                        spell: spells.spider_climb,
                      },
                      {
                        level: 2,
                        spell: spells.spike_growth,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_forest",
                    details: "circle_of_the_land_forest_details",
        
                    spells: [
                      {
                        level: 2,
                        spell: spells.barkskin,
                      },
                      {
                        level: 2,
                        spell: spells.spider_climb,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_grassland",
                    details: "circle_of_the_land_grassland_details",
        
                    spells: [
                      {
                        level: 2,
                        spell: spells.pass_without_trace,
                      },
                      {
                        level: 2,
                        spell: spells.invisibility,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_coast",
                    details: "circle_of_the_land_coast_details",
        
                    spells: [
                      {
                        level: 2,
                        spell: spells.mirror_image,
                      },
                      {
                        level: 2,
                        spell: spells.misty_step,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_underdark",
                    details: "circle_of_the_land_underdark_details",
        
                    spells: [
                      {
                        level: 2,
                        spell: spells.spider_climb,
                      },
                      {
                        level: 2,
                        spell: spells.web,
                      },
                    ],
                  },
                ]
              }
            ]
          },
          {
            name: "circle_of_the_moon",
            details: "circle_of_the_moon_details",

            spells: [
              {
                level: 2,
                spell: spells.wild_shape_combat,
              },
              {
                level: 2,
                spell: spells.wild_shape_heal,
              },
              {
                level: 14,
                spell: spells.alter_self_druid,
              },
            ],

            fines: [
              {
                level: 6,
                type: "plus",
                keyword: "ignoring",
                details: "of_nonmagic_damage_immunity_wild_shape",
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            skills: [ { perception: "Mastery", }, ],
          },
          {
            skills: [ { survival: "Mastery", }, ],
          },
          {
            skills: [ { arcana: "Mastery", }, ],
          },
          {
            skills: [ { medicine: "Mastery", }, ],
          },
          {
            skills: [ { animal_hanging: "Mastery", }, ],
          },
          {
            skills: [ { nature: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { religion: "Mastery", }, ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 2,
        list: [
          {
            equipment: [{ inventory: [[items.shield, 1]] }],
            spells: [
              {
                spell: spells.prepare_shield,
              },
            ],
          },
          {
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.sling, 1]],
                inventory: [[items.bullet, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          {equipment: [{ weapon: [[weapons.scimitar, 1]] }],},
          {equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],},
          {equipment: [{ weapon: [[weapons.mace, 1]] }],},
          {equipment: [{ weapon: [[weapons.club, 1]] }],},
          {equipment: [{ weapon: [[weapons.dagger, 1]] }],},
          {equipment: [{ weapon: [[weapons.spear, 1]] }],},
          {equipment: [{ weapon: [[weapons.light_hammer, 1]] }],},
          {equipment: [{ weapon: [[weapons.javelin, 1]] }],},
          {equipment: [{ weapon: [[weapons.greatclub, 1]] }],},
          {equipment: [{ weapon: [[weapons.handaxe, 1]] }],},
          {equipment: [{ weapon: [[weapons.sickle, 1]] }],},
        ],
      },
      {
        level: 1,
        type: "spells",
        name: "spells_0",
        select: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        mana_min: 0,
        mana_max: 0,
        classes: ["druid"],
      },
      {
        type: "spells",
        name: "spells",
        select: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        foo: "Sel_Plus_WIS_Min1",
        mana_min: 1,
        mana_max: "Num_Wizard_max_spell_slot",
        classes: ["wizard"],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
    ],
  }, // Almost 20 (spells)

  // NOTE - Warlock

  warlock: {
    name: "warlock",
    details: "warlock_details",

    hp_dice: 8,

    proficiencies: {
      armor: [armory.light],
      weapons: [weaponry.simple],
      tools: [],
      languages: [],
    },

    saving: ["wisdom", "charisma"],
    stats_base: [
      "charisma",
      "dexterity",
      "constitution",
      "intelligence",
      "wisdom",
      "strength",
    ],
    spell_attribute: "charisma",

    charges: [
      {
        level: 1,
        name: "spell_slots",
        type: "short_rest",
        list: [
          ["[1]", 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ["[2]", 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ["[3]", 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ["[4]", 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
        ],
      },
      {
        level: 11,
        name: "arcanum_slots",
        type: "long_rest",
        list: [
          ["[6]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["[7]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
          ["[8]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          ["[9]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
        //TODO - додати вибір заклять на відповідних рівнях
      },
      {
        level: 20,
        name: "inner_reserve_slots",
        type: "long_rest",
        list: [
          ["", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        ],
      },
    ],

    spells: [
      {
        level: 20,
        spell: spells.restore_mana_warlock,
      },
    ],

    equipment: [
      {
        level: 1,
        armor: [[armors.leather, 1]],
        weapon: [
          [weapons.dagger, 2],
          [weapons.unarmed, 1],
        ],
      },
    ],

    settings: [
      {
        level: 1,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "archifey",
            details: "archifey_details",

            charges: [
              {
                level: 1,
                name: "fey_presence_slots",
                type: "short_rest",
                list: [
                  [ "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
                ],
              },
              {
                level: 6,
                name: "misty_escape_slots",
                type: "short_rest",
                list: [
                  [ "", 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
                ],
              },
              {
                level: 14,
                name: "dark_delirium_slots",
                type: "short_rest",
                list: [
                  [ "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, ],
                ],
              },
            ],

            fines: [
              {
                level: 10,
                type: "advantage",
                keyword: "immunity",
                details: "charm_against",
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.fey_presence,
              },
              {
                level: 6,
                spell: spells.misty_escape,
              },
              {
                level: 10,
                spell: spells.beguiling_defenses,
              },
              {
                level: 14,
                spell: spells.dark_delirium,
              },
            ],

            settings: [
              {
                type: "spells",
                name: "spells",
                select: [2,3,4,5,6, 7,8,9,10,10, 11,11,12,12,13, 13,14,14,15,15],
                mana_min: 1,
                mana_max: [1,1,2,2,3, 3,4,4,5,5, 5,5,5,5,5, 5,5,5,5,5],
                classes: ["warlock"],
                extra_items: [
                  // Архифея позволяет вам при изучении заклинаний колдуна вьібирать из более широкого списка. В ваш список заклинаний колдуна добавляются следующие заклинания.
                  {
                    level: 1,
                    spell: spells.faerie_fire,
                  },
                  {
                    level: 1,
                    spell: spells.sleep,
                  },
                  {
                    level: 3,
                    spell: spells.phantasmal_force,
                  },
                  {
                    level: 3,
                    spell: spells.calm_emotions,
                  },
                ],
              },
            ],
          },
          {
            name: "fiend",
            details: "fiend_details",

            fines: [
              {
                level: 10,
                type: "resistance",
                keyword: "resistance",
                details: "one_choose_every_short_rest",
              },
            ],

            charges: [
              {
                level: 1,
                name: "dark_ones_own_luck_slots",
                type: "short_rest",
                list: [
                  [ "d10", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
                ],
              },
              {
                level: 14,
                name: "hurl_through_hell_slots",
                type: "long_rest",
                list: [
                  [ "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, ],
                ],
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.dark_ones_blessing,
              },
              {
                level: 6,
                spell: spells.dark_ones_own_luck,
              },
              {
                level: 14,
                spell: spells.hurl_through_hell,
              },
            ],

            settings: [
              {
                type: "spells",
                name: "spells",
                select: [2,3,4,5,6, 7,8,9,10,10, 11,11,12,12,13, 13,14,14,15,15],
                mana_min: 1,
                mana_max: [1,1,2,2,3, 3,4,4,5,5, 5,5,5,5,5, 5,5,5,5,5,],
                classes: ["warlock"],
                extra_items: [
                  // Исчадие позволяет вам при изучении заклинаний колдуна вьібирать из более широкого списка. В ваш список заклинаний колдуна добавляются следующие заклинания.
                  {
                    level: 1,
                    spell: spells.burning_hands,
                  },
                  {
                    level: 1,
                    spell: spells.command,
                  },
                  {
                    level: 3,
                    spell: spells.blindness_deafness,
                  },
                  {
                    level: 3,
                    spell: spells.scorching_ray,
                  },
                ],
              },
            ],
          },
          {
            name: "great_old_one",
            details: "great_old_one_details",

            fines: [
              {
                level: 1,
                type: "plus",
                keyword: "able_to_speak",
                details: "telepatic_30f",
              },
              {
                level: 10,
                type: "resistance",
                keyword: "immunity",
                details: "to_read_thoughts",
              },
              {
                level: 10,
                type: "resistance",
                keyword: "resistance",
                details: "psychic_damage_against",
              },
              {
                level: 10,
                type: "resistance",
                keyword: "damage_back",
                details: "psychic_w",
              },
            ],

            charges: [
              {
                level: 6,
                name: "entropic_ward_slots",
                type: "short_rest",
                list: [
                  [ "", 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
                ],
              },
            ],

            spells: [
              {
                level: 6,
                spell: spells.entropic_ward,
              },
              {
                level: 14,
                spell: spells.create_thrall,
              },
            ],

            settings: [
              {
                type: "spells",
                name: "spells",
                select: [2,3,4,5,6, 7,8,9,10,10, 11,11,12,12,13, 13,14,14,15,15],
                mana_min: 1,
                mana_max: [1,1,2,2,3, 3,4,4,5,5, 5,5,5,5,5, 5,5,5,5,5,],
                classes: ["warlock"],
                extra_items: [
                  // Ваш покравитель позволяет вам при изучении заклинаний колдуна вьібирать из более широкого списка. В ваш список заклинаний колдуна добавляются следующие заклинания.
                  {
                    level: 1,
                    spell: spells.dissonant_whispers,
                  },
                  {
                    level: 1,
                    spell: spells.tashas_hideous_laughter,
                  },
                  {
                    level: 3,
                    spell: spells.phantasmal_force,
                  },
                  {
                    level: 3,
                    spell: spells.detect_thoughts,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 3,
        type: "custom",
        name: "pact_item",
        select: 1,
        list: [
          {
            name: "pact_of_the_tome",
            details: "pact_of_the_tome_details",

            equipment: [
              {
                inventory: [items.book_of_shadows],
              },
            ],

            settings: [
              {
                level: 1,
                type: "spells",
                name: "spells_0",
                select: 3,
                mana_min: 0,
                mana_max: 0,
              },
            ],
          },
          {
            name: "pact_of_the_blade",
            details: "pact_of_the_blade_details",

            spells: [
              {
                spell: spells.create_weapon,
              },
              {
                spell: spells.convert_weapon,
              },
            ],
          },
          {
            name: "pact_of_the_chain",
            details: "pact_of_the_chain_details",

            spells: [
              {
                spell: spells.find_familiar_warlock,
              },
            ],
          },
          {
            name: "pact_of_the_talisman",
            details: "pact_of_the_talisman_details",

            charges: [
              {
                level: 1,
                name: "talisman_slots",
                type: "long_rest",
                list: [
                  [ "d4", 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, ],
                ],
              },
            ],

            equipment: [
              {
                inventory: [items.talisman],
              },
            ],
          },
        ],
      },
      {
        level: 2,
        type: "custom",
        name: "invocations",
        select: [0,2,2,2,3, 3,4,4,5,5, 5,6,6,6,7, 7,7,8,8,8],
        list: [
          // Не каноничньіе, как оказалось
          // {
          //   level: 2,
          //   condition: "pact_of_the_tome",
          //   name: "aspect_of_the_moon",

          //   fines: [
          //     {
          //       type: "plus",
          //       keyword: "none",
          //       details: "sleep",
          //     },
          //     {
          //       type: "resistance",
          //       keyword: "immunity",
          //       details: "sleep_against",
          //     },
          //   ],
          // },
          {
            level: 2,
            name: "gaze_of_two_minds",

            spells: [
              {
                level: 2,
                spell: spells.gaze_of_two_minds,
              },
            ],
          },
          {
            level: 2,
            name: "thief_of_five_fates",
            details: "thief_of_five_fates_details",

            spells: [
              {
                level: 2,
                spell: spells.bane,
              },
            ],
          },
          {
            level: 2,
            name: "eyes_of_the_rune_keeper",

            fines: [
              {
                type: "plus",
                keyword: "able_to_read",
                details: "any_texts",
              },
            ],
          },
          {
            level: 2,
            condition: "pact_of_the_chain",
            name: "voice_of_the_chain_master",

            fines: [
              {
                type: "plus",
                keyword: "able_to_speak",
                details: "through_familiar",
              },
            ],
          },
          // {
          //   level: 2,
          //   condition: "pact_of_the_chain",
          //   name: "gift_of_the_ever_living_ones",

          //   fines: [
          //     {
          //       type: "advantage",
          //       keyword: "always_max_heal",
          //       details: "if_familiar_is_in_100f",
          //     },
          //   ],
          // },
          // {
          //   level: 2,
          //   condition: "pact_of_the_chain",
          //   name: "investment_of_the_chain_master",

          //   spells: [
          //     {
          //       level: 2,
          //       spell: spells.investment_of_the_chain_master,
          //     }
          //   ]
          // },
          {
            level: 2,
            name: "armor_of_shadows",

            spells: [
              {
                level: 2,
                spell: spells.mage_armor_shadow,
              },
            ],
          },

          {
            level: 2,
            name: "devils_sight",

            fines: [
              {
                type: "plus",
                keyword: "able_to_see",
                details: "in_magic_darkness",
              },
            ],

            qualities: [
              {
                level: 2,
                vision_night: 120,
              },
            ],
          },
          {
            level: 2,
            name: "beast_speech",

            spells: [
              {
                level: 2,
                spell: spells.speak_with_animals_warlock,
              },
            ],
          },
          {
            level: 2,
            condition: "pact_of_the_tome",
            name: "book_of_antient_secrets",

            spells: [
              {
                level: 2,
                spell: spells.learn_ritual,
              },
            ],
          },
          // {
          //   level: 2,
          //   condition: "spell_eldritch_blast",
          //   name: "lance_of_lethargy",

          //   spells: [
          //     {
          //       level: 2,
          //       spell: spells.eldritch_blast_slow,
          //     }
          //   ]
          // },
          {
            level: 2,
            name: "mask_of_many_faces",

            spells: [
              {
                level: 2,
                spell: spells.disguise_self_warlock,
              },
            ],
          },
          // {
          //   level: 2,
          //   name: "eldritch_mind",

          //   fines: [
          //     {
          //       type: "advantage",
          //       keyword: "advantage",
          //       details: "on_concentration",
          //     },
          //   ],
          // },
          {
            level: 2,
            condition: "spell_eldritch_blast",
            name: "eldritch_spear",

            spells: [
              {
                level: 2,
                spell: spells.eldritch_blast_distant,
              },
            ],
          },
          {
            level: 2,
            name: "fiendish_vigor",

            spells: [
              {
                level: 2,
                spell: spells.false_life_warlock,
              },
            ],
          },
          {
            level: 2,
            condition: "spell_eldritch_blast",
            name: "agonizing_blast",

            spells: [
              {
                level: 2,
                spell: spells.eldritch_blast_damage,
              },
            ],
          },
          {
            level: 2,
            name: "beguiling_influence",

            skills: [
              {
                level: 2,
                deception: "Mastery",
                persuasion: "Mastery",
              },
            ],
          },
          {
            level: 2,
            condition: "spell_eldritch_blast",
            name: "repelling_blast",

            spells: [
              {
                level: 2,
                spell: spells.eldritch_blast_push,
              },
            ],
          },
          // {
          //   level: 2,
          //   condition: "pact_of_the_talisman",
          //   name: "rebuke_of_the_talisman",

          //   spells: [
          //     {
          //       level: 2,
          //       spell: spells.rebuke_of_the_talisman,
          //     }
          //   ],
          // },
          {
            level: 2,
            name: "eldritch_sight",

            spells: [
              {
                level: 2,
                spell: spells.detect_magic_warlock,
              },
            ],
          },
          {
            level: 2,
            name: "misty_visions",

            spells: [
              {
                level: 2,
                spell: spells.silent_image_warlock,
              },
            ],
          },
          //TODO - добавить остальньіе уровни (заблокировано заклинаниями)
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            skills: [ { investigation: "Mastery", }, ],
          },
          {
            skills: [ { intimidation: "Mastery", }, ],
          },
          {
            skills: [ { history: "Mastery", }, ],
          },
          {
            skills: [ { arcana: "Mastery", }, ],
          },
          {
            skills: [ { deception: "Mastery", }, ],
          },
          {
            skills: [ { nature: "Mastery", }, ],
          },
          {
            skills: [ { religion: "Mastery", }, ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          {
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.sling, 1]],
                inventory: [[items.bullet, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          {
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.sling, 1]],
                inventory: [[items.bullet, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "equipment",
        select: 1,
        list: [
          {
            inventory: [[items.component_pouch, 1]],
          },
          {
            inventory_packs: [[items.focus, 1]],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {equipment: [{ inventory_packs:[[packs.scholars, 1],],}]},
          {equipment: [{ inventory_packs:[[packs.dungeoneers, 1],],}]},
        ],
      },
      {
        level: 1,
        type: "spells",
        name: "spells_0",
        select: [2,2,2,3,3, 3,3,3,3,4, 4,4,4,4,4, 4,4,4,4,4,],
        mana_min: 0,
        mana_max: 0,
        classes: ["warlock"],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
    ],
  }, // 20 без Арканумов, воззваний, заклинаний

  //NOTE - sorcerer

  sorcerer: {
    name: "sorcerer",
    details: "sorcerer_details",

    hp_dice: 6,

    proficiencies: {
      weapons: [weaponry.quarterstaffs, weaponry.daggers, weaponry.light_arbalets, weaponry.darts, weaponry.slings],
    },

    saving: ["constitution", "charisma"],
    stats_base: [
      "charisma",
      "dexterity",
      "constitution",
      "wisdom",
      "intelligence",
      "strength",
    ],
    spell_attribute: "charisma",

    charges: [
      {
        level: 2,
        name: "sorcery_slots",
        type: "long_rest",
        list: [
          ["", 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        ],
      },
      {
        level: 1,
        name: "spell_slots",
        type: "long_rest",
        list: [
          ["[1]", 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          ["[2]", 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[3]", 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[4]", 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
          ["[6]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
          ["[7]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
          ["[8]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          ["[9]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
      },
    ],

    equipment: [
      {
        level: 1,
        weapon: [ [weapons.dagger, 2], [weapons.unarmed, 1], ],
      },
    ],

    fines: [
      {
        level: 20,
        type: "plus",
        keyword: "short_rest",
        details: "to_restore_4_sorcery_points",
      }
    ],

    spells: [
      {
        level:2,
        spell:spells.sorcery_to_mana,
      },
      {
        level:2,
        spell:spells.mana_to_sorcery,
      },
      {
        level:5,
        spell:spells.magical_direction,
      },
    ],

    settings: [
      {
        level: 1,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "sorcerer_dragon_blood",
            details: "sorcerer_dragon_blood_details",

            proficiencies: {
              languages: [lang.dragon],
            },

            hp_bonus: [1,1],

            fines: [
              {
                level: 1,
                type: "resistance",
                keyword: "no_armor_protection",
                details: "plus_3_armor",
              },
              {
                level: 1,
                type: "plus",
                keyword: "proficiency_bonus",
                details: "to_charisma_dragon",
              },
            ],

            qualities: [
              {
                armor_bonus: 3,
              }
            ],

            spells: [
              {
                level:14,
                spell:spells.dragon_wings
              },
              {
                level:18,
                spell:spells.dragon_presence
              },
            ],

            settings: [
              {
                level: 6,
                type: "custom",
                name: "dragon_ancestor",
                select: 1,
                list: [
                  {
                    name: "red_dragonborn",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_fire
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_fire
                      },
                    ],
                  },
                  {
                    name: "brass_dragonborn",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_fire
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_fire
                      },
                    ],
                  },
                  {
                    name: "golden_dragonborn",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_fire
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_fire
                      },
                    ],
                  },
                  {
                    name: "silver_dragonborn",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_cold
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_cold
                      },
                    ],
                  },
                  {
                    name: "white_dragonborn",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_cold
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_cold
                      },
                    ],
                  },
                  {
                    name: "blue_dragonborn",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_electricity
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_electricity
                      },
                    ],
                  },
                  {
                    name: "bronze_dragonborn",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_electricity
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_electricity
                      },
                    ],
                  },
                  {
                    name: "copper_dragonborn",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_acid
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_acid
                      },
                    ],
                  },
                  {
                    name: "black_dragonborn",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_acid
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_acid
                      },
                    ],
                  },
                  {
                    name: "green_dragonborn",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_poison
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_poison
                      },
                    ],
                  },
                ]
              }
            ]
          },
          {
            name: "sorcerer_wild_magic",
            details: "sorcerer_wild_magic_details",

            charges: [
              {
                level: 2,
                name: "wild_magic_surge_slots",
                type: "long_rest",
                list: [
                  ["", 1,1,1,1,1,  1,1,1,1,1,  1,1,1,1,1,  1,1,1,1,1],
                ],
              },
            ],

            spells: [
              {
                level:1,
                spell:spells.wild_magic_surge
              },
              {
                level:6,
                spell:spells.bend_luck
              },
            ],

            fines: [
              {
                level: 1,
                type: "plus",
                keyword: "random_magic_effect",
                details: "on_casting_spell_mana_and_used_chaos",
              },
              {
                level: 14,
                type: "advantage",
                keyword: "advantage",
                details: "on_random_magic_effect",
              },
              {
                level: 18,
                type: "plus",
                keyword: "extra_dice_damage",
                details: "on_max_dice_result_in_spell",
              },
            ],
          },
        ],
      },
      {
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            skills: [ { intimidation: "Mastery", }, ],
          },
          {
            skills: [ { arcana: "Mastery", }, ],
          },
          {
            skills: [ { deception: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { religion: "Mastery", }, ],
          },
          {
            skills: [ { persuasion: "Mastery", }, ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          {
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.sling, 1]],
                inventory: [[items.bullet, 20]],
              },
            ],
          },
        ],
      },
      {
        type: "custom",
        name: "inventory",
        select: 1,
        list: [
          {equipment: [{ inventory:[[items.component_pouch, 1],],}]},
          {equipment: [{ inventory:[[items.focus, 1],],}]},
        ]
      },
      {
        level: 1,
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {equipment: [{ inventory_packs:[[packs.dungeoneers, 1],],}]},
          {equipment: [{ inventory_packs:[[packs.explorers, 1],],}]},
        ],
      },
      {
        level: 1,
        type: "spells",
        name: "spells_0",
        select: [ 4, 4, 4, 5, 5,   5, 5, 5, 5, 6,   6, 6, 6, 6, 6,   6, 6, 6, 6, 6, ],
        mana_min: 0,
        mana_max: 0,
        classes: ["sorcerer"],
      },
      {
        level: 1,
        type: "spells",
        name: "spells",
        select: [2,3,4,5,6, 7,8,9,10,11, 12,12,13,13,14, 14,15,15,15,15],
        mana_min: 1,
        mana_max: [1,1,2,2,3, 3,4,4,5,5, 6,6,7,7,8, 8,9,9,9,9],
        classes: ["wizard"],
      },
      {
        level: 3,
        type: "custom",
        name: "metamagic",
        select: [0,0,2,2,2, 2,2,2,2,3, 3,3,3,3,3, 3,4,4,4,4],
        list: [
          { spells:[{spell:spells.metamagic_careful}] },
          { spells:[{spell:spells.metamagic_distant}] },
          { spells:[{spell:spells.metamagic_empowered}] },
          { spells:[{spell:spells.metamagic_extended}] },
          { spells:[{spell:spells.metamagic_heightened}] }, // непреодолимое
          { spells:[{spell:spells.metamagic_quickened}] },
          { spells:[{spell:spells.metamagic_subtle}] }, // неуловимое
          { spells:[{spell:spells.metamagic_transmuted}] },
          { spells:[{spell:spells.metamagic_twinned}] },

          { spells:[{spell:spells.metamagic_seeking}] },
        ],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },      
    ]
  }, // 20

  //NOTE - Wizard -------------------------------------------------------------------------

  wizard: {
    name: "wizard",
    details: "wizard_details",

    hp_dice: 6,

    proficiencies: {
      armor: [],
      weapons: [
        weaponry.daggers,
        weaponry.darts,
        weaponry.slings,
        weaponry.quarterstaffs,
        weaponry.light_arbalets,
      ],
      tools: [],
      languages: [],
    },

    saving: ["intelligence", "wisdom"],
    stats_base: [
      "intelligence",
      "wisdom",
      "constitution",
      "dexterity",
      "charisma",
      "strength",
    ],
    spell_attribute: "intelligence",

    fines: [
      {
        level: 1,
        type: "plus",
        keyword: "restoring",
        details: "mana_slots_short_rest_lvl_05",
      },
      {
        level: 18,
        type: "plus",
        keyword: "use_wo_mana",
        details: "two_spells_1_and_2",
      },
      {
        level: 20,
        type: "plus",
        keyword: "use_wo_mana",
        details: "two_spells_3",
      },
    ],

    charges: [
      {
        level: 1,
        name: "spell_slots",
        type: "long_rest",
        list: [
          ["[1]", 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          ["[2]", 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[3]", 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[4]", 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
          ["[6]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
          ["[7]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
          ["[8]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          ["[9]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
      },
    ],

    equipment: [
      {
        weapon: [[weapons.unarmed, 1]],
        inventory: [[items.spell_book, 1]],
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.learn_spell,
      },
    ],

    settings: [
      {
        level: 2,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "school_of_evocation",
            details: "school_of_evocation_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_evocation",
              },
              {
                type: "plus",
                keyword: "save_ally",
                details: "one_plus_lvl_from_spell_evocation",
              },
              {
                level: 6,
                type: "plus",
                keyword: "min_half_damage",
                details: "from_cantrips",
              },
              {
                level: 10,
                type: "plus",
                keyword: "plus_INT",
                details: "to_damage_evocation",
              },
            ],

            spells: [
              {
                level: 14,
                spell: spells.overload,
              },
            ],
          },
          {
            name: "school_of_conjuration",
            details: "school_of_conjuration_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_conjuration",
              },
            ],

            spells: [
              {
                spell: spells.small_conjuration,
              },
            ],
          },
          {
            name: "school_of_illusion",
            details: "school_of_illusion_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_illusion",
              },
            ],

            spells: [
              {
                spell: spells.small_illusion,
              },
            ],
          },
          {
            name: "school_of_necromancy",
            details: "school_of_necromancy_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_necromancy",
              },
              {
                type: "plus",
                keyword: "heal",
                details: "from_spell_kill_necromancy",
              },
            ],
          },
          {
            name: "school_of_abjuration",
            details: "school_of_abjuration_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_abjuration",
              },
            ],

            charges: [
              {
                level: 2,
                name: "magical_protection_slots",
                type: "long_rest",
                list: [
                  [ "", 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
                ],
              },
            ],

            spells: [
              {
                spell: spells.magical_protection,
              },
            ],
          },
          {
            name: "school_of_enchantment",
            details: "school_of_enchantment_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_enchantment",
              },
            ],

            spells: [
              {
                spell: spells.hypnotic_look,
              },
            ],
          },
          {
            name: "school_of_transmutation",
            details: "school_of_transmutation_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_transmutation",
              },
            ],

            spells: [
              {
                spell: spells.small_alchemy,
              },
            ],
          },
          {
            name: "school_of_divination",
            details: "school_of_divination_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_divination",
              },
            ],

            spells: [
              {
                spell: spells.portent,
              },
            ],
          },
        ],
      },
      {
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            skills: [ { investigation: "Mastery", }, ],
          },
          {
            skills: [ { history: "Mastery", }, ],
          },
          {
            skills: [ { arcana: "Mastery", }, ],
          },
          {
            skills: [ { medicine: "Mastery", }, ],
          },
          {
            skills: [ { insight: "Mastery", }, ],
          },
          {
            skills: [ { religion: "Mastery", }, ],
          },
        ],
      },
      {
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          { equipment: [{ weapon: [[weapons.quarterstaff, 1]] }], },
          { equipment: [{ weapon: [[weapons.dagger, 1]] }], },
        ],
      },
      {
        type: "custom",
        name: "inventory",
        select: 1,
        list: [
          {equipment: [{ inventory:[[items.component_pouch, 1],],}]},
          {equipment: [{ inventory:[[items.focus, 1],],}]},
        ]
      },
      {
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {equipment: [{ inventory_packs:[[packs.scholars, 1],],}]},
          {equipment: [{ inventory_packs:[[packs.explorers, 1],],}]},
        ],
      },
      {
        level: 1,
        type: "spells",
        name: "spells_0",
        select: [3,3,3,4,4, 4,4,4,4,5, 5,5,5,5,5, 5,5,5,5,5,],
        mana_min: 0,
        mana_max: 0,
        classes: ["wizard"],
      },
      {
        type: "spells",
        name: "spells",
        select: [6,8,10,12,14, 16,18,20,22,24, 26,28,30,32,34, 36,38,40,42,44],
        mana_min: 1,
        mana_max: [1,1,2,2,3, 3,4,4,5,5, 6,6,7,7,8, 8,9,9,9,9],
        classes: ["wizard"],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
    ],
  }, // 20

  //NOTE - Bard -------------------------------------------------------------------------

  bard: {
    name: "bard",
    details: "bard_details",

    hp_dice: 8,
    // x: hp_dice/2 + 1;
    // hp_bonus: (x+con.mod)*lvl + hp_dice - x
    //regen: = lvl * hp_dice

    proficiencies: {
      armor: [armory.light],
      weapons: [
        weaponry.simple,
        weaponry.short_swords,
        weaponry.long_swords,
        weaponry.rapires,
        weaponry.hand_arbalets,
      ],
    },

    saving: ["dexterity", "charisma"],
    stats_base: [
      "charisma",
      "dexterity",
      "constitution",
      "wisdom",
      "intelligence",
      "strength",
    ],
    spell_attribute: "charisma",

    equipment: [
      {
        level: 1,
        armor: [[armors.leather, 1]],
        weapon: [
          [weapons.dagger, 1],
          [weapons.unarmed, 1],
        ],
      },
    ],

    specials: [
      {
        level: 2,
        type: "skills",
        foo: "Half_Mastery",
      },
    ],

    charges: [
      {
        level: 1,
        name: "bardic_inspiration_slots",
        type: "long_rest",
        foo: "Str_Level_5_10_15__Num_CHA_Min1__Typ_5_Lvl",
        //Ваша Кость бардовского вдохновения изменяется с ростом вашего уровня в этом классе. Она становится к8 на 5 уровне, к10 на 10 уровне и к12 на 15 уровне.
        //Вьі можете использовать это умение количество раз, равное модификатору вашей Харизмьі, но как минимум один раз.
        //Ваша Кость бардовского вдохновения изменяется с ростом вашего уровня в этом классе. Изначально d6, она становится d8 на 5 уровне, d10 на 10 уровне и d12 на 15 уровне.
        list: [
          ["", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
      {
        level: 1,
        name: "spell_slots",
        type: "long_rest",
        list: [
          ["[1]", 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          ["[2]", 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[3]", 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[4]", 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
          ["[6]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
          ["[7]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
          ["[8]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          ["[9]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
      },
    ],

    spells: [
      {
        spell: spells.bardic_inspiration,
      },
      {
        level: 2,
        spell: spells.song_of_rest,
      },
      {
        level: 6,
        spell: spells.countercharm,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "spell_focus",
        details: "as_musical_instrument",
      },
      {
        level: 2,
        type: "plus",
        keyword: "proficiency_bonus_half",
        details: "on_mastery_checks",
      },
      {
        level: 5,
        type: "plus",
        keyword: "restoring",
        details: "of_inspiration_slots_on_short_rest",
      },
      {
        level: 5,
        type: "plus",
        keyword: "plus_1_insptiration",
        details: "on_initiative_and_0_inspiration",
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "college_valor",
            details: "college_valor_details",

            proficiencies: {
              armor: [armory.medium, armory.shields],
              weapons: [weaponry.military],
            },

            fines: [
              {
                type: "plus",
                keyword: "spell_bardic_inspiration",
                details: "on_damage_and_ac",
              },
            ],

            spells: [
              {
                level:6,
                spell:spells.extra_attack,
              },
              {
                level:14,
                spell:spells.bonus_attack,
              },
            ],

            settings: [
              {
                level:6,
                type: "spells",
                name: "spells",
                select: [0,0,0,0,0, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2],
                mana_min: 0,
                mana_max: [1,1,2,2,3, 3,4,4,5,5, 6,6,7,7,8, 8,9,9,9,9],
                classes: ["bard"],
              },
            ]
          },
          {
            name: "college_lore",
            details: "college_lore_details",

            spells: [
              {
                level:3,
                spell:spells.cutting_word,
              },
              {
                level:14,
                spell:spells.peerless_skill,
              },
            ],

            settings: [
              {
                type: "custom",
                name: "skills",
                select: 3,
                list: [
                  {skills: [ { athletics: "Mastery", }, ],},
                  {skills: [ { acrobatics: "Mastery", }, ],},
                  {skills: [ { sleight_of_hand: "Mastery", }, ],},
                  {skills: [ { stealth: "Mastery", }, ],},
                  {skills: [ { investigation: "Mastery", }, ],},
                  {skills: [ { history: "Mastery", }, ],},
                  {skills: [ { religion: "Mastery", }, ],},
                  {skills: [ { arcana: "Mastery", }, ],},
                  {skills: [ { nature: "Mastery", }, ],},
                  {skills: [ { survival: "Mastery", }, ],},
                  {skills: [ { perception: "Mastery", }, ],},
                  {skills: [ { insight: "Mastery", }, ],},
                  {skills: [ { medicine: "Mastery", }, ],},
                  {skills: [ { animal_hanging: "Mastery", }, ],},
                  {skills: [ { performance: "Mastery", }, ],},
                  {skills: [ { persuasion: "Mastery", }, ],},
                  {skills: [ { deception: "Mastery", }, ],},
                  {skills: [ { intimidation: "Mastery", }, ],},                  
                ]
              },
              {
                level: 6,
                type: "spells",
                name: "magic_mistery",
                select: [0,0,0,0,0, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2],
                mana_min: 0,
                mana_max: [1,1,2,2,3, 3,4,4,5,5, 6,6,7,7,8, 8,9,9,9,9],
                classes: ["artificer","cleric","druid","paladin","sorcerer","warlock","wizard"],
              },
            ],
          },
        ],
      },
      {
        type: "custom",
        name: "skills",
        select: 3,
        list: [
          {skills: [ { athletics: "Mastery", }, ],},
          {skills: [ { acrobatics: "Mastery", }, ],},
          {skills: [ { sleight_of_hand: "Mastery", }, ],},
          {skills: [ { stealth: "Mastery", }, ],},
          {skills: [ { investigation: "Mastery", }, ],},
          {skills: [ { history: "Mastery", }, ],},
          {skills: [ { religion: "Mastery", }, ],},
          {skills: [ { arcana: "Mastery", }, ],},
          {skills: [ { nature: "Mastery", }, ],},
          {skills: [ { survival: "Mastery", }, ],},
          {skills: [ { perception: "Mastery", }, ],},
          {skills: [ { insight: "Mastery", }, ],},
          {skills: [ { medicine: "Mastery", }, ],},
          {skills: [ { animal_hanging: "Mastery", }, ],},
          {skills: [ { performance: "Mastery", }, ],},
          {skills: [ { persuasion: "Mastery", }, ],},
          {skills: [ { deception: "Mastery", }, ],},
          {skills: [ { intimidation: "Mastery", }, ],},
        ],
      },
      {
        type: "custom",
        name: "proficiencies",
        select: 3,
        list: [
          {
            proficiencies: 
              {
                tools: [tools.music_bagpipes],
              },

          },
          {
            proficiencies: 
              {
                tools: [tools.music_drums],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_dulcimer],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_flute],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_horn],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_lute],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_lyre],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_pan_flute],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_shawm],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_viol],
              },
            
          },
        ],
      },
      {
        type: "custom",
        name: "weapons",
        select: 1,
        list: [
          { equipment: [{ weapon: [[weapons.rapier, 1]] }], },
          { equipment: [{ weapon: [[weapons.longsword, 1]] }], },
          { equipment: [{ weapon: [[weapons.quarterstaff, 1]] }], },
          { equipment: [{ weapon: [[weapons.mace, 1]] }], },
          { equipment: [{ weapon: [[weapons.club, 1]] }], },
          { equipment: [{ weapon: [[weapons.dagger, 1]] }], },
          { equipment: [{ weapon: [[weapons.spear, 1]] }], },
          { equipment: [{ weapon: [[weapons.light_hammer, 1]] }], },
          { equipment: [{ weapon: [[weapons.javelin, 1]] }], },
          { equipment: [{ weapon: [[weapons.greatclub, 1]] }], },
          { equipment: [{ weapon: [[weapons.sickle, 1]] }], },
        ],
      },
      {
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {equipment: [{ inventory_packs:[[packs.diplomats, 1],],}]},
          {equipment: [{ inventory_packs:[[packs.entertainers, 1],],}]},
        ],
      },
      {
        type: "custom",
        name: "tool",
        select: 1,
        list: [
          {equipment: [{ inventory:[[items.music_lute, 1],],}]},
          {equipment: [{ inventory:[[items.music_bagpipes, 1],],}]},
          {equipment: [{ inventory:[[items.music_drums, 1],],}]},
          {equipment: [{ inventory:[[items.music_dulcimer, 1],],}]},
          {equipment: [{ inventory:[[items.music_flute, 1],],}]},
          {equipment: [{ inventory:[[items.music_horn, 1],],}]},
          {equipment: [{ inventory:[[items.music_lyre, 1],],}]},
          {equipment: [{ inventory:[[items.music_pan_flute, 1],],}]},
          {equipment: [{ inventory:[[items.music_shawm, 1],],}]},
          {equipment: [{ inventory:[[items.music_viol, 1],],}]},
        ],
      },
      {
        level: 1,
        type: "spells",
        name: "spells_0",
        select: [2,2,2,3,3, 3,3,3,3,4, 4,4,4,4,4, 4,4,4,4,4],
        mana_min: 0,
        mana_max: 0,
        classes: ["bard"],
      },
      {
        level: 1,
        type: "spells",
        name: "spells",
        select: [4,5,6,7,8, 7,8,9,10,10, 11,11,12,12,13, 13,14,14,14,14],
        mana_min: 1,
        mana_max: [1,1,2,2,3, 3,4,4,5,5, 6,6,7,7,8, 8,9,9,9,9],
        classes: ["bard"],
      },
      {
        level: 10,
        type: "spells",
        name: "magic_mistery",
        select: [0,0,0,0,0, 0,0,0,0,2, 2,2,2,4,4, 4,4,6,6,6],
        mana_min: 0,
        mana_max: [1,1,2,2,3, 3,4,4,5,5, 6,6,7,7,8, 8,9,9,9,9],
        classes: ["artificer","cleric","druid","paladin","sorcerer","warlock","wizard"],
      },
      {
        level: 3,
        type: "custom",
        name: "skills",
        select: 2,
        filter: "only_mastery",
        // На третьем уровне вьіберите 2 навьіка из тех, которьіми вьі владеете. Ваш бонус мастерства для этих навьіков удваивается. На 10 уровне вьі можете вьібрать еще 2 навьіка и получить для них это преимущество.
        bonus: "Mastery",
        list:[]
      },
      {
        level: 10,
        type: "custom",
        name: "skills",
        select: 2,
        filter: "only_mastery",
        bonus: "Mastery",
        list:[]
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
    ],
  }, // 20
};
