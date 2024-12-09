import './App.css';
import Quiz from './components/Quiz.jsx';
// import Sandbox from './components/Sandbox.jsx';
import QuizContextProvider from './contexts/QuizContextProvider.jsx';

function App() {
  return (
    <QuizContextProvider>
      <Quiz />
    </QuizContextProvider>
  );
}

export default App;
