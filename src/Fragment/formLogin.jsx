import Logo from '../Element/logo'
import movieImage from '../images/movie.png'
import googleImage from '../images/goog.png'
import { useNavigate } from "react-router-dom"
import Input from '../Element/input'
import '../Halaman/Login/login.css'
import BelumLupa from '../Element/belum-lupa'
import Greeting from '../Element/Greeting'


const FormLogin = () => {
    const navigate = useNavigate()
    return (
        <div className="login-frame">
            
            <Logo
            src = {movieImage}
            children = "CHILL"
            />

            <Greeting
            children1 = "Masuk"
            children2 = "Selamat datang kembali!"
            />

            <div className="login">
                <Input
                className = "username"
                children = "Username"
                type = "text"
                placeholder = "Masukkan username"
                />
                
                <Input
                className = "password"
                children = "Kata Sandi"
                type = "password"
                placeholder = "Masukkan kata sandi"
                />

                
                <BelumLupa
                type = "login" />
                <br />

                <button type="submit" className="masukButton" onClick={() => navigate("/homepage")}>Masuk</button>
                <p className="atau">Atau</p>
                <button type="submit" className="masukDenganGoogle" onClick={() => navigate(-1)}> <img src={googleImage} alt="" className="google"/> Masuk dengan Google</button>
                
            </div>
        </div>
    )
}

export default FormLogin