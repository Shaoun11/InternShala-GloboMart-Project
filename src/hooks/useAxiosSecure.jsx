import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://assginment-11-server-site.vercel.app'
})
const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;