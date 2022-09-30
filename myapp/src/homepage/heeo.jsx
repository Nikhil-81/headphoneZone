import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import "./home.css"

export default function Hero(){
    return(
        <Carousel className="ceroContent">
        <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0153/8863/files/FOSS_HomepageBanner_Desktop_copy_2-100_1400x.jpg?v=1663696583"
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <Card className="bg-dark text-white">
      <Card.Img src="https://cdn.shopify.com/s/files/1/0153/8863/files/1000XM5-Homepage-Banner-Desktop_1_5a1f2d4d-b9f2-4e5d-98a2-348527d0a28f_1400x.jpg?v=1663746601" alt="Second slide" />
      <Card.ImgOverlay>
      </Card.ImgOverlay>
    </Card>
    <div className='Hero_caption'>
          <Carousel.Caption>
            <h1>ANC KING NOW<br/>available 👑</h1>
            <p>Sony WH-1000XM5 | Special intro price of Rs. 26,990</p>
          </Carousel.Caption>
    </div>
        </Carousel.Item>
      </Carousel>
    )


}


