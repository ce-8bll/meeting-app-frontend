import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayOnline() {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const getOption = async () => {
      const response = await axios.get(`/events/search-events/online`)
    //   console.log(response);

      setItems(response.data);
    //   console.log(setItems)
    };
    getOption();
  }, []);

  // const handleClick = async() => {
  //   setVisible(visible + 1);
  //   const response = await axios.get(`/events/search-events/online`);
  //   //   console.log(response);

  //     setItems(items.concat(response.data));

  //   console.log(setVisible)
  // };

  return (
    <div>
      <div>
        <h2>Online Events</h2>
        {items.map((item) => (
          <li>
            <p>{item.eventName}</p>
            <p>{item.startingDate}</p>
            <p>{item.category}</p>
          </li>
  ))}
        {/* <button onClick={handleClick}>See More</button> */}
      </div>
    </div>
  );
}

export default DisplayOnline;
