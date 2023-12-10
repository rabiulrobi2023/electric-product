import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";


const Brands = () => {
    
    const brands= useLoaderData()
    return (
        <div className="mt-14 bg-gradient-to-b from-gray-400 to-gray-300 py-10 px-2 md:px-10 flex flex-col mx-auto">
            <p className="text-3xl font-bold">Our<span className="text-orange-600 font-bold"> Brands</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 mx-auto">
            {
                brands.map(brand=><Brand key={brand.id} brand={brand}></Brand>)
            }
            
        </div>
        </div>
    );
};

export default Brands;