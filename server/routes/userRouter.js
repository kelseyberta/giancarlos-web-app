const express = require('express')

const router = express.Router()

const User = require('../models/userModel')

router.post('/create-user', (req, res) => {
    console.log('Received a POST request to create a user:', req.body);
    const user = new User({
        name: req.body.name,
        email: req.body.email,

    })

    user.save()
  .then((user) => {
    console.log('User saved successfully:', user);
    res.status(200).json({ data: user });
  })
  .catch((err) => {
    console.error('Error while saving user:', err);
    res.status(400).json({ error: err.message });
  });

    });

module.exports = router