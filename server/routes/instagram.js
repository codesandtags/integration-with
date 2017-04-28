'use strict';
import express from "express";
import {instagram_api} from "../config";
import axios from "axios";
import querystring from 'querystring';

const router = express.Router();

/* Index. */
router.get('/', function(req, res, next) {
  const url = instagram_api.api_url
    .replace('CLIENT-ID', instagram_api.client_id)
    .replace('REDIRECT-URI', instagram_api.redirect_uri);

  res.redirect(url);
  //res.send('loading...');
});

router.get('/callback', (req, res) => {
  const params = {
    client_id: instagram_api.client_id,
    client_secret: instagram_api.client_secret,
    grant_type: 'authorization_code',
    redirect_uri: instagram_api.redirect_uri,
    code: req.query.code,
  };

  console.log(params);

  axios.post(instagram_api.oauth_url, querystring.stringify(params))
    .then((data) => {
      console.log('por fin socio', data);
    })
    .catch((error) => {
      console.error(error);
    });

  res.send(instagram_api);
});

module.exports = router;
