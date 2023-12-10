import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {
    const loadedProductData = useLoaderData()
    const { name, image, brand, price, description, category, rating } = loadedProductData;
    const { user } = useContext(authContext)
    const email = user.email
    const cartData = {
        email, name, image, brand, price, description, category
    }
    const navigate=useNavigate()




    const handAddToCart = () => {
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('The Product Added to Your Cart', {
                        position: "top-center",
                        autoClose: 7000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate(-1)
                }
               
                

            })
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex flex-col p-10">
                <div className="flex gap-10 flex-col md:flex-row items-center">
                    <div className="w-[50%]"><img className="w-full" src={image} alt="Movie" /></div>
                    <div className="flex flex-col gap-10">
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <p className="text-2xl font-bold">Brand: {brand}</p>
                        <p className="text-2xl font-bold text-[#F85606]">Price: BDT.{price}</p>
                        <div className="rating">
                            <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <button onClick={handAddToCart} className="btn bg-[#F85606] text-white text-base rounded-md">Add to Cart</button>
                    </div>
                </div>
                <div>
                    <p className="text-2xl font-bold">Description:</p>
                    <p className="text-xl text-gray-800 text-justify">{description}</p>
                </div>

            </div>
            <Footer></Footer>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Details;