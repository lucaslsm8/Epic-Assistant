#!/bin/bash

echo "🚀 Iniciando Epic Seven Assistant..."

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado"
    exit 1
fi

echo "📦 Instalando dependências..."
npm install

echo "🔧 Verificando configuração..."
npm run build

echo "🌐 Iniciando servidor de desenvolvimento..."
npm run dev 