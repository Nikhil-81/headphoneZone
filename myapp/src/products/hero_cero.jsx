import Carousel from 'react-bootstrap/Carousel';
function UncontrolledExample() {
    return (
        <Carousel  controls={false} className="cero_item">
        
      <Carousel.Item >
        <div className='cero_img'>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0153/8863/collections/KZ_Banner_1350x.jpg?v=1649762539"
          alt="First slide"
          
          />
          </div>
        <Carousel.Caption>
            <div className='cerocap'>

          <h1>BEGINNER AUDIOPHILE IEMS</h1>
            </div>
          
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >
        <div className='cero_img'>

        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0153/8863/collections/Meze_99_neo_1350x.jpg?v=1649765748"
          alt="Second slide"
          />
          </div>

        <Carousel.Caption>
            <div className='cerocap' >

          <h1>BEGINNER AUDIOPHILE HEADPHONES</h1>
            </div>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item >
        <div className='cero_img' >

        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0153/8863/collections/LCD-5-Lifestyle9-scaled_1350x.jpg?v=1649852239"
          alt="Third slide"
          />
          </div>

        <Carousel.Caption>
            <div className='cerocap' >

          <h1>FLAGSHIP AUDIOPHILE HEADPHONES</h1>
            </div>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;