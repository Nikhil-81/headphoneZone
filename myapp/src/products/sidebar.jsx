import Accordion from 'react-bootstrap/Accordion';
export default function SideBar({hendleLow_price,hendlehigh_price,hendlebrand,Maxval,Minval}){
    return (
        <div className='proside' >
             <Accordion defaultActiveKey="0">
             <Accordion.Item eventKey="0">
                
        <Accordion.Header>BRANDS</Accordion.Header>
        <Accordion.Body>
            <div>
                <div><input  onChange={(e)=>hendlebrand(e.target.value)}  value="HiFiMAN"  type="radio"/><label>HiFiMAN</label></div>
                <div><input  onChange={(e)=>hendlebrand(e.target.value)}  value="Meze Audio"  type="radio"/><label>Meze Audio</label></div>
                <div><input  onChange={(e)=>hendlebrand(e.target.value)}  value="Audio-Technica"  type="radio"/><label>Audio-Technica</label></div>
                <div><input  onChange={(e)=>hendlebrand(e.target.value)}  value="Beyerdynamic"  type="radio"/><label>Beyerdynamic</label></div>
                <div><input  onChange={(e)=>hendlebrand(e.target.value)}  value="Altiat"  type="radio"/><label>Altiat</label></div>
            </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
                
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                    <div  >
                        <div>

                        <lable>Min:{Minval}</lable>
                        <input type="range" min="1000" max="9000" onChange={(e)=>hendleLow_price(e.target.value)}  />
                       

                        </div>
                        <div>

                        <lable>Max:{Maxval}</lable>
                        <input type="range" min="10000" max="35000" onChange={(e)=>hendlehigh_price(e.target.value)} />
                        </div>
                   
                    </div>
                </Accordion.Body>
              </Accordion.Item>
             </Accordion>
        </div>
    )
}