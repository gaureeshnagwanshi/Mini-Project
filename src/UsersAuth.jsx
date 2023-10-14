import { swap } from 'formik';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAppContext from './AppContext';

const UserAuth = ({children}) => {

const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('Users'))
)



if(currentUser!==null){
    return children;

}else{
    Swal.fire({
        icon:'error',
        title:'Permission Dennied',
        text:'You Need to Login First'
    })
    return <Navigate to="/Login"/>
}

}

export default UserAuth;
