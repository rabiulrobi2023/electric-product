import { useEffect, useState } from "react";
import HotProduct from "../HotProduct/HotProduct";


const HotProducts = () => {
    const [products, setProducts] = useState([])
    console.log(products)



    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setProducts(data))

    }
    ,[])



    return (
        <div className="mt-10 bg-fuchsia-50 p-2 md:p-10 mx-auto">
            <p className="text-3xl font-bold">Todays <span className="text-orange-600 font-bold">Best</span> Sell</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-5 items-center  justify-center content-center">
            
            {
                products.slice(0,7).map(hp=><HotProduct hp={hp}></HotProduct>)
            }
          
        </div>
        </div>
    );
};

export default HotProducts;
