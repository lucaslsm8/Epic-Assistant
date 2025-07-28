@echo off
echo 🚀 INICIANDO EPIC SEVEN ASSISTANT...

cd /d "%~dp0"

REM Instalar deps e iniciar
npm install && npm run dev

pause 