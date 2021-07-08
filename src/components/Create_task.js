import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { create_task, clearErrors } from '../actions/task_action';


const Create_task = (props) => {
    // const a=useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const { error, loading } = useSelector(state => state.tasks);

    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
        }
    }, [dispatch, loading, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.set('desc', desc);
        // formData.set('date', date);
        // formData.set('time', time);
        // formData.set('user', user);
        const formData = {
            'desc': desc,
            'date': date,
            'time': time,
            'user': user
        }

        // console.log("formdata",formData);

        dispatch(create_task(formData));
        props.setComp("SHOW_TASK");


    }
    const cancelHandler = (e) => {
        e.preventDefault();
        if (!loading) {
            props.setComp("SHOW_TASK");
        }
    }

    return (
        <Fragment>
            <form onSubmit={submitHandler} >
                <div className="create-container">
                    <div>
                        <label htmlFor="desc" className="lable">Task Description</label><br />
                        <input id="desc" name="desc" value={desc} type="text" onChange={(e) => setDesc(e.target.value)} />
                    </div><br />

                    <div className="cr-task-dateTime">
                        <div className="cr-task-date-continer">
                            <label htmlFor="date" className="lable">Date</label><br />
                            <input id="date" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="time" className="lable" >Time</label><br />
                            <input id="time" type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />
                        </div>
                    </div>

                    <div>

                        <label >Assign User</label><br />
                        <input name="user" value={user} type="text" onChange={(e) => setUser(e.target.value)} />
                    </div><br />
                    <div>
                        <button onClick={(e) => { cancelHandler(e) }}>Cancel</button>
                        <button type="submit">Save</button>
                    </div>
                </div>
            </form>
        </Fragment >
    )
}

export default Create_task;
