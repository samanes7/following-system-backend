# following-system-backend
1. ایجاد پروژه Node.js
ابتدا یک پروژه جدید Node.js ایجاد کرده و کتابخانه‌های مورد نیاز را نصب میکنیم:
mkdir following-system
cd following-system
npm init -y
npm install express sqlite3 body-parser
2. ساختار فایل‌ها
ساختار فایل‌ها به این شکل خواهد بود:
following-system/
├── database/
│   └── database.js
├── routes/
│   └── api.js
├── controllers/
│   └── userController.js
├── models/
│   └── user.js
├── app.js
└── server.js




