const fs = require('fs');
const fetch = require('node-fetch'); // Ensure you have package.json (see below)

// You can use the API without a key, but it's slower. 
// Get a free key at pokemontcg.io for 1000+ requests/day.
const API_KEY = process.env.POKEMON_TCG_API_KEY || ''; 

const DATA_FILE = './data.js';

async function getPrice(cardId) {
    try {
        const url = `https://api.pokemontcg.io/v2/cards/${cardId}`;
        const headers = API_KEY ? { 'X-Api-Key': API_KEY } : {};
        const response = await fetch(url, { headers });
        const json = await response.json();
        
        // Target the TCGPlayer Market Price (Standard for 'Real Time' tracking)
        const p = json.data.tcgplayer.prices;
        return p.holofoil?.market || p.normal?.market || p.unlimitedHolofoil?.market || 0;
    } catch (e) {
        return null;
    }
}

async function start() {
    let content = fs.readFileSync(DATA_FILE, 'utf8');
    
    // We isolate the SETS array from your data.js
    const startIdx = content.indexOf('[');
    const endIdx = content.lastIndexOf(']') + 1;
    let sets = JSON.parse(content.substring(startIdx, endIdx));

    for (let set of sets) {
        console.log(`Updating ${set.name}...`);
        for (let card of set.notable) {
            if (card.cardId) {
                const newPrice = await getPrice(card.cardId);
                if (newPrice) card.price = newPrice;
            }
        }
        // Metadata updates
        set.pricesUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }

    // Reconstruct the data.js file
    const newContent = content.substring(0, startIdx) + JSON.stringify(sets, null, 2) + content.substring(endIdx);
    fs.writeFileSync(DATA_FILE, newContent);
    console.log("Prices updated successfully.");
}

start();
