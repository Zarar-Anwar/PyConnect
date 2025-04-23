import React, { useContext, useEffect, useState } from 'react'
import Header from './include/Header'
import Footer from './include/Footer'
import { Link, useLocation } from 'react-router-dom'
import api from '../Utils/Axios'
import { Store } from '../Utils/Store'

function Base({ children }) {
    const [appData, setAppData] = useState(null)
    const { dispatch } = useContext(Store);


    useEffect(() => {
        api.get('/application/')
            .then(res => {
                setAppData(res.data);
                dispatch({ type: "SetContactInfo", payload: res.data });
            })
            .catch(err => console.error("Failed to fetch application data:", err));
    }, [dispatch]);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className='page'>
                <Header appData={appData} />
                <div className='site-main'>
                    {children}
                </div>
                <Footer appData={appData} />
                <Link id="totop" to="#top" className="" style={{ display: "none" }}>
                    <i className="fa fa-angle-up" />
                </Link>
            </div>
        </>
    )
}

export default Base
