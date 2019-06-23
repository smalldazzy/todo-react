import React from 'react';
import SubTask from './SubTask';

export interface IItem {
    title: string,
    id: number,
    isDone: boolean,
    subTasks: any[],
    type: string    
    }
interface IItemProps extends IItem{
    // switchHandler: (id:number) => void
    deleteHandler(id:string):void
}
const TaskItem = (props: IItemProps) => (
    <li className='item' key={props.id}>
        <input className='check' type='checkbox' defaultChecked={props.isDone} /*onChange={() => props.switchHandler(props.id)}*/ />
        <p style={{display:'inline-block'}}>{props.title}</p>
        <button style={{display:'inline-block'}} className='del' id={(props.id).toString()}
        onClick={(e)=>props.deleteHandler(props.id.toString())}>-</button>
        <button style={{display:'inline-block'}} className='addsub' id={(props.id).toString()}>+</button>
        {/* {props.subTasks.map(task=>{
            return (
                <SubTask {...task as IItem} />
            )
            })
        } */}
    </li>
)
export default TaskItem;