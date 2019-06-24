import React from 'react';
import './App.css';
import TaskList, { ITaskList } from './TaskList';
import Controls from './Controls';

import TaskItemTime, { IItemTime } from './TaskItemTime';

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
    this.addSubItem = this.addSubItem.bind(this);
    this.switchSubTodo = this.switchSubTodo.bind(this);
    this.deleteSub = this.deleteSub.bind(this);
  }
  componentDidUpdate() {
    localStorage.setItem("TODO", JSON.stringify(this.state.store));
  }
  componentDidMount() {
    let expid;
    this.state.store.forEach(todo => {
      if (todo.type === 'time' && todo.isDone === false && (Number((todo as IItemTime).date) < (+new Date()))) {
        expid = todo.id;
      }
    });
    this.setState({
      store: this.state.store.map(todo =>
        todo.id === expid ? { ...todo, isDone: true } : todo)
    })
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
  addSubItem(master: string) {
    let title1 = prompt('Enter subitem name');
    this.setState(prev => {
      let targetitem = prev.store.find(todo =>
        todo.id === Number(master))
      console.log(targetitem);
      targetitem.subTasks.push({
        id: idgen(),
        isDone: false,
        type: 'reg',
        title: title1
      })
      targetitem.type = 'multi';
      return {
        store: prev.store.map(todo =>
          todo.id === targetitem.id ? targetitem : todo)
      }      
    })
  }
  deleteItem(id: string) {
    this.setState(prev => ({
      store: prev.store.filter(item => item.id !== Number(id))
    }))
  }
  deleteSub(id: string) {
    console.log(id);
    this.setState(prev => {
      let targetMaster = prev.store.find(todom => {
        let fi;
        if (todom.type === 'multi') {
          fi = todom.subTasks.find(subdo =>
            subdo.id === Number(id)
          )
        }
        return fi;
      });
      console.log(targetMaster);
      targetMaster.subTasks = targetMaster.subTasks.filter(sub =>
        sub.id !== Number(id)
      );
      console.log(targetMaster.subTasks);
      return {
        store: prev.store.map(todo =>
          todo.id === targetMaster.id ? targetMaster : todo)
      }
    })
  }
  seachim(query: string) {
    this.setState({ search: query })
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
  switchSubTodo(id: string) {
    this.setState(prev => {
      let targetMaster = prev.store.find(todom => {
        let fi;
        if (todom.type === 'multi') {
          fi = todom.subTasks.find(subdo =>
            subdo.id === Number(id)
          )
        } return fi;
      });
      if (targetMaster) {
        targetMaster.subTasks.map(todo =>
          todo.id === Number(id) ? (todo.isDone = !todo.isDone) : todo)
      }
      return {
        store: prev.store.map(todo =>
          todo.id === targetMaster.id ? targetMaster : todo)
      }
    }

    )
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
          store={this.state.store.filter(todo => todo.title.toLowerCase().includes(this.state.search.toLowerCase()))}
          deleteHandler={this.deleteItem}
          switchHandler={this.switchTodo}
          addSubHandler={this.addSubItem}
          switchSubHandler={this.switchSubTodo}
          delSubHandler={this.deleteSub}
        />
      </div>
    );
  }
}

export default App;
