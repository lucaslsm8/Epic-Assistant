import { Hero, Element, Role, Zodiac, TierRank } from '@/types/epic-seven';

// Epic Seven Heroes Database - 29 heroes
export const heroDatabase: Hero[] = [
  {
    id: 'vildred',
    name: 'Vildred',
    rarity: 5,
    element: Element.EARTH,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/vildred.png',
    description: 'A master swordsman seeking revenge against those who wronged him.',
    story: 'A master swordsman seeking revenge against those who wronged him.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'AoE farming and cleaving',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 4,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1319,
        health: 4942,
        defense: 532,
        speed: 105
      },
      maxStats: {
        attack: 1969,
        health: 8892,
        defense: 858,
        speed: 128
      },
      awakening: {
        attack: 678,
        health: 2628,
        defense: 226
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'bellona',
    name: 'Bellona',
    rarity: 5,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/bellona.png',
    description: 'A genius strategist and commander of the Eureka Mercenary Corps.',
    story: 'A genius strategist and commander of the Eureka Mercenary Corps.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Boss hunting and AoE damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 7,
      rta: 5,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1111,
        health: 4561,
        defense: 415,
        speed: 110
      },
      maxStats: {
        attack: 2010,
        health: 7311,
        defense: 736,
        speed: 116
      },
      awakening: {
        attack: 540,
        health: 2442,
        defense: 219
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'luna',
    name: 'Luna',
    rarity: 5,
    element: Element.ICE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/luna.png',
    description: 'A powerful dragon knight with immense physical strength.',
    story: 'A powerful dragon knight with immense physical strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target DPS and Wyvern hunting',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 6,
      rta: 4,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1132,
        health: 4160,
        defense: 547,
        speed: 112
      },
      maxStats: {
        attack: 2037,
        health: 6466,
        defense: 725,
        speed: 109
      },
      awakening: {
        attack: 719,
        health: 3477,
        defense: 234
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'krau',
    name: 'Krau',
    rarity: 5,
    element: Element.ICE,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/krau.png',
    description: 'A noble knight with powerful defensive abilities.',
    story: 'A noble knight with powerful defensive abilities.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and AoE damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 6,
      rta: 5,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1145,
        health: 5603,
        defense: 567,
        speed: 100
      },
      maxStats: {
        attack: 1877,
        health: 6550,
        defense: 685,
        speed: 118
      },
      awakening: {
        attack: 514,
        health: 2520,
        defense: 315
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'ken',
    name: 'Ken',
    rarity: 5,
    element: Element.FIRE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/ken.png',
    description: 'A martial artist with incredible strength and fighting spirit.',
    story: 'A martial artist with incredible strength and fighting spirit.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Bruiser and sustain',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1185,
        health: 4496,
        defense: 536,
        speed: 124
      },
      maxStats: {
        attack: 1938,
        health: 6306,
        defense: 830,
        speed: 117
      },
      awakening: {
        attack: 719,
        health: 2380,
        defense: 218
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'charles',
    name: 'Charles',
    rarity: 5,
    element: Element.EARTH,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/charles.png',
    description: 'A noble knight with exceptional combat skills.',
    story: 'A noble knight with exceptional combat skills.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Counter attacks and defense',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 8,
      rta: 6,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1302,
        health: 4918,
        defense: 547,
        speed: 113
      },
      maxStats: {
        attack: 1618,
        health: 7008,
        defense: 754,
        speed: 108
      },
      awakening: {
        attack: 635,
        health: 2759,
        defense: 274
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'tywin',
    name: 'Tywin',
    rarity: 5,
    element: Element.ICE,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/tywin.png',
    description: 'A wise and experienced military commander.',
    story: 'A wise and experienced military commander.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 4,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1397,
        health: 4758,
        defense: 574,
        speed: 115
      },
      maxStats: {
        attack: 1816,
        health: 8666,
        defense: 685,
        speed: 123
      },
      awakening: {
        attack: 669,
        health: 2358,
        defense: 291
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'sez',
    name: 'Sez',
    rarity: 5,
    element: Element.ICE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/sez.png',
    description: 'A cold-blooded assassin with deadly precision.',
    story: 'A cold-blooded assassin with deadly precision.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target assassination',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 6,
      rta: 5,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1483,
        health: 5226,
        defense: 502,
        speed: 115
      },
      maxStats: {
        attack: 1542,
        health: 7691,
        defense: 696,
        speed: 123
      },
      awakening: {
        attack: 526,
        health: 3294,
        defense: 272
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'sigret',
    name: 'Sigret',
    rarity: 5,
    element: Element.ICE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/sigret.png',
    description: 'A powerful warrior with dragon blood.',
    story: 'A powerful warrior with dragon blood.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 5,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1459,
        health: 5433,
        defense: 457,
        speed: 105
      },
      maxStats: {
        attack: 2239,
        health: 8666,
        defense: 606,
        speed: 127
      },
      awakening: {
        attack: 798,
        health: 3323,
        defense: 260
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'kayron',
    name: 'Kayron',
    rarity: 5,
    element: Element.FIRE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/kayron.png',
    description: 'A mysterious swordsman with dark powers.',
    story: 'A mysterious swordsman with dark powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Sustain and immortality',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 5,
      rta: 6,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1367,
        health: 5895,
        defense: 448,
        speed: 105
      },
      maxStats: {
        attack: 1822,
        health: 8992,
        defense: 848,
        speed: 105
      },
      awakening: {
        attack: 587,
        health: 3477,
        defense: 319
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'iseria',
    name: 'Iseria',
    rarity: 5,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/iseria.png',
    description: 'A skilled ranger with tactical brilliance.',
    story: 'A skilled ranger with tactical brilliance.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Team support and CR manipulation',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 6,
      rta: 5,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1471,
        health: 4571,
        defense: 434,
        speed: 113
      },
      maxStats: {
        attack: 1951,
        health: 8868,
        defense: 855,
        speed: 122
      },
      awakening: {
        attack: 555,
        health: 2481,
        defense: 240
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'tamarinne',
    name: 'Tamarinne',
    rarity: 5,
    element: Element.FIRE,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/tamarinne.png',
    description: 'A cheerful idol with healing powers.',
    story: 'A cheerful idol with healing powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Healing and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 5,
      rta: 5,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1246,
        health: 4726,
        defense: 574,
        speed: 122
      },
      maxStats: {
        attack: 1573,
        health: 6094,
        defense: 710,
        speed: 100
      },
      awakening: {
        attack: 708,
        health: 2916,
        defense: 330
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'yufine',
    name: 'Yufine',
    rarity: 5,
    element: Element.EARTH,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/yufine.png',
    description: 'A dragon knight with immense strength.',
    story: 'A dragon knight with immense strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage and defense break',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 5,
      rta: 6,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1154,
        health: 4380,
        defense: 563,
        speed: 100
      },
      maxStats: {
        attack: 2099,
        health: 6628,
        defense: 840,
        speed: 123
      },
      awakening: {
        attack: 669,
        health: 2278,
        defense: 324
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'arbiter-vildred',
    name: 'Arbiter Vildred',
    rarity: 5,
    element: Element.DARK,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/arbiter-vildred.png',
    description: 'The dark arbiter of justice.',
    story: 'The dark arbiter of justice.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'AoE cleaving and speed',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 7,
      rta: 4,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1227,
        health: 4534,
        defense: 427,
        speed: 115
      },
      maxStats: {
        attack: 1667,
        health: 8817,
        defense: 680,
        speed: 103
      },
      awakening: {
        attack: 688,
        health: 2958,
        defense: 313
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'ruele-of-light',
    name: 'Ruele of Light',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/ruele-of-light.png',
    description: 'The guardian of light and hope.',
    story: 'The guardian of light and hope.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Healing and resurrection',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 8,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1251,
        health: 5011,
        defense: 516,
        speed: 109
      },
      maxStats: {
        attack: 2106,
        health: 6703,
        defense: 840,
        speed: 125
      },
      awakening: {
        attack: 516,
        health: 2754,
        defense: 202
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'fallen-cecilia',
    name: 'Fallen Cecilia',
    rarity: 5,
    element: Element.DARK,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/fallen-cecilia.png',
    description: 'A fallen knight consumed by darkness.',
    story: 'A fallen knight consumed by darkness.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team protection',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 6,
      rta: 6,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1462,
        health: 5829,
        defense: 571,
        speed: 103
      },
      maxStats: {
        attack: 1610,
        health: 6471,
        defense: 631,
        speed: 110
      },
      awakening: {
        attack: 508,
        health: 2026,
        defense: 331
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'judge-kise',
    name: 'Judge Kise',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/judge-kise.png',
    description: 'The judge of the underworld.',
    story: 'The judge of the underworld.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'AoE damage and control',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 5,
      rta: 4,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1295,
        health: 4973,
        defense: 592,
        speed: 104
      },
      maxStats: {
        attack: 1618,
        health: 6058,
        defense: 834,
        speed: 101
      },
      awakening: {
        attack: 556,
        health: 2531,
        defense: 287
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'dark-corvus',
    name: 'Dark Corvus',
    rarity: 5,
    element: Element.DARK,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/dark-corvus.png',
    description: 'A corrupted warrior of immense power.',
    story: 'A corrupted warrior of immense power.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Tank and sustain',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 8,
      rta: 5,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1135,
        health: 5297,
        defense: 557,
        speed: 115
      },
      maxStats: {
        attack: 1755,
        health: 7887,
        defense: 832,
        speed: 122
      },
      awakening: {
        attack: 625,
        health: 2601,
        defense: 321
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'martial-artist-ken',
    name: 'Martial Artist Ken',
    rarity: 5,
    element: Element.FIRE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/martial-artist-ken.png',
    description: 'A master of martial arts.',
    story: 'A master of martial arts.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Bruiser and counter attacks',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 8,
      rta: 4,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1489,
        health: 5675,
        defense: 402,
        speed: 109
      },
      maxStats: {
        attack: 1993,
        health: 7233,
        defense: 684,
        speed: 104
      },
      awakening: {
        attack: 688,
        health: 2584,
        defense: 241
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'assassin-cidd',
    name: 'Assassin Cidd',
    rarity: 5,
    element: Element.EARTH,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/assassin-cidd.png',
    description: 'A deadly assassin with lightning speed.',
    story: 'A deadly assassin with lightning speed.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Speed and single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 7,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1246,
        health: 4849,
        defense: 512,
        speed: 108
      },
      maxStats: {
        attack: 1517,
        health: 7227,
        defense: 899,
        speed: 122
      },
      awakening: {
        attack: 512,
        health: 2427,
        defense: 265
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'assassin-coli',
    name: 'Assassin Coli',
    rarity: 5,
    element: Element.ICE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/assassin-coli.png',
    description: 'A silent assassin of the shadows.',
    story: 'A silent assassin of the shadows.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Stealth and assassination',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 5,
      rta: 5,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1049,
        health: 4702,
        defense: 424,
        speed: 108
      },
      maxStats: {
        attack: 1724,
        health: 6202,
        defense: 650,
        speed: 105
      },
      awakening: {
        attack: 689,
        health: 2345,
        defense: 337
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'auxiliary-lots',
    name: 'Auxiliary Lots',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/auxiliary-lots.png',
    description: 'A mysterious mage with powerful magic.',
    story: 'A mysterious mage with powerful magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'CR manipulation and support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1335,
        health: 4925,
        defense: 402,
        speed: 119
      },
      maxStats: {
        attack: 1711,
        health: 8969,
        defense: 877,
        speed: 112
      },
      awakening: {
        attack: 689,
        health: 2735,
        defense: 216
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'challenger-dominiel',
    name: 'Challenger Dominiel',
    rarity: 5,
    element: Element.ICE,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/challenger-dominiel.png',
    description: 'A powerful mage with ice magic.',
    story: 'A powerful mage with ice magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'AoE damage and control',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 5,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1393,
        health: 5335,
        defense: 486,
        speed: 106
      },
      maxStats: {
        attack: 1601,
        health: 7683,
        defense: 644,
        speed: 123
      },
      awakening: {
        attack: 514,
        health: 2522,
        defense: 217
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'blood-blade-karin',
    name: 'Blood Blade Karin',
    rarity: 5,
    element: Element.DARK,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/blood-blade-karin.png',
    description: 'A deadly assassin with blood magic.',
    story: 'A deadly assassin with blood magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Speed and single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 5,
      rta: 4,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1464,
        health: 4257,
        defense: 420,
        speed: 118
      },
      maxStats: {
        attack: 2097,
        health: 7875,
        defense: 602,
        speed: 123
      },
      awakening: {
        attack: 790,
        health: 3114,
        defense: 240
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'shadow-rose',
    name: 'Shadow Rose',
    rarity: 5,
    element: Element.DARK,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/shadow-rose.png',
    description: 'A dark knight with shadow powers.',
    story: 'A dark knight with shadow powers.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 6,
      rta: 7,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1413,
        health: 4874,
        defense: 418,
        speed: 109
      },
      maxStats: {
        attack: 1871,
        health: 6682,
        defense: 728,
        speed: 116
      },
      awakening: {
        attack: 534,
        health: 3113,
        defense: 232
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'silver-blade-aramintha',
    name: 'Silver Blade Aramintha',
    rarity: 5,
    element: Element.FIRE,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/silver-blade-aramintha.png',
    description: 'A powerful mage with fire magic.',
    story: 'A powerful mage with fire magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'AoE damage and burns',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 6,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1288,
        health: 4464,
        defense: 537,
        speed: 100
      },
      maxStats: {
        attack: 2032,
        health: 8588,
        defense: 705,
        speed: 108
      },
      awakening: {
        attack: 686,
        health: 3308,
        defense: 208
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'blaze-dingo',
    name: 'Blaze Dingo',
    rarity: 5,
    element: Element.FIRE,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/blaze-dingo.png',
    description: 'A fiery healer with burning passion.',
    story: 'A fiery healer with burning passion.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Healing and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1108,
        health: 4783,
        defense: 487,
        speed: 111
      },
      maxStats: {
        attack: 2161,
        health: 7863,
        defense: 876,
        speed: 120
      },
      awakening: {
        attack: 578,
        health: 2851,
        defense: 273
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'guider-aither',
    name: 'Guider Aither',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/guider-aither.png',
    description: 'A mysterious guide with light magic.',
    story: 'A mysterious guide with light magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Support and team buffs',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 6,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1268,
        health: 5092,
        defense: 496,
        speed: 108
      },
      maxStats: {
        attack: 2096,
        health: 8794,
        defense: 809,
        speed: 109
      },
      awakening: {
        attack: 636,
        health: 2060,
        defense: 244
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'wanderer-silk',
    name: 'Wanderer Silk',
    rarity: 5,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/wanderer-silk.png',
    description: 'A wandering ranger with earth magic.',
    story: 'A wandering ranger with earth magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Speed and AoE damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 6,
      rta: 6,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1243,
        health: 5735,
        defense: 569,
        speed: 118
      },
      maxStats: {
        attack: 1612,
        health: 8865,
        defense: 702,
        speed: 104
      },
      awakening: {
        attack: 758,
        health: 2505,
        defense: 308
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  }
];

// Helper functions
export const searchHeroes = (heroes: Hero[], searchTerm: string): Hero[] => {
  if (!searchTerm) return heroes;
  
  const term = searchTerm.toLowerCase();
  return heroes.filter(hero => 
    hero.name.toLowerCase().includes(term) ||
    hero.tags.some(tag => tag.toLowerCase().includes(term)) ||
    hero.specialty?.toLowerCase().includes(term) ||
    hero.description.toLowerCase().includes(term)
  );
};

export const filterHeroesByElement = (heroes: Hero[], element: string): Hero[] => {
  if (element === 'all') return heroes;
  return heroes.filter(hero => hero.element === element);
};

export const filterHeroesByRole = (heroes: Hero[], role: string): Hero[] => {
  if (role === 'all') return heroes;
  return heroes.filter(hero => hero.role === role);
};

export const filterHeroesByRarity = (heroes: Hero[], rarity: string): Hero[] => {
  if (rarity === 'all') return heroes;
  return heroes.filter(hero => hero.rarity === parseInt(rarity));
};

export const filterHeroesByML = (heroes: Hero[], showML: boolean): Hero[] => {
  return heroes.filter(hero => hero.isML === showML || !showML);
};

export const sortHeroes = (heroes: Hero[], sortBy: string): Hero[] => {
  switch (sortBy) {
    case 'name':
      return [...heroes].sort((a, b) => a.name.localeCompare(b.name));
    case 'rarity':
      return [...heroes].sort((a, b) => b.rarity - a.rarity);
    case 'element':
      return [...heroes].sort((a, b) => a.element.localeCompare(b.element));
    case 'tier':
      const tierOrder = { 'SS': 6, 'S': 5, 'A': 4, 'B': 3, 'C': 2, 'D': 1 };
      return [...heroes].sort((a, b) => {
        const aOverall = a.tierData?.pvp.arena || TierRank.C;
        const bOverall = b.tierData?.pvp.arena || TierRank.C;
        return (tierOrder[bOverall as keyof typeof tierOrder] || 0) - 
               (tierOrder[aOverall as keyof typeof tierOrder] || 0);
      });
    default:
      return heroes;
  }
};

export const getHeroById = (id: string): Hero | undefined => {
  return heroDatabase.find(hero => hero.id === id);
};

export const getElementColor = (element: Element): string => {
  switch (element) {
    case Element.FIRE:
      return 'from-red-500 to-orange-500';
    case Element.ICE:
      return 'from-blue-400 to-cyan-400';
    case Element.EARTH:
      return 'from-green-500 to-emerald-500';
    case Element.LIGHT:
      return 'from-yellow-300 to-amber-400';
    case Element.DARK:
      return 'from-purple-500 to-violet-600';
    default:
      return 'from-gray-400 to-gray-500';
  }
};

export const getRoleIcon = (role: Role): string => {
  switch (role) {
    case Role.KNIGHT:
      return '🛡️';
    case Role.WARRIOR:
      return '⚔️';
    case Role.THIEF:
      return '🗡️';
    case Role.RANGER:
      return '🏹';
    case Role.MAGE:
      return '🔮';
    case Role.SOUL_WEAVER:
      return '💊';
    default:
      return '❓';
  }
};
