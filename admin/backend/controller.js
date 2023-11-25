import Quiz from './models/quizModel.js';
import Student from './models/studentModel.js';
const saveQuiz = async(req, res)=>{
    try{
        const newQuiz = new Quiz(req.body);
        await newQuiz.save();
    }catch(error){
        console.log(error);
    }
}

const updateDueDate = async(req, res)=>{
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
}

const deleteQuiz = async(req, res)=>{
    try{
        await Quiz.findOneAndDelete({_id: req.body.id})
        .then(()=>console.log("Quiz Deleted"))
        .catch((error)=> console.log(error))
    }catch(error){
        console.log(error);
    }
}

const quizData = async(req, res)=>{
    const QuizData =  await Quiz.find({});
    res.send(QuizData);
}

const studentData = async(req, res)=>{
    const StudentData = await Student.find({});
    res.send(StudentData);
}
 

export {
    saveQuiz,
    updateDueDate,
    deleteQuiz,
    quizData,
    studentData
};

//D72193452