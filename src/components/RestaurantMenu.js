import { useState } from "react";
import useRestaturantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaturantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo, cloudinaryImageId } = resInfo?.cards[0]?.card?.card?.info;

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - Rs.{costForTwo / 100} for two
      </p>
      {/* Categories accordions */}
      {categories.map((category, index) => (
        // Controlled Component
        <ResCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
