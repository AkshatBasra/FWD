import {useState, useEffect} from "react";
import "./Food.css";
import FoodItem from "./FoodItem";
import {CardImg} from "react-bootstrap";

const Food = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.error("Error fetching data: ", err));
    }, []);
    // console.log(items);
    return (
        <>
            {/*<div className='back-img'>*/}
            {/*    <CardImg src={process.env.PUBLIC_URL + '/Pics/cola2.jpg'} className="img-fluid" alt="MainPageImage"/>*/}
            {/*</div>*/}
                {/*<div>*/}
                {/*    <h1 className={"header"}>Restaurants Near BMSCE</h1>*/}
                {/*</div>*/}
                {items.map((item, index) => (
                    <div key={index}>
                        {item.category === "Food" ? (
                            <FoodItem Obj={item}/>
                        ) : null}
                    </div>
                ))}
            </>
            )
            }

            export default Food;