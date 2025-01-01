const express = require('express');
const mongoose = require("mongoose");
const FavoritesModel = require("../models/favorites"); // Import the Favorites model
const LocationsModel = require("../models/locations"); // Import the Locations model
const router = express.Router();

// Route to get joined data (favorites with location details)
router.get('/favoriteSearch', async (req, res) => {
    try {
        const favoritesWithLocationDetails = await FavoritesModel.aggregate([
            {
                $lookup: {
                    from: "locations", // Name of the collection to join
                    localField: "locationName", // Field in `Favorites` collection
                    foreignField: "name", // Field in `Locations` collection
                    as: "locationDetails", // Output array field to store joined data
                },
            },
            {
                $unwind: "$locationDetails", // Unwind the array to flatten the location details
            },
            {
                $project: {
                    _id: 1,
                    username: 1,
                    name: 1,
                    info: "$locationDetails.info", // Assuming you want location's info
                    maps: "$locationDetails.maps", // Assuming you want location's maps
                    imageUrl: "$locationDetails.imageUrl", // Assuming you want location's imageUrl
                    category: "$locationDetails.category" // Assuming you want location's category
                },
            },
        ]);

        res.status(200).json(favoritesWithLocationDetails);
        console.log(favoritesWithLocationDetails);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

module.exports = router;
