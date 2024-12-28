import {Link} from "react-router-dom";
import "./Food.css";
import Item from "./Item";
import getLocations from "./Locations.js";
const Locations = getLocations();

const Food = () => {
  return (
      <>
          <div>
              <h1 className={"header"}>Restaurants Near BMSCE</h1>
          </div>
          {Locations.map((item, index) => (
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