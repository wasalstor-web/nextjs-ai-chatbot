#!/usr/bin/env node

/**
 * سكريبت للتحقق من جاهزية المشروع للنشر على Vercel
 * استخدم: node scripts/pre-deploy-check.js
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
};

let errors = 0;
let warnings = 0;

function checkFile(filePath, required = true) {
  const fullPath = path.join(process.cwd(), filePath);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    console.log(`${colors.green}✓${colors.reset} ${filePath}`);
    return true;
  } else {
    if (required) {
      console.log(`${colors.red}✗${colors.reset} ${filePath} ${colors.red}(مطلوب)${colors.reset}`);
      errors++;
    } else {
      console.log(`${colors.yellow}⚠${colors.reset} ${filePath} ${colors.yellow}(اختياري)${colors.reset}`);
      warnings++;
    }
    return false;
  }
}

function checkEnvVar(envVar, required = false) {
  const value = process.env[envVar];
  if (value) {
    console.log(`${colors.green}✓${colors.reset} ${envVar} = ${value.substring(0, 20)}...`);
    return true;
  } else {
    if (required) {
      console.log(`${colors.red}✗${colors.reset} ${envVar} ${colors.red}(مطلوب للإنتاج)${colors.reset}`);
      errors++;
    } else {
      console.log(`${colors.yellow}⚠${colors.reset} ${envVar} ${colors.yellow}(اختياري)${colors.reset}`);
      warnings++;
    }
    return false;
  }
}

console.log(`${colors.blue}╔════════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.blue}║  فحص جاهزية المشروع للنشر على Vercel  ║${colors.reset}`);
console.log(`${colors.blue}╚════════════════════════════════════════╝${colors.reset}\n`);

console.log(`${colors.blue}[1]${colors.reset} فحص الملفات المطلوبة:\n`);

// ملفات مطلوبة
checkFile('package.json', true);
checkFile('next.config.ts', true);
checkFile('vercel.json', true);
checkFile('tsconfig.json', true);
checkFile('.gitignore', true);
checkFile('.env.example', false);

// ملفات قاعدة البيانات
checkFile('lib/db/migrations', true);
checkFile('lib/db/schema.ts', true);
checkFile('lib/db/migrate.ts', true);
checkFile('drizzle.config.ts', true);

// ملفات التطبيق المهمة
checkFile('app/layout.tsx', true);
checkFile('app/(chat)/layout.tsx', true);
checkFile('app/admin/layout.tsx', true);

console.log(`\n${colors.blue}[2]${colors.reset} فحص محتوى package.json:\n`);

try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  // فحص scripts
  const requiredScripts = ['build', 'dev', 'start'];
  requiredScripts.forEach(script => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      console.log(`${colors.green}✓${colors.reset} script: ${script}`);
    } else {
      console.log(`${colors.red}✗${colors.reset} script: ${script} ${colors.red}(مطلوب)${colors.reset}`);
      errors++;
    }
  });
  
  // فحص dependencies مهمة
  const importantDeps = ['next', 'react', 'react-dom'];
  importantDeps.forEach(dep => {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      console.log(`${colors.green}✓${colors.reset} dependency: ${dep}`);
    } else {
      console.log(`${colors.yellow}⚠${colors.reset} dependency: ${dep} ${colors.yellow}(مطلوب)${colors.reset}`);
      warnings++;
    }
  });
} catch (e) {
  console.log(`${colors.red}✗${colors.reset} خطأ في قراءة package.json: ${e.message}`);
  errors++;
}

console.log(`\n${colors.blue}[3]${colors.reset} فحص .gitignore:\n`);

try {
  const gitignore = fs.readFileSync('.gitignore', 'utf8');
  const requiredIgnores = ['.env', '.env.local', 'node_modules', '.next'];
  
  requiredIgnores.forEach(ignore => {
    if (gitignore.includes(ignore)) {
      console.log(`${colors.green}✓${colors.reset} .gitignore يحتوي على: ${ignore}`);
    } else {
      console.log(`${colors.yellow}⚠${colors.reset} .gitignore لا يحتوي على: ${ignore}`);
      warnings++;
    }
  });
} catch (e) {
  console.log(`${colors.red}✗${colors.reset} خطأ في قراءة .gitignore`);
  errors++;
}

console.log(`\n${colors.blue}[4]${colors.reset} فحص ملفات حساسة (يجب عدم وجودها):\n`);

const sensitiveFiles = ['.env', '.env.local', '.env.production'];
let sensitiveFound = false;

sensitiveFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`${colors.red}✗${colors.reset} ${file} ${colors.red}(يجب عدم رفع هذا الملف!)${colors.reset}`);
    errors++;
    sensitiveFound = true;
  } else {
    console.log(`${colors.green}✓${colors.reset} ${file} غير موجود (جيد)`);
  }
});

console.log(`\n${colors.blue}[5]${colors.reset} فحص vercel.json:\n`);

try {
  const vercelJson = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  
  if (vercelJson.framework) {
    console.log(`${colors.green}✓${colors.reset} Framework: ${vercelJson.framework}`);
  }
  
  if (vercelJson.buildCommand) {
    console.log(`${colors.green}✓${colors.reset} Build Command: ${vercelJson.buildCommand}`);
  } else {
    console.log(`${colors.yellow}⚠${colors.reset} Build Command غير محدد`);
    warnings++;
  }
} catch (e) {
  console.log(`${colors.red}✗${colors.reset} خطأ في قراءة vercel.json: ${e.message}`);
  errors++;
}

// النتيجة النهائية
console.log(`\n${colors.blue}╔════════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.blue}║            النتيجة النهائية              ║${colors.reset}`);
console.log(`${colors.blue}╚════════════════════════════════════════╝${colors.reset}\n`);

if (errors === 0 && warnings === 0) {
  console.log(`${colors.green}✓${colors.reset} كل شيء جاهز للنشر! 🎉\n`);
  console.log(`${colors.blue}الخطوات التالية:${colors.reset}`);
  console.log(`1. تأكد من رفع المشروع إلى GitHub`);
  console.log(`2. اذهب إلى https://vercel.com/new`);
  console.log(`3. اختر المستودع الخاص بك`);
  console.log(`4. أضف Environment Variables:`);
  console.log(`   - AUTH_SECRET (مطلوب)`);
  console.log(`   - POSTGRES_URL (مطلوب)`);
  console.log(`   - ADMIN_EMAILS (اختياري)`);
  console.log(`5. انقر Deploy`);
  process.exit(0);
} else if (errors === 0) {
  console.log(`${colors.green}✓${colors.reset} المشروع جاهز للنشر مع ${colors.yellow}${warnings}${colors.reset} تحذيرات`);
  console.log(`${colors.yellow}⚠${colors.reset} يُنصح بإصلاح التحذيرات قبل النشر\n`);
  process.exit(0);
} else {
  console.log(`${colors.red}✗${colors.reset} وجدت ${colors.red}${errors}${colors.reset} خطأ/أخطاء يجب إصلاحها قبل النشر`);
  if (warnings > 0) {
    console.log(`${colors.yellow}⚠${colors.reset} و ${colors.yellow}${warnings}${colors.reset} تحذير/تحذيرات\n`);
  }
  process.exit(1);
}

