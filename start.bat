@echo off
echo 🚀 Iniciando Epic Seven Assistant...
echo.

REM Verificar se Node.js está instalado
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js não encontrado. Instale o Node.js primeiro.
    pause
    exit /b 1
)

REM Instalar dependências se necessário
if not exist "node_modules" (
    echo 📦 Instalando dependências...
    npm install
)

REM Iniciar servidor de desenvolvimento
echo 🌐 Iniciando servidor de desenvolvimento...
echo 📍 Acesse: http://localhost:3000
echo.
npm run dev 