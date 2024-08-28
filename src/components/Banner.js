import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled, Box } from '@mui/material';
import {Link} from 'react-router-dom'
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
const StyledBanner = styled('img')
    (
        {
            width: '95%',
            height:'95%'
        }
    )
export default function Banner() {
    return (
        <Box style={{ width: '100%'}}>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
               
            >               
                            <StyledBanner src={`https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/0a8988b7-9c28-40e1-a64f-6e8844420a4e1656309733372-Extra_300.jpg`} className='zoom' alt="banner" />
                            <StyledBanner src={`https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/26/4e09da58-6c0c-4b65-9560-c10841bc6d7c1656222036679-Sportswear.jpg`} className='zoom' alt="banner" />
                            <StyledBanner src={`https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/26/dffde756-2982-4db2-864d-bd81b301f3581656222036665-Casual-Wear--1-.jpg`} className='zoom' alt="banner" />
                            <StyledBanner src={`https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/26/c388afaa-19dc-4d7e-9a37-2fe046416bbb1656222036693-Festive-Sarees.jpg`} className='zoom' alt="banner" />
                            <StyledBanner src={`https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/26/cae6c61b-c932-40c2-99a1-4d5231a54bd81656222036708-Best-Of-Tops---Tees.jpg`} className='zoom' alt="banner" />
                            <StyledBanner src={`https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/26/c8172035-2cac-46b7-88e8-83c16732be241656222036672-Jeans---Trousers.jpg`} className='zoom' alt="banner" />
            </Carousel>
        </Box>
    )
}