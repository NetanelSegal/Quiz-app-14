import { useQuizContext } from '../contexts/QuizContextProvider';
import CategoriesMenu from './CategoriesMenu';
import QuestionsList from './QuestionsList';
import QuizOver from './QuizOver';
import { useState } from 'react';

export default function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { isQuizOver } = useQuizContext();

  return (
    <div className="bg-slate-800 text-white h-screen flex items-center justify-center">
      <div className="p-5 w-[500px] max-w-full bg-gray-700 rounded-xl">
        <h1 className="font-bold my-2 text-3xl text-center">Quiz app</h1>
        {isQuizOver ? (
          <QuizOver />
        ) : selectedCategory === null ? (
          <CategoriesMenu setCategory={setSelectedCategory} />
        ) : (
          <QuestionsList selectedCategory={selectedCategory} />
        )}
      </div>
    </div>
  );
}
