import {
    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAIL,
    EDIT_TASK_FAIL,
    EDIT_TASK_REQUEST,
    EDIT_TASK_SUCCESS,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAIL,
    CLEAR_ERRORS
} from '../constants/constant';

// const initialState={
//     description:"spiceblue",
//     time:new Date().getTime().toLocaleString(),
//     date:new Date(),
//     assign_user:"mohit"

// }

export const crt_task_reducer = (state = { data: [] }, action) => {

    switch (action.type) {
        case CREATE_TASK_REQUEST:
            return {
                loading: true,
                data: [...state.data]
            }
        case CREATE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload]
            }


        case CREATE_TASK_FAIL:
            return {
                loading: false,
                error: action.payload

            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null

            }
        case EDIT_TASK_FAIL:
            return {
                loading: false,
                error: action.payload

            }
        case EDIT_TASK_REQUEST:
            return {
                loading: true,
                data: [...state.data]

            }
        case EDIT_TASK_SUCCESS: {

            const newArray = [...state.data];
            newArray[action.payload.item_index] = action.payload.formdata;

            return {
                ...state,
                loading: false,
                data: newArray

            }
        }

        case DELETE_TASK_FAIL:
            return {
                loading: false,
                error: action.payload

            }
        case DELETE_TASK_REQUEST:
            return {
                loading: true,
                data: [...state.data]

            }
        case DELETE_TASK_SUCCESS: {

            const newArray = [...state.data];
            const index=action.payload.item_index;
            // newArray[action.payload.item_index] = action.payload.formdata;

            // const filteredData = state.data.filter(d => d.id !== index);

            var spliced = newArray.splice(index, 1);

            return {
                ...state,
                loading: false,
                data: newArray

            }
        }
        default:
            return state;
    }
}