
import './App.css'
import Account from './Component/Account/Account'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import NavBar from './Component/NavBar/NavBar'
import ProdactsSection from './Component/ProdactsSection/ProdactsSection'
import Ranks from './Component/Ranks/Ranks'
import Transparent from './Component/Transparent/Transparent'

const DataP=fetch('/Data.json').then(res=>res.json())


function App() {


  return (
    <>
    <NavBar/>
    <Banner/>
    <Ranks/>
    <ProdactsSection DataP={DataP}/>
    <Account/>
    {/* <Transparent/> */}
    <Footer/>
    </>
  )
}

export default App
