export default function reduce(state,action){
    switch (action.type){
        case "sucess":
            return ({...state,isauth:true,iserror:false,token:action.payload ,loding:false})
        case "fail":
            return ({...state,isauth:false,iserror:true,token:action.payload,loding:false})
        case "loding":
            return ({...state,loding:true})
            
    }
}