# Epic Seven Assistant

Uma aplicação web completa para auxiliar jogadores do Epic Seven com informações sobre heróis, builds, tier lists e estratégias.

## 🚀 Como Usar

### Opção 1: GitHub Codespaces (Recomendado)
1. Vá para o repositório no GitHub
2. Clique no botão "Code" → "Codespaces"
3. Clique em "Create codespace on main"
4. Aguarde o ambiente carregar
5. O servidor será iniciado automaticamente na porta 3000

### Opção 2: Deploy Automático (Vercel)
- A cada push para `main`, o projeto é automaticamente deployado
- URL pública disponível para compartilhamento
- Preview automático em pull requests

### Opção 3: Local Development
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/epic-seven-assistant.git
cd epic-seven-assistant

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Abra http://localhost:3000
```

## 📊 Funcionalidades

### ✅ Implementado
- **29 heróis** com dados completos (13 RGB + 16 ML)
- **Sistema de busca** avançado
- **Filtros** por elemento, role, raridade, ML
- **Páginas individuais** dos heróis
- **Tier rankings** para PvP e PvE
- **Estatísticas detalhadas** de cada herói
- **Sinergias e contadores** reais
- **Interface responsiva** e moderna

### 🚧 Em Desenvolvimento
- Sistema de Builds
- Sistema de Favoritos
- Comparador de Heróis
- Sistema de Notas Pessoais

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **GitHub Actions** - CI/CD

## 📁 Estrutura do Projeto

```
epic-seven-assistant/
├── src/
│   ├── app/                 # Páginas Next.js
│   │   ├── heroes/         # Lista de heróis
│   │   └── heroes/[id]/    # Página individual
│   ├── components/         # Componentes React
│   ├── lib/               # Utilitários e dados
│   └── types/             # Definições TypeScript
├── public/
│   └── heroes/            # Imagens dos heróis
└── .github/               # Configurações GitHub
```

## 🎮 Heróis Disponíveis

### RGB 5★ (13 heróis)
- Vildred, Bellona, Luna, Krau, Ken
- Charles, Tywin, Sez, Sigret, Kayron
- Iseria, Tamarinne, Yufine

### ML 5★ (16 heróis)
- Arbiter Vildred, Ruele of Light
- Fallen Cecilia, Judge Kise, Dark Corvus
- Martial Artist Ken, Assassin Cidd, Assassin Coli
- Auxiliary Lots, Challenger Dominiel
- Blood Blade Karin, Shadow Rose
- Silver Blade Aramintha, Blaze Dingo
- Guider Aither, Wanderer Silk

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

## 🌐 Deploy

O projeto está configurado para deploy automático no Vercel:

1. **Fork** o repositório
2. Conecte ao **Vercel**
3. Configure as variáveis de ambiente (se necessário)
4. Deploy automático a cada push

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🎯 Roadmap

- [ ] Sistema de Builds detalhado
- [ ] Sistema de Favoritos
- [ ] Comparador de Heróis
- [ ] Sistema de Notas Pessoais
- [ ] Mais heróis (4★ e 3★)
- [ ] Atualizações de tier automáticas
- [ ] Modo escuro/claro
- [ ] PWA (Progressive Web App)

---

**Desenvolvido com ❤️ para a comunidade Epic Seven**
