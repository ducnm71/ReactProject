import Carousel from 'react-bootstrap/Carousel';
import * as banner from './../../Images/banner.jpg'
import './slider.css'

function Slider() {

    const dataSlider = [
    banner.default,banner.default, banner.default
    ]
  return (
    <Carousel style={{width: '400px', height:'700px', marginLeft:'495%', marginTop:'-280%'}}>
    {dataSlider.map((item, index) => {
        return (
            <Carousel.Item key={index} style={{width: '400px', height:'900px'}}>
            <img
                style={{width: '400px', height:'700px', borderRadius: '10px'}}
              src={item}
              alt=""
            />
          </Carousel.Item>
        )
    })}
    </Carousel>
  );
}

export default Slider;