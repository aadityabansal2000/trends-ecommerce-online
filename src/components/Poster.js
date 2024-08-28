import React from 'react'
export default function Poster(props) {
  return (
    <>
    <h1 className='heading'>{props.headline}</h1>
    <p style={{textAlign:'center'}}>
    <img  src={props.png} style={{width:'95%'}}  alt='trends'/>
    </p>
    </>
  )
}
