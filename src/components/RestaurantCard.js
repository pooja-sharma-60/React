import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[230px] ">
      <img
        className="rounded-xl shadow-lg mb-2"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <div className="m-2 p-2">
        <h3 className="font-bold text-lg pb-2">{name}</h3>
        <h4 className="font-semibold">{avgRating} stars </h4>
        <h4 className="font-thin">{cuisines.join(", ")}</h4>
        <h4 className="font-thin">{costForTwo}</h4>
        <h4 className="font-thin">{sla?.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
