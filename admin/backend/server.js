import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Use urlencoded middleware for parsing URL-encoded data

// const uri = "mongodb://localhost:27017/QuizDbNew";
const uri = "mongodb+srv://chandan181notes:chandank@quizcluster.rckce8q.mongodb.net/";

const connectMongoose = async ()=>{
    try{
        await mongoose.connect(uri);
        console.log("Mongoose is Connected to DataBase");
    }catch(error){
        console.log(error);
    }
}
connectMongoose();

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is connected to port ${port}`);
});