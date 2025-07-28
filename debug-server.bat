@echo off
echo ========================================
echo   EPIC SEVEN ASSISTANT - DEBUG MODE
echo ========================================
echo.

REM Navegar para o diretório correto
cd /d "%~dp0"

echo [DEBUG] Diretório atual: %CD%
echo [DEBUG] Arquivos no diretório:
dir package.json 2>nul || echo ❌ package.json não encontrado!
echo.

echo [DEBUG] Verificando Node.js...
node --version || echo ❌ Node.js não encontrado!
echo.

echo [DEBUG] Verificando npm...
npm --version || echo ❌ npm não encontrado!
echo.

echo [DEBUG] Verificando dependências...
npm list --depth=0
echo.

echo [DEBUG] Tentando build primeiro...
call npm run build
echo.

if %ERRORLEVEL% EQU 0 (
    echo ✅ Build concluído com sucesso!
    echo.
    echo [DEBUG] Iniciando servidor em modo debug...
    set DEBUG=*
    set NODE_ENV=development
    call npm run dev
) else (
    echo ❌ Erro no build! Verifique os erros acima.
    echo.
    echo Pressione qualquer tecla para ver logs detalhados...
    pause > nul
    
    echo [DEBUG] Tentando npm run dev mesmo assim...
    call npm run dev
)

echo.
echo Pressione qualquer tecla para sair...
pause > nul 