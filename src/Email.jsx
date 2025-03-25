const Email = ({ emails, handleReadClick }) => {
  return (
    <>
      {emails.map((ele) => {
        const date = new Date(ele.date);
        return (
          <li key={ele.id} className="p-5 border-1 border-pink-400 rounded-xl" onClick={ () => handleReadClick(ele.id)}>
            <div className="flex gap-10 ">
              <img
                src="./M.png"
                alt="User Profile"
                className="w-15 h-15 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <h3>
                  From:{" "}
                  <span className="font-bold">
                    {ele.from.name} &lt;{ele.from.email}&gt;
                  </span>
                </h3>
                <h4>
                  Subject: <span className="font-bold">{ele.subject}</span>
                </h4>
                <p>{ele.short_description}</p>
                <h5 className="flex gap-4">
                  <span>{date.toLocaleString()}</span>{" "}
                  <span className="font-bold text-pink">{ele.isFav ? "Favorite" : ""}</span>
                </h5>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Email;
