import "./Item.css"
import {useState} from "react";
import axios from "axios";

const Item = (props) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const locationName = props.Obj.name;
    // const handleChange = () => {
    //     setIsFavorite(!isFavorite);
    //     axios.post('http://localhost:5000/favorites', {currentName})
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }
    const handleChange = () => {
        setIsFavorite(!isFavorite);
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        console.log(token);
        console.log(locationName);
        if (!token) {
            console.error("No token found. Please log in first.");
            return;
        }

        axios.post(
            `http://localhost:5000/favorites`,
            { locationName },
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include token in Authorization header
                },
            }
        )
            .then((res) => {
                console.log("Favorite saved:", res.data);
            })
            .catch((err) => {
                console.error("Error saving favorite:", err.response?.data || err.message);
            });
    };

    return(
      <div className="container">
          <div className="restaurant">
              <img src={process.env.PUBLIC_URL + props.Obj.imageUrl} alt={props.Obj.name}/>
              <div>
                  <strong>{props.Obj.name}</strong><br/>
                  {props.Obj.info}<br/>
                  <a href={props.Obj.maps}>
                      Google Maps
                  </a><br/>
                  <input type={'checkbox'} onChange={handleChange}/> Favorite
              </div>
          </div>
      </div>
    )
}

export default Item;