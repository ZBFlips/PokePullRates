// ============================================================
//  PullRates.gg — Set Data
//  Source: ThePriceDex / TCGPlayer / community pull data
//  Prices: TCGPlayer NM ungraded market average
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

// Each set has:
//   rarities[]    — one entry per rarity tier (aggregate avg price, pull% per specific card)
//   notable[]     — up to 5 named chase cards with actual prices
//   evBreakdown[] — EV contribution per rarity per pack
const SETS = [

  // ── Ascended Heroes ────────────────────────────────────────
  {
    id: 'me2pt5',
    name: 'Ascended Heroes',
    series: 'Mega Evolution',
    released: '2026-01-30',
    cardCount: 295,
    packEV: 7.21,
    pricesUpdated: 'March 9, 2026',
    accentColor: '#7c3aed',
    topCard: { name: 'Mega Gengar ex SIR', price: 993 },
    rarities: [
      { key:'MHR', pullPct:0.0500,  avgPrice:417,   ev:0.42, count:2  },
      { key:'SIR', pullPct:0.0499,  avgPrice:189,   ev:2.08, count:22 },
      { key:'MAR', pullPct:0.4329,  avgPrice:22,    ev:0.68, count:7  },
      { key:'UR',  pullPct:0.4202,  avgPrice:5.17,  ev:0.30, count:14 },
      { key:'IR',  pullPct:0.3788,  avgPrice:11.86, ev:1.48, count:33 },
      { key:'DR',  pullPct:0.5128,  avgPrice:1.91,  ev:0.38, count:39 },
      { key:'R',   pullPct:2.841,   avgPrice:0.17,  ev:0.12, count:25 },
      { key:'U',   pullPct:4.348,   avgPrice:0.14,  ev:0.43, count:69 },
      { key:'C',   pullPct:4.762,   avgPrice:0.14,  ev:0.54, count:84 },
    ],
    notable: [
      { name:'Mega Gengar ex',           rarity:'MHR', price:993,  pullPct:0.0500 },
      { name:'Mega Charizard Y ex',      rarity:'MHR', price:666,  pullPct:0.0500 },
      { name:'Mega Dragonite ex',        rarity:'SIR', price:611,  pullPct:0.0499 },
      { name:'Pikachu ex',               rarity:'SIR', price:505,  pullPct:0.0499 },
      { name:"Team Rocket's Mewtwo ex",  rarity:'SIR', price:250,  pullPct:0.0499 },
      { name:'Mega Dragonite ex',        rarity:'MAR', price:60,   pullPct:0.4329 },
      { name:'Canari ex',                rarity:'UR',  price:30,   pullPct:0.4202 },
      { name:'Psyduck',                  rarity:'IR',  price:100,  pullPct:0.3788 },
    ],
  },

  // ── Journey Together ───────────────────────────────────────
  {
    id: 'sv9',
    name: 'Journey Together',
    series: 'Scarlet & Violet',
    released: '2025-03-28',
    cardCount: 190,
    packEV: 3.07,
    pricesUpdated: 'March 8, 2026',
    accentColor: '#22d3ee',
    topCard: { name: "Lillie's Clefairy ex SIR", price: 122 },
    rarities: [
      { key:'HR',  pullPct:0.2433, avgPrice:10.33, ev:0.08, count:3  },
      { key:'SIR', pullPct:0.1934, avgPrice:54.16, ev:0.63, count:6  },
      { key:'UR',  pullPct:0.5952, avgPrice:2.22,  ev:0.15, count:11 },
      { key:'IR',  pullPct:0.7752, avgPrice:6.61,  ev:0.56, count:11 },
      { key:'DR',  pullPct:1.267,  avgPrice:0.84,  ev:0.17, count:16 },
      { key:'R',   pullPct:4.566,  avgPrice:0.16,  ev:0.12, count:16 },
      { key:'U',   pullPct:7.143,  avgPrice:0.12,  ev:0.35, count:42 },
      { key:'C',   pullPct:4.695,  avgPrice:0.13,  ev:0.53, count:85 },
    ],
    notable: [
      { name:"Lillie's Clefairy ex",  rarity:'SIR', price:122, pullPct:0.1934 },
      { name:'Salamence ex',          rarity:'SIR', price:54,  pullPct:0.1934 },
      { name:"N's Zoroark ex",        rarity:'SIR', price:51,  pullPct:0.1934 },
    ],
  },

  // ── Prismatic Evolutions ───────────────────────────────────
  {
    id: 'sv8pt5',
    name: 'Prismatic Evolutions',
    series: 'Scarlet & Violet',
    released: '2025-01-17',
    cardCount: 180,
    packEV: 4.56,
    pricesUpdated: 'March 9, 2026',
    accentColor: '#a78bfa',
    topCard: { name: 'Umbreon ex SIR', price: 1121 },
    rarities: [
      { key:'HR',  pullPct:0.1120, avgPrice:14.87,  ev:0.08, count:5  },
      { key:'SIR', pullPct:0.0694, avgPrice:113.52, ev:2.52, count:32 },
      { key:'UR',  pullPct:0.6211, avgPrice:0.72,   ev:0.05, count:12 },
      { key:'ACE', pullPct:0.7813, avgPrice:0.48,   ev:0.02, count:6  },
      { key:'DR',  pullPct:0.6614, avgPrice:1.72,   ev:0.28, count:25 },
      { key:'R',   pullPct:3.623,  avgPrice:0.19,   ev:0.14, count:21 },
      { key:'U',   pullPct:9.091,  avgPrice:0.11,   ev:0.32, count:33 },
      { key:'C',   pullPct:8.696,  avgPrice:0.09,   ev:0.38, count:46 },
    ],
    notable: [
      { name:'Umbreon ex',   rarity:'SIR', price:1121, pullPct:0.0694 },
      { name:'Sylveon ex',   rarity:'SIR', price:301,  pullPct:0.0694 },
      { name:'Leafeon ex',   rarity:'SIR', price:245,  pullPct:0.0694 },
    ],
  },

  // ── Surging Sparks ─────────────────────────────────────────
  {
    id: 'sv8',
    name: 'Surging Sparks',
    series: 'Scarlet & Violet',
    released: '2024-11-08',
    cardCount: 252,
    packEV: 3.08,
    pricesUpdated: 'March 9, 2026',
    accentColor: '#f59e0b',
    topCard: { name: 'Pikachu ex SIR', price: 256 },
    rarities: [
      { key:'HR',  pullPct:0.0883, avgPrice:17.52, ev:0.09, count:6  },
      { key:'SIR', pullPct:0.1046, avgPrice:62.82, ev:0.72, count:11 },
      { key:'UR',  pullPct:0.3210, avgPrice:3.15,  ev:0.21, count:21 },
      { key:'IR',  pullPct:0.3334, avgPrice:6.32,  ev:0.48, count:23 },
      { key:'ACE', pullPct:0.6289, avgPrice:1.27,  ev:0.06, count:8  },
      { key:'DR',  pullPct:0.9416, avgPrice:1.17,  ev:0.20, count:18 },
      { key:'R',   pullPct:4.762,  avgPrice:0.14,  ev:0.11, count:16 },
      { key:'U',   pullPct:4.918,  avgPrice:0.12,  ev:0.36, count:61 },
      { key:'C',   pullPct:4.545,  avgPrice:0.11,  ev:0.43, count:88 },
    ],
    notable: [
      { name:'Pikachu ex',  rarity:'SIR', price:256, pullPct:0.1046 },
      { name:'Latias ex',   rarity:'SIR', price:170, pullPct:0.1046 },
      { name:'Milotic ex',  rarity:'SIR', price:95,  pullPct:0.1046 },
    ],
  },

  // ── Stellar Crown ──────────────────────────────────────────
  {
    id: 'sv7',
    name: 'Stellar Crown',
    series: 'Scarlet & Violet',
    released: '2024-09-13',
    cardCount: 175,
    packEV: 3.19,
    pricesUpdated: 'March 9, 2026',
    accentColor: '#3b82f6',
    topCard: { name: 'Squirtle IR', price: 90 },
    rarities: [
      { key:'HR',  pullPct:0.2433, avgPrice:8.73,  ev:0.06, count:3  },
      { key:'SIR', pullPct:0.1848, avgPrice:22.60, ev:0.25, count:6  },
      { key:'UR',  pullPct:0.6135, avgPrice:2.80,  ev:0.19, count:11 },
      { key:'IR',  pullPct:0.5988, avgPrice:17.73, ev:1.38, count:13 },
      { key:'ACE', pullPct:1.647,  avgPrice:0.38,  ev:0.02, count:3  },
      { key:'DR',  pullPct:1.208,  avgPrice:0.88,  ev:0.15, count:14 },
      { key:'R',   pullPct:5.102,  avgPrice:0.13,  ev:0.10, count:15 },
      { key:'U',   pullPct:7.692,  avgPrice:0.10,  ev:0.29, count:39 },
      { key:'C',   pullPct:5.618,  avgPrice:0.10,  ev:0.40, count:71 },
    ],
    notable: [
      { name:'Squirtle',     rarity:'IR',  price:90,  pullPct:0.5988 },
      { name:'Bulbasaur',    rarity:'IR',  price:78,  pullPct:0.5988 },
      { name:'Dachsbun ex',  rarity:'SIR', price:37,  pullPct:0.1848 },
    ],
  },

  // ── Shrouded Fable ─────────────────────────────────────────
  {
    id: 'sv6pt5',
    name: 'Shrouded Fable',
    series: 'Scarlet & Violet',
    released: '2024-08-02',
    cardCount: 99,
    packEV: 4.09,
    pricesUpdated: 'February 26, 2026',
    accentColor: '#10b981',
    topCard: { name: 'Fezandipiti ex SIR', price: 46 },
    rarities: [
      { key:'HR',  pullPct:0.1558, avgPrice:28.01, ev:0.22, count:5  },
      { key:'SIR', pullPct:0.2292, avgPrice:28.07, ev:0.32, count:5  },
      { key:'UR',  pullPct:0.6993, avgPrice:4.77,  ev:0.33, count:10 },
      { key:'IR',  pullPct:0.5136, avgPrice:21.81, ev:1.68, count:15 },
      { key:'ACE', pullPct:1.667,  avgPrice:0.59,  ev:0.03, count:3  },
      { key:'DR',  pullPct:2.778,  avgPrice:1.95,  ev:0.32, count:6  },
      { key:'R',   pullPct:10.87,  avgPrice:0.14, ev:0.11, count:7  },
      { key:'U',   pullPct:14.93,  avgPrice:0.12,  ev:0.36, count:20 },
      { key:'C',   pullPct:14.29,  avgPrice:0.09,  ev:0.36, count:28 },
    ],
    notable: [
      { name:'Fezandipiti ex',     rarity:'SIR', price:46, pullPct:0.2292 },
      { name:'Duskull',            rarity:'IR',  price:45, pullPct:0.5136 },
      { name:'Basic Dark Energy',  rarity:'HR',  price:44, pullPct:0.1558 },
    ],
  },

  // ── Twilight Masquerade ────────────────────────────────────
  {
    id: 'sv6',
    name: 'Twilight Masquerade',
    series: 'Scarlet & Violet',
    released: '2024-05-24',
    cardCount: 226,
    packEV: 3.01,
    pricesUpdated: 'February 7, 2026',
    accentColor: '#ec4899',
    topCard: { name: 'Greninja ex SIR', price: 280 },
    rarities: [
      { key:'HR',  pullPct:0.1134, avgPrice:7.16,  ev:0.05, count:6  },
      { key:'SIR', pullPct:0.1064, avgPrice:53.86, ev:0.63, count:11 },
      { key:'UR',  pullPct:0.3145, avgPrice:3.04,  ev:0.20, count:21 },
      { key:'IR',  pullPct:0.3679, avgPrice:10.19, ev:0.79, count:21 },
      { key:'ACE', pullPct:0.8403, avgPrice:2.64,  ev:0.13, count:6  },
      { key:'DR',  pullPct:1.209,  avgPrice:0.89,  ev:0.15, count:14 },
      { key:'R',   pullPct:4.785,  avgPrice:0.15,  ev:0.11, count:16 },
      { key:'U',   pullPct:5.464,  avgPrice:0.09,  ev:0.26, count:55 },
      { key:'C',   pullPct:5.263,  avgPrice:0.09,  ev:0.34, count:76 },
    ],
    notable: [
      { name:'Greninja ex',  rarity:'SIR', price:280, pullPct:0.1064 },
      { name:'Perrin',       rarity:'SIR', price:96,  pullPct:0.1064 },
      { name:'Eevee',        rarity:'IR',  price:59,  pullPct:0.3679 },
    ],
  },

  // ── Paradox Rift ───────────────────────────────────────────
  {
    id: 'sv4',
    name: 'Paradox Rift',
    series: 'Scarlet & Violet',
    released: '2023-11-03',
    cardCount: 266,
    packEV: 2.90,
    pricesUpdated: 'February 11, 2026',
    accentColor: '#f97316',
    topCard: { name: 'Groudon IR', price: 73 },
    rarities: [
      { key:'HR',  pullPct:0.1742, avgPrice:4.99,  ev:0.06, count:7  },
      { key:'SIR', pullPct:0.1406, avgPrice:15.91, ev:0.34, count:15 },
      { key:'UR',  pullPct:0.2370, avgPrice:2.70,  ev:0.18, count:28 },
      { key:'IR',  pullPct:0.2263, avgPrice:12.58, ev:0.97, count:34 },
      { key:'DR',  pullPct:0.7752, avgPrice:0.92,  ev:0.14, count:20 },
      { key:'R',   pullPct:2.882,  avgPrice:0.15,  ev:0.12, count:27 },
      { key:'U',   pullPct:5.556,  avgPrice:0.12,  ev:0.37, count:54 },
      { key:'C',   pullPct:4.926,  avgPrice:0.09,  ev:0.36, count:81 },
    ],
    notable: [
      { name:'Groudon',    rarity:'IR',  price:73, pullPct:0.2263 },
      { name:'Altaria ex', rarity:'SIR', price:40, pullPct:0.1406 },
      { name:'Minun',      rarity:'IR',  price:33, pullPct:0.2263 },
    ],
  },

  // ── Pokémon 151 ────────────────────────────────────────────
  {
    id: 'sv3pt5',
    name: 'Pokémon 151',
    series: 'Scarlet & Violet',
    released: '2023-09-22',
    cardCount: 207,
    packEV: 4.50,
    pricesUpdated: 'December 2025',
    accentColor: '#84cc16',
    topCard: { name: 'Charizard ex SIR', price: 239 },
    rarities: [
      { key:'HR',  pullPct:0.6173, avgPrice:13.00, ev:0.24, count:3  },
      { key:'SIR', pullPct:0.4464, avgPrice:72.00, ev:2.13, count:7  },
      { key:'UR',  pullPct:0.4132, avgPrice:3.50,  ev:0.22, count:16 },
      { key:'IR',  pullPct:0.4739, avgPrice:9.50,  ev:0.72, count:16 },
      { key:'DR',  pullPct:1.142,  avgPrice:1.20,  ev:0.18, count:12 },
      { key:'R',   pullPct:3.077,  avgPrice:0.12,  ev:0.09, count:25 },
      { key:'U',   pullPct:4.839,  avgPrice:0.10,  ev:0.30, count:62 },
      { key:'C',   pullPct:6.061,  avgPrice:0.09,  ev:0.37, count:66 },
    ],
    notable: [
      { name:'Charizard ex', rarity:'SIR', price:239, pullPct:0.4464 },
      { name:'Venusaur ex',  rarity:'SIR', price:78,  pullPct:0.4464 },
      { name:'Blastoise ex', rarity:'SIR', price:73,  pullPct:0.4464 },
    ],
  },

  // ── Obsidian Flames ────────────────────────────────────────
  {
    id: 'sv3',
    name: 'Obsidian Flames',
    series: 'Scarlet & Violet',
    released: '2023-08-11',
    cardCount: 230,
    packEV: 2.98,
    pricesUpdated: 'February 9, 2026',
    accentColor: '#ef4444',
    topCard: { name: 'Charizard ex SIR', price: 73 },
    rarities: [
      { key:'HR',  pullPct:0.6410, avgPrice:13.92, ev:0.27, count:3  },
      { key:'SIR', pullPct:0.5215, avgPrice:16.68, ev:0.52, count:6  },
      { key:'UR',  pullPct:0.5525, avgPrice:2.98,  ev:0.20, count:12 },
      { key:'IR',  pullPct:0.6329, avgPrice:8.98,  ev:0.68, count:12 },
      { key:'DR',  pullPct:0.6494, avgPrice:1.25,  ev:0.17, count:21 },
      { key:'R',   pullPct:8.000,  avgPrice:0.09,  ev:0.07, count:10 },
      { key:'U',   pullPct:4.054,  avgPrice:0.10,  ev:0.30, count:74 },
      { key:'C',   pullPct:4.348,  avgPrice:0.09,  ev:0.37, count:92 },
    ],
    notable: [
      { name:'Charizard ex (SIR)',   rarity:'SIR', price:73, pullPct:0.5215 },
      { name:'Charizard ex (Gold)',  rarity:'HR',  price:35, pullPct:0.6410 },
      { name:'Ninetales',            rarity:'IR',  price:24, pullPct:0.6329 },
    ],
  },

];

// Build a flat card search index across all sets
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

// Utility
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
