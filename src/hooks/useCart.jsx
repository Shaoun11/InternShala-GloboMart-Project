import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { Authcontext } from "../Components/AuthProvider/AuthProvider";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useContext(Authcontext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/order?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useCart;