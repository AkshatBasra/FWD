// const Location = [
//   {
//     name: "Vidyarthi Bhavan",
//     info: "A legendary spot in Bengaluru, famous for its crispy dosas and rich cultural heritage.",
//     maps: "https://www.google.com/maps/dir/BMS+College+of+Engineering,+Bull+Temple+Road,+Basavanagudi,+Bengaluru,+Karnataka/Vidyarthi+Bhavan,+32,+Gandhi+Bazaar+Main+Rd,+Gandhi+Bazaar,+Basavanagudi,+Bengaluru,+Karnataka+560004/@12.9440525,77.5665865,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3bae158b11e34d2f:0x5f4adbdbab8bd80f!2m2!1d77.5668099!2d12.9416151!1m5!1m1!1s0x3bae15f2e88ad035:0xed7fede7791f8edc!2m2!1d77.5713043!2d12.9451241?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D",
//     imageUrl: require("../public/Pics/Food/Vidyarthi Bhavan.jpg"),
//     category: "Food"
//   },
//   {
//     name: "MTR (Mavalli Tiffin Room)",
//     info: "Renowned for its traditional South Indian meals, MTR is a must-visit for authentic flavors.",
//     maps: "https://www.google.com/maps/dir/BMS+College+of+Engineering,+Bull+Temple+Road,+Basavanagudi,+Bengaluru,+Karnataka/MTR,+14,+Lal+Bagh+Main+Rd,+Doddamavalli,+Sudhama+Nagar,+Bengaluru,+Karnataka+560027/@12.9486182,77.5659126,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3bae158b11e34d2f:0x5f4adbdbab8bd80f!2m2!1d77.5668099!2d12.9416151!1m5!1m1!1s0x3bae15dda4a3a569:0xde94c3a7899fc902!2m2!1d77.5855569!2d12.9551821!3e0?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D",
//     imageUrl: require("../public/Pics/Food/mtr.jpg"),
//     category: "Food"
//   },
//   {
//     name: "SLV Corner",
//     info: "A popular spot for quick bites and delicious South Indian snacks.",
//     maps: "https://www.google.com/maps/dir/BMS+College+of+Engineering,+Bull+Temple+Road,+Basavanagudi,+Bengaluru,+Karnataka/SLV+CORNER+VEG+RESTAURANT,+No.+42,+Ramakrishna+Ashram+Circle,+Vanvilas+Road,+Basavanagudi,+Vanivilas+Road,+Bengaluru,+Karnataka+560004/@12.9449732,77.5626098,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3bae158b11e34d2f:0x5f4adbdbab8bd80f!2m2!1d77.5668099!2d12.9416151!1m5!1m1!1s0x3bae15edf6b63d4b:0x5067dcb59168eb51!2m2!1d77.5686634!2d12.9483494!3e0?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D",
//     imageUrl: require("../public/Pics/Food/slv.jpg"),
//     category: "Food"
//   },
//   {
//     name: "California Burrito",
//     info: "Offering a taste of Mexico with fresh and flavorful burritos and bowls.",
//     maps: "https://www.google.com/maps/dir/BMS+College+of+Engineering,+Bull+Temple+Road,+Basavanagudi,+Bengaluru,+Karnataka/California+Burrito+Mexican+Grill+@+Gandhi+Bazaar,+Gandhi+Bazaar+Main+Rd,+next+to+McDonalds,+Gandhi+Bazaar,+Basavanagudi,+Bengaluru,+Karnataka+560004/@12.9448888,77.5629246,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3bae158b11e34d2f:0x5f4adbdbab8bd80f!2m2!1d77.5668099!2d12.9416151!1m5!1m1!1s0x3bae158f4620a325:0xb58442127b9b4f9e!2m2!1d77.569339!2d12.9471051!3e0?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D",
//     imageUrl: require("../public/Pics/Food/cb.jpg"),
//     category: "Food"
//   },
//   {
//     name: "The Grand Village",
//     info: "A restaurant in Bengaluru, India that serves a variety of cuisines, including vegetarian, vegan, North Indian, South Indian, and Rajasthani.",
//     maps: "https://www.google.com/maps/dir/BMS+College+of+Engineering,+Bull+Temple+Road,+Basavanagudi,+Bengaluru,+Karnataka/Grand+Village,+3rd+Floor,+Gandhi+Bazaar+Main+Rd,+Above+Reliance+Trends,+Gandhi+Bazaar,+Basavanagudi,+Bengaluru,+Karnataka+560004/@12.9435106,77.5669308,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3bae158b11e34d2f:0x5f4adbdbab8bd80f!2m2!1d77.5668099!2d12.9416151!1m5!1m1!1s0x3bae15f2bf3c9f87:0x253a945376ff1e00!2m2!1d77.5720383!2d12.9445824!3e0?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D",
//     imageUrl: require("../public/Pics/Food/gv.jpg"),
//     category: "Food"
//   },
//   {
//     name: "Apna Dhaba",
//     info: "A North Indian restaurant in Basavanagudi, Bangalore that's known for its fast delivery, healthy food, and tasty presentation.",
//     maps: "https://www.google.com/maps/dir/BMS+College+of+Engineering,+Bull+Temple+Road,+Basavanagudi,+Bengaluru,+Karnataka/Apna+Dhaba+%7C+Taste+Of+Punjab+Pure+Veg,+Mount+Joy+Extension,+Hanumanthnagar,+Banashankari+1st+Stage,+Banashankari,+Bengaluru,+Karnataka+560019/@12.941313,77.5634912,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3bae158b11e34d2f:0x5f4adbdbab8bd80f!2m2!1d77.5668099!2d12.9416151!1m5!1m1!1s0x3bae15ba1deb6697:0x5449322bb3265a46!2m2!1d77.5644487!2d12.9403745!3e0?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D",
//     imageUrl: require("../public/Pics/Food/ad.jpg"),
//     category: "Food"
//   },
//   {
//     name: "Domino's Pizza",
//     info: "A global pizza chain that offers pizza delivery, carryout, and dine-in services.",
//     maps: "https://maps.app.goo.gl/fdeVvhtMqknf6gyW7",
//     imageUrl: require("../public/Pics/Food/dominoes.jpg"),
//     category: "Food"
//   }/*,
//   {
//     name: "",
//     info: "",
//     maps: "",
//     imageUrl: require("./Pics/Food/"),
//     category: "Food"
//   },
//   {
//     name: "",
//     info: "",
//     maps: "",
//     imageUrl: require("./Pics/Food/"),
//     category: "Food"
//   },
//   {
//     name: "",
//     info: "",
//     maps: "",
//     imageUrl: require("./Pics/Food/"),
//     category: "Food"
//   },
//   {
//     name: "",
//     info: "",
//     maps: "",
//     imageUrl: require("./Pics/Food/"),
//     category: "Food"
//   },
//   {
//     name: "",
//     info: "",
//     maps: "",
//     imageUrl: require("./Pics/Food/"),
//     category: "Food"
//   }*/
// ]
//
// const getLocations = () => {
//   return Location;
// }
//
// export default getLocations;