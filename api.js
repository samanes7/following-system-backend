const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.post('/follow', userController.followUser);
router.post('/unfollow', userController.unfollowUser);
router.get('/followers/:userId', userController.getFollowers);
router.get('/common-followers/:userId1/:userId2', userController.getCommonFollowers);

module.exports = router;
