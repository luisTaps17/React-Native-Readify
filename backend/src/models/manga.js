import mongoose from "mongoose";

const mangaSchema = new mongoose.Schema({
 title:{
    type: String,
    required: true,
 },
 genre:{
    type: String,
    required: true
 },
 description:{
    type: String,
    required: true,
    default: ''
 },
 author:{
    type: String,
    required: true
 },
 status:{
    type: String,
    required: true
 },
 image:{
    type: String,
    required: true
 },
 rating:{
    type: String,
    required: true
 },
 user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
 }
}, { timestamps: true});

export default mongoose.model('Manga', mangaSchema);