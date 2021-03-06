import { combineReducers } from "redux"

let contacts = (state = [] , action) => {
    switch(action.type){
        case "ADD_CONTACT":
            return [
                ...state,
                {
                    id:action.id,
                    name:action.name,
                    phone:action.phone
                }
        ];
        case "REMOVE_CONTACT":
            return state.filter(contact => contact.id !== action.id)

        default:
            return state
    }
}

const Reducers = combineReducers({
    contacts
})

export default Reducers