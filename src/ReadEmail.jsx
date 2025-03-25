import { useEffect, useState } from "react";

const ReadEmail = ({ display, handleFav }) => {
  const date = new Date(display.date);
  const [body, setBody] = useState("");

  useEffect(() => {
    fetch(`https://flipkart-email-mock.now.sh/?id=${display.id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data?.body) {
          setBody(data.body);
        } else {
          console.error("Body not found in API response");
        }
      })
      .catch((error) => console.error("Error fetching email:", error));
  }, [display.id]);

  return (
    <div className="flex w-full gap-6 p-5">
      <div className="w-15 h-15 rounded-full bg-pink-500 text-white text-xl flex justify-center items-center font-bold">
        <span>{display.from.name.split("")[0].toUpperCase()}</span>
      </div>
      <div className="flex flex-col gap-3 p-3 w-full">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">{display.subject}</h1>
          <button
            onClick={() => handleFav(display.id - 1)}
            className="pr-3 pl-3 pt-1 pb-1 bg-pink-400 rounded-full text-white font-bold"
          >
            Make as favorite
          </button>
        </div>
        <span>{date.toLocaleString()}</span>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
};

export default ReadEmail;
