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
        style={{ backgroundColor: filter === "All" ? "#E1E4EA" : "white" }}
        className=" font-bold rounded-2xl pr-4 pt-1 pb-1 pl-4"
      >
        All
      </button>
      <button
        onClick={handleUnRead}
        style={{ backgroundColor: filter === "Unread" ? "#E1E4EA" : "white" }}
        className=" font-bold rounded-2xl pr-4 pt-1 pb-1 pl-4"
      >
        Unread
      </button>
      <button
        onClick={handleRead}
        style={{ backgroundColor: filter === "Read" ? "#E1E4EA" : "white" }}
        className=" font-bold rounded-2xl pr-4 pt-1 pb-1 pl-4"
      >
        Read
      </button>
      <button
        onClick={handleFav}
        style={{ backgroundColor: filter === "Fav" ? "#E1E4EA" : "white" }}
        className=" font-bold rounded-2xl pr-4 pt-1 pb-1 pl-4"
      >
        Favorites
      </button>
    </div>
  );
};

export default Buttons;
