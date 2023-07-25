import Carousel from 'react-bootstrap/Carousel';

function Carosel() {
  return (
    <Carousel className='carosel pt-5 pb-4 ' data-bs-theme="dark ">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/C-1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/C-2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/C-3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/C-4.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/C-5.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosel;
