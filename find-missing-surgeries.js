const fs = require('fs');

// Read navigation file to get all surgery IDs from menu
const navContent = fs.readFileSync('src/constants/navigation.ts', 'utf-8');

// Extract surgery IDs from navigation
const navSurgeryIds = [];
const navRegex = /id:\s*'([\w-]+)',/g;
let match;
while ((match = navRegex.exec(navContent)) !== null) {
  const id = match[1];
  // Skip category IDs
  if (!['joint-replacement', 'spine-surgery', 'sports-medicine', 'trauma-care', 'pediatric-ortho', 'arthroscopy'].includes(id)) {
    navSurgeryIds.push(id);
  }
}

// Read surgeries data file
const surgeriesContent = fs.readFileSync('src/data/surgeries.ts', 'utf-8');

// Extract surgery IDs from surgeries.ts
const dataSurgeryIds = [];
const dataRegex = /^\s*'([\w-]+)'\s*:\s*\{/gm;
while ((match = dataRegex.exec(surgeriesContent)) !== null) {
  dataSurgeryIds.push(match[1]);
}

// Remove duplicates
const uniqueNavIds = [...new Set(navSurgeryIds)];
const uniqueDataIds = [...new Set(dataSurgeryIds)];

// Find missing surgeries
const missingSurgeries = uniqueNavIds.filter(id => !uniqueDataIds.includes(id));

console.log('SURGERY ANALYSIS');
console.log('='.repeat(80));
console.log(`\nTotal in Navigation: ${uniqueNavIds.length}`);
console.log(`Total with Data: ${uniqueDataIds.length}`);
console.log(`Missing: ${missingSurgeries.length}`);

console.log('\n\nMISSING SURGERIES (${missingSurgeries.length}):');
console.log('='.repeat(80));

// Group by category
const categories = {
  'joint-replacement': [],
  'spine-surgery': [],
  'sports-medicine': [],
  'trauma-care': [],
  'pediatric-ortho': [],
  'arthroscopy': []
};

missingSurgeries.forEach(surgeryId => {
  // Find which category it belongs to in navigation
  const categoryMatch = navContent.match(new RegExp(`id:\\s*'${surgeryId}',[\\s\\S]{0,200}url:\\s*'/surgeries/([\\w-]+)/`));
  if (categoryMatch) {
    const category = categoryMatch[1];
    if (categories[category]) {
      categories[category].push(surgeryId);
    }
  }
});

let count = 1;
Object.keys(categories).forEach(category => {
  if (categories[category].length > 0) {
    console.log(`\n${category.toUpperCase().replace(/-/g, ' ')} (${categories[category].length}):`);
    console.log('-'.repeat(80));
    categories[category].forEach(id => {
      console.log(`${count++}. ${id}`);
    });
  }
});

// Save to file
fs.writeFileSync('missing-surgeries.json', JSON.stringify(missingSurgeries, null, 2));
console.log('\n\nMissing surgery IDs saved to: missing-surgeries.json');
