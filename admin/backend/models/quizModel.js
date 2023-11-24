import mongoose from "mongoose";


// Counter collection schema
const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 0 }
});
  
  // Counter model
const Counter = mongoose.model('Counter', counterSchema);

Counter.findOne({ _id: 'item_id' })
  .exec()
  .then(counter => {
    if (!counter) {
      return Counter.create({ _id: 'item_id', sequence_value: 0 });
    }
  })
  .catch(err => {
    console.error('Error creating or finding counter:', err);
  });

const quizSchema = mongoose.Schema({
    quizName: {
        type: String,
        required: true
    },
    quizNo:{
        type:Number,
        required: true,
        //unique: true,
        default:0
    },
    questions:[{
        description :{
            type: String,
            required: true
        },
        options: {
            type: [String],
            required: true
        }, 
        correctAnswer:{
            type: Number,
             required: true
        }
    }],
    createdDate:{
        type: Date,
        required: true
    }, 
    dueDate:{
        type: Date,
        required: true
    }
});

// Pre-save hook to auto-increment itemNumber
quizSchema.pre('save', async function (next) {
    const doc = this;
    const counter = await Counter.findByIdAndUpdate('item_id', { $inc: { sequence_value: 1 } });
    doc.quizNo = counter.sequence_value + 1; // Increment starts from 1
    console.log(doc.quizNo);
    next();
  });

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
