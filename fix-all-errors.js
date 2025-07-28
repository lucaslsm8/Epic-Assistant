const fs = require('fs');
const path = require('path');

// Ler o arquivo
const filePath = path.join(__dirname, 'src/lib/heroDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

console.log('🔧 Corrigindo erros de sintaxe...');

// 1. Corrigir aspas não escapadas
content = content.replace(/'s/g, "\\'s");

// 2. Corrigir aspas duplas malformadas
content = content.replace(/\\'s/g, "\\'s");

// 3. Corrigir vírgulas faltantes
content = content.replace(
  /description: '[^']*',\s*story: /g,
  (match) => {
    return match.replace(/,\s*story: /, ',\n    story: ');
  }
);

// 4. Corrigir espaços em branco desnecessários
content = content.replace(/\n\s*\n\s*releaseDate:/g, '\n    releaseDate:');

// 5. Corrigir tags malformadas
content = content.replace(/\\'([^']*)'/g, "'$1'");

// 6. Garantir que todas as strings terminem corretamente
content = content.replace(/([^'])'([^']*?)'([^'])/g, "$1'$2'$3");

// 7. Corrigir formatação geral
content = content.replace(/\n\s*\n\s*isML:/g, '\n    isML:');

console.log('✅ Erros corrigidos!');

// Escrever o arquivo corrigido
fs.writeFileSync(filePath, content);

console.log('📝 Arquivo salvo com sucesso!'); 