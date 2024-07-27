import { restaurantList } from "./constants";
import { RestaurantCard } from "./Restrauntcard";
import { useState, useEffect } from "react";


function filterData(searchInput,restaurants) {
    const filterData = restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchInput));
    return filterData;
}


const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() =>
   {getRestaurants();},
     []);

   async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    setRestaurants(  json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

   }
    
    


    return (
         <>
        <div className="search-container">
            <input type="text" 
             className="search-input" 
             placeholder="search" 
             value ={searchInput}
                onChange={(e) =>{
                    setSearchInput(e.target.value)
                }}
             />
            <button className="search-btn" 
            onClick={() => {
                const data = filterData(searchInput, restaurants)
                setRestaurants(data)
            }}
            >
            Search</button>
        </div>
        <div className="restaurant-list">
       {restaurants.map((restaurant) => {
            return (
                <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>
            );
        })};
    </div>
    </>
        
    );
    
};

export default Body;



