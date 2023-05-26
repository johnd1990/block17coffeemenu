// Import coffeeMenu from coffee_data.js
const coffeeMenu = require("./coffee_data");

// Return an array of all the drinks on the menu
function getAllDrinks() {
    return coffeeMenu.map((drink) => drink.name);
}

console.log("All drinks on the menu:", getAllDrinks());

// Return an array of drinks that cost 5 and under
function getAffordableDrinks() {
    return coffeeMenu.filter((drink) => drink.price <= 5);
}

console.log("Affordable drinks (cost 5 and under):", getAffordableDrinks());

// Return an array of drinks that are priced at an even number
function getEvenPricedDrinks() {
    return coffeeMenu.filter((drink) => drink.price % 2 === 0);
}

console.log("Even priced drinks:", getEvenPricedDrinks());

// eturn the total if you were to order one of every drink
function getTotalOrderCost() {
    return coffeeMenu.reduce((total, drink) => total + drink.price, 0);
}

console.log("Total order cost:", getTotalOrderCost());

// Return an array with all the drinks that are seasonal
function getSeasonalDrinks() {
    return coffeeMenu.filter((drink) => drink.seasonal);
}

console.log("Seasonal drinks:", getSeasonalDrinks());

// Return all the seasonal drinks with the words "with imported beans" after the item name
function getSeasonalDrinksWithImportedBeans() {
    return coffeeMenu
        .filter((drink) => drink.seasonal)
        .map((drink) => `${drink.name} with imported beans`);
}

console.log(
    "Seasonal drinks with imported beans:",
    getSeasonalDrinksWithImportedBeans()
);
