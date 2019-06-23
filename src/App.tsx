import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList, { ITaskList } from './TaskList';
import TaskItem, { IItem } from './TaskItem';

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
  }
  componentDidUpdate(){
      localStorage.setItem("TODO", JSON.stringify(this.state.store)); 
  }
  addItem(title: string) { //taskItem or TaskItemTime??????
    this.setState(
      prev => {
        return ({
          store: [...prev.store, {
            id: idgen(),
            title: title,
            subTasks: []
          }]
        });
    }
      
    );
  }
  render() {
    return (
      <div className="App">
        jopa
      </div>
    );
  }
}

export default App;
