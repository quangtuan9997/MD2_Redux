import * as types from "../constans/actionType";
const initialState=0;
const count=(state=initialState,action)=>{
    switch (action.type) {
        case types.ACT_UP:
            state += action.payload;
            return state;
            case types.ACT_DOWN:
                state -=action.payload;
                return state;
        default:
       return state;     
    }

}
export default count;