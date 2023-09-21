import Carousel from 'react-bootstrap/Carousel';
import './CarouselComp.css';
import { CarouselItem } from 'react-bootstrap';

function CarouselComp() {
  return (
    <div className='carousel-wrapper'>
      <Carousel>
        <Carousel.Item>
          <img src='https://cdn1.codashop.com/S/content/common/images/promos/sept23/ID_Codacash-Indomaret-Campaign_01-09-2023.jpg' /> 
          <Carousel.Caption>
            <h3>-</h3>
            <p>-</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://cdn1.codashop.com/S/content/common/images/promos/sept23/ID_Semangat-LineBank-730x280.jpg' /> 
          <Carousel.Caption>
            <h3>-</h3>
            <p>-</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://cdn1.codashop.com/S/content/common/images/promos/sept23/ID_Semangat-Gopay-ALWAYSON_730x280.jpg' /> 
          <Carousel.Caption>
            <h3>-</h3>
            <p>
              -
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComp;