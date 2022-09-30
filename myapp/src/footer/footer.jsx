import "./footer.css"
import twitter from "../logo_pic/logo/twitter.svg"
import facebook from "../logo_pic/logo/facebook.svg"
import insta from "../logo_pic/logo/insta.svg"
import youtube from "../logo_pic/logo/youtube.svg"
const tc=["Help Center","Track My Order","Cancel My Order","Return My Order","Request a Product","Report a Bug","Contact Us"]
const op=["Returns, Refunds & Cancellations","Shipping & Delivery","Terms & Conditions","Privacy Policy"]
const community=["Headphone Zone Merchandise","Trade-Up Program","The Insider"]
const social=[
    {img:facebook},{img:twitter},{img:insta},{img:youtube}
]
const fack=[]
export default function Footer(){
    return(
        <div>
            <div className="com">

            <div className="footer_con" >
                    <div>
                        <h6>LET US HELP</h6>
                        {tc.map(el=>(<p>{el}</p>))}
                    </div>
                    <div>
                         <h6>OUR POLICIES</h6>
                        {tc.map(el=>(<p>{el}</p>))}
                    </div>
                    <div>
                    <h6>COMMUNIT</h6>
                        {tc.map(el=>(<p>{el}</p>))}
                    </div>
                    <div>
                        <h6>BEWARE OF FAKES</h6>
                        <p>Don't get fooled. Look out for smuggled
                             & refurbished headphones while shopping online. 
                             Headphone Zone is a professionally run business &
                              deals only in 100% genuine headphones.</p>
                    </div>
                    <div >
                        <h6>FOLLOW US</h6>
                        <div className="footer_logo" >
                        {social.map(el=>(<img src={el.img}/>))}

                        </div>
                    </div>
            </div>
                    <hr/>
                    <div>
                    <p>Owned, Operated & Funded by Proud Indians</p>
                    <p>Copyright ©2011-2022 Headphone Zone.</p>
                    <p>Everything on this website has been made with a lot of love and hard work. If you copy anything we will hunt you down. We mean it.</p>
                    </div>
                    
            </div>
        </div>
    )
}

