import Loader from './Loader/Loader';
import useAxiosGet from '../hooks/useAxiosGet';
export default function CategoriesMenu({ setCategory }) {
  const {
    data: categories,
    isLoading,
    error,
  } = useAxiosGet({
    url: 'http://localhost:3000/categories',
    initialValue: [],
  });

  return (
    <div>
      <h2 className="text-center font-semibold text-xl">Choose category</h2>
      <div className="flex flex-col gap-2 mt-4">
        {isLoading && <Loader />}
        {error && (
          <span className="bg-red-500 text-center rounded-full">{error}</span>
        )}
        {categories.length > 0 &&
          [{ name: 'Random', code: '' }, ...categories].map(
            ({ name, code }) => (
              <button
                key={code}
                onClick={() => {
                  setCategory(code);
                }}
                className="hover:scale-105 active:scale-95 py-4 bg-slate-900 rounded-xl"
              >
                {name}
              </button>
            )
          )}
      </div>
    </div>
  );
}

const delay = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
