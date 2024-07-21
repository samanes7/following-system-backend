const User = require('../models/user');

exports.createUser = (req, res) => {
  const { name } = req.body;
  User.create(name, (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json(user);
  });
};

exports.getAllUsers = (req, res) => {
  User.findAll((err, users) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(users);
  });
};

exports.followUser = (req, res) => {
  const { followerId, followeeId } = req.body;
  User.follow(followerId, followeeId, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Followed successfully' });
  });
};

exports.unfollowUser = (req, res) => {
  const { followerId, followeeId } = req.body;
  User.unfollow(followerId, followeeId, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Unfollowed successfully' });
  });
};

exports.getFollowers = (req, res) => {
  const { userId } = req.params;
  User.getFollowers(userId, (err, followers) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(followers);
  });
};

exports.getCommonFollowers = (req, res) => {
  const { userId1, userId2 } = req.params;
  User.getCommonFollowers(userId1, userId2, (err, followers) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(followers);
  });
};
