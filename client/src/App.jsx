import CategoriesMenu from './components/CategoriesMenu';
import Questions from './components/Questions.jsx';
import './App.css';
import { useState } from 'react';
import Timer from './components/Timer.jsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="bg-slate-800 text-white h-screen flex items-center justify-center">
      <div className="p-10 w-[500px] max-w-full bg-gray-700 rounded-xl">
        <h1 className="font-bold my-2 text-3xl text-center">Quiz app</h1>
        {selectedCategory === null ? (
          <CategoriesMenu setCategory={setSelectedCategory} />
        ) : (
          <Questions selectedCategory={selectedCategory} />
        )}
      </div>
    </div>
  );
}

export default App;
