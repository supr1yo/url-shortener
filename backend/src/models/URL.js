const { Schema, model } = require("mongoose");

const urlSchema = new Schema(
  {
    url: {
      type: String,
      unique: true,
      required: true,
    },
    uid: {
      type: String,
      unique: true,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: "30d",
    },
  },
  {
    timestamps: true,
  }
);

const Url = model("Url", urlSchema);

module.exports = Url;
