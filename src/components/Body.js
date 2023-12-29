import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockdata";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="Filter">
        <button
          className="Filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-card-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
