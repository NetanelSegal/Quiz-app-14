import { CategoryModel } from "../models/categories.model.js";

export const getCaregories = async (req, res) => {
    try {
        // get categories from mongo
        const categories = await CategoryModel.find()
        // send response to the client
        res.status(200).json(categories)
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" })
    }
}