import { useEffect, useState } from "react";
import './MainPage.css';
import Item from "./Item";
import {jwtDecode} from "jwt-decode";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [items, setItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state to handle asynchronous token checks
    const [favItems, setFavItems] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedUser = jwtDecode(token);
                setUser(decodedUser); // Set user state with decoded token data
            } catch (err) {
                console.error("Failed to decode token:", err);
            }
        } else {
            console.log("No token found. Please log in.");
        }
        setLoading(false); // Mark loading as complete
    }, []);

    useEffect(() => {
        if (!user) return; // Wait until `user` is set before fetching data

        const token = localStorage.getItem('token');
        if (!token) {
            console.error("No token found. Please log in.");
            return;
        }

        fetch('http://localhost:5000/favoriteSearch', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch favorites");
                }
                return response.json();
            })
            .then((data) => setItems(data))
            .catch((err) => console.error("Error fetching data: ", err));
    }, [user]); // Fetch data only when `user` is set

    useEffect(() => {
        if (user && items.length > 0) {
            const userFavorites = items.filter(item => item.username === user.username);
            setFavorites(userFavorites);
            console.log(userFavorites);
        }


    }, [user, items]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.error("Error fetching data: ", err));

        const Favs = items.filter(item => item.name === favorites.locationName);
        setFavItems(Favs);
    }, []);

    if (loading) {
        return <p>Loading...</p>; // Show a loading message while waiting for token
    }

    if (!user) {
        return <p>Please log in to view your dashboard.</p>; // Show a message if the user isn't logged in
    }

    return (
        <div className="dashboard">
            <strong>
                Welcome, {user.username}
            </strong>
            <div>
                <strong>Favorites</strong>
                <br />
                {favItems.length > 0 ? (
                    favItems.map((item, index) => (
                        <div key={index}>
                            <Item Obj={item} />
                        </div>
                    ))
                ) : (
                    <p>No favorites found.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
