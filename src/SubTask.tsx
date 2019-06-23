import React from 'react';
import TaskItem, { IItem } from './TaskItem';

const SubTask = (props: IItem) => (
    props.subTasks.map(task=> {
            return(
            <ul className='sublist'>
                <input className='check' type='checkbox' defaultChecked={task.isDone} /*onChange={() => props.switchHandler(props.id)}*/ />
                <p style={{display:'inline-block'}}>{task.title}</p>
                <button style={{display:'inline-block'}} className='del'>-</button>
            </ul>
            )
            })
        
    
);
export default SubTask;
