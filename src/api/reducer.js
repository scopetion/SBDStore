
const reducer = (state,action)=>{
    switch(action.type){
        case "CONNECT" :
            return {...state,apiState:"CONNECTING",abi:action.payload}
        case "CONNECT_INIT" :
            return {...state,apiState:"CONNECT_INIT"}
        case "CONNECT_SUCCESS" :
            return {...state,apiState:"CONNECT_SUCCESS"}
        case "CONNECT_ERROR" :
            return {...state,apiError:action.payload,apiState:"ERROR"}
        case "SET_ACCOUNT" :
            return {...state,account:action.payload}
        case "SET_BALANCE" :
            return {...state,balance:action.payload}
        case "SET_NETWORK" :
            return {...state,network:action.payload}
        
    }

}
export default reducer
