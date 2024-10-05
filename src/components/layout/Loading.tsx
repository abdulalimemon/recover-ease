const Loading = () => {
  return (
    <div className="flex items-center justify-center py-14">
      <div className="relative w-24 h-24">
        <div className="animate-spin rounded-full border-4 border-b-transparent border-t-blue-500 border-r-transparent border-l-blue-500 h-full w-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full w-4 h-4"></div>
      </div>
    </div>
  );
};

export default Loading;
