import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import * as controller from './controller.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Use urlencoded middleware for parsing URL-encoded data

const uri = "mongodb://localhost:27017/QuizDbNew";

const connectMongoose = async ()=>{
    try{
        await mongoose.connect(uri);
        console.log("Mongoose is Connected to DataBase");
    }catch(error){
        console.log(error);
    }
}
connectMongoose();

app.post("/api/quizData", controller.saveQuiz);

app.post("/api/updateDueDate", async(req, res) =>{
    try{
        const updatedData = await Quiz.findOneAndUpdate(
            {_id: req.body.id},
            {dueDate: req.body.updatedDueDate},
            { new: true } //new true isuse to return the updated data
        )

        if(!updatedData){
            console.log("Data not Found");
        }else{
            console.log(updatedData.dueDate);
        }
    }catch(error){
        console.log(error);
    }
})

app.post("/api/deleteQuiz", async(req, res) =>{
    try{
        await Quiz.findOneAndDelete({_id: req.body.id})
        .then(()=>console.log("Quiz Deleted"))
        .catch((error)=> console.log(error))
    }catch(error){
        console.log(error);
    }
})

app.get('/api/quiz', async(req, res)=>{
    const QuizData =  await Quiz.find({});
    res.send(QuizData);
})


app.listen(port, () => {
    console.log(`Server is connected to port ${port}`);
});