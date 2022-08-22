import React from 'react'

export default function MyFavs() {
    return (
        <div className='display-cont'>
            <div className="nav-bar" >
                <a href="/ads" className="home" >Home</a>
                <a href="/myads" className="my-Ad" >My Ads</a>
                <a href="/myfavs" className="my-interest" >Saved Ads</a>
                <a href="/mysold" className="sold" >Sold</a>
            </div>
            <div className='ad-cont'>
                Favs
            </div>
        </div>
    )
}
