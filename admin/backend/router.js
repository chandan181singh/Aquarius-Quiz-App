import express from 'express';
import * as controller from './controller.js'
const router = express();

router.post("/api/quizData", controller.saveQuiz);

router.post("/api/updateDueDate", controller.updateDueDate);

router.post("/api/deleteQuiz", controller.deleteQuiz);

router.get('/api/quiz', controller.quizData);

router.get('/api/student', controller.studentData);

export default router;