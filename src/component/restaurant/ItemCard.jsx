import { addItems } from "../../redux/cartSlice";
import { IMAGE_URL } from "../../utils/Urls";
import { useDispatch } from "react-redux";

const ItemCard = ({ item }) => {
  // Through this dispatch an action
  const dispatch = useDispatch();

  const handleAddItemClick = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div
      className="flex justify-between border-b-2 border-gray-300 items-center m-4"
      data-testid="foodItems"
    >
      <div className="my-4 flex flex-col text-left p-4 w-10/12">
        <span className="text-md font-gray-500 px-1 font-medium">
          {item.name}
        </span>
        <span className="text-sm font-gray-600 px-1 pb-1">
          ₹ {item.price / 100}
        </span>
        <p className="text-gray-400 text-xs px-1 my-2">{item.description}</p>
      </div>
      <div className="w-2/12 mb-4">
        {item.imageId && (
          <img
            src={`${IMAGE_URL}${item.imageId}`}
            alt="item-image"
            className="w-full rounded-lg h-20"
          />
        )}
        <button
          className="px-2 py-1 bg-gray-700 font-bold text-green-600 rounded-lg text-sm absolute"
          onClick={() => handleAddItemClick(item)}
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
