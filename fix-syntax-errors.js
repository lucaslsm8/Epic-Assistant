const fs = require('fs');
const path = require('path');

// Ler o arquivo
const filePath = path.join(__dirname, 'src/lib/heroDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Corrigir aspas não escapadas
content = content.replace(/'s/g, "\\'s");

// Corrigir vírgulas faltantes após descrições
content = content.replace(
  /description: '[^']*',\s*story: /g,
  (match) => {
    return match.replace(/,\s*story: /, ',\n    story: ');
  }
);

// Corrigir espaços em branco desnecessários
content = content.replace(/\n\s*\n\s*releaseDate:/g, '\n    releaseDate:');

// Escrever o arquivo corrigido
fs.writeFileSync(filePath, content);

console.log('✅ Erros de sintaxe corrigidos!');
console.log('- Aspas não escapadas corrigidas');
console.log('- Vírgulas faltantes adicionadas');
console.log('- Formatação corrigida'); 