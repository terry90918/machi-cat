// var axios = require('axios');
var express = require('express');
var router = express.Router();
var farmStay = require('../../database/farm-stay.json')

router.get('/', (req, res, next) => {
  /* axios.get('https://ezgo.coa.gov.tw/API/FarmStay?lang=zh-TW')
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    }) */
  res.json(farmStay);
});

module.exports = router;
