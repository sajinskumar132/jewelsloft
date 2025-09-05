
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/customers_page/home_page/HomePage'
// import PublicRoutes from './routes/PublicRoutes'
import PageRoutes from './routes/PageRoutes'

function App() {


  return (
    <>
     {/* <HomePage/> */}
      <PageRoutes/>
    </>
  )
}

export default App
