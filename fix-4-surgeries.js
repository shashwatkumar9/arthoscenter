const fs = require('fs');

const surgeriesToFix = ['robotic-hip-replacement', 'revision-hip-replacement', 'reverse-shoulder-replacement', 'finger-joint-replacement'];

// This script will update the page component to handle BOTH recovery structures
// Since transforming the data is too complex, we'll make the page component flexible

const pageFile = 'src/app/[locale]/surgeries/[category]/[surgery]/page.tsx';

console.log('Reading page component...');
let content = fs.readFileSync(pageFile, 'utf8');

// Find the recovery section rendering
const recoveryRenderPattern = /surgeryData\.recovery\[lang\]\.timeline/g;
const tipsRenderPattern = /surgeryData\.recovery\[lang\]\.tips/g;

// Replace with a fallback that handles both structures
content = content.replace(
  /\{surgeryData\.recovery\[lang\]\.timeline\.length > 0 &&/g,
  '{((surgeryData.recovery[lang]?.timeline || surgeryData.recovery?.timeline?.[lang])?.length > 0) &&'
);

content = content.replace(
  /surgeryData\.recovery\[lang\]\.timeline\.map\(/g,
  '(surgeryData.recovery[lang]?.timeline || surgeryData.recovery?.timeline?.[lang])?.map('
);

content = content.replace(
  /\{item\.week\}/g,
  '{item.week || item.phase}'
);

content = content.replace(
  /\{item\.activity\}/g,
  '{item.activity || ""}'
);

content = content.replace(
  /\{surgeryData\.recovery\[lang\]\.tips\.length > 0 &&/g,
  '{((surgeryData.recovery[lang]?.tips || []).length > 0) &&'
);

content = content.replace(
  /surgeryData\.recovery\[lang\]\.tips\.map\(/g,
  '(surgeryData.recovery[lang]?.tips || []).map('
);

console.log('Writing updated page component...');
fs.writeFileSync(pageFile, content, 'utf8');

console.log('✅ Page component updated to handle both recovery structures!');
console.log('This is a temporary fix - the data structure should eventually be standardized.');
