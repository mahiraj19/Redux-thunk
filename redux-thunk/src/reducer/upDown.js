import { Increment } from "../actions";

const initialstate = 0
const ChangeTheNUmber = (state = initialstate, action) =>{
         switch (action.type) {
            case "INCREMENT":
                return state + 1
         
            default:
                return state
         }
}

export default ChangeTheNUmber;