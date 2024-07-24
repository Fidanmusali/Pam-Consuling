import React from 'react'
import AboutUs from '../Components/AboutUs'
import Services from '../Components/Services'
import Invest from '../Components/Invest'
import Migration from '../Components/Migration'
import ContactUs from '../Components/ContactUs'
import { Route, Routes } from 'react-router'
import Home from '../Components/Home'
import Business from '../Components/Migration/Business'
import Family from '../Components/Migration/Family'
import Investment from '../Components/Migration/Investment'



const Routers = () => {
    const router = [
        { id: 0, element: <Home />, path: '/' },
        { id: 1, element: <AboutUs />, path: '/AboutUs' },
        { id: 2, element: <Services />, path: '/Services' },
        { id: 3, element: <Invest />, path: '/InvestInCyprus' },
        { id: 4, element: <Migration />, path: '/Migration' },
        { id: 5, element: <ContactUs />, path: '/ContactUs' },
        { id: 6, element: <Business/> , path: '/business' },
        { id: 7, element: <Family />, path: '/family' },
        { id: 8, element: <Investment />, path: '/investment' },
    ]

    return (

        <Routes>
            {router.map(({ id, element, path }) => {
                return <Route key={id} path={path} element={element} />
            })}
        </Routes>
    );
};

export default Routers