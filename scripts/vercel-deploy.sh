#!/bin/bash

# سكريبت لرفع المشروع على Vercel بشكل احترافي
# استخدام: bash scripts/vercel-deploy.sh

set -e

echo "🚀 بدء عملية النشر على Vercel..."

# التحقق من تثبيت Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI غير مثبت"
    echo "📦 جاري التثبيت..."
    npm install -g vercel
fi

# التحقق من جاهزية المشروع
echo ""
echo "🔍 التحقق من جاهزية المشروع..."
node scripts/pre-deploy-check.js

if [ $? -ne 0 ]; then
    echo "❌ فشل فحص الجاهزية. يرجى إصلاح الأخطاء أولاً."
    exit 1
fi

# التحقق من Git
echo ""
echo "📦 التحقق من Git..."
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ هذا ليس مستودع Git"
    exit 1
fi

# التحقق من التغييرات غير المرفوعة
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  يوجد تغييرات غير مرفوعة"
    echo "💡 يُنصح برفع التغييرات أولاً:"
    echo "   git add ."
    echo "   git commit -m 'Prepare for deployment'"
    echo "   git push"
    read -p "هل تريد المتابعة بدون رفع التغييرات؟ (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# النشر
echo ""
echo "🚀 بدء النشر..."
vercel

echo ""
echo "✅ تم النشر بنجاح!"
echo "💡 للمتابعة:"
echo "   - تحقق من Vercel Dashboard"
echo "   - تأكد من إضافة Environment Variables"
echo "   - تحقق من عمل الموقع"

