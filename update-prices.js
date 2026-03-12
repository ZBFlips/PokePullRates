const fs = require('fs');
const fetch = require('node-fetch');

// 1. Get your free API Key at https://pokemontcg.io/
const API_KEY = 'YOUR_API_KEY_HERE'; 
const DATA_PATH = './data.js';

async function fetchPrice(cardId) {
    try {
        const url = `https://api.pokemontcg.io/v2/cards/${cardId}`;
        const res = await fetch(url, { headers: { 'X-Api-Key': API_KEY } });
        const json = await res.json();
        
        if (!json.data || !json.data.tcgplayer) return null;
        
        // Prioritize Holofoil market price, fallback to Normal
        const prices = json.data.tcgplayer.prices;
        return prices.holofoil?.market || prices.normal?.market || prices.unlimitedHolofoil?.market;
    } catch (e) {
        console.error(`Failed to fetch ${cardId}:`, e.message);
        return null;
    }
}

async function run() {
    console.log("Reading data.js...");
    let fileContent = fs.readFileSync(DATA_PATH, 'utf8');

    // Extract the JSON portion from the JS file
    const startIdx = fileContent.indexOf('[');
    const endIdx = fileContent.lastIndexOf(']') + 1;
    let sets = JSON.parse(fileContent.substring(startIdx, endIdx));

    for (let set of sets) {
        console.log(`\nUpdating ${set.name}...`);
        for (let card of set.notable) {
            if (card.cardId) {
                const newPrice = await fetchPrice(card.cardId);
                if (newPrice) {
                    console.log(`  - ${card.name}: $${card.price} -> $${newPrice.toFixed(2)}`);
                    card.price = newPrice;
                }
            }
        }
        // Update the metadata
        set.pricesUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        set.topCard.price = Math.max(...set.notable.map(c => c.price));
    }

    // Reconstruct the data.js file
    const newContent = fileContent.substring(0, startIdx) + 
                       JSON.stringify(sets, null, 2) + 
                       fileContent.substring(endIdx);

    fs.writeFileSync(DATA_PATH, newContent);
    console.log("\nSuccess! data.js has been updated.");
}

run();
