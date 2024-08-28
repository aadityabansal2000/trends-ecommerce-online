import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import m1 from './constants/m1.PNG'
import m2 from './constants/m2.PNG'
import m3 from './constants/m3.PNG'
import Poster from '../components/Poster'
const h1="Carry Your Dreams, Flaunt Your Fashion",h2="Wide Range Of Ethnic Wear",h3="Express Yourself, Street Style";
export default function Home() {
  return (
    <div>
        <div><Navbar/></div>
        <div><Carousel/></div>
        <h1 className='heading'>Where Fashion Meets Passion</h1>
        <div className="banner"><Banner/></div>
        <div><Poster png={m1} headline={h1}/></div>
        <div className="banner"><Banner/></div>
        <div><Poster png={m2} headline={h2}/></div>
        <div className="banner"><Banner/></div>
        <div><Poster png={m3} headline={h3}/></div>
        <div><Footer/></div>
    </div>
  )
}
