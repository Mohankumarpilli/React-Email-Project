const Buttons = ({
  handleAll,
  handleFav,
  handleRead,
  handleUnRead,
  filter
}) => {
  return (
    <div className="flex gap-3 items-center p-2">
      <h4>Filter By:</h4>
      <button
        onClick={handleAll}
        className={ filter ==  "All" ? "bg-white border-2 rounded-2xl pr-4 pt-1 pb-1 pl-4 font-bold" : "bg-gray-500 text-white font-bold rounded-2xl pr-4 pt-1 pb-1 pl-4"}
      >
        All
      </button>
      <button
        onClick={handleUnRead}
        className={ filter ==  "Unread" ? "bg-white border-2 rounded-2xl pr-4 pt-1 pb-1 pl-4 font-bold" : "bg-gray-500 text-white font-bold rounded-2xl pr-4 pt-1 pb-1 pl-4"}
      >
        Unread
      </button>
      <button
        onClick={handleRead}
        className={ filter == "Read" ? "bg-white border-2 rounded-2xl pr-4 pt-1 pb-1 pl-4 font-bold" : "bg-gray-500 text-white font-bold rounded-2xl pr-4 pt-1 pb-1 pl-4"}
      >
        Read
      </button>
      <button
        onClick={handleFav}
        className={ filter == "Fav" ? "bg-white border-2 rounded-2xl pr-4 pt-1 pb-1 pl-4 font-bold" : "bg-gray-500 text-white font-bold rounded-2xl pr-4 pt-1 pb-1 pl-4"}
      >
        Favorites
      </button>
    </div>
  );
};

export default Buttons;
