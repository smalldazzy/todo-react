import React from 'react';

export interface IItem {
    title: string,
    id: number,
    isDone: boolean,
    subTasks: any[]
}
const TaskItem = (props: IItem) => (
    <li className='item'>
        <input className='check' type='checkbox' checked={props.isDone}/>
        <p>{props.title}</p>
        <button className='del'>-</button>
        <button className='addsub' id='_${props.id}'>+</button>
    </li>
)
export default TaskItem;