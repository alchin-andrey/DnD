import * as races_ru from './ru/ru_races.js';
import * as spells_ru from './ru/ru_spells.js';
import { langs_ru } from './ru/ru_languages.js';

export default {

    ru:{

            //Общее
            
            name:"имя",
            race:"раса",
            ethnos:"этнос",
            class:"класс",
            subclass:"специализация",
            past:"предистория",
            level:"уровень",
            
            base:"базовая",

            strength:"сила",
            dexterity:"ловкость",
            constitution:"телосложение",
            intelligence:"интеллект",    
            wisdom:"мудрость",
            charisma:"харизма",

            alignment:"мировоззрение",
            gender:"гендер",
                phisiological: "физиологический",
                    male: "мужчина",
                    male_details: "ваш персонаж обладает исключительно мужскими половыми признаками.",
                    intersex: "интерсекс",
                    intersex_details: "ваш персонаж обладает как мужскими, так и женскими половыми признаками. а возможно и еще какими-то.",
                    female: "женщина",
                    ауmale_details: "ваш персонаж обладает исключительно женскими половыми признаками.",
                    demiboy: "демимальчик",
                    demiboy_details: "мужские половые признаки преобладают в вашем персонаже, но присутствуют и другие.",
                    demigirl: "демидевочка",
                    demigirl_details: "женские половые признаки преобладают в вашем персонаже, но присутствуют и другие.",
                    neutral_gender: "бесполое",
                    neutral_gender_details: "у вашего персонажа нет признаков, которые можно было бы назвать присущими какому-то полу.",
                    unstable: "нестабильный пол",
                    unstable_details: "пол вашего персонажа может меняться.",
                    other_gender: "другой пол",
                    other_gender_details: "ваш персонаж обладает признаками пола, отличного от мужского или женского.",
                feel:"самоощущение",
                    pangender:"пангендер",
                    pangender_details: "ваш персонаж ощущает себя носителем всех гендеров сразу.",
                    undecided:"неопределенный",
                    undecided_details: "ваш персонаж не определился, каким гендером он себя ощущает.",
                    gender_fluid:"флюид",
                    gender_fluid_details: "ощущение гендера вашего персонажа может меняться.",
                    androgin:"андрогин",
                    androgin_details: "ваш персонаж ощущает себя чем-то средним между своим физиологическим и другим гендером",
                    cisgender:"цисгендер",
                    cisgender_details: "cамоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
                    transsexual:"транссексуал",
                    transsexual_details: "cамоощущение вашего персонажа отличается от физиологического гендера, и он стремится привести физиологический пол в соответствие своему ощущению.",
                    demigender:"демигендер",
                    demigender_details: "cамоощущение вашего персонажа соответствует его физиологическому гендеру, но не полностью.",
                    queer:"квир",
                    queer_details: "ощущение гендера вашего персонажа соответствует его физиологическому гендеру, но не соответствует набору признаков єтого гендера.",
                    bigender: "бигендер",
                    bigender_details: "гендер, которым ощущает себя ваш персонаж, объединяет в себе признаки его физиологического пола, а так же противоположного.",
                look: "внешний вид",
                    as_phisiological: "соответствует физиологическому полу",
                    as_feel: "соответствует самоощущению",
                    as_other_gender: "другое",
                    as_other_gender_details: "Это очень интересно! обязательно расскажите об этом в деталях при заполнении Предистории вашего персонажа.",
            
            faith:"вера",

            personality:"характер",
            ideals:"приоритеты",
            bonds:"привязанности",
            flaws:"слабости",
            appearance:"внешность",
            story:"прошлое",

            age:"возраст",
            weight:"вес",
            height:"рост",
            size:"размер",

                small_size:"маленький",
                medium_size:"средний",

            color:"цвет",

                white:"белый",
                black:"черный",


            maturity:"зрелость",

                young:"молодой",
                mature:"взрослый",
                old:"пожилой",
                oldest:"престарелый",

            HP_max:"max HP",
            HP_dice:"кости хитов",

            proficiency:"мастерство",
            initiative:"инициатива",
            armor_class:"броня",

            speed:"скорость",
            vision_day:"зрение",
            vision_night:"темное зрение",

            skills:"навыки",
                
                acrobatics:"акробатика",
                animal_hanging:"уход за животными",
                arcana:"магия",
                athletics:"атлетика",
                deception:"обман",
                history:"история",
                insight:"проницательность",
                intimidation:"запугивание",
                investigation:"анализ",
                medicine:"медицина",
                nature:"природа",
                perception:"внимательность",
                performance:"выступление",
                persuasion:"убеждение",
                religion:"религия",
                sleight_of_hand:"ловкость рук",
                stealth:"скрытность",
                survival:"выживание",
            
            proficiencies:"владения",

                armor:"доспехи",
                weapons:"оружие",
                tools:"инструменты",
                languages:"языки",
                
                    lang_common: langs_ru.common,
                    lang_common_details: langs_ru.common_details,

                    lang_halfling: langs_ru.halfling,
                    lang_halfling_details: langs_ru.halfling_details,

                    lang_gnome: langs_ru.gnome,
                    lang_gnome_details: langs_ru.gnome_details,

                    lang_dwarf: langs_ru.dwarf,
                    lang_dwarf_details: langs_ru.dwarf_details,

                    lang_tiefling: langs_ru.tiefling,
                    lang_tiefling_details: langs_ru.tiefling_details,

                    lang_elf: langs_ru.elf,
                    lang_elf_details: langs_ru.elf_details,

                    lang_orc: langs_ru.orc,
                    lang_orc_details: langs_ru.orc_details,

                    lang_dragon: langs_ru.dragon,
                    lang_dragon_details: langs_ru.dragon_details,

                    lang_giant: langs_ru.giant,
                    lang_giant_details: langs_ru.giant_details,

                    lang_goblin: langs_ru.goblin,
                    lang_goblin_details: langs_ru.goblin_details,

                    lang_undercommon: langs_ru.undercommon,
                    lang_undercommon_details: langs_ru.undercommon_details,

                    lang_sylvan: langs_ru.sylvan,
                    lang_sylvan_details: langs_ru.sylvan_details,

                    lang_animal: langs_ru.animal,
                    lang_animal_details: langs_ru.animal_details,

                    lang_druid: langs_ru.druid,
                    lang_druid_details: langs_ru.druid_details,

                    lang_primordial: langs_ru.primordial,
                    lang_primordial_details: langs_ru.primordial_details,

                    lang_sky: langs_ru.sky,
                    lang_sky_details: langs_ru.sky_details,

                    lang_demonic: langs_ru.demonic,
                    lang_demonic_details: langs_ru.demonic_details,

                    lang_thieves: langs_ru.thieves,
                    lang_thieves_details: langs_ru.thieves_details,

            //Особенности - пассивньіе умения
            peculiarities:"особенности",

                //Ключевые слова
                advantage:"преимущество",
                rethrow:"переброс",
                resistance:"сопротивление",
                telepathy:"телепатия",
                proficiency_bonus:"2× Мастерства",
                slippage: "проскальзывание",

                any_dice_1:"любого кубика при “1”",
                behind_bigger_than_mid:"за существом выше среднего",
                among_bigger_than_mid:"среди существ выше среднего",
                fear_against:"против 😱 Испуга",
                poison_against:"против 🧪 Яда",
                poison_damage:"урону 🧪 Ядом",
                known_languages:"на известных языках",

            //Умения - активньіе умения без урона
            abilities:"умения",

            //Заклинания - активньіе умения с уроном
            spells:"заклинания",

            inventory:"снаряжение",
            
                shield:"щит",

            wallet:"кошель",
                
                tripple_platina:"триждыплатиновых",
                platina:"серебрянных",
                gold:"золотых",
                silver:"серебрянных",
                copper:"медных",


    //Ethnos
            
            common:"обычный",
            
            stout:"коренастый",
            stout_halfling_description: races_ru.stout_halfling,
            lightfoot:"легконогий",
            ghost:"призрачный",

            rare:"редкий этнос",
            rare_description:races_ru.rare,

    //Races
            
            //Halfling
            
            halfling:"полурослик",                   
            halfling_description: races_ru.halfling,

            
            lightfoot_halfling_description: races_ru.lightfoot_halfling,
            ghost_halfling_description: races_ru.ghost_halfling,

    //Цвета
            
            White: "белый",
            Smoke: "дымчатый",
            Steel: "стальной",
            Grey: "серый",
            Ash: "пепельный",
            Iron: "железный",
            Black: "черный",

            Blush: "румяный",
            Reddish: "красноватый",
            Red: "красный",
            Bright_Red: "ярко-красный",
            Ruby: "рубиновый",
            Blood: "кровавый",
            Maroon: "багряный",

            Pale: "светлый",
            Sand: "песочный",
            Peach: "персиковый",
            Orange: "оранжевый",
            Hazel: "ореховый",
            Bronze: "бронзовый",
            Brown: "коричевый",

            Ivory: "слоновой кости",
            Straw: "соломы",
            Dandelion: "одуванчиковый",
            Yellow: "желтый",
            Sulfur: "серный",
            Golden: "золотой",
            Olive: "оливковый",
            Tea: "чайный",
            Pistachio: "фисташковый",
            Apple: "яблочный",
            Acid: "кислотный",
            Avocado: "авокадовый",
            Grass: "травяной",
            Swamp: "болотный",
            Greenish: "зеленоватый",
            Light_Green: "светло-зеленый",
            Green: "зеленый",
            Bright_Green: "ярко-зеленый",
            Lime: "лаймовый",
            Foliage: "листвы",
            Emerald: "изумрудный",
            Aquamarine: "аквамарин",
            Eucalyptus: "эвкалиптовый",
            Menthol: "ментоловый",
            Seafoam: "морской пены",
            Jade: "нефритовый",
            Mint: "мятный",
            Pine: "еловый",
            Pearl: "жемчужный",
            Ice: "ледяной",
            Lightning: "молниевый",
            Cyan: "голубой",
            Turquoise: "бирюзовый",
            Teal: "чирок",
            Malachite: "малахитовый",
            Silver: "серебряный",
            Sky: "небесный",
            Topaz: "топазовый",
            Azure: "лазурный",
            Cobalt: "кобальтовый",
            Lazulite: "лазулитовый",
            Blueberry: "черничный",
            Mauve: "лиловый",
            Lavender: "лавандовый",
            Cornflower: "васильковый",
            Ultramarine: "ультрамарин",
            Blue: "синий",
            Sapphire: "сапфировый",
            Night: "ночной",
            Thistle: "Чертополоховый",
            Wisteria: "глициниевый",
            Lilac: "сиреневый",
            Purple: "пурпурный",
            Violet: "фиолетовый",
            Amethyst: "аметистовый",
            Indigo: "индиго",
            Pinkish: "розоватый",
            Heliotrope: "гелиотроп",
            Pink: "розовый",
            Magenta: "маджента",
            Fuchsia: "фуксия",
            Orchid: "орхидеевый",
            Plum: "сливовый",
            Beige: "бежевый",
            Bubblegum: "баблгам",
            Watermelon: "арбузный",
            Carmine: "кармин",
            Raspberry: "малиновый",
            Cerise: "вишневый",
            Burgundy: "бордовый",

    //spells

            //schools
            cantrip:"заговор",
            evocation:"воплощение",

            //components
            verbal:"вербальный",
            somatic:"соматический",
            
            thaumaturgy: spells_ru.thaumaturgy,
            thaumaturgy_details: spells_ru.thaumaturgy_details,

            hellish_rebuke: spells_ru.hellish_rebuke,
            hellish_rebuke_details: spells_ru.hellish_rebuke_details,

            darkness: spells_ru.darkness,
            darkness_details: spells_ru.darkness_details,
                       
    },
    
}