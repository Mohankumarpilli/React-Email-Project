const Email = ({ emails, handleReadClick }) => {
  return (
    <>
      {emails.map((ele) => {
        const date = new Date(ele.date);
        return (
          <li
            id={ele.id}
            key={ele.id}
            style={ {backgroundColor: ele.read ? "white" : "#F4F5F9"}}
            className={`p-5 border-1 border-black-400 rounded-xl transition-all duration-300 hover:border-pink-500`}
            onClick={() => handleReadClick(ele.id)}
          >
            <div className="flex gap-10">
              <div
                style={{ backgroundColor: "#E54065" }}
                className="w-15 h-15 rounded-full text-white text-xl flex justify-center items-center font-bold"
              >
                <span>{ele.from.name.charAt(0).toUpperCase()}</span>
              </div>
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
                  <span className="font-bold" style={{ color: "#E54065" }}>
                    {ele.isFav ? "Favorite" : ""}
                  </span>
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
