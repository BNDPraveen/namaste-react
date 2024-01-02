import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (prop) => {
  const { resData } = prop;
  const { name, avgRating, cuisines, locality, cloudinaryImageId, veg } = resData?.info;
  return (
    <div className="res-card">
      <img src={CDN_LINK + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
    </div>
  );
};
export default RestaurantCard;
