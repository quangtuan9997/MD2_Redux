import * as types from "../constans/actionType";
export const act_up = (value) =>{
    return{
        type: types.ACT_UP,
        payload:value
    }
}
export const act_down =(value)=>{
return {
    type:types.ACT_DOWN,
    payload:value
}
}
export const act_dandom =()=>{
    return {
        type:types.ACT_RANDOM
    }
}