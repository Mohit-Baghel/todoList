import React, { Fragment, useState } from 'react';
import Create_task from './Create_task';
import Edit_Task from './Edit_task';
import Show_tasks from './Show_tasks';


const Task = () => {

    const [comp, setComp] = useState("");
    const [edit_index, setEdit] = useState('');

    return (
        <Fragment>
            <div className="main-container">
                <div className="nev">
                    <div className="para-container">

                        <div className="para">
                            <p>TASKS</p>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="add-task">
                        <span onClick={() => setComp("CREATE_TASK")}>+</span>
                    </div>
                </div>

                <div>

                {comp === "CREATE_TASK" && (
                    <Create_task setComp={setComp} />
                )}
                {comp === "EDIT_TASK" && (
                    <Edit_Task setComp={setComp} item_index={edit_index} />
                )}

                {console.log("comp", comp)}
                {/* {console.log("edit_index",edit_index)} */}

                {comp === "SHOW_TASK" && (
                    <Show_tasks setComp={setComp} setEdit={setEdit} />
                )}
                </div>


            </div>
        </Fragment>
    )
}

export default Task;
