import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    category: String,
    question: String,
    options: [String],
    answer: Number
})

export const QuestionModel = mongoose.model('questions', questionSchema)