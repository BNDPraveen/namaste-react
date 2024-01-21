import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, SetFilteredRestaurant] = useState([]);
  const [searchText, setSearchtext] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Whenever state varaiables update, react triggers a reconciliation cycle(re-renders the component)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("making api call");
    const data = await fetch(SWIGGY_URL);
    console.log("api called");

    const json = await data.json();
    console.log(json);
    // Optional chaining
    setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    SetFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className=" ">
          <input
            type="text"
            className="text-base search-box border border-solid border-black ml-4 rounded-3xl  px-2 py-1 active:font-sans"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-200"
            onClick={() => {
              //Filter the restaurant card and update the UI
              //searchText
              console.log(searchText);

              const filteredList = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              SetFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-gray-100 m-4 rounded-lg hover:bg-gray-200 hover:shadow-md"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
            SetFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="m-4">
          <label>UserName</label>
          <input type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} className="text-base search-box border border-solid border-black ml-4 rounded-3xl  px-2 py-1 active:font-sans" />
        </div>
      </div>

      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link className="link" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
