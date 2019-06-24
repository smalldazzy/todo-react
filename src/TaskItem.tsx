import React from 'react';
import SubTask from './SubTask';

export interface IItem {
    title: string,
    id: number,
    isDone: boolean,
    subTasks: any[],
    type: string    
    }
export interface IItemProps extends IItem{
    switchHandler: (id:number) => void
    deleteHandler(id:string):void
    addSubHandler(master:string):void
    switchSubHandler
    delSubHandler
}
const TaskItem = (props: IItemProps) => (
    <li className='item' key={props.id}>
        <input className='check' type='checkbox' defaultChecked={props.isDone} onChange={() => props.switchHandler(props.id)} />
        <p style={{display:'inline-block'}}>{props.title}</p>
        <button style={{display:'inline-block'}} className='del' id={(props.id).toString()}
        onClick={(e)=>props.deleteHandler(props.id.toString())}>-</button>
        <button style={{display:'inline-block'}} className='addsub' id={(props.id).toString()}
        onClick={(e)=>props.addSubHandler(props.id.toString())}>+</button>

        {(props.subTasks) ? props.subTasks.map(task=>(
                <SubTask 
                {...task as IItem}
                switchSubHandler={props.switchSubHandler}
                delSubHandler={props.delSubHandler}
                 />
            )) : console.log('pusto')
            
        }
    </li>
)
export default TaskItem;