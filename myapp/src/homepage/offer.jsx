const offerdata=[
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Audeze-Euclid-250-250.jpg?v=1663240701",
        hedding:"Audeze Euclid (B-Stock)",
        offer:"Get flat 61.55% off"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-A8000-250-250.jpg?v=1663240157",
        hedding:"Final A8000 (B-Stock)",
        offer:"Get flat 55.00% off"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Focal-Stellia-250-250.jpg?v=1663240157",
        hedding:"Focal Stellia",
        offer:"Get flat 33.34% off"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-KZ-Lyra-250-250.jpg?v=1663240157",
        hedding:"CCA LYRA",
        offer:"Get flat 36.01% off"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-V-Moda-Crossfade-Codex-Edition-250-250.jpg?v=1663240700",
        hedding:"V-MODA Crossfade 2 Wireless Codex Edition",
        offer:"Get flat 26.68% off"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Meze-99-Classics-250-250.jpg?v=1663240397",
        hedding:"Meze 99 Classics",
        offer:"Get flat 16.13% off"
    }, 
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Audeze-Euclid-250-250.jpg?v=1663240701",
        hedding:"Audeze Euclid (B-Stock)",
        offer:"Get flat 61.55% off"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-A8000-250-250.jpg?v=1663240157",
        hedding:"Final A8000 (B-Stock)",
        offer:"Get flat 55.00% off"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Focal-Stellia-250-250.jpg?v=1663240157",
        hedding:"Focal Stellia",
        offer:"Get flat 33.34% off"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-KZ-Lyra-250-250.jpg?v=1663240157",
        hedding:"CCA LYRA",
        offer:"Get flat 36.01% off"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Meze-99-Classics-250-250.jpg?v=1663240397",
        hedding:"Meze 99 Classics",
        offer:"Get flat 16.13% off"
    }, 
    {
        img:"https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Audeze-Euclid-250-250.jpg?v=1663240701",
        hedding:"Audeze Euclid (B-Stock)",
        offer:"Get flat 61.55% off"
    }

]

export default function Offers(){
    return(
        <div  className="offer_card_con" >
            {offerdata.map(el=>( <div className="offer_card" >
                <img src={el.img}/>
                <h3><b>{el.hedding}</b></h3>
                <p>{el.offer}</p>
            </div>))}
           
        </div>
    )
}