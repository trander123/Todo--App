export const Filters = ({ completed, active, all }) => {
  return (
    <div className="flex flex-row justify-center space-x-6 bg-white dark:bg-gradient-to-tr from-indigo-900 to-pink-700 px-4 py-2 rounded-md mt-5 shadow-2xl font-bold text-indigo-300">
      <button onClick={() => all()}>All</button>
      <button onClick={() => active()}>Active</button>
      <button onClick={() => completed()}>Completed</button>
    </div>
  );
};
