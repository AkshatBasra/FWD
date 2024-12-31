import "./Food.css";
import Item from "./Item";
import {useEffect, useState} from "react";
// import getLocations from "./Locations.js";
// const Locations = getLocations();

const LongTrip = () => {
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
                <h1 className={"header"}>Long Trip Destinations</h1>
            </div>
            {items.map((item, index) => (
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