import React from 'react'
import Card from 'react-bootstrap/Card';
import {useNavigate } from 'react-router-dom';
export default function Cards(props) {
    const navigate=useNavigate();
    return (
        <>

            <Card className='cardStyle' onClick={()=>{navigate(`/shop/${props.id}`)}}>
                <Card.Img variant="top" src={props.url} style={{marginTop:"10px", height: '250px',width:'250px', border: "1px solid white",borderRadius:'10px' }} />
                <Card.Body>
                    <Card.Title>{props.name.substring(0,60)}...</Card.Title>
                    <div>
                        <Card.Title>$ {props.price} /-</Card.Title>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
