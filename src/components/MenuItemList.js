import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";

const MenuItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
        >
          <div className="w-9/12 mr-4">
            <div className="mb-2">
              <span className="font-semibold mr-2">
                {item?.card?.info?.name}
              </span>
              <span>
                - ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info.description}</p>
          </div>
          <div className="p-2 w-3/12 rounded-xl">
            {/* try to make button position fixed with respect to image */}
            <div className="absolute">
              <button
                className="bg-white  shadow-lg rounded-lg  mx-2 px-4 "
                onClick={() => handleAddClick(item)}
              >
                Add
              </button>
            </div>
            <img
              src={
                item?.card?.info?.imageId &&
                IMG_CDN_URL + item?.card?.info?.imageId
              }
              alt=""
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
