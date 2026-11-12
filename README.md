# مافيا مغربية - خطوات التشغيل المجاني

## 1) إنشاء قاعدة بيانات Firebase (مجانية، بدون بطاقة بنكية)
1. ادخل إلى https://console.firebase.google.com بحساب Google.
2. اضغط "Add project"، اختر أي اسم، وأوقف Google Analytics.
3. من القائمة اليسرى: Build ثم Realtime Database ثم Create Database. اختر أقرب منطقة (مثلا Europe) ثم Start in test mode.
4. افتح تبويب Rules والصق ما يلي ثم اضغط Publish:

   { "rules": { ".read": true, ".write": true } }

5. ارجع إلى الصفحة الرئيسية للمشروع، اضغط أيقونة الويب </> وسجّل تطبيقا باسم "mafia".
6. انسخ القيم التي تظهر (apiKey, authDomain, databaseURL, projectId, appId) والصقها في ملف config.js بدل كلمات PASTE.
   إذا لم يظهر databaseURL، انسخه من أعلى صفحة Realtime Database (يبدأ بـ https:// وينتهي بـ firebasedatabase.app أو firebaseio.com).

## 2) نشر اللعبة على GitHub Pages (مجاني)
1. أنشئ حسابا على https://github.com ثم New repository (اجعله Public).
2. اضغط "uploading an existing file" وارفع كل ملفات هذا المجلد (بعد تعديل config.js).
3. من Settings ثم Pages: اختر Branch: main وFolder: /(root) ثم Save.
4. بعد دقيقة يظهر رابط مثل https://اسمك.github.io/اسم-المستودع/ . أرسله لأصدقائك.

## 3) تثبيت اللعبة كتطبيق
- أندرويد (Chrome): القائمة ثم "Install app" أو "Add to Home screen".
- آيفون (Safari): زر المشاركة ثم "Add to Home Screen".

## 4) اللعب
- شخص واحد يضغط "إنشاء غرفة" بأي رمز، والباقي "دخول غرفة" بنفس الرمز.
- المضيف يدير اللعبة، فلا يغلق الصفحة أثناء اللعب.
- الصوت: زر "غرفة صوتية" يفتح غرفة Jitsi مجانية بنفس رمز الغرفة. ادخلوا كلكم إليها.

## ملاحظات
- القواعد أعلاه مفتوحة لأنها للعب بين الأصدقاء. لا تنشر رابط اللعبة علنا.
- لتحويلها إلى ملف APK مجاني: ادخل إلى https://www.pwabuilder.com والصق رابط اللعبة واختر Android.
