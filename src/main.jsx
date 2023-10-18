import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MyProvider } from './context/Context.jsx'
import DashBoard from './pages/DashBoard.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <DashBoard />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyProvider>
    <RouterProvider router={ routes } />
  </MyProvider>
)
