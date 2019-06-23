import React from 'react';
import TaskItem, { IItem } from './TaskItem';
import TaskItemTime, { IItemTime} from './TaskItemTime';

export interface ITaskList {
    store: (IItem | IItemTime)[]
  }

const TaskList = (props: ITaskList) => (
    <ul className='list'>
      {props.store.map(task => {
          if (task instanceof TaskItemTime)
          return (
            <TaskItemTime
              {...task as IItemTime}
              key={task.id}
              {...task as IItemTime}
            />
          )
        else
          return (
            <TaskItem {...task as IItem}/>
          )
        
      })}
    </ul>
  )
export default TaskList;