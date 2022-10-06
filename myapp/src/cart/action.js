function add_to_cart(item){
    return(
        {type:"addItem",payload:item}
    )
}
function hendleReduce(el){
    return({type:"reduceQty",payload:el})
}
function hendleAdd(el){
    return({type:"addQty",payload:el})
}
function hendleRemoveitem(el){
    return ({type:"remove",payload:el})
}
export {add_to_cart,hendleAdd,hendleReduce,hendleRemoveitem}