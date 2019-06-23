import React from 'react';
import {IItem} from './TaskItem';

export interface IItemTime extends IItem {
    date: string
}
const TaskItemTime = (props: IItemTime) => (
    <li className='item' key={props.id}>
        <input className='check' type='checkbox' checked={props.isDone}/>
        <p style={{display:'inline-block'}}>{props.title}</p>
        <button style={{display:'inline-block'}} className='del'>-</button>
        <p style={{display:'inline-block'}}>Time {((Number(props.date)-(+new Date()))/86400000).toFixed(2)}</p>
    </li>
)
export default TaskItemTime;