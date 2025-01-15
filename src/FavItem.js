import "./Item.css";
import {useState} from "react";
import axios from "axios";
import {Button} from "react-bootstrap";
import {jwtDecode} from "jwt-decode";

const FavItem = ({Obj}) => {
    // const [user, setUser] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);
    const locationName = Obj.name;

    const handleChange = () => {
        setIsFavorite(!isFavorite);
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        const decodedUser = jwtDecode(token);
        // setUser(decodedUser); // Set user state with decoded token data
        const username = decodedUser?.username;
        if (!token) {
            console.error("No token found. Please log in first.");
            return;
        }

        axios.post(
            `http://localhost:5000/delfav`,
            { locationName, username },
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include token in Authorization header
                },
            }
        )
            .then((res) => {
                console.log("Favorite deleted:", res.data);
            })
            .catch((err) => {
                console.error("Error saving favorite:", err.response?.data || err.message);
            });
    };

    return(
        <div className="container">
            <div className="restaurant">
                <img src={process.env.PUBLIC_URL + Obj.imageUrl} alt={Obj.name}/>
                <div>
                    <strong>{Obj.name}</strong><br/>
                    {Obj.info}<br/>
                    {Obj.link.maps != null ? (
                        <a href={Obj.link.maps}>
                            Google Maps
                        </a>
                    ):null}<br/>
                    {Obj.link.hotel != null ? (
                        <a href={Obj.link.hotel}>
                            Google Maps
                        </a>
                    ):null}<br/>
                    {/*{Obj.link.linkfield != null ? (*/}
                    {/*    <a href={Obj.link.linkfield}>*/}
                    {/*        Google Maps*/}
                    {/*    </a>*/}
                    {/*):null}<br/>*/}
                    <Button variant={"danger"} onClick={handleChange}>Remove from Favorites</Button>
                </div>
            </div>
        </div>
    )
}

export default FavItem;