import React from 'react';
interface IControls {
    submitHandler(title: string):void
    submitTimeHandler(title: string):void
    searchHandler(query: string):void
    delDoneHandler
}

const Controls = (props: IControls) => (
    <div className='controls'>
    <input type='text' placeholder='search' id='search' onChange={(e)=>props.searchHandler(e.target.value)}></input>
    <input id="inp" className="input" type="text" placeholder="add some stuff" 
    // onChange={(e)=>props.submitHandler(e.target.value)}
    ></input>
    {/* как прокинуть от input в handler submit'a */}
    <button id="submit" onClick={(e)=>props.submitHandler((document.getElementById('inp') as HTMLInputElement).value)}>Add</button>
    <button id='stime' onClick={(e)=>props.submitTimeHandler((document.getElementById('inp') as HTMLInputElement).value)}>W/ time</button>
    <button id="clear" onClick={(e)=>props.delDoneHandler()}>Clear done tasks</button>    
    </div>
  )
  export default Controls;