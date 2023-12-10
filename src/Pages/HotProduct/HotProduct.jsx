import { Link } from "react-router-dom";


const HotProduct = ({ hp }) => {
    const { _id, image, name, price } = hp

    return (
        <Link to={`/product-details/${_id}`}>
            <div>
                <div className="card w-[150px] sm:flex-grow md:w-[200px] bg-base-100 shadow-md shadow-stone-300 rounded-md hover:opacity-70">
                    <figure><img className="h-[110px]" src={image} alt="Upcomming Your Procuct" /></figure>
                    <div className="card-body flex flex-col pt-0 ">
                        <h2 className="card-title text-sm flex-grow grid-flow-col">{name}</h2>
                        <p className="text-base text-[#F85606] ">Price: BDT.{price}</p>

                    </div>
                </div>


            </div>
        </Link>

    );
};

export default HotProduct;