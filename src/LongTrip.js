import "./Food.css";
import Item from "./Item";
import getLocations from "./Locations.js";
const Locations = getLocations();

const LongTrip = () => {
    return (
        <>
            <div>
                <h1 className={"header"}>Long Trip Destinations</h1>
            </div>
            {Locations.map((item, index) => (
                <div key={index}>
                    {item.category === "Long" ? (
                        <Item Obj={item}/>
                    ): null}
                </div>
            ))}
        </>
    )
}

export default LongTrip;