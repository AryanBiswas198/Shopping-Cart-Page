import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  const [isHovered, setIsHovered] = useState(false);

  const outerDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease-in, box-shadow 0.3s ease-in',
    gap: '12px',
    padding: '16px',
    marginTop: '40px',
    marginLeft: '20px',
    borderRadius: '12px',
    outline: 'none',
    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    boxShadow: isHovered
      ? '-4px 1px 102px -45px rgba(255, 255, 255, .90)'
      : '-4px 1px 102px -66px rgba(255, 255, 255, 1)',
    WebkitBoxShadow: isHovered
      ? '-4px 1px 102px -45px rgba(255, 255, 255, .90)'
      : '-4px 1px 102px -66px rgba(255, 255, 255, 1)',
    MozBoxShadow: isHovered
      ? '-4px 1px 102px -45px rgba(255, 255, 255, .90)'
      : '-4px 1px 102px -66px rgba(255, 255, 255, 1)',

  };

  return (
    <div 
    style={outerDivStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    className="flex flex-col items-center justify-between transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline hover:scale-[1.03] md:hover:scale-[1.05]">
      <div>
        <p className={`font-semibold text-lg text-left truncate w-40 mt-1 ${isHovered ? "text-gray-200" : "text-gray-300" }`}>{post.title}</p>
      </div>
      <div>
        <p className={`w-40 font-normal text-[10px] text-left ${isHovered ? "text-gray-300" : "text-gray-400" }`}>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-red-500 font-semibold">${post.price}</p>
        </div>
        
        {
          cart.some((p) => p.id == post.id) ?
          (<button
          className={`border-2 border-gray-600 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase
          ${isHovered ? `bg-gray-900 text-white border-gray-500` : "text-gray-500"}
          hover:text-white transition duration-300 ease-in`}
          onClick={removeFromCart}>
            Remove Item
          </button>) :
          (<button
          className={` border-2 border-gray-600 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          ${isHovered ? `bg-gray-900 text-white border-gray-500` : "text-gray-500"}
          hover:text-white transition duration-300 ease-in`}
          onClick={addToCart}>
            Add to Cart
          </button>)
        }
      </div>
    </div>
  );
};

export default Product;
