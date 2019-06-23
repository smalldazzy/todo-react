import React from 'react';
import TaskItem, { IItem } from './TaskItem';
import TaskItemTime, { IItemTime} from './TaskItemTime';

export interface ITaskList {
    store: (IItem | IItemTime)[]
    // store: Array<IItem>
}
// interface ITaskListProps extends ITaskList{
//     switchHandler: (id:number) => void
// }

const TaskList = (props: ITaskList) => (
    <ul className='list'>
      {props.store.map(task => {
          if (task.type=='time')
          return (
            <TaskItemTime
              {...task as IItemTime}
              key={task.id}
            />
          )
        else
          return (
            <TaskItem 
            {...task as IItem} 
            key={task.id}
            // switchHandler={props.switchHandler}
            />
            
          )
        
      })}
    </ul>
  )
export default TaskList;