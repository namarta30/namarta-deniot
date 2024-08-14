import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Col, Container, Row } from 'react-bootstrap';
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const TextSection = ({ isScrolledToNewSlide }) => {
    const playerWrapperRef2 = useRef(null);
    

const datalist =[
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"Eylau"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"Upper East Side"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"Touraine"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"Eaton Square"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"South Beach"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"Porto"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"Doheny"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"Rue de Rivoli"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"Flamingo Drive"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"Eaton Place"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"West Hollywood"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"IIe Saint"
    },
    {
        url:"https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@320w.jpg",
        name:"Balgarvia"
    },
    
]
    const containerRef = useRef(null);
    // useEffect(() => {
    //     // Ensure the DOM is ready
    //     const textElement = document.querySelector('h1');

    //     if (textElement && isScrolledToNewSlide) {
    //       gsap.to(textElement, {
    //         duration: 2, // Duration of the animation in seconds
    //         x: window.innerWidth + textElement.offsetWidth, // Move the text off-screen to the right
    //         ease: 'power1.out', // Easing function for smooth movement
    //         yoyo: true, // Make it bounce back and forth
    //         repeat: 1 // Repeat indefinitely   
    //       });
    //     }
    //   }, []);
    useEffect(() => {
        const wrapperElement = playerWrapperRef2.current;
    
        if (wrapperElement) {
          gsap.fromTo(
            wrapperElement,
            {
              y: 0, // Initial state
            },
            {
              y: -200, // Final state
              duration: 2.5,
              ease: "bounce",
              scrollTrigger: {
                trigger: wrapperElement,
                start: 'top ', // Adjust based on your needs
                end: 'bottom ',
                scrub: true,
              },
            }
          );
        }
    
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []); // Empty dependency array
    
    return (
        <Container fluid className='bg-white position-relative py-md-5 p-3 '>
            <Row className='pb-md-5' >
            <Col  xs={12}>
          <h1 className='color-grey fw-normal text-md-center f-19 mt-5 mb-4'>Jeans-Louis Deniot</h1>
        </Col>
       <div className='d-flex jean-inner p-md-0 p-2'>
        {datalist.map((item,index)=>(
           <div key={index} className='jean-div mt-4'>
              <img src={item.url} alt="image show" />
              <p className='jean-desk mb-5'>{item.name}</p>
              <p className='jean-text'>{item.name}</p>
            </div>
          
        ))}

       </div>
       <div className='d-flex jean-inner p-md-0 p-2'>
        {datalist.map((item,index)=>(
           <div key={index} className='jean-div mt-4'>
              <img src={item.url} alt="image show" />
              <p className='jean-desk mb-5'>{item.name}</p>
              <p className='jean-text'>{item.name}</p>
            </div>
          
        ))}

       </div>
            </Row>


        </Container>
    )
}

export default TextSection