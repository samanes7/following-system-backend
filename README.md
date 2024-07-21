# following-system-backend
#1. ایجاد پروژه Node.js
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

3. پیاده‌سازی database.js
4. پیاده‌سازی user.js
5. پیاده‌سازی userController.js
6. پیاده‌سازی api.js
7. پیاده‌سازی app.js
8. پیاده‌سازی server.js
9. مستندسازی و داکیومنت برای تست API

برای مستندسازی API، می‌توانیم از Postman برای ایجاد و تست درخواست‌ها استفاده کنیم. همچنین می‌توانید از Swagger برای مستندسازی استفاده کنیم.

نمونه درخواست‌ها:

ایجاد کاربر:

URL: POST /api/users
Body:

{
  "name": "John Doe"
}
دنبال‌کردن کاربر:

URL: POST /api/follow
Body:

{
  "followerId": 1,
  "followeeId": 2
}
لغو دنبال‌کردن کاربر:

URL: POST /api/unfollow
Body:

{
  "followerId": 1,
  "followeeId": 2
}
گرفتن دنبال‌کنندگان یک کاربر:

URL: GET /api/followers/:userId
گرفتن دنبال‌کنندگان مشترک بین دو کاربر:

URL: GET /api/common-followers/:userId1/:userId2

اجرای پروژه
برای اجرای پروژه، از دستور زیر استفاده میکنیم:

node server.js






