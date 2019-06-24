import React from 'react';
import TaskItem, { IItem } from './TaskItem';
import TaskItemTime, { IItemTime} from './TaskItemTime';

export interface ITaskList {
    store: (IItem | IItemTime)[]
    search?: string
    // store: Array<IItem>
}
interface ITaskListProps extends ITaskList{
    switchHandler
    deleteHandler //почему не надо (тип)void
    addSubHandler
    switchSubHandler
    delSubHandler

}

const TaskList = (props: ITaskListProps) => (
    <ul className='list'>
      {props.store.map(task => {
          if (task.type==='time')
          return (
            <TaskItemTime
              {...task as IItemTime}
              key={task.id}
              deleteHandler={props.deleteHandler}
              switchHandler={props.switchHandler}
            />
          )
        else
          return (
            <TaskItem 
            {...task as IItem} 
            key={task.id}
            deleteHandler={props.deleteHandler}
            switchHandler={props.switchHandler}
            addSubHandler={props.addSubHandler}
            switchSubHandler={props.switchSubHandler}
            delSubHandler={props.delSubHandler}
            />
            
          )
        
      })}
    </ul>
  )
export default TaskList;