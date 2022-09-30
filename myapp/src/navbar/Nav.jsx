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

import logo_earphone from "../logo_pic/logo/earphone.svg"
import logo_brand from "../logo_pic/logo/B_logo.gif"
import Cat_com from "./cat_com"
import "./nav.css" 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
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
const brand_array=["1Custom","64 Audio","Abyss","AIAIAI","AKG","ALO Audio","Altiat","Astell&Kern","Audeze","Audio-Technica","AudioQuest","Aune Audio","Austrian Audio","AZLA","Bang & Olufsen","Beyerdynamic","BLON","Bowers & Wilkins","Burson Audio","Campfire Audio","Cayin","CCA","Chord Electronics","Comply","Dali","Dan Clark Audio","DarkVoice","ddHiFi","Dekoni Audio","Denafrips","Devialet","EarMen","Effect Audio","EIKON","EPOS","Etymotic","FiiO","Final Audio","Focal","Gold Planar","Grado","Gustard","HarmonicDyne","Headgear Audio","Headphone Zone","HEDD Audio","HiBy","Hidizs","HiFiMAN","iBasso","iFi Audio","IKKO","Jabra","JAYS","JBL","JH Audio","JVC","Klipsch","KZ Acoustics","LETSHUOER","Little Dot","Lotoo","Lypertek","Mangird","Marshall","Matrix Audio","MEE Audio","Meze Audio","Monoprice","Moondrop","Naim","Noble Audio","oBravo","RAAL-requisite","Razer","RAPTGO","RME","Schiit","Sennheiser","Shanling","Shure","Singxer","SMSL","Sonos","Sony","SoundMAGIC","SpinFit","STAX","Tanchjim","TempoTec","ThieAudio","TIN HiFi","TOPPING","Tripowin","Unique Melody","Venture Electronics","Violectric","Vision Ears","V-MODA","Westone Audio","Woo Audio","xDuoo","7HZ"]

export default function NavBar(){
    const [block,setblock]=useState("")

    const showBlock={
        display:"block"
    }
    
    const hideBlock={
        display:"none"
    }



    return (
       <div>
        <div className="Nav_body">

        <div className="nav_brand_logo" >
            <Link to="/">
            <img src={logo_brand} />
            </Link>
        </div>
        <div className="Nav_compo" >
            <button onClick={()=>setblock(block=="category"?"":"category")} >Categories</button>
            <button onClick={()=>setblock(block=="brand"?"":"brand")} >Brands</button>
            <button>Price</button>
            <button>Deals</button>
            <button>Headphone Finder</button>
            <button>Events</button>
            <button>Forum</button>
            <button onClick={()=>setblock(block=="Info"?"":"Info")} >Info</button>
            <button>Help Center</button>
        </div>
        <div className="nav_comp2">
            <p>Search</p>
            <p>Login</p>
            <p>cart</p>
        </div>
       </div>
       <div  style={block=='category'?showBlock:hideBlock} >
        <div className="nav_cat" >
        {cat_list.map(el=>(<Link to={`/${el.cat_name}`} ><Cat_com cat_icon={el.cat_logo} hendleHide={()=>setblock(block=="category"?"":"category")} cat={el.cat_name}/></Link>))}
        </div>
       </div>
       <div style={block=='brand'?showBlock:hideBlock}>
       <div className="nav_brand" >
        {brand_array.map(el=>(
        <p onClick={()=>setblock(block=="brand"?"":"brand")}>{el}</p>))}
        </div>
       </div>
       <div style={block=='Info'?showBlock:hideBlock}>
       <div className="nav_info" >
<div>
    <div>

    <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-10-Years_500x-1_295x.jpg?v=1643031208"/>
    </div>
    <b>HISTORY OF HEADPHONE ZONE</b>
    <p>Read the Headphone Zone journy since 2011 is toled by Raghav</p>
</div>
<div>
    <div>

<img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Club-Audiophile-Menu_500x-focal_256x256_c41abc2b-75a9-4aeb-b2cf-4f01ae7c1992_256x.webp?v=1650019007" />
    </div>
    <b>IT PAYS TO BE PART OF AUDIOPHILE</b>
    <p>Enjoy our Members only reward with our loyalty base program</p>
</div>
<div>
    <b>About Us</b>

<p>Our Story</p>
<p>Our Values</p>
<p>Meet the Team</p>
<p>Customer Testimonials</p>
<p>Careers @ Headphone Zone</p>
<p>Brands That Inspire Us</p>
</div>

<div>
    <b>GET IN TOUCH</b>
<p> Contact the Team</p>
<p> Corporate Gifting</p>
<p> Partner With Us</p>
</div>
<div>
    <b>COMMUNITY</b>
    
<p>Headphone Zone Merchandise</p>
<p>Trade-Up Program</p>
<p>Affiliate Program</p>

</div>

        </div>
       </div>
        </div>
    )
}