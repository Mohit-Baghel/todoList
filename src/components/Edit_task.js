import React,{Fragment,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edit_task,delete_task } from '../actions/task_action';

const Edit_Task = (props) => {
    const {item_index}=props;
    const dispatch=useDispatch();
    const {error, loading,data} = useSelector(state => state.tasks);
    const [desc, setDesc] = useState(data[item_index].desc);
    const [date, setDate] = useState(data[item_index].date);
    const [time, setTime] = useState(data[item_index].time);
    const [user, setUser] = useState(data[item_index].user);

// console.log(props);
const submitHandler=(e)=>{
    e.preventDefault();
    const formData={
        'desc': desc,
        'date': date,
        'time': time,
        'user': user
    }

    dispatch(edit_task(formData,item_index));
    if(!loading){
        props.setComp("SHOW_TASK");
    }
}
const cancelHandler=(e)=>{
    e.preventDefault();
    if(!loading){
        props.setComp("SHOW_TASK");
    }
}
const deleteHandler=(e)=>{
    e.preventDefault();

    dispatch(delete_task(item_index));
    if(!loading){
        props.setComp("SHOW_TASK");
    }
    
}

    return (
        <Fragment>
           



            <form onSubmit={submitHandler} >
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
                {/* <div>

                    <label htmlFor="desc">Task Description</label><br/>
                    {console.log("desc",desc)}
                    <input id="desc" name="desc" value={desc} type="text" onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div>
                    <div>
                        <label htmlFor="date">Date</label><br/>
                        <input id="date" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="time" >Time</label><br/>
                        <input id="time" type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                </div>
                <div>

                    <label >Assign User</label><br/>
                    <input name="user" value={user} type="text" onChange={(e) => setUser(e.target.value)} />
                </div><br/> */}
                <div>
                    <button onClick={(e)=>{deleteHandler(e)}}>delete</button>
                    <button onClick={(e)=>{cancelHandler(e)}}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </Fragment>
    )
}

export default Edit_Task;
