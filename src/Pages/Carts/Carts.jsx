import { useContext, useState } from "react";

import { authContext } from "../../Context/AuthContext";
import { useLoaderData } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";

const Carts = () => {
    const {user}=useContext(authContext)
    const email=user.email;
    const loadedCartProducts = useLoaderData()
    const usersCartProducts=loadedCartProducts.filter(x=>x.email===email)
    const [products,setProducts]=useState(usersCartProducts)
  
    


  
    return (
        <div className="">
            <table className="table ">
                <thead className="grid grid-cols-7 text-lg justify-center items-center ">

                    <th className="font-bold">Product Name</th>
                    <th className="font-bold">Category</th>
                    <th className="font-bold">Brand</th>
                    <th className="font-bold">Price</th>
                    <th className="font-bold">Photo</th>
                    <th className="font-bold">Action</th>

                </thead>
            </table>
            {
                products.map(cartProduct => <CartProduct key={cartProduct._id} cartProduct={cartProduct} products={products} setProducts={setProducts}></CartProduct>)
            }
        </div>
    );
};

export default Carts;