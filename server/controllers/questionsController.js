import { QuestionModel } from "../models/questions.model.js"

export const getQuestions = async (req, res) => {
    const cat = new RegExp(req.query.cat || '')

    try {
        // get 10 random question from mongo with and without caterogy
        const questions = await QuestionModel.aggregate([{
            $match: { category: cat }
        },
        {
            $sample: { size: 10 }
        }])
        // send response to the client
        res.status(200).json(questions)
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" })
    }
}