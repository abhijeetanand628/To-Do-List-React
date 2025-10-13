import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [editableText, setEditableText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const editInputRef = useRef(null);
  const [todos, setTodos] = useState(() => {
    const oldTodos = localStorage.getItem("todos");
    if(oldTodos) {
      return JSON.parse(oldTodos);
    } else {
      return [];
    }
  });

    const add = () => {
      if(inputValue.trim() !== '') {
        setTodos([{id: Date.now(), text: inputValue, isCompleted: false}, ...todos]);
        setInputValue('');
      }
    }

    // filter() method is used on ARRAY and used to delete , basically filter the item the we want ot remove and then return the rest of the ARRAY.
    const dlt = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggle = (id) => {
      setTodos(todos.map(todo => 
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
      ));
    }

    const edit = (todo) => {
      setEditingId(todo.id)
      setEditableText(todo.text)
    }

    const save = () => {
      if(editableText.trim() !== '')
      {
        setTodos(todos.map(todo => 
          todo.id === editingId ? {...todo, text:editableText} : todo
        ))
      }

      // Turn off edit mode
      setEditingId(null);
      setEditableText('');
    }

    // ENTER using to ADD a new To-Do
    const enterToDo = (e) => {
      if(e.key === 'Enter')
      {
        e.preventDefault()
        add()
      }
    }

    // ENTER using for Save
    const enterForSave = (e) => {
      if(e.key === 'Enter')
      {
        e.preventDefault()
        save()
      }
    }

    const tasksLeft = todos.filter(todo => !todo.isCompleted).length;

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    // To SELECT automatically the text of the todo to EDIT.
    useEffect(() => {
      if (editingId !== null && editInputRef.current) {
        editInputRef.current.select();
      }
    }, [editingId]);  

  return (
    <>
      <div className='w-full min-h-screen bg-[#414141] flex justify-center items-start pt-32 p-4'>
      <div className='w-11/12 md:w-1/2 lg:w-1/3 min-w-[280px] bg-white rounded-xl shadow-lg p-4 sm:p-8'>
        <h1 className='text-[#414141] font-semibold text-xl sm:text-2xl md:text-3xl text-center mb-4'>To-Do List</h1>
        {tasksLeft === 0 ? (
          <p className='text-center text-gray-500 text-sm mb-6'>
            You have no tasks left. Great job! 
          </p>
        ) : (
          <p className='text-center text-gray-500 text-sm mb-6'>
            You have {tasksLeft} {tasksLeft === 1 ? 'task' : 'tasks'} remaining.
          </p>
        )}

        <div className='flex flex-col sm:flex-row gap-4'> 
          <input 
          type='text'
          placeholder='Add your todo'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={enterToDo}
          disabled={editingId !== null}
          className='flex-1 bg-gray-200 rounded-2xl p-3'
          />  
          <button 
          disabled={editingId !== null}
          className='bg-orange-500 text-white rounded-2xl p-3 px-5 cursor-pointer whitespace-nowrap'
          onClick={add}
          >
          Add</button>
        </div>
        {/* The map() method is used only on ARRAYS and since the TODOS is an ARRAy we use it here.*/}
        <ul className='mt-6 space-y-3'>
          {todos.map((todo) => (
            <li key={todo.id} 
            className='flex justify-between items-center bg-gray-100 px-3 py-1 rounded-xl'> 

             <div className='flex items-center gap-1.5 min-w-0'>
                <input
                type='checkbox'
                className='cursor-pointer w-4 h-4 flex-shrink-0'
                disabled={editingId !== null}
                checked={todo.isCompleted}
                onChange={() => toggle(todo.id)}
                >
                </input>

                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editableText}
                    ref={editInputRef}
                    onChange={(e) => setEditableText(e.target.value)}
                    onKeyDown={enterForSave}
                    className="flex-1 bg-white p-1 rounded"
                  />
                ) : (
                  <span className={`break-all ${todo.isCompleted ? "line-through text-gray-400" : "text-gray-800"}`}>
                    {todo.text}
                  </span>
                )}
              </div>

            <div className='flex items-center gap-1.5 flex-shrink-0'>
                {editingId === todo.id ? (
                  <button 
                  onClick={save}
                  className="text-green-500 font-bold p-1 cursor-pointer">
                  Save</button>
                ) : (
                  <button
                  onClick={() => edit(todo)}
                  disabled={editingId !== null}
                  className='cursor-pointer text-xl'>✏️
              </button>
                )}

              <button 
              disabled={editingId !== null}
              className='text-red-500 hover:text-red-700 justify-end font-bold sm:text-2xl lg:text-2xl cursor-pointer'
              onClick={() => dlt(todo.id)}
              >
              X</button>
            </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  )
}

export default App