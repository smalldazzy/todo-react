import React, { ChangeEvent } from 'react';
interface IControls {
    submitHandler(title: string):void
    submitTimeHandler(title: string):void
    searchHandler(query: string):void
}

const Controls = (props: IControls) => (
    <div className='controls'>
    <input type='text' placeholder='search' id='search' onChange={(e)=>props.searchHandler(e.target.value)}></input>
    <input id="inp" className="input" type="text" placeholder="add some stuff" 
    // onChange={(e)=>props.submitHandler(e.target.value)}
    ></input>
    <button id="submit" onClick={(e)=>props.submitHandler((document.getElementById('inp') as HTMLInputElement).value)}>Add</button>
    <button id='stime' onClick={(e)=>props.submitTimeHandler((document.getElementById('inp') as HTMLInputElement).value)}>W/ time</button>
    <button id="clear">Clear done tasks</button>    
    </div>
  )
  export default Controls;