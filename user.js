const db = require('../database/database');

class User {
  static create(name, callback) {
    db.run('INSERT INTO users (name) VALUES (?)', [name], function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { id: this.lastID, name });
    });
  }

  static findAll(callback) {
    db.all('SELECT * FROM users', [], (err, rows) => {
      if (err) {
        return callback(err);
      }
      callback(null, rows);
    });
  }

  static follow(followerId, followeeId, callback) {
    const followDate = new Date().toISOString().split('T')[0];
    db.run('INSERT INTO follows (follower_id, followee_id, follow_date) VALUES (?, ?, ?)', [followerId, followeeId, followDate], function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { followerId, followeeId });
    });
  }

  static unfollow(followerId, followeeId, callback) {
    db.run('DELETE FROM follows WHERE follower_id = ? AND followee_id = ?', [followerId, followeeId], function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { followerId, followeeId });
    });
  }

  static getFollowers(userId, callback) {
    db.all('SELECT follower_id FROM follows WHERE followee_id = ?', [userId], (err, rows) => {
      if (err) {
        return callback(err);
      }
      callback(null, rows);
    });
  }

  static getCommonFollowers(userId1, userId2, callback) {
    db.all(`SELECT follower_id FROM follows WHERE followee_id = ?
            INTERSECT
            SELECT follower_id FROM follows WHERE followee_id = ?`, [userId1, userId2], (err, rows) => {
      if (err) {
        return callback(err);
      }
      callback(null, rows);
    });
  }
}

module.exports = User;
