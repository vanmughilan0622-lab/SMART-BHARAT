const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/report-issue/page.tsx', 'utf8');

// Replace remaining placeholders and alerts
content = content.replace(/ \([\u0900-\u097F\s,।.]+\)/g, '');
content = content.replace(/ \([\u0900-\u097F\s,।.]+\)\"/g, '\"');

// Fix IT & e-Gov
content = content.replace(/<span[^>]*>आईटी और ई-गव<\/span>/g, '');

// Fix success text
content = content.replace(/<span className=\"block mt-2\">[\s\u0900-\u097F.]+<\/span>/g, '<span className=\"block mt-2 text-zinc-400\">Your issue has been successfully reported to the relevant authorities. You will receive tracking updates shortly.</span>');
content = content.replace(/<span[^>]*>\s*आपकी समस्या संबंधित अधिकारियों को सफलतापूर्वक रिपोर्ट कर दी गई है।[\s\S]*?अपडेट प्राप्त होंगे।\s*<\/span>/g, '<span className=\"block mt-2 text-zinc-400\">Your issue has been successfully reported to the relevant authorities. You will receive tracking updates shortly.</span>');

// Fix alert
content = content.replace(/alert\(\"AI matching failed\. Please try again or select manually\.[\s\S]*?\"\)/, 'alert(\"AI matching failed. Please try again or select manually.\")');

// Fix anonymous note
content = content.replace(/\(Note: Anonymous complaints may have limited tracking : [\u0900-\u097F\s]+\)/g, '(Note: Anonymous complaints may have limited tracking)');

fs.writeFileSync('src/app/dashboard/report-issue/page.tsx', content);
console.log('Fixed.');
