const { Schema, model } =require('mongoose');

const urlSchema = new Schema(
  {
    url: {
      type: String,
      unique: true,
      required: true
    },
    uid: {
      type: String,
      unique: true,
      required: true
    },
    expiresAt: Date,
  },
  {
    timestamps: true,
  }
);

const Url = model("Url", urlSchema);

module.exports =  Url;
