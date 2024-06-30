import movie from '../images/movie.png';
import avatar from '../images/avatar.png';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
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
    )
}

export default Header