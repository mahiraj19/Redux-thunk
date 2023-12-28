import { Increment } from "../actions";

const initialstate = 0
const ChangeTheNumber = (state = initialstate, action) =>{
    debugger
         switch (action.type) {
            case "INCREMENT":
                return state + 1
         
            default:
                return state
         }
}

export default ChangeTheNumber;