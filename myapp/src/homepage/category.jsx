import ear from "../logo_pic/logo/ear.PNG"
import speker from "../logo_pic/logo/speker.PNG"
import amps from "../logo_pic/logo/amps.PNG"
import audo_play from "../logo_pic/logo/audo_play.PNG"
import cable from "../logo_pic/logo/cable.PNG"
import cap from "../logo_pic/logo/cap.PNG"
import cases from "../logo_pic/logo/cases.PNG"
import dacs from "../logo_pic/logo/dacs.PNG"
import who from "../logo_pic/logo/who.PNG"
import ere_pice from "../logo_pic/logo/ere_pice.PNG"
import flag_head from "../logo_pic/logo/flag_head.PNG"
import flag from "../logo_pic/logo/flag.PNG"
import game from "../logo_pic/logo/game.PNG"
import head from "../logo_pic/logo/head.PNG"
import t_wireless_ear from "../logo_pic/logo/t_wireless_ear.PNG"
import pro from "../logo_pic/logo/pro.PNG"
import Cat_com from "../navbar/cat_com"
import { Link } from "react-router-dom"


const cat_list=[
    {cat_logo:ear,cat_name:"IN-EARS_FOR_BEGINNERS"},
    {cat_logo:cap,cat_name:"HEADPHONES_FOR_BIGINNERS"},
    {cat_logo:t_wireless_ear,cat_name:"TRUE WIRELESS EARBUDS"},
    {cat_logo:head,cat_name:"WIRELESS HEADPHONES"},
    {cat_logo:flag,cat_name:"FLAGSHIP ITEMS"},
    {cat_logo:flag_head,cat_name:"FLAGSHIP HEADPHONES"},
    {cat_logo:audo_play,cat_name:"HI-RES AUDIO PLAYERS"},
    {cat_logo:amps,cat_name:"PORTABLE AMPS & DACS"},
    {cat_logo:dacs,cat_name:"DESKTOP AMPS & DACS"},
    {cat_logo:who,cat_name:"WORK FROM HOME"},
    {cat_logo:game,cat_name:"GAMING"},
    {cat_logo:pro,cat_name:"STUDIO & PROFESSIONAL"},
    {cat_logo:speker,cat_name:"SPEAKERS"},
    {cat_logo:cable,cat_name:"CABLES"},
    {cat_logo:ere_pice,cat_name:"Headphones"},
    {cat_logo:cases,cat_name:"Headphones"},

]

export default function Category(){
    return(
        <div>
             <div className="cat_extra" >
        {cat_list.map(el=>(<Link to={`/${el.cat_name}`} ><img src={el.cat_logo} />  <p>{el.cat_name}</p></Link>))}
        </div>
        </div>
    )
}