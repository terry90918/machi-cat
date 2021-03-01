// const axios = require('axios');
const express = require('express');
const router = express.Router();
const farmStay = require('../../database/farm-stay.json')

/**
 * 取得列表
 */
router.get('/', (req, res, next) => {
  /* axios.get('https://ezgo.coa.gov.tw/API/FarmStay?lang=zh-TW')
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    }) */
  const max = req.query.max || null
  const temp = [...farmStay];
  if (max) temp.length = max;
  res.json(temp);
});

/**
 * 取得一筆資料
 */
router.get('/:id', (req, res, next) => {
  const item = farmStay.find((i) => {
    return i.ID === Number(req.params.id)
  })
  res.json(item);
});

module.exports = router;
