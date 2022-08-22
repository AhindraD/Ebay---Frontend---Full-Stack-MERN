import React, { useEffect, useState } from 'react';

import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { useNavigate } from 'react-router-dom';
import ProductCards from './ProductCards';

export default function MyAd() {
    let { ads, setAds, token, user } = useContext(UserContext);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
        async function fetchData() {
            let resp = await fetch("http://localhost:8000/ads/show", { method: "GET", headers: { "Authorization": `Bearer ${token}` } });

            let respData = await resp.json();
            setAds(() => respData);
            //console.log(ads);
            setLoading(false);
        }
    }, [])

    return (
        <div className='ad-cont'>
            {loading ? <h1>loading...</h1> :
                ads.map((elem, indx) => {
                    return <ProductCards key={indx} product={elem} />
                })
            }
        </div>
    )
}
