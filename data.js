const foodList = [
  "Amala and Ewedu",
  "Pancakes with Maple Syrup",
  "Rice with Turkey Stew",
  "Ewagoyin with fried Plantain",
  "Chibwabwa (pumpkin leaves in peanut sauce)",
  "Pounded Yam and Bitter Leaf Soup",
  "Soysauce with White Rice and Chicken",
  "Boiled Yam with shredded beef sauce",
  "Toasted Bread with Eggs and saugage",
  "Eba and Egusi Soup",
];

const foodData = [
  {
    img: "https://images.app.goo.gl/1e8HcVfNqJ2nk6KY6",
    Category: "Lunch",
    itemName: "Amala and Ewedu",
    location: "Abula Restaurant",
    state: "Ibadan",
    country: "Nigeria",
    review: 20,
    status: "Available",
    rating: "4.9",
  },
  {
    img: "https://images.app.goo.gl/xjcYPJbntdBn9f2k6",
    itemName: "Pancakes with Maple Syrup",
    location: "Lekki",
    Category: "Breakfast",
    state: "Lagos",
    country: "Ghana",
    review: 10,
    status: "NotAvailable",
    rating: "0.4",
  },
  {
    img: "https://images.app.goo.gl/yTdvc7ut4Djg8nsU8",
    itemName: "Rice with Turkey Stew",
    location: "Beniinse",
    Category: "Lunch",
    state: "Lagos",
    country: "Benin Rep",
    review: 20,
    status: "NotAvailable",
    rating: "2.5",
  },
  {
    img: "https://images.app.goo.gl/4S5GHm2LgeJtLEPKA",
    itemName: "Chibwabwa (pumpkin leaves in peanut sauce)",
    location: "GreenLand",
    state: "Lagos",
    country: "Zambia",
    review: 2,
    status: "Available",
    rating: "3.5",
  },
  {
    img: "https://images.app.goo.gl/zr3tVyBQEgAfwuZW8",
    itemName: "Pounded Yam and Bitter Leaf Soup",
    location: "Onitsha",
    state: "Anambra State",
    country: "Nigeria",
    review: 20,
    status: "Available",
    rating: "3.5",
  },
  {
    img: "https://images.app.goo.gl/BNe5Y2PY9pgqo6fRA",
    itemName: "Soysauce with White Rice and Chicken",
    location: "Ville Island",
    state: "Maladira",
    country: "Malaysia",
    review: 20,
    status: "Available",
    rating: "3.5",
  },
  {
    img: "https://images.app.goo.gl/ESNCWofam7A4s8Yy9",
    itemName: "Boiled Yam with shredded chicken sauce",
    location: "Intercontinental Hotel",
    state: "Lagos",
    country: "Nigeria",
    review: 20,
    status: "Available",
    rating: "3.7",
  },
  {
    img: "https://images.app.goo.gl/ae1FCxkC51arcxhb6",
    itemName: "Toasted Bread with Eggs and saugage",
    location: "Rich Reserves",
    state: "Madina",
    country: "Ghana",
    review: 20,
    status: "Available",
    rating: "2.5",
  },
  {
    img: "https://images.app.goo.gl/xDxKtZgupeiB6McC9",
    itemName: "Eba and Egusi Soup",
    location: "Eat & Drink",
    state: "Lagos",
    country: "Nigeria",
    review: 21,
    status: "Available",
    rating: "5.0",
  },
];
module.exports = { foodData, foodList };
