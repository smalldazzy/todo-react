import React from 'react';
import {IItem} from './TaskItem';

export interface IItemTime extends IItem {
    date: string
}
const TaskItemTime = (props: IItemTime) => (
    <li className='item'>
        <input className='check' type='checkbox' checked={props.isDone}/>
        <p>{props.title}</p>
        <button className='del'>-</button>
        <p>Time {props.date}</p>
    </li>
)
export default TaskItemTime;