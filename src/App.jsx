import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import './Halaman/Login/login.css'
import './Halaman/Registrasi/registrasi.css'
import Login from './Halaman/Login/login';
import Registrasi from './Halaman/Registrasi/registrasi';
import Homepage from './Halaman/Homepage/homepage';
import DaftarSaya from "./Halaman/DaftarSaya/daftarSaya";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registrasi",
      element: <Registrasi />,
    },
    {
      path: "/homepage",
      element: <Homepage />,
    },
    {
      path: "/daftarsaya",
      element: <DaftarSaya />,

    },
    
  ]);
  return <RouterProvider router={router} />;
};

export default App;
