// Bootstrap and Scss
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './scss/custom.scss'
//Pages
import Login from './pages/login';
import Home from './pages/Home';
import Layout from './components/Layout';
import Documents from './pages/Documents';
//Others functions
import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/Auth/AuthContext';

export default function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {path: '/', element: <Home/>},
        {path: '/documents', element: <Documents/>}
      ]
    },
    {
      path: '/login',
      element: <Login/>
    }
  ])
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>    
  );
}
