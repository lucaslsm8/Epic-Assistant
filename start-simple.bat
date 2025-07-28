@echo off
title Epic Seven Assistant - Server
color 0a

echo.
echo  ========================================
echo    EPIC SEVEN ASSISTANT - STARTING
echo  ========================================
echo.

cd /d "%~dp0"

echo  ✅ Build OK! Tailwind CSS v3 configurado
echo  🚀 Iniciando servidor Next.js...
echo  📍 URL: http://localhost:3000
echo  📱 Network: http://192.168.0.60:3000
echo.
echo  ⏳ Aguarde... servidor iniciando...
echo.

REM Aguardar 6 segundos e abrir browser
start "" cmd /c "timeout /t 6 /nobreak >nul && start http://localhost:3000"

npm run dev

echo.
echo ❌ Servidor encerrado.
pause 