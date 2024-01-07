

import { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { Authcontext } from './Components/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(Authcontext);
    const location=useLocation();
   
     
    if (loader) {
        return <div className='text-center '><span className=" bg-secondary mt-72 loading loading-ring loading-lg"></span><p>Loding...</p></div>
    }
    if (user) {
        return children
    }
     return <Navigate state={location.pathname} to={"/login"} ></Navigate>

  
};

export default PrivateRoute;