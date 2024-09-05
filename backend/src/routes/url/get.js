const { Router } = require("express");
const database = require("../../config/database");
const Url = require("../../models/URL");
const generateShortUrl = require("../../utils/base62");

const router = Router();

router.get("/:code", async (req, res) => {
  const { code } = req.params;

  try {
    await database();
    const data = await Url.findOne({
      uid: code,
    });
    if (data) {
      res.status(201).json({
        url: data.url,
      });
    } else {
      res.status(404).json({
        reason: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;