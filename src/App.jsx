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
import Index from "./services/api";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
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
    {
      path: "/index",
      element: <Index />,
    }
    
  ]);
  return <RouterProvider router={router} />;
};

export default App;
