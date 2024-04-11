import React, { useEffect, useState } from "react";
import {useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

export default function Protected({children,auththication=true}) {
    const authStatus = useSelector((state)=>{state.auth.status});

    const navigate = useNavigate();

    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        if(auththication&& authStatus!==auththication){
            navigate('/login')
        }else if(!auththication&& authStatus!==auththication){
            navigate('/');
        }
        setLoader(false);
    },[navigate, authStatus,auththication]);
    return (
        loader ? null:<>{children}</>
    )
}
