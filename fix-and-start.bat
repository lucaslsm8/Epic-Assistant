@echo off
echo ========================================
echo   EPIC SEVEN ASSISTANT - AUTO FIX
echo ========================================
echo.

cd /d "%~dp0"

echo [1/5] Matando processos Node existentes...
taskkill /f /im node.exe >nul 2>&1
timeout /t 2 /nobreak >nul

echo [2/5] Limpando cache npm...
npm cache clean --force >nul 2>&1

echo [3/5] Instalando dependências corretas...
npm install
npm install @tailwindcss/postcss --save-dev

echo [4/5] Testando build...
npm run build

if %ERRORLEVEL% EQU 0 (
    echo ✅ Build OK! Iniciando servidor...
    echo.
    echo 🚀 Servidor em: http://localhost:3000
    echo 📱 Mobile em: http://localhost:3001
    echo.
    
    REM Aguardar e abrir browser
    start "" cmd /c "timeout /t 5 /nobreak >nul && start http://localhost:3000"
    
    echo [5/5] Iniciando servidor...
    npm run dev
) else (
    echo ❌ Erro no build! Verifique as mensagens acima.
    pause
)

echo.
echo Servidor encerrado.
pause 