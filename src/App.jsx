
import './App.css'
import Footer from './Components/Shared/Footer'
import Navbar from './Components/Shared/Navbar'
import Home from './Pages/Home'

function App() {

  return (
    <div className='lg:w-10/12 mx-auto'>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}

export default App
