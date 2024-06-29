import { useNavigate } from "react-router-dom"
import movieImage from '../images/movie.png'
import googleImage from '../images/goog.png'
import BelumLupa from "../Element/belum-lupa"
import Logo from '../Element/logo'
import Greeting from '../Element/Greeting'
import Input from '../Element/input'

const FormRegister = () => {
    const navigate = useNavigate()
    return (
        <div className="registrasi-frame">
            <Logo
            src = {movieImage}
            children = "CHILL"
            />

            <Greeting
            children1 = "Daftar"
            children2 = "Selamat datang!"
            />

            
            <div className="registrasi">
                
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
                
                <Input
                className = "password"
                children = "Konfirmasi Kata Sandi"
                type = "password"
                placeholder = "Masukkan kata sandi"
                />

                <BelumLupa
                type="registrasi" />
                <br />

                <button type="submit" className="masukButton" onClick={() => navigate("/homepage")}>Daftar</button>
                <p className="atau">Atau</p>
                <button type="submit" className="masukDenganGoogle" onClick={() => navigate(-1)}> <img src={googleImage} alt="" className="google"/> Masuk dengan Google</button>
                
            </div>
        </div>
    )
}

export default FormRegister