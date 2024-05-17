import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import {products} from "../data"

const Home = () => {

  const [loading, setLoading] = useState(false);

  return (
    <div className="flex items-center justify-center bg-black">
      {
        loading ? <Spinner />  :
        products.length > 0 ? 
        (<div className="grid text-gray-800 xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-10 min-h-[80vh] mb-14">
          {
            products.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
