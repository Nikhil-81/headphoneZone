

export default function cart_reducer(cart,action){

        switch (action.type){
            case "addItem":
                return({...cart,items:[...cart.items,{...action.payload,qty:1}],id:[...cart.id,action.payload.id],price:cart.price+action.payload.sale_price})
        case "addQty":
                return({...cart,items:[...cart.items.map(el=>(el.id==action.payload.id?{...el,qty:el.qty+1}:el))],price:cart.price+Number(action.payload.sale_price)})
                case "reduceQty":
                        return({...cart,items:[...cart.items.map(el=>(el.id==action.payload.id?{...el,qty:el.qty-1}:el))],price:cart.price-Number(action.payload.sale_price)})
        case "remove":
                return({...cart,price:cart.price-(Number(action.payload.sale_price)*Number(action.payload.qty)),items:[...cart.items.map((el,i)=>(el.id===action.payload.id?([...cart.items.splice(i,1)]):el))] })
        }

}