import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList, { ITaskList } from './TaskList';
import TaskItem, { IItem } from './TaskItem';
import Controls from './Controls';
import { throwStatement } from '@babel/types';

interface IProps { }

function idgen() {
  return Math.floor(Math.random() * 100);
}

class App extends React.Component<IProps, ITaskList> {
  // const App: React.FC = () => {
  constructor(props: IProps) {
    super(props);
    this.state = {
      store: JSON.parse((localStorage.getItem("TODO")! || "[]")),
      search: ''
    }
    this.addItem = this.addItem.bind(this);
    this.addItemTime = this.addItemTime.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.seachim = this.seachim.bind(this);
    this.switchTodo = this.switchTodo.bind(this);
    this.deleteDone = this.deleteDone.bind(this);
  }
  componentDidUpdate() {
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
    let data = prompt('Enter date(timestamp)');
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
  deleteItem(id: string) {
    this.setState(prev => ({
      store: prev.store.filter(item => item.id !== Number(id))
    }))
  }
  seachim(query: string) {
    this.setState({ search: query })
    //   this.setState(prev =>({
    //   store: prev.store.filter(todo =>
    //     todo.title.toLowerCase().includes(query.toLowerCase())
    //   )
    // })
    // )
  }
  deleteDone() {
    this.setState(prev => ({
      store: prev.store.filter(todo =>
        !todo.isDone)
    })
    )
}
switchTodo(id: string) {
  this.setState(prev => ({
    store: prev.store.map(todo =>
      todo.id === Number(id) ? { ...todo, isDone: !todo.isDone } : todo
    )
  }))
}
render() {
  return (
    <div className="App">
      <Controls
        submitHandler={this.addItem}
        submitTimeHandler={this.addItemTime}
        searchHandler={this.seachim}
        delDoneHandler={this.deleteDone}
      />
      <TaskList
        // store={this.state.store}
        store={this.state.store.filter(todo => todo.title.toLowerCase().includes(this.state.search.toLowerCase()))}
        deleteHandler={this.deleteItem}
        switchHandler={this.switchTodo}
      />
    </div>
  );
}
}

export default App;
