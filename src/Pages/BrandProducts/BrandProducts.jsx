import { useLoaderData, useNavigate } from "react-router-dom";
import BrandProduct from "../BrandProduct/BrandProduct";
import Footer from "../../Shared/Footer/Footer";
import Slider from "../Slider/Slider";

const BrandProducts = () => {
    const loadedBrandProducts = useLoaderData()
    console.log(loadedBrandProducts)

    return (
        <div>
                <div className="flex flex-col mx-auto">
                    <Slider></Slider>
                    <p className="text-2xl font-bold mt-10">All Products of Your Chossen Brnad <span className="text-[#F85606]">{loadedBrandProducts[0].brand}</span></p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center mt-4 justify-center ">
                        {
                            loadedBrandProducts.map(product => <BrandProduct key={product._id} product={product}></BrandProduct>)

                        }
                    </div>
                    <Footer></Footer>
                </div>

        </div>
    );
};

export default BrandProducts;
