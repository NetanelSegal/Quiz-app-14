import mongoose from 'mongoose'

(async () => {
    try {
        console.log("Connecting to mongo...");
        await mongoose.connect("mongodb://localhost:27017/quiz-app-14")
        console.log("Connected to mongo");
    } catch (error) {
        console.log(error)
    }
})()