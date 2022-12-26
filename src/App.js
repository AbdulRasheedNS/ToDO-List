import './App.css'
import { useState } from 'react'
import { useDate } from './realTimeDate'
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const { day, date, time } = useDate()
  const handleRemoveItem = (id) => {
    console.log(id);
    setToDos(toDos.filter((item) => item.id !== id));
  };
  const changeStatus = (e, obj) => {
    console.log('checked', e.target.checked);
    console.log('obj before', obj);
    console.log('todos', toDos);
    console.log('todo', toDo);
    setToDos(toDos.filter(obj2 => {
      if (obj2.id === obj.id) {
        obj2.status = e.target.checked
        console.log('obj after', obj);
      }
      return obj2
    }))
  }
  return (
    <div className='screen'>
      <h3>{date}</h3>
      <h4>{time}</h4>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {day} 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => {
            if (toDo) {
              setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
            }
          }}
            className="fas fa-plus"></i>
        </div>
        <div className="todos">

          {toDos.map((obj) => {
            if (!obj.status) {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(e) => changeStatus(e, obj)}
                    checked={obj.status} type="checkbox" name="" id="" />
                  <p> {obj.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={() => handleRemoveItem(obj.id)}></i>
                </div>
              </div>
            )
          }return null
          })}
          
          <br /><br /><br />
          <h1>Success Task</h1>

          {toDos.map((obj) => {
            if (obj.status) {
            return (
            <div>
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(e) => changeStatus(e, obj)}
                    checked={obj.status} type="checkbox" name="" id="" />
                  <s><p><div className='successText'>{obj.text}</div></p></s>
                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={() => handleRemoveItem(obj.id)}></i>
                </div>
              </div>
              </div>
            )}return null
          })}

        </div>
      </div>
    </div>
  );
}

export default App;

// npm i @progress/kendo-react-popup
// npm i react-live-clock
// npm install --save react react-live-clock