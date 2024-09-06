const express = require('express');
const router = express.Router();
const database = require("../../config/database");
const Url = require("../../models/URL");
const generateShortUrl = require("../../utils/base62");
const { isURL } = require('validator');

router.post('', async(req, res) => {
  const { url } = req.body;

  if (!isURL(url)){
    return res.status(500).json({
      reason: 'Invalid url passed.'
    });
  }

  try {
    await database();
    const search = await Url.findOne({
      url: url,
    });
    if (search) {
      res.status(201).json({
        uid: search.uid,
      });
    } else {
      const data = await Url.create({
        url,
        uid: generateShortUrl(url),
      });

      return res.status(201).json({
        uid: data.uid,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;