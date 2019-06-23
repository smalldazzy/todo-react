import React from 'react';
import TaskItem, { IItem } from './TaskItem';
import TaskItemTime, { IItemTime} from './TaskItemTime';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

export interface ITaskList {
    store: (IItem | IItemTime)[]
    search?: string
    // store: Array<IItem>
}
interface ITaskListProps extends ITaskList{
    // switchHandler: (id:number) :void
    deleteHandler //почему не надо (тип)void

}

const TaskList = (props: ITaskListProps) => (
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
            deleteHandler={props.deleteHandler}
            // switchHandler={props.switchHandler}
            />
            
          )
        
      })}
    </ul>
  )
export default TaskList;