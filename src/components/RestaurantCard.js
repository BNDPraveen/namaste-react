import { CDN_LINK } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (prop) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = prop;
  const { name, avgRating, cuisines, locality, cloudinaryImageId, veg } = resData?.info;
  return (
    <div className=" m-4 p-3 w-[200px]  bg-gray-100 rounded-lg  border-2 hover:bg-gray-200  ">
      <img className="rounded-lg  w-[200px] h-[150px] object-cover " src={CDN_LINK + cloudinaryImageId} alt="res-logo" />
      <h3 className="font-bold py-2  text-lg line-clamp-1">{name}</h3>
      <h4>{avgRating} Star</h4>
      <h4 className="line-clamp-1">{cuisines.join(", ")}</h4>
      <h4 className="line-clamp-1">{locality}</h4>
      <p>{loggedInUser}</p>
    </div>
  );
};

//Higher Order Component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
