import React from 'react';
import SubTask from './SubTask';

export interface IItem {
    title: string,
    id: number,
    isDone: boolean,
    subTasks: any[],
    type: string    
    }
// interface IItemProps extends IItem{
//     switchHandler: (id:number) => void
// }
const TaskItem = (props: IItem) => (
    <li className='item' key={props.id}>
        <input className='check' type='checkbox' defaultChecked={props.isDone} /*onChange={() => props.switchHandler(props.id)}*/ />
        <p style={{display:'inline-block'}}>{props.title}</p>
        <button style={{display:'inline-block'}} className='del'>-</button>
        <button style={{display:'inline-block'}} className='addsub' id='_${props.id}'>+</button>
        {/* {props.subTasks.map(task=>{
            return (
                <SubTask {...task as IItem} />
            )
            })
        } */}
    </li>
)
export default TaskItem;