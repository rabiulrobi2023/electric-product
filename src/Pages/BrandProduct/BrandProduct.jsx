import { Link } from "react-router-dom";


const BrandProduct = ({ product }) => {
    const { _id, name, brand, category, price, rating, image } = product
    return (
        <div>
            <div className="card w-[285px] bg-base-100 shadow-md shadow-stone-500">
                <figure><img className="h-[240px]" src={image} alt="Upcomming Your Procuct" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-base text-[#F85606]">Price: BDT.{price}</p>
                    <div className="rating">
                        <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                    </div>

                    <div className="flex justify-center gap-6">
                        <Link to={`/product-details/${_id}`}><button className="btn bg-[#26ABD4] text-white text-base rounded-md">Details</button></Link>

                        <Link to={`/update-product/${_id}`}><button className="btn bg-[#F85606] text-white text-base rounded-md">Update</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BrandProduct;