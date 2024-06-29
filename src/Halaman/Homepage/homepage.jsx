import movie from './movie.png';
import avatar from './avatar.png';
import './homepage.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='hp-body'>
            {/* Header */}
            <div className='header'>
                <ul className='header-list'>
                    <li><img src={movie} alt="" className='hp-movie' />CHILL</li>
                    <li>Series</li>
                    <li>Film</li>
                    <li>Daftar Saya</li>
                </ul>
                <div className='header-avatar'>
                    <img src={avatar} alt="avatar" className='avatar'/>
                    <div className="dropdown">
                        <button onClick={toggleDropdown} className="dropdown-button">
                            Menu
                        </button>
                        {isOpen && (
                            <div className="dropdown-content">
                                <button>Profil Saya</button>
                                <button>Ubah Premium</button>
                                <button type='submit' onClick={() => navigate('/login')}>Keluar</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
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

                <button className='hp-dont'>
                    <div className='hp-dont-text'>
                        <div>Don't Look Up</div>
                        <div>⭐ 4.5/5</div>
                    </div>
                </button>

                <button className='hp-blue'>
                    <div className='hp-blue-text'>
                        <div>Blue Lock</div>
                        <div>⭐ 4.6/5</div>
                    </div>
                </button>

                <button className='hp-the'>
                    <div className='hp-the-text'>
                        <div>The Batman</div>
                        <div>⭐ 4.2/5</div>
                    </div>
                </button>

                <button className='hp-a'>
                    <div className='hp-a-text'>
                        <div>A Man Called Otto</div>
                        <div>⭐ 4.4/5</div>
                    </div>
                </button>

            </div>

            {/* Top Rating */}
            <div className='hp-top-rating'>
                <h3 className='hp-top-text'>Top Rating Film dan Series Hari ini</h3>
                <div className='hp-top-rating-component'>
                    <button className='hp-top-rating-img1'></button>
                    <button className='hp-top-rating-img2'></button>
                    <button className='hp-top-rating-img3'></button>
                    <button className='hp-top-rating-img4'></button>
                    <button className='hp-top-rating-img5'></button>
                </div>
            </div>

            {/* Film Trending */}
            <div className='hp-trending'>
                <h3 className='hp-trending-text'>Top Rating Film dan Series Hari ini</h3>
                <div className='hp-trending-component'>
                    <button className='hp-trending-img1'></button>
                    <button className='hp-trending-img2'></button>
                    <button className='hp-trending-img3'></button>
                    <button className='hp-trending-img4'></button>
                    <button className='hp-trending-img5'></button>
                </div>
            </div>

            {/* Rilis Baru */}
            <div className='hp-rilis'>
                <h3 className='hp-rilis-text'>Rilis Baru</h3>
                <div className='hp-rilis-component'>
                    <button className='hp-rilis-img1'></button>
                    <button className='hp-rilis-img2'></button>
                    <button className='hp-rilis-img3'></button>
                    <button className='hp-rilis-img4'></button>
                    <button className='hp-rilis-img5'></button>
                </div>
            </div>

            {/* Footer */}
            <footer className='hp-footer'>
                <div className='hp-footer-component'>

                    <div className='hp-footer-logo'>
                        <div className='hp-footer-logo-text'><img src={movie} alt="" className='hp-footer-movie' /><p className='hp-footer-chill'>CHILL</p></div>
                        <p>©2023 Chill All Rights Reserved</p>
                    </div>

                    <div className='hp-footer-text'>
                        <div className='hp-footer-genre'>
                            <ul className='hp-footer-genre-list'>
                                <li><p>Genre</p></li>
                                <li><a href="#">Aksi</a></li>
                                <li><a href="#">Anak-anak</a></li>
                                <li><a href="#">Anime</a></li>
                                <li><a href="#">Britania</a></li>
                            </ul>

                            <ul>
                                <li><a href="#">Drama</a></li>
                                <li><a href="#">Fantasi Ilmiah & Fantasi</a></li>
                                <li><a href="#">Kejahatan</a></li>
                                <li><a href="#">KDrama</a></li>
                            </ul>

                            <ul>
                                <li><a href="#">Komedi</a></li>
                                <li><a href="#">Petualangan</a></li>
                                <li><a href="#">Perang</a></li>
                                <li><a href="#">Romantis</a></li>
                            </ul>

                            <ul>
                                <li><a href="#">Sains & Alam</a></li>
                                <li><a href="#">Thriller</a></li>
                            </ul>
                        </div>

                        <div className='hp-footer-bantuan'>
                            <ul>
                                <li><p className='hp-footer-bantuan-list'>Bantuan</p></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Kontak Kami</a></li>
                                <li><a href="#">Privasi</a></li>
                                <li><a href="#">Syarat & ketentuan</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;

