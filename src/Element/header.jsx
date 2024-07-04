import movie from '../images/movie.png';
import avatar from '../images/avatar.png';
import './element.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='header'>
                <ul className='header-list'>
                    <li><img src={movie} alt="" className='hp-movie' />CHILL</li>
                    <button className='button-header'>Series</button>
                    <button className='button-header'>Film</button>
                    <button 
                    type='submit' 
                    onClick={() => navigate('/daftarsaya')} 
                    className='button-header'>
                        Daftar Saya = {props.childrenDaftar}
                    </button>
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