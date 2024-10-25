// Bootstrap and Scss
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './scss/custom.scss'
//Pages
import Login from './pages/LoginPage';
import Home from './pages/Home';
import Layout from './components/Layout';
import Documents from './pages/Documents';
import NewDocument from './pages/NewDocument';
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
        {path: '/documents', element: <Documents/>},
        {path: '/new-document', element: <NewDocument/>}
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
