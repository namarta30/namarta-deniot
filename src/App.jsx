import React,{useState} from 'react'
import './App.css'
import Header from './components/header/Header'
import VideoBanner from './components/videoBanner/VideoBanner'
import { Container } from 'react-bootstrap'
import TextSection from './components/textSection/TextSection'
import Footer from './components/footer/Footer'
import International from './components/international/International'
import CustomCursor from './components/customCursor/CustomCursor'


const App = () => {
  const [isScrolledToNewSlide, setIsScrolledToNewSlide] = useState(false);
  return (
    <Container fluid  className='p-0' style={{overflow:'hidden'}}>
      <CustomCursor/>
      <Header/>
      <VideoBanner setIsScrolledToNewSlide={setIsScrolledToNewSlide}/>
       <TextSection isScrolledToNewSlide={isScrolledToNewSlide}/> 
       <International/>
      <Footer/>
  
    </Container>
  )
}

export default App