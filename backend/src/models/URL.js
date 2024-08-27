import { Schema, model } from "mongoose";

const urlSchema = new Schema({
    id: id,
    baseUrl: String,
    shortUrl: String,
}, {
    timestamps: true,
});

const Url = model('Url', urlSchema);

export default Url;