import {ACT_RANDOM} from "../constans/actionType";
const initialState=[3,5,7]
const list=(state=initialState,action)=>{
    switch (action.type) {
        case ACT_RANDOM:
            state=[...state,parseInt(Math.random()*10)]
            return state;
        default:
         return state;   
    }
    
}
export default list;