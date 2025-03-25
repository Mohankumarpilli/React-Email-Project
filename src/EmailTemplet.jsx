import { useEffect, useState } from "react";
import Email from "./Email";
import ReadEmail from "./ReadEmail";
import Buttons from "./Buttons";

const EmailTemplet = () => {

  const [filter , setFilter ]= useState("All")

  const [display, setDisplay] = useState({});
  const [read, setRead] = useState(false);
  
  const [emails, setEmails] = useState([]);

  const [allEmails, setAllEmails] = useState([]);

  useEffect(() => {
    fetch("https://flipkart-email-mock.vercel.app/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEmails(() => {
          const arr = [];
          data.list.map((ele) => {
            return arr.push({ ...ele, read: false, isFav: false });
          });
          return arr;
        });
        setAllEmails(() => {
          const arr = [];
          data.list.map((ele) => {
            return arr.push({ ...ele, read: false, isFav: false });
          });
          return arr;
        });
      })
      .catch((error) => console.error("Error fetching emails:", error));
  }, []);

  const handleReadClick = (id) => {
    setEmails((prev) =>
      prev.map((ele, index) => {
        if (index == id - 1) {
          return { ...ele, read: true };
        } else {
          return ele;
        }
      })
    );
    setAllEmails((prev) =>
      prev.map((ele, index) => {
        if (index == id - 1) {
          return { ...ele, read: true };
        } else {
          return ele;
        }
      })
    );
    if (display.id - 1 == id - 1 && read) {
      console.log(id, " ", display.id);
      setRead(false);
    } else {
      setRead(true);
    }
    setDisplay(() => emails[id - 1]);
  };
  const handleFav = (id) => {
    setEmails((prev) =>
      prev.map((ele, index) => {
        if (index == id) {
          return { ...ele, isFav: true };
        } else {
          return ele;
        }
      })
    );
    setAllEmails((prev) =>
      prev.map((ele, index) => {
        if (index == id) {
          return { ...ele, isFav: true };
        } else {
          return ele;
        }
      })
    );
  };

  const handleAll = () => {
    setRead(false)
    setFilter("All");
    setEmails(allEmails);
  };
  const handleClickFav = () => {
    setRead(false)

    setFilter("Fav");
    
    setEmails(() => allEmails.filter((ele) => ele.isFav));
  };

  const handleUnRead = () => {
    setRead(false)


    setFilter("Unread");

    setEmails(() => allEmails.filter((ele) => !ele.read));
  };

  const handleRead = () => {
    setRead(false)


    setFilter("Read");

    setEmails(() => allEmails.filter( ele => ele.read));
  };

  return (
    <div className="p-10 flex flex-col gap-2">
      <Buttons
        handleAll={handleAll}
        handleFav={handleClickFav}
        handleRead={handleRead}
        handleUnRead={handleUnRead}
        filter = {filter}
      />
      <div
        className={read ? "grid grid-cols-[1fr_2fr] gap-2" : "grid grid-cols-1"}
      >
        <ul className="flex flex-col gap-5">
          <Email emails={emails} handleReadClick={handleReadClick} />
        </ul>
        {read ? (
          <div className={`p-5 border rounded-md`}>
            <ReadEmail display={display} handleFav={handleFav} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EmailTemplet;