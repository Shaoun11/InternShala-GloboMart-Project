
import React, { useContext } from 'react';
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
const Phonecart = ({phone}) => {
    const {id,title,thumbnail,rating,price,images,discountPercentage,category,brand   }=phone;

    const { user } = useContext(Authcontext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();

    
    const handleAddToCart = () => {
      if (user && user.email) {
          //send cart item to the database
          const cartItem = {
              menuId: id,
              email: user.email,
             title,
              images,
              price
          }
          axiosSecure.post('/order', cartItem)
              .then(res => {
                  console.log(res.data)
                  if (res.data.insertedId) {
                      Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: `${title} added to your cart`,
                          showConfirmButton: false,
                          timer: 1500
                      });
                      // refetch cart to update the cart items count
                      refetch();
                  }

              })
      }
      else {
          Swal.fire({
              title: "You are not Logged In",
              text: "Please login to add to the cart?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, login!"
          }).then((result) => {
              if (result.isConfirmed) {
                  //   send the user to the login page
                  navigate('/login', { state: { from: location } })
              }
          });
      }
  }




    return (
        <div className=" flex  h-[470px] max-w-[26rem]  flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-lg">
       
<div className="relative mx-4 mt-4 overflow-hidden  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
<img className='w-[400px] object-cover h-full  '
 src={images[0]}
 alt="ui/ux review check"
/>


</div>
<div className="p-6">
<div className="mb- flex items-center justify-between">
 <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
  Name:{title}
 </h5>
 
 <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     fill="currentColor"
     aria-hidden="true"
     className="-mt-0.5 h-5 w-5 text-yellow-400"
   >
     <path
       fill-rule="evenodd"
       d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
       clip-rule="evenodd"
     ></path>
   </svg>
   {rating}
 </p>
</div>

<p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
 
</p>

<div className='flex mt-1 mb-2 justify-between'>
<h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
Brand: <span className='text-red-500' >{brand}</span>
 </h5>


</div>
<h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
Discount: <span  >{discountPercentage}$</span>
 </h5>
 <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
Price: <span className='text-red-500' >{price}$</span>
 </h5>
<div className='pt-2'>
<button onClick={handleAddToCart} className='btn w-full text-white btn-success border-none bg-secondary  mt-6 '>Add to cart</button>

</div>
</div>

</div>
    );
};

export default Phonecart;