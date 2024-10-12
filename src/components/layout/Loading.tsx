const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="relative w-24 h-24">
        <div className="animate-spin rounded-full border-4 border-b-transparent border-t-transparent border-r-transparent border-l-transparent h-full w-full text-black dark:text-white">
          <div className="absolute inset-0 rounded-full border-4 border-b-transparent border-l-transparent border-t-4 border-t-black dark:border-t-white"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-4 h-4 bg-current"></div>
      </div>
    </div>
  );
};

export default Loading;
