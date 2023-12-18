import { type } from "@testing-library/user-event/dist/type"

const redux = (state,action)=>{
    switch(action.type){
        case type == "CONNECT" :
            return {...state,apiState:"CONNECTING",abi:action.payload}
        case type == "CONNECT_INIT" :
            return {...state,apiState:"CONNECT_INIT"}
        case type == "CONNECT_SUCCESS" :
            return {...state,apiState:"CONNECT_SUCCESS"}
        case type == "CONNECT_ERROR" :
            return {...state,apiError:action.payload,apiState:"ERROR"}
        case type == "SET_ACCOUNT" :
            return {...state,account:action.payload}
        case type == "SET_BALANCE" :
            return {...state,balance:action.payload}
        case type == "SET_NETWORK" :
            return {...state,network:action.payload}
        
    }

}
export default redux