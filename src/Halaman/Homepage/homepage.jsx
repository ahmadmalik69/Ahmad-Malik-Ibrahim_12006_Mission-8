import './homepage.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../Element/cardMovie';
import CardCover from '../../Element/cardCover';
import Footer from '../../Element/footer';
import Header from '../../Element/header';

const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='hp-body'>
            {/* Header */}
            <Header />
            
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

                
                <Card className='hp-dont' title="Don't Look Up" rate='⭐ 4.5/5' 
                />
                <Card className='hp-blue' title='Blue Lock' rate='⭐ 4.6/5' />
                <Card className='hp-the' title='The Batman' rate='⭐ 4.2/5' />
                <Card className='hp-a' title='A Man Called Otto' rate='⭐ 4.4/5' />
                
                

            </div>

            {/* Top Rating */}
            <CardCover 
            title='Top Rating Film dan Series Hari ini' 
            card1='hp-top-rating-img1'
            cardHover1='hp-top-rating-img1-hover' 
            card2='hp-top-rating-img2' 
            card3='hp-top-rating-img3' 
            card4='hp-top-rating-img4' 
            card5='hp-top-rating-img5' />

            {/* Film Trending */}
            <CardCover 
            title='Film Trending' 
            card1='hp-trending-img1' 
            card2='hp-trending-img2' 
            card3='hp-trending-img3' 
            card4='hp-trending-img4' 
            card5='hp-trending-img5' />

            {/* Rilis Baru */}
            <CardCover 
            title='Rilis Baru' 
            card1='hp-rilis-img1' 
            card2='hp-rilis-img2' 
            card3='hp-rilis-img3' 
            card4='hp-rilis-img4' 
            card5='hp-rilis-img5' />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Homepage;

