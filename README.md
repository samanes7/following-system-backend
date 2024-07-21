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

3. پیاده‌سازی database.js

   const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )`);

  db.run(`CREATE TABLE follows (
    follower_id INTEGER,
    followee_id INTEGER,
    follow_date DATE,
    PRIMARY KEY (follower_id, followee_id),
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followee_id) REFERENCES users(id)
  )`);
});

module.exports = db;





