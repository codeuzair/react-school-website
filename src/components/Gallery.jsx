
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Gallery() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
        <section className='container'>
            <h2 className='w-25 text-center text-info pt-5'>
                Images Gallery
            </h2>
            <Carousel className='gallery' responsive={responsive}>
                <div className='card'>
                <img  src='./images/img_1.jpg' alt='Error'/>
                </div>
                <div class='card'>
                <img src='./images/img_2.jpg' alt='Error'/>
                </div>
                <div class='card'>
                <img src='./images/img_3.jpg' alt='Error'/>
                </div>
                <div class='card'>
                <img src='./images/img_4.jpg' alt='Error'/>
                </div>
                <div class='card'>
                <img src='./images/img_5.jpg' alt='Error'/>
                </div>
                <div class='card'>
                <img src='./images/img_6.jpg' alt='Error'/>
                </div>
                <div class='card'>
                <img src='./images/img_7.jpg' alt='Error'/>
                </div>
                <div class='card'>
                <img src='./images/img_8.jpg' alt='Error'/>
                </div>
                <div class='card'>
                <img src='./images/img_9.jpg' alt='Error'/>
                </div>
                <div class='card'>
                <img src='./images/img_10.jpg' alt='Error'/>
                </div>
            </Carousel>;
            </section>
        </>
    )
}
export default Gallery;