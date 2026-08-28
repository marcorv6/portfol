#!/usr/bin/env bash
# Portfolio & Blog Agent Harness Initializer & Verification Script

set -e

echo "=== 🚀 Portfolio & Blog Agent Harness Initializer ==="

echo "[1/3] Checking Node.js environment..."
node -v
npm -v

echo "[2/3] Running ESLint Code Quality Gate..."
npm run lint

echo "[3/3] Building Next.js Production Bundle..."
npm run build

echo "=== ✅ All Agent Verification Gates Passed Successfully! ==="
