import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="bg-black h-full min-h-[100vh] ">
  {
    cart.length > 0  ? 
    
    (<div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">

      <div className="lg:w-[70%]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">

        <div className="mt-20">
          <p className="text-xl text-red-600 uppercase font-[600]">Your Cart</p>
          <p className="text-5xl font-[600] text-red-500 uppercase mb-4">Summary</p>
          <p className="font-[600] text-xl text-gray-200">
            Total Items: <span className="font-normal text-gray-100">{cart.length}</span>
          </p>
        </div>

        <div className="mb-20">
          <p className="text-gray-300 text-xl font-[600] mb-5 ">Total Amount: 
            <span className="font-bold ml-2 text-gray-100">${totalAmount.toFixed(2)}</span>
          </p>
          <button className="text-lg w-full py-2.5 rounded-lg font-bold text-red-600 bg-white
          border-2 border-red-300 hover:bg-red-600 hover:text-white transition-all duration-300 ease-in">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
      <h1 className="font-[600] text-red-600 text-3xl">Your Cart is Empty !</h1>
      <Link to={"/"}>
        <button className="bg-red-600 text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-red-300 border-2 hover:bg-white hover:text-red-600 ease-in transition-all duration-300">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;