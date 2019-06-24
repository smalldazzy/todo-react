import React from 'react';
import { IItem } from './TaskItem';

export interface IItemTime extends IItem {
    date: string
}
interface IItemTimeProps extends IItemTime {
    deleteHandler(id: string): void
    switchHandler(id: number): void
}
const TaskItemTime = (props: IItemTimeProps) => (
    <li className='item' key={props.id}>
        <input className='check' type='checkbox' checked={props.isDone} onChange={() => props.switchHandler(props.id)} />
        <p style={{ display: 'inline-block' }}>{props.title}</p>
        <button style={{ display: 'inline-block' }} className='del'
            onClick={(e) => props.deleteHandler(props.id.toString())}>-</button>
        <p style={{ display: 'inline-block' }}>Days remaining {((Number(props.date) - (+new Date())) / 86400000).toFixed(2)}</p>
    </li>
)
export default TaskItemTime;