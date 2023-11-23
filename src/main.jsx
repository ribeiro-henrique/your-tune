import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MyProvider } from './context/Context.jsx'
import DashBoard from './pages/DashBoard.jsx'
import Album from './pages/Album.jsx'
import About from './pages/About.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <DashBoard />,
  },
  {
    path: '/album/:id',
    element: <Album />,
  },
  {
    path: '/about',
    element: <About />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyProvider>
    <RouterProvider router={ routes } />
  </MyProvider>
)
