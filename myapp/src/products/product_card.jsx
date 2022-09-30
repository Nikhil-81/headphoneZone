import cable from "../logo_pic/logo/cable.svg"
import bar from "../logo_pic/logo/bar.svg"
import strong from "../logo_pic/logo/strong.png"
export default function Product_card({s_image,pro_title,pro_image,mrp_price,selling_price,sell_price,revievs}){
    return (
        <div>
            <div className="pro_card">
                <img   className="dis_iamge" src={pro_image} />
                <p><b>{pro_title}</b></p>
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