import React from 'react'
import { Container ,Row, Col} from 'react-bootstrap'

const International = () => {
    const clientlist=[
        {
            name:"Paris"
        },
        {
            name:"France"
        },
        {
            name:"London"
        },
        {
            name:"New York"
        },
        {
            name:"Floride"
        },
        {
            name:"Chicago"
        },
        {
            name:"Los Angeles"
        },
        {
            name:"Capri"
        },
        {
            name:"Bangkok"
        },
        {
            name:"Hong Kong"
        },
        {
            name:"New Delhi"
        },
       
    ]
  return (
   <Container fluid className='bg-grey position-relative p-md-5 p-3'>
    <Row>
        <p className='text-md-center color-grey fw-normal f-19'>Our international interiors </p>
        <Col xs={12} md={7}>

        </Col>
        <Col xs={12} md={5} className='mb-5'>
        <div>
           {clientlist.map((item,index)=>(
            <p key={index} className='text-white fw-md-bold fw-normal f-35 mb-2'>{item.name}</p>
           )) }
           
        </div>
        </Col>
    </Row>
   </Container>
  )
}

export default International