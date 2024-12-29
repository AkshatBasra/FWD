import "./Food.css";
import Item from "./Item";
import getLocations from "./Locations.js";
const Locations = getLocations();

const Short = () => {
    return (
        <>
            <div>
                <h1 className={"header"}>Short Trip Destinations</h1>
            </div>
            {Locations.map((item, index) => (
                <div key={index}>
                    {item.category === "Short" ? (
                        <Item Obj={item}/>
                    ): null}
                </div>
            ))}
        </>
    )
}

export default Short;