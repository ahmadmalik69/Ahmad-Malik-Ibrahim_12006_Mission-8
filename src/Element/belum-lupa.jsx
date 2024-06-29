import { useNavigate } from "react-router-dom"
import '../Halaman/Login/login.css'

const BelumLupa = (props) => {
const navigate = useNavigate()
    return (
        <div className="belum-lupa">
                <p>
                    {props.type == "login" ? "Belum punya akun?" : "Sudah punya akun?"}
                    {props.type == "login" && (
                        <a href="#" onClick={() => navigate("/registrasi")}>Daftar</a>
                    )}

                    {props.type == "registrasi" && (
                        <a href="#" onClick={() => navigate("/login")}>Masuk</a>
                    )}
                    
                    
                </p>
                <p>Lupa kata sandi?</p>
        </div>
    )
}

export default BelumLupa