import Card from 'react-bootstrap/Card';
export default function Launches(){
    return(
        <div className="launch_card" >
            <Card className="bg-dark text-white">
      <Card.Img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Shanling-UA3_NewArrivalsBanner_500x.jpg?v=1658217171" alt="Card image" />
        <div className='over_text'>
      <Card.ImgOverlay>

      <p><b>SHANLING UA3</b></p>
      <h2><b>IMPRESSIVE,<br/> iMMERSIVE, <br/> IMPECCABLE </b></h2>
      </Card.ImgOverlay>
        </div>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img src="https://cdn.shopify.com/s/files/1/0153/8863/files/CCA-Lyra_NewArrivalsBanner_500x.jpg?v=1661164516" alt="Card image" />
        <div className='over_text'>
      <Card.ImgOverlay>

      <p><b>CCA LYRA</b></p>
      <h2><p>GREAT<br/> SOUND<br/> UNDER 2K</p></h2>
      </Card.ImgOverlay>
        </div>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img src="https://cdn.shopify.com/s/files/1/0153/8863/files/SalnotesDioko_NewArrivalsBanner_500x.jpg?v=1661163143" alt="Card image" />
        <div className='over_text'>
      <Card.ImgOverlay>

      <p><b>7HZ X CRINACLE SALNOTES DIOKO</b></p>
      <h2><b>THIS ONE'S TRULY TIMELESS</b></h2>
      </Card.ImgOverlay>
        </div>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img src="https://cdn.shopify.com/s/files/1/0153/8863/files/64Audio-Duo_NewArrivalsBanner_fdc2eaeb-aa36-4b6a-9e26-d4982f226286_500x.jpg?v=1654680319" alt="Card image" />
        <div className='over_text'>
      <Card.ImgOverlay>

      <p><b>64 AUDIO-DUO</b></p>
      <h2><b>PERFECT MATCH MADE</b></h2>
      </Card.ImgOverlay>
        </div>
    </Card>
        </div>
    )
}