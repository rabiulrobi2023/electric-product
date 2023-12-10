import { useState } from "react";
import UniqueBrandProducts from "../BrandProducts/BrandProducts";
import { Link } from "react-router-dom";


const Brand = ({ brand }) => {

    const { brandName, brandImage } = brand;
   
    return (
        <div className="flex m-auto">

            <Link to={`/unique-brnad-products/${brandName}`}>
                <div className="card card-compact w-full h-[380px] bg-base-100 shadow-xl p-5 text-center space-x-0 cursor-pointer hover:opacity-70">
                    <div className="h-[270px] flex items-center">
                        <figure><img className="max-w-[300px]" src={brandImage} alt="Brand is Upcomming" /></figure>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-gray-500">{brandName}</h2>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Brand;