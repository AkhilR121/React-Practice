export const FullPageLoader = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-20 h-20 mb-4 rounded-full border-t-4 border-r-4 border-b-4 border-purple-600 animate-spin"></div>
        <h2 className="text-gray-700 text-lg font-medium">Loading...</h2>
      </div>
    </div>
  );
};
