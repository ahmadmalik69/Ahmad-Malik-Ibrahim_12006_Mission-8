import './homepage.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../Element/cardMovie';
import CardCover from '../../Element/cardCover';
import Footer from '../../Element/footer';
import Header from '../../Element/header';
import CardButton from '../../Element/cardButton';

const Homepage = () => {
    const [number, setNumber] = useState(() => {
        const savedNumber = localStorage.getItem('Number');
        return savedNumber !== null ? parseInt(savedNumber, 10) : 0;
    });

    const [clickedCards, setClickedCards] = useState(() => {
        const savedClickedCards = localStorage.getItem('clickedCards');
        return savedClickedCards ? JSON.parse(savedClickedCards) : {};
    });

    useEffect(() => {
        localStorage.setItem('Number', number);
    }, [number]);

    useEffect(() => {
        localStorage.setItem('clickedCards', JSON.stringify(clickedCards));
    }, [clickedCards]);

    const click = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const handleCardClick = (card, value) => {
        setClickedCards(prevClickedCards => ({
            ...prevClickedCards,
            [card]: true
        }));
        localStorage.setItem(card, value);
    }

    return (
        <div className='hp-body'>
            {/* Header */}
            <Header 
            childrenDaftar={number} />
            
            {/* Homepage */}
            <div className='hp-homepage'>
                <div className='hp-homepage-component'>
                    <div className='hp-homepage-text'>
                        <h1>Duty After School</h1>
                        <p>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
                    </div>
                    <div className='hp-homepage-utility'>
                        <div className='hp-homepage-utility-1'>
                            <button className='hp-mulai'>Mulai</button>
                            <button className='hp-selengkapnya'>! Selengkapnya</button>
                            <button className='hp-18'>18+</button>
                        </div>
                        <div className='hp-homepage-utility-2'>
                            <FontAwesomeIcon icon="fa-solid fa-volume-xmark" />
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='hp-melanjutkan'>Melanjutkan Tonton Film</h3>
            {/* Melanjutkan Tonton Film */}
            <div className='hp-melanjutkan-tonton'>
                <Card className='hp-dont' title="Don't Look Up" rate='⭐ 4.5/5' />
                <Card className='hp-blue' title='Blue Lock' rate='⭐ 4.6/5' />
                <Card className='hp-the' title='The Batman' rate='⭐ 4.2/5' />
                <Card className='hp-a' title='A Man Called Otto' rate='⭐ 4.4/5' />
            </div>

            {/* Top Rating */}

            <div className='hp-top-rating'>
            <h3 className='hp-top-text'>Top Rating Film dan Series Hari ini</h3>
            <div className='hp-top-rating-component'>
                <CardButton className='hp-top-rating-img1' onClick={() => {
                click();
                handleCardClick('topRating1', 'hp-top-rating-img1');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-top-rating-img2' onClick={() => {
                click();
                handleCardClick('topRating2', 'hp-top-rating-img2');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-top-rating-img3' onClick={() => {
                click();
                handleCardClick('topRating3', 'hp-top-rating-img3');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-top-rating-img4' onClick={() => {
                click();
                handleCardClick('topRating4', 'hp-top-rating-img4');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-top-rating-img5' onClick={() => {
                click();
                handleCardClick('topRating5', 'hp-top-rating-img5');
                }} disabled={clickedCards.newReleases} />
            </div>
            </div>

            {/* Film Trending */}

            <div className='hp-top-rating'>
            <h3 className='hp-top-text'>Film Trending</h3>
            <div className='hp-top-rating-component'>
                <CardButton className='hp-trending-img1' onClick={() => {
                click();
                handleCardClick('trending1', 'hp-trending-img1');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-trending-img2' onClick={() => {
                click();
                handleCardClick('trending2', 'hp-trending-img2');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-trending-img3' onClick={() => {
                click();
                handleCardClick('trending3', 'hp-trending-img3');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-trending-img4' onClick={() => {
                click();
                handleCardClick('trending4', 'hp-trending-img4');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-trending-img5' onClick={() => {
                click();
                handleCardClick('trending5', 'hp-trending-img5');
                }} disabled={clickedCards.newReleases} />
            </div>
            </div>

            {/* Rilis Baru */}
            <div className='hp-top-rating'>
            <h3 className='hp-top-text'>Rilis Baru</h3>
            <div className='hp-top-rating-component'>
                <CardButton className='hp-rilis-img1' onClick={() => {
                click();
                handleCardClick('newReleases1', 'hp-rilis-img1');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-rilis-img2' onClick={() => {
                click();
                handleCardClick('newReleases2', 'hp-rilis-img2');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-rilis-img3' onClick={() => {
                click();
                handleCardClick('newReleases3', 'hp-rilis-img3');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-rilis-img4' onClick={() => {
                click();
                handleCardClick('newReleases4', 'hp-rilis-img4');
                }} disabled={clickedCards.newReleases} />
                <CardButton className='hp-rilis-img5' onClick={() => {
                click();
                handleCardClick('newReleases5', 'hp-rilis-img5');
                }} disabled={clickedCards.newReleases} />
            </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Homepage;
