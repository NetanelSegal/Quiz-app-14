import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: String,
    code: String
})

export const CategoryModel = mongoose.model('categories', categorySchema)