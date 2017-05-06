'use strict';
import express from "express";
import {instagram_api} from "../config";
import axios from "axios";
import querystring from "querystring";

const router = express.Router();
let sess;

const validateSession = () => {
  return sess && sess.access_token;
};

/* Index. */
router.get('/', function(req, res) {
  sess = req.session;
  res.send(instagram_api);
});

router.get('/user', function(req, res) {
  sess = req.session;
  console.log(' => ', sess);

  const user = sess.access_token || {};

  res.send({
    user: user,
  });
});

router.get('/signin', function(req, res, next) {
  const url = instagram_api.api_url
    .replace('CLIENT-ID', instagram_api.client_id)
    .replace('REDIRECT-URI', instagram_api.redirect_uri);

  res.redirect(url);
});


router.get('/callback', (req, res) => {
  const params = {
    client_id: instagram_api.client_id,
    client_secret: instagram_api.client_secret,
    grant_type: 'authorization_code',
    redirect_uri: instagram_api.redirect_uri,
    code: req.query.code,
  };

  let sess = req.session;

  axios.post(instagram_api.oauth_url, querystring.stringify(params))
    .then((response) => {
      sess.access_token = response.data.access_token || {name: 'Ana'};

      console.log('access => ', response.data.access_token);
      console.log('session => ', sess);
      res.redirect('http://localhost:3000/instagram');
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;
