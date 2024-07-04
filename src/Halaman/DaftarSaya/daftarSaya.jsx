import React, { useState } from 'react'
import './daftarSaya.css'
import CardButton from '../../Element/cardButton';

const DaftarSaya = () => {
    const [number, setNumber] = useState(() => {
        // Initialize state with value from localStorage
        const savedNumber = localStorage.getItem('Number');
        return savedNumber !== null ? parseInt(savedNumber, 10) : 0;
    });
    const [clickedCards, setClickedCards] = useState(() => {
        // Initialize state with value from localStorage
        const savedClickedCards = localStorage.getItem('clickedCards');
        return savedClickedCards ? JSON.parse(savedClickedCards) : {};
    });
    
    const topRating1 = localStorage.getItem('topRating1');
    const topRating2 = localStorage.getItem('topRating2');
    const topRating3 = localStorage.getItem('topRating3');
    const topRating4 = localStorage.getItem('topRating4');
    const topRating5 = localStorage.getItem('topRating5');

    const trending1 = localStorage.getItem('trending1');
    const trending2 = localStorage.getItem('trending2');
    const trending3 = localStorage.getItem('trending3');
    const trending4 = localStorage.getItem('trending4');
    const trending5 = localStorage.getItem('trending5');


    const newReleasesCard1 = localStorage.getItem('newReleases1');
    const newReleasesCard2 = localStorage.getItem('newReleases2');
    const newReleasesCard3 = localStorage.getItem('newReleases3');
    const newReleasesCard4 = localStorage.getItem('newReleases4');
    const newReleasesCard5 = localStorage.getItem('newReleases5');


    
    return (
        <div className="daftarsaya-container">
            <h1>Daftar Saya = {number}</h1>
            <br />
            <div className='hp-top-rating-component'>
            {newReleasesCard1 ? <div className="hp-rilis-img1" /> : null}
            {newReleasesCard2 ? <div className="hp-rilis-img2" /> : null}
            {newReleasesCard3 ? <div className="hp-rilis-img3" /> : null}
            {newReleasesCard4 ? <div className="hp-rilis-img4" /> : null}
            {newReleasesCard5 ? <div className="hp-rilis-img5" /> : null}
            </div>
            <br />
            <div className='hp-top-rating-component'>
            {trending1 ? <div className="hp-trending-img1" /> : null}
            {trending2 ? <div className="hp-trending-img2" /> : null}
            {trending3 ? <div className="hp-trending-img3" /> : null}
            {trending4 ? <div className="hp-trending-img4" /> : null}
            {trending5 ? <div className="hp-trending-img5" /> : null}
            </div>
            <br />
            <div className='hp-top-rating-component'>
            {topRating1 ? <div className="hp-top-rating-img1" /> : null}
            {topRating2 ? <div className="hp-top-rating-img2" /> : null}
            {topRating3 ? <div className="hp-top-rating-img3" /> : null}
            {topRating4 ? <div className="hp-top-rating-img4" /> : null}
            {topRating5 ? <div className="hp-top-rating-img5" /> : null}
            </div>
            
        </div>
    )
    
}

export default DaftarSaya