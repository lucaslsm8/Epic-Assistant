# 🚀 Guia Completo: GitHub + Epic Seven Assistant

## 📋 Pré-requisitos

- Conta no GitHub
- Conta no Vercel (opcional, para deploy automático)
- Conhecimento básico de Git

## 🎯 Opções de Trabalho

### 1. **GitHub Codespaces** ⭐ (Recomendado)

**Vantagens:**
- ✅ Ambiente completo no navegador
- ✅ Não precisa instalar nada
- ✅ Servidor roda automaticamente
- ✅ Preview em tempo real
- ✅ Extensões VS Code pré-configuradas

**Como usar:**
1. Vá para o repositório no GitHub
2. Clique no botão verde "Code"
3. Selecione a aba "Codespaces"
4. Clique em "Create codespace on main"
5. Aguarde o ambiente carregar (2-3 minutos)
6. O servidor será iniciado automaticamente
7. Clique em "Open in Browser" quando aparecer a notificação

**Comandos úteis no Codespaces:**
```bash
# Verificar se o servidor está rodando
curl http://localhost:3000

# Ver logs do servidor
npm run dev

# Instalar dependências (se necessário)
npm install

# Build para produção
npm run build
```

### 2. **Deploy Automático (Vercel)**

**Vantagens:**
- ✅ URL pública para compartilhar
- ✅ Deploy automático a cada commit
- ✅ Preview em pull requests
- ✅ Sem necessidade de servidor local

**Como configurar:**
1. Fork o repositório
2. Vá para [vercel.com](https://vercel.com)
3. Conecte sua conta GitHub
4. Importe o repositório
5. Configure as variáveis de ambiente (se necessário)
6. Deploy automático!

**URLs geradas:**
- `https://seu-projeto.vercel.app` (produção)
- `https://seu-projeto-git-feature.vercel.app` (preview)

### 3. **GitPod** (Alternativa)

**Vantagens:**
- ✅ Gratuito para projetos open source
- ✅ Interface similar ao VS Code
- ✅ Terminal integrado

**Como usar:**
1. Vá para [gitpod.io](https://gitpod.io)
2. Conecte sua conta GitHub
3. Abra o repositório
4. Aguarde o ambiente carregar

## 🔧 Configuração do Repositório

### Estrutura de Branches Recomendada

```bash
main                    # Branch principal (deploy automático)
├── feature/builds     # Sistema de builds
├── feature/favorites  # Sistema de favoritos
├── feature/comparator # Comparador de heróis
└── hotfix/*          # Correções urgentes
```

### Workflow de Desenvolvimento

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/epic-seven-assistant.git
cd epic-seven-assistant

# 2. Crie uma branch para sua feature
git checkout -b feature/nova-funcionalidade

# 3. Faça suas alterações
# ... edite os arquivos ...

# 4. Commit suas mudanças
git add .
git commit -m "feat: adiciona nova funcionalidade"

# 5. Push para o GitHub
git push origin feature/nova-funcionalidade

# 6. Crie um Pull Request
# Vá para GitHub → Pull Requests → New Pull Request
```

## 🛠️ Comandos Úteis

### Desenvolvimento Local
```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Verificar código
npm run lint

# Testes (quando implementados)
npm run test
```

### GitHub Actions
```bash
# Verificar status dos workflows
# Vá para GitHub → Actions

# Executar workflow manualmente
# Vá para Actions → Deploy → Run workflow
```

## 📊 Monitoramento

### GitHub Insights
- **Traffic**: Visualizações e clones
- **Contributors**: Quem está contribuindo
- **Commits**: Histórico de mudanças
- **Issues**: Problemas reportados

### Vercel Analytics
- **Page Views**: Páginas mais visitadas
- **Performance**: Tempo de carregamento
- **Errors**: Erros em produção
- **Deployments**: Status dos deploys

## 🔒 Segurança

### Secrets do GitHub
Configure no repositório: `Settings → Secrets and variables → Actions`

```bash
VERCEL_TOKEN=seu_token_vercel
ORG_ID=seu_org_id
PROJECT_ID=seu_project_id
```

### Variáveis de Ambiente
Configure no Vercel: `Settings → Environment Variables`

```bash
NEXT_PUBLIC_API_URL=https://api.exemplo.com
DATABASE_URL=sua_url_banco
```

## 🚀 Deploy Automático

### Configuração do Vercel

1. **Conecte o repositório:**
   - Vá para [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe o repositório GitHub

2. **Configure o build:**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Configure domínios:**
   - Domínio personalizado (opcional)
   - Subdomínios automáticos

### GitHub Actions

O arquivo `.github/workflows/deploy.yml` já está configurado para:
- ✅ Deploy automático a cada push para `main`
- ✅ Preview automático em pull requests
- ✅ Build e teste antes do deploy

## 📱 Acesso Mobile

### PWA (Progressive Web App)
O projeto está configurado para funcionar como PWA:
- ✅ Instalável no celular
- ✅ Funciona offline
- ✅ Notificações push (futuro)

### Responsividade
- ✅ Mobile-first design
- ✅ Tablet otimizado
- ✅ Desktop completo
- ✅ Ultrawide support

## 🎯 Próximos Passos

### Para Contribuidores
1. **Fork** o repositório
2. **Clone** localmente ou use Codespaces
3. **Crie** uma branch para sua feature
4. **Desenvolva** e teste
5. **Commit** e push
6. **Abra** um Pull Request

### Para Mantenedores
1. **Review** Pull Requests
2. **Merge** código aprovado
3. **Deploy** automático via Vercel
4. **Monitor** performance e erros
5. **Atualize** documentação

## 🆘 Suporte

### Problemas Comuns

**Erro: "npm run dev" não funciona**
```bash
# Solução: Verificar Node.js
node --version  # Deve ser 18+
npm --version   # Deve ser 8+

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

**Erro: Porta 3000 em uso**
```bash
# Solução: Usar outra porta
npm run dev -- -p 3001
```

**Erro: Build falha no Vercel**
```bash
# Solução: Verificar logs
# Vá para Vercel → Deployments → View Function Logs
```

### Contatos
- **Issues**: [GitHub Issues](https://github.com/seu-usuario/epic-seven-assistant/issues)
- **Discussions**: [GitHub Discussions](https://github.com/seu-usuario/epic-seven-assistant/discussions)
- **Wiki**: [GitHub Wiki](https://github.com/seu-usuario/epic-seven-assistant/wiki)

---

**🎮 Divirta-se desenvolvendo para a comunidade Epic Seven!** 