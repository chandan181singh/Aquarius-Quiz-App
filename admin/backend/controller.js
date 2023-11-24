import Quiz from './models/quizModel.js';

const saveQuiz = async(req, res)=>{
    try{
        const newQuiz = new Quiz(req.body);
        await newQuiz.save();
    }catch(error){
        console.log(error);
    }
}

const updateDueDate = async(req, res)=>{
    
}
 

export {saveQuiz, updateDueDate};