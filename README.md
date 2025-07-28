# Epic Seven Assistant

Uma aplicação web para ajudar jogadores de Epic Seven com informações sobre heróis, builds, tier lists e estratégias.

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/lucaslsm8/Epic-Assistant.git
   cd Epic-Assistant/epic-seven-assistant
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor**
   ```bash
   npm run dev
   ```
   
   Ou simplesmente execute:
   ```bash
   start.bat
   ```

4. **Acesse a aplicação**
   - Abra: http://localhost:3000

## 🎮 Funcionalidades

### ✅ Implementadas
- **Lista de Heróis**: Visualização de todos os heróis disponíveis
- **Filtros**: Por elemento, role, raridade e ML
- **Busca**: Pesquisa por nome, tags e especialidade
- **Detalhes do Herói**: Informações completas, stats, tier list
- **Interface Responsiva**: Funciona em desktop e mobile

### 🚧 Em Desenvolvimento
- Sistema de Builds
- Sistema de Favoritos
- Comparador de Heróis
- Sistema de Notas
- Mais heróis (4★ e 3★)

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Vercel** - Deploy

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas da aplicação
│   ├── heroes/            # Lista e detalhes dos heróis
│   ├── arena-scanner/     # Scanner de arena
│   ├── artifacts/         # Sistema de artefatos
│   └── ...               # Outras funcionalidades
├── components/            # Componentes reutilizáveis
├── lib/                  # Utilitários e banco de dados
└── types/                # Definições de tipos
```

## 🎯 Heróis Disponíveis

Atualmente temos **5 heróis** principais:
- **Vildred** (Earth Thief) - Farmer e cleaver
- **Bellona** (Earth Ranger) - Boss killer
- **Luna** (Ice Warrior) - Wyvern hunter
- **Krau** (Ice Knight) - Tank defensivo
- **Ken** (Fire Warrior) - Bruiser sustain

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linter
```

## 📝 Desenvolvimento

### Adicionando Novos Heróis
1. Adicione a imagem em `public/heroes/`
2. Atualize `src/lib/heroDatabase.ts`
3. Siga o padrão dos heróis existentes

### Estrutura de Dados do Herói
```typescript
interface Hero {
  id: string;
  name: string;
  rarity: number;
  element: Element;
  role: Role;
  image: string;
  description: string;
  story: string;
  specialty: string;
  tags: string[];
  difficulty: string;
  usage: UsageStats;
  strengths: string[];
  weaknesses: string[];
  synergies: string[];
  counters: string[];
  stats: HeroStats;
  tierData: TierData;
}
```

## 🚀 Deploy

O projeto está configurado para deploy automático no Vercel:
- **URL**: https://epic-seven-assistant.vercel.app
- **GitHub**: https://github.com/lucaslsm8/Epic-Assistant

## 📞 Suporte

- **Issues**: https://github.com/lucaslsm8/Epic-Assistant/issues
- **Discord**: [Link do servidor]

---

**Desenvolvido com ❤️ para a comunidade Epic Seven**
