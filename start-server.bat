@echo off
echo ========================================
echo     EPIC SEVEN ASSISTANT - STARTUP
echo ========================================
echo.

REM Navegar para o diretório correto
cd /d "%~dp0"

echo [1/4] Verificando diretório...
if not exist "package.json" (
    echo ❌ Erro: package.json não encontrado!
    echo Certifique-se de que o arquivo .bat está na pasta do projeto.
    pause
    exit /b 1
)

echo [2/4] Instalando dependências (se necessário)...
call npm install --silent

echo [3/4] Iniciando servidor Next.js...
echo.
echo 🚀 Servidor iniciando em http://localhost:3000
echo.

REM Aguardar 8 segundos e abrir o browser
start "" cmd /c "timeout /t 8 /nobreak > nul && start http://localhost:3000"

REM Iniciar o servidor (permanece ativo)
call npm run dev

echo.
echo ❌ Servidor encerrado. Pressione qualquer tecla para sair.
pause > nul 