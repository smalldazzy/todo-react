import React from 'react';
import TaskItem, { IItem, IItemProps } from './TaskItem';
interface ISubProps extends IItem{
    switchSubHandler(id:string):void
    delSubHandler(id:string):void
}
const SubTask = (props: ISubProps) => (
    <ul className='subitem'>
        <li key={props.id}>
        <input className='check' id={(props.id).toString()} type='checkbox' defaultChecked={props.isDone}
        onChange={()=>props.switchSubHandler(props.id.toString())}
        /*onChange={() => props.switchHandler(props.id)}*/ />
        <p style={{ display: 'inline-block' }}>{props.title}</p>
        <button style={{ display: 'inline-block' }} id={(props.id).toString()} className='del'
        onClick={(e)=>props.delSubHandler(props.id.toString())}>-</button>
        </li>
    </ul>
);




export default SubTask;
