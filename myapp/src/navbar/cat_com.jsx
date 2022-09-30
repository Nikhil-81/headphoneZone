export default function Cat_com({cat_icon,cat,hendleHide}){
    return (
        <div className="cat_com" onClick={hendleHide}>
                <img src={cat_icon} />
                <p>{cat}</p>
        </div>
    )
}