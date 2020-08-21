const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require('../database/dbConfig');

const router = require('express').Router();

const Users = require("../users/users-model");
const { isValid } = require("../users/users-service");
const constants = require("../config/constants");

router.post('/register', (req, res) => {
  const credentials = req.body;

  if(isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    Users.add(credentials)
      .then(user => {
        res.status(201).json({ data: user });
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({ message: 'Please provide a username and password' });
  }
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if(isValid(req.body)) {
    Users.findBy({ username: username })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = signToken(user);

          res.status(200).json({
            message: "Welcome to the API of Dad Jokes",
            token,
          });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({ message: "Please provide your username and password" });
  }
});

function signToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const secret = constants.jwtSecret;

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
};

module.exports = router;
