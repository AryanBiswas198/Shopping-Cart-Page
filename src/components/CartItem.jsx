import {MdDeleteSweep} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className="p-4 border-b last:border-none border-green-50">
      <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">
        <div className="md:w-[30%] w-full flex justify-center items-center">
          <img src={item.image} alt="" className="w-[40%] md:w-[50%] lg:w-full"/>
        </div>
        <div className="md:w-[70%] w-full flex flex-col gap-5">
          <h1 className="text-xl font-[600] text-gray-200">{item.title}</h1>
          <h1 className="text-gray-300">{
            item.description.split(" ").slice(0,15).join(" ") + "..."}
          </h1>
          <div className="flex justify-between">
            <p className="font-bold text-red-500 text-lg">${item.price}</p>
            <div
            onClick={removeFromCart}
            className="w-10 h-10 rounded-full bg-red-100 flex justify-center items-center
             hover:bg-red-600 group transition-all cursor-pointer">
              <MdDeleteSweep fontSize={25} className="group-hover:text-white text-red-600 transition-all"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;