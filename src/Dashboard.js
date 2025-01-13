import { useEffect, useState } from "react";
import './MainPage.css';
import './Dashboard.css';
import Item from "./Item";
import {jwtDecode} from "jwt-decode";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state to handle asynchronous token checks

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
        if (!user) return; // Fetch only when the user is available

        const token = localStorage.getItem('token');
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
            .then((data) => {
                // Filter results for the current user
                console.log(data);
                const userFavorites = data.filter(
                    (favorite) => favorite.username === user.username
                );
                setFavorites(userFavorites);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching favorites:", err);
                setLoading(false);
            });
    }, [user]);

    // Delete Operation
    const handleRemoveFavorite = (name) => {
        const token = localStorage.getItem('token');
        console.log(name);
        fetch(`http://localhost:5000/favorites/${name}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to remove favorite');
                }
                // Update the state to remove the favorite
                setFavorites((prevFavorites) =>
                    prevFavorites.filter((favorite) => favorite.name !== name)
                );
            })
            .catch((err) => {
                console.error("Error removing favorite:", err);
            });
    };
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
                {favorites.length > 0 ? (
                    favorites.map((item, index) => (
                        <div key={index}>
                            <Item Obj={item}/>
                            {/*<button onClick={() => handleRemoveFavorite(item.name)}>*/}
                            {/*    Remove from Favorites*/}
                            {/*</button>*/}
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
