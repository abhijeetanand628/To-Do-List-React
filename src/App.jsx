import './App.css'

function App() {

  return (
    <>
      <div className='w-full min-h-screen bg-[#414141] flex justify-center items-start pt-32 p-4'>
      <div className='w-11/12 md:w-1/2 lg:w-1/3 min-w-[280px] bg-white rounded-xl shadow-lg p-4 sm:p-8'>
        <h1 className='text-[#414141] font-semibold text-xl sm:text-2xl md:text-3xl text-center mb-6'>To-Do List</h1>
        <div className='flex flex-col sm:flex-row gap-4'> 
          <input 
          type='text'
          placeholder='Add your to-do'
          className='flex-1 bg-gray-200 rounded-2xl p-3'
          />  
          <button className='bg-orange-500 text-white rounded-2xl p-3 px-5 cursor-pointer whitespace-nowrap'>Add</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
