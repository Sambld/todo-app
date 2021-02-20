import './App.css';                  // component css
import { useState } from 'react';   // import useStat function

function App() {
  let [todolist, set_todolist] = useState([]); // create a reactive array that containe our main todo tasks
  let [counter, setcounter] = useState(0); // create a counter for tasks
   const additem = () => {                                             
    let input = document.getElementById('inputitem'); 
    let text = input.value.trim();        // get task key number
    if (text.length > 0) {
      counter = counter + 1; //  set new task key
      setcounter(counter)
      let new_todolist = [...todolist, { task: text, isdone: false, key: counter }]; // add new task to task list
      set_todolist(new_todolist); 
      input.value = '';
    }
  };
  const delitem = (e) => {
    let index = e.target.parentNode.parentNode.attributes.attrid.value;
    let new_todolist = todolist.filter((item) => {
      return item.key != parseInt(index)                      // delete task by key id
    })
    set_todolist(new_todolist);
  }
  const complete_item = (e) => {
    let index = e.target.parentNode.parentNode.attributes.attrid.value;
    let new_todolist = todolist.map((item) => {
      if (item.key == parseInt(index)) {
        item.isdone = true                            // set task isdone value to true
        return item
      } else {
        return item
      }
    })
    set_todolist(new_todolist)
  }
  return (
    <div className="App">
      <p className='label' >A simple todo app by group 11 </p>
      <input className='inputlist' type="text" id='inputitem' />  <button onClick={additem} className='btn'>Add task</button>
      <div className='todo-table'>
        <table>
          <tbody>
            {
              todolist && todolist.map((item) => (
                <tr key={Math.random()} attrid={item.key}>
                  <td style={{ textDecoration: item.isdone ? "line-through" : "", backgroundColor: item.isdone ? '#42f542' : '' }} > <p>{item.task}    </p></td>
                  <td className='td'><button onClick={(e) => { complete_item(e) }} className='cmpbtn'> ✓</button></td>
                  <td className='td'><button onClick={(e) => { delitem(e) }} className='delbtn'> ✕</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
