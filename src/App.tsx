import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList, { ITaskList } from './TaskList';
import TaskItem, { IItem } from './TaskItem';
import Controls from './Controls';

interface IProps { }

function idgen() {
  return Math.floor(Math.random() * 100);
}

class App extends React.Component<IProps, ITaskList> {
  // const App: React.FC = () => {
  constructor(props: IProps) {
    super(props);
    this.state = {
      store: JSON.parse((localStorage.getItem("TODO")! || "[]"))
    }
    this.addItem = this.addItem.bind(this);
    this.addItemTime = this.addItemTime.bind(this);
  }
  componentDidUpdate(){
      localStorage.setItem("TODO", JSON.stringify(this.state.store)); 
  }
  addItem(title: string) { 
    this.setState(
      prevState => {
        return ({
          store: [...prevState.store, {
            id: idgen(),
            title: title,
            isDone: false,
            type: 'reg',
            subTasks: []
          }]
        });
      }
      
    );
  }
  addItemTime(title: string) { 
    let data=prompt('Enter date(timestamp)');
    this.setState(
      prevState => {
        return ({
          store: [...prevState.store, {
            id: idgen(),
            title: title,
            isDone: false,
            type: 'time',
            date: data,
            subTasks: []
          }]
        });
      }
      
    );
  }
  // switchTodo(id: number) {
  //   this.setState(prev => ({
  //     store: prev.store.map(todo =>
  //       todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
  //     )
  //   }))
  // }
  render() {
    return (
      <div className="App">
        <Controls 
        submitHandler={this.addItem}
        submitTimeHandler={this.addItemTime}
        />
        <TaskList 
        store={this.state.store}
        // switchHandler={this.switchTodo}
        />
      </div>
    );
  }
}

export default App;
