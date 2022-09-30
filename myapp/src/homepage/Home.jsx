import NavBar from "../navbar/Nav";
import Category from "./category";

import Finance from "./finences";
import Hero from "./heeo";
import Launches from "./launches";
import Offers from "./offer";
import Sponser from "./sponser";

export default function Home(){
    return (<div>
        <Hero/>
        <br/>
        <p><b>HEY NOW, HEY NOW, THIS IS WHAT DREAMS ARE MADE OF</b></p>
        <h3><b>HANDPICKED DEALS FOR THE AUDIOPHILE IN YOU</b></h3>
        <br/>
        <Offers/>
        <br/>
        <br/>
        <Finance/>
        <br/>
        <br/>
        <h2><b>START YOUR AUDIOPHILE JOURNEY HERE</b></h2>
        <br/>
<Category/>
<br/>
<br/>
<br/>
<h3><b>LIKE YOU, WE LOVE MUSIC...</b>   </h3>
<p>And we believe a Headphone is more than just an instrument for sound.</p>
<p>It’s the key to a mind-blowing moment of emotion, bringing you closer to your favourite artist, and yourself.</p>
<p>We’ve curated the world’s finest headphones & earphones to help you discover the riffs, percussions, basslines and solos that</p>
<p>were always there but never heard.</p>
    <div className="addvertise_vidio" >

        <iframe src="https://player.vimeo.com/video/681364200?autoplay=1&autopause=1&background=1&loop=1&muted=1&transparent=0&responsive=1&portrait=0&title=0&byline=0&color=444444" ></iframe>
          
    </div>
    

<h3>NEW LAUNCHES</h3>
<p>FRESH OFF THE BOAT, EXPLORE THE BEST IN AUDIOPHILIA RIGHT NOW</p>
<Launches/>
<br/>

<Sponser/>
<br/>
<br/>
    </div>)
}


