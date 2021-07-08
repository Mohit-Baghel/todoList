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
    
}from '../constants/constant'

export const create_task = (formdata) => async (dispatch) => {
    console.log(formdata);
    try {
        dispatch({ type: CREATE_TASK_REQUEST });
        
        dispatch({
            type: CREATE_TASK_SUCCESS,
            payload: formdata
        })

    } catch (error) {

        dispatch({
            type: CREATE_TASK_FAIL,
            payload: error.response.data.message
        })

    }

}

export const edit_task = (formdata,item_index) => async (dispatch) => {
    console.log(formdata);
    try {
        dispatch({ type: EDIT_TASK_REQUEST });
        
        dispatch({
            type: EDIT_TASK_SUCCESS,
            payload: {formdata,item_index}
        })

    } catch (error) {

        dispatch({
            type: EDIT_TASK_FAIL,
            payload: error.response.data.message
        })

    }

}

export const delete_task = (item_index) => async (dispatch) => {
    // console.log(formdata);
    try {
        dispatch({ type: DELETE_TASK_REQUEST });
        
        dispatch({
            type: DELETE_TASK_SUCCESS,
            payload: {item_index}
        })

    } catch (error) {

        dispatch({
            type: DELETE_TASK_FAIL,
            payload: error.response.data.message
        })

    }

}

export const clearErrors = async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })

}