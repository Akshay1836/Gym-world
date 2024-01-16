import './App.css'
import { Navbar } from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import Cardlist from './Components/Cardlist'
import Circle from './Components/Circle'
import Review from './Components/Review'
import Reviewcard from './Components/Reviewcard'
import ImageBar from './Components/ImageBar'
import Login from './Components/Login'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Cardlist/>
      <Circle imgsrc1={'./src/images/circle1.jpg'} imgsrc2={'./src/images/circle2.jpg'} title={"Facilities"} head1={"EQUIPMENTS"} head2={"GROUP CLASSES"}/>
      <Circle imgsrc1={'./src/images/circle3.webp'} imgsrc2={'./src/images/zumba.jpg'} head1={"CARDIO"} head2={"ZUMBA"}/>
      <Review/>
      <ImageBar/>
      <Login/>
      <Footer/>

     
   
    </>

  )
}

export default App
