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

/**
 * 取得一筆資料
 */
router.get('/:id', (req, res, next) => {
  const item = farmStay.find((i) => {
    return i.ID === req.params.id
  })
  res.json(item);
});

module.exports = router;
