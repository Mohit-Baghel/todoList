import React,{Fragment, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Show_tasks = (props) => {
    const dispatch=useDispatch();
    const {error, loading,data } = useSelector(state => state.tasks);
    const [singdata,setSingData]=useState(data);

    useEffect(()=>{
        

    },[dispatch,loading,error])

    const editHandler=(item_index)=>{
        props.setEdit(item_index);
        if(!loading){

            props.setComp("EDIT_TASK");
        }

    }
    return (
        <Fragment>
            <div>
                <div>
                {
                    // !loading &&(
                        singdata.map((item,index)=>(
                            <div key={index}>
                                <div>{item.desc}</div>
                                <div>{item.date}</div>
                                <div><button onClick={()=>editHandler(index)}>edit</button></div>
                            </div>
                        ))
                    // )
                }
                </div>
            </div>
        </Fragment>
    )
}

export default Show_tasks;
