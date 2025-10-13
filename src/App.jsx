import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
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
        setTodos([...todos, {id: Date.now(), text: inputValue, isCompleted: false}]);
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

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

  return (
    <>
      <div className='w-full min-h-screen bg-[#414141] flex justify-center items-start pt-32 p-4'>
      <div className='w-11/12 md:w-1/2 lg:w-1/3 min-w-[280px] bg-white rounded-xl shadow-lg p-4 sm:p-8'>
        <h1 className='text-[#414141] font-semibold text-xl sm:text-2xl md:text-3xl text-center mb-6'>To-Do List</h1>
        <div className='flex flex-col sm:flex-row gap-4'> 
          <input 
          type='text'
          placeholder='Add your todo'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className='flex-1 bg-gray-200 rounded-2xl p-3'
          />  
          <button 
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

             <div className='flex items-center gap-1.5'>
                <input
                type='checkbox'
                className='cursor-pointer w-4 h-4'
                checked={todo.isCompleted}
                onChange={() => toggle(todo.id)}
                >
                </input>
                <span className={`break-all ${todo.isCompleted ? "line-through text-gray-400" : "text-gray-800"}`}>{todo.text}</span>
              </div>

            <button 
            className='text-red-500 hover:text-red-700 justify-end font-bold sm:text-2xl lg:text-2xl cursor-pointer'
            onClick={() => dlt(todo.id)}
            >
            X</button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  )
}

export default App
