import axios from 'axios';

const QuizForm = () => {
  const addCreatedQuiz = async (e) => {
    e.preventDefault();

    const data = {
      hello: "Hello World"
    };

    try {
      await axios.post('http://localhost:5000/api/quizData', data); // Replace with your actual server URL
      console.log("Data posted successfully");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <main className='main-container'>
      <div className="quizForm">
        <h2>Create Quiz Questions</h2>
        <form onSubmit={addCreatedQuiz}>
          <button type='submit'>Done</button>
        </form>
      </div>
    </main>
  );
};

export default QuizForm;

