import cable from "../logo_pic/logo/cable.svg"
import bar from "../logo_pic/logo/bar.svg"
import strong from "../logo_pic/logo/strong.png"
export default function Product_card({s_image,pro_title,pro_image,mrp_price,selling_price,sell_price,revievs}){
    return (
        <div>
            <div className="pro_card" Style={"box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;height: 285px;;padding: 0.5rem;"}>
                <img   className="dis_iamge" src={pro_image} />
                <p><b>{pro_title}</b></p>
                <p>{sell_price}</p>
                <p>{revievs}</p>
                
            </div>
        </div>
    )
}