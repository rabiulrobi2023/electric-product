import Swal from 'sweetalert2'


const CartProduct = ({ cartProduct,products,setProducts}) => {
    const { _id, name, brand, category, price, image,} = cartProduct


    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: "delete"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCound > 0) {
                            Swal.fire(
                                'Deleted',
                                'Your One Cart Product has been deleted.',
                                'success'
                                
                            )
                           

                        }
                        const reamining = products.filter(product => product._id !== _id)
                        setProducts(reamining);
                        console.log(reamining)
                        
                    })
                    
            }
        })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}

                <tbody>

                    <tr className=" grid grid-cols-7 items-center justify-center mx-auto">

                        <td>{name}</td>
                        <td>{category}</td>
                        <td>{brand}</td>
                        <td>{price}</td>
                        <td><img className="w-[50px]" src={image} alt="" /></td>
                        <td ><p onClick={()=> handleDelete(_id)}  className="text-orange-700 cursor-pointer">Delete</p></td>

                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default CartProduct;