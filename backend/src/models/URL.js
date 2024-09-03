const { Schema, model } =require('mongoose');

const urlSchema = new Schema(
  {
    baseUrl: String,
    shortUrl: String,
    expiresAt: Date,
  },
  {
    timestamps: true,
  }
);

const Url = model("Url", urlSchema);

module.exports =  Url;
