import movie from '../images/movie.png';

const Footer = () => {
    return (
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
    )
}

export default Footer