import {useState, useEffect} from "react";
import "./Food.css";
import Item from "./Item";
// import getLocations from "./Locations.js";
// const Locations = getLocations();

const Food = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, []);
    return (
      <>
          <div>
              <h1 className={"header"}>Restaurants Near BMSCE</h1>
          </div>
          {items.map((item, index) => (
              <div key={index}>
                  {item.category === "Food" ? (
                    <Item Obj={item}/>
                  ): null}
              </div>
          ))}
      </>
  )
}

export default Food;