// ============================================================
//  PullRates.gg — Set Data
//  Source: ThePriceDex / TCGPlayer / community pull data
//  Prices: TCGPlayer NM ungraded market average
//  Resale: TCGPlayer / StockX / eBay single-pack market avg
// ============================================================

const RARITY_COLORS = {
  MHR: '#dc2626', HR:  '#f59e0b', SIR: '#ec4899', MAR: '#f97316',
  UR:  '#8b5cf6', IR:  '#3b82f6', ACE: '#14b8a6', DR:  '#22c55e',
  R:   '#84cc16', U:   '#94a3b8', C:   '#64748b'
};

const RARITY_LABELS = {
  MHR: 'Mega Hyper Rare',       HR:  'Hyper Rare',
  SIR: 'Special Illus. Rare',   MAR: 'Mega Attack Rare',
  UR:  'Ultra Rare',             IR:  'Illus. Rare',
  ACE: 'ACE SPEC Rare',          DR:  'Double Rare',
  R:   'Rare Holo',              U:   'Uncommon',
  C:   'Common'
};

const SETS = [
  {
    id: 'me2pt5',
    name: 'Ascended Heroes',
    // ... (rest of header)
    notable: [
      { name: 'Mega Gengar ex', rarity: 'MHR', price: 993, cardId: 'me2pt5-295' }, //
      { name: 'Mega Charizard Y ex', rarity: 'MHR', price: 666, cardId: 'me2pt5-294' }, //
      { name: 'Mega Dragonite ex', rarity: 'SIR', price: 611, cardId: 'me2pt5-290' }, //
      { name: 'Pikachu ex', rarity: 'SIR', price: 505, cardId: 'me2pt5-288' },
      { name: "Team Rocket's Mewtwo ex", rarity: 'SIR', price: 250, cardId: 'me2pt5-285' },
      { name: 'Canari ex', rarity: 'UR', price: 30, cardId: 'me2pt5-257' }, //
      { name: 'Psyduck', rarity: 'IR', price: 100, cardId: 'me2pt5-225' },
    ],
  },
  {
    id: 'sv9',
    name: 'Journey Together',
    // ...
    notable: [
      { name: "Lillie's Clefairy ex", rarity: 'SIR', price: 122, cardId: 'sv9-184' }, //
      { name: 'Salamence ex', rarity: 'SIR', price: 54, cardId: 'sv9-182' },
      { name: "N's Zoroark ex", rarity: 'SIR', price: 51, cardId: 'sv9-181' },
    ],
  },
  {
    id: 'sv8pt5',
    name: 'Prismatic Evolutions',
    // ...
    notable: [
      { name: 'Umbreon ex', rarity: 'SIR', price: 1121, cardId: 'sv8pt5-161' },
      { name: 'Sylveon ex', rarity: 'SIR', price: 301, cardId: 'sv8pt5-158' },
      { name: 'Leafeon ex', rarity: 'SIR', price: 245, cardId: 'sv8pt5-155' },
    ],
  },
  {
    id: 'sv8',
    name: 'Surging Sparks',
    // ...
    notable: [
      { name: 'Pikachu ex', rarity: 'SIR', price: 256, cardId: 'sv8-238' },
      { name: 'Latias ex', rarity: 'SIR', price: 170, cardId: 'sv8-239' }, //
      { name: 'Milotic ex', rarity: 'SIR', price: 95, cardId: 'sv8-237' }, //
    ],
  },
  {
    id: 'sv7',
    name: 'Stellar Crown',
    // ...
    notable: [
      { name: 'Squirtle', rarity: 'IR', price: 90, cardId: 'sv7-148' }, //
      { name: 'Bulbasaur', rarity: 'IR', price: 78, cardId: 'sv7-143' }, //
      { name: 'Dachsbun ex', rarity: 'SIR', price: 37, cardId: 'sv7-169' }, //
    ],
  },
  {
    id: 'sv6pt5',
    name: 'Shrouded Fable',
    // ...
    notable: [
      { name: 'Fezandipiti ex', rarity: 'SIR', price: 46, cardId: 'sv6pt5-84' }, //
      { name: 'Duskull', rarity: 'IR', price: 45, cardId: 'sv6pt5-68' }, //
      { name: 'Basic Dark Energy', rarity: 'HR', price: 44, cardId: 'sv6pt5-98' }, //
    ],
  },
  {
    id: 'sv6',
    name: 'Twilight Masquerade',
    // ...
    notable: [
      { name: 'Greninja ex', rarity: 'SIR', price: 280, cardId: 'sv6-198' }, //
      { name: 'Perrin', rarity: 'SIR', price: 96, cardId: 'sv6-204' },
      { name: 'Eevee', rarity: 'IR', price: 59, cardId: 'sv6-188' }, //
    ],
  },
  {
    id: 'sv4',
    name: 'Paradox Rift',
    // ...
    notable: [
      { name: 'Groudon', rarity: 'IR', price: 73, cardId: 'sv4-199' }, //
      { name: 'Altaria ex', rarity: 'SIR', price: 40, cardId: 'sv4-253' }, //
      { name: 'Minun', rarity: 'IR', price: 33, cardId: 'sv4-194' },
    ],
  },
  {
    id: 'sv3pt5',
    name: 'Pokémon 151',
    // ...
    notable: [
      { name: 'Charizard ex', rarity: 'SIR', price: 239, cardId: 'sv3pt5-199' },
      { name: 'Venusaur ex', rarity: 'SIR', price: 78, cardId: 'sv3pt5-198' },
      { name: 'Blastoise ex', rarity: 'SIR', price: 73, cardId: 'sv3pt5-200' }, //
    ],
  },
  {
    id: 'sv3',
    name: 'Obsidian Flames',
    // ...
    notable: [
      { name: 'Charizard ex (SIR)', rarity: 'SIR', price: 73, cardId: 'sv3-223' }, //
      { name: 'Charizard ex (Gold)', rarity: 'HR', price: 35, cardId: 'sv3-228' }, //
      { name: 'Ninetales', rarity: 'IR', price: 24, cardId: 'sv3-199' },
    ],
  },
];

function buildSearchIndex() {
  const idx = [];
  SETS.forEach(set => {
    set.notable.forEach(card => {
      idx.push({ ...card, setId: set.id, setName: set.name });
    });
  });
  return idx;
}

const CARD_INDEX = buildSearchIndex();

function priceFmt(p) {
  if (p >= 1000) return '$' + Math.round(p).toLocaleString();
  if (p >= 100)  return '$' + Math.round(p);
  if (p >= 1)    return '$' + p.toFixed(p < 10 ? 2 : 0);
  return '$' + p.toFixed(2);
}

function pullFmt(pct) {
  if (pct < 0.1) return '1 in ' + Math.round(100/pct).toLocaleString() + ' packs';
  return '~' + pct.toFixed(2) + '% / pack';
}
