import cable from "../logo_pic/logo/cable.svg"
import bar from "../logo_pic/logo/bar.svg"
import strong from "../logo_pic/logo/strong.png"
export default function Product_card({pro_image,mrp_price,selling_price,sell_price,revievs}){
    return (
        <div>
            <div className="pro_card">
                <img src={pro_image} />
                <p><s>{mrp_price}</s></p>
                <p><s>{selling_price}</s></p>
                <p>{sell_price}</p>
                <div className="ability" >
                    <img src={cable} />
                    <img src={bar} />
                    <img src={strong} />
                </div>
                <p>{revievs}</p>
                
            </div>
        </div>
    )
}