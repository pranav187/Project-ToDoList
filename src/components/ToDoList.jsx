import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = useState("")

    function handleInputChange(e) {
        setNewTasks(e.target.value);

    }

    function addTask() {

        if (newTasks.trim() !== "") {
            setTasks(t => [...t, newTasks]);
            setNewTasks("");
        }
       

    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i)=> i!==index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
            
        }

    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);

        }

    }




    return (
        <>
            <div className="container text-center font-sans mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]" >
                <h1 className='heading text-6xl'>To Do List</h1>

                <div>
                    <input
                        className='input text-xl p-1 border-l-2 rounded-[5px] text-black'
                        type="text"
                        placeholder='Enter a Task...'
                        value={newTasks}
                        onChange={handleInputChange} />

                    <button className='bg-violet-700 hover:bg-violet-950 p-2 py-1 text-xl font-bold text-white rounded-md mx-1'
                        onClick={addTask}>
                        Add

                    </button>

                </div>





                <ol className='ordered'>
                    {tasks.map((task, index) =>

                        <li className='list text-[2rem] font-bold p-[15px] bg-violet-50 flex justify-start' key={index}>
                            <span className='text flex-1'>{task}</span>
                            <button onClick={() => deleteTask(index)} className='deleteButton bg-red-600 hover:bg-red-900 p-2 py-1 text-[1.7rem] font-bold text-white rounded-md mx-1 cursor-pointer transition-all duration-[0.5s] ease ml-4   '>
                                Delete</button>

                            <button onClick={() => moveTaskUp(index)} className='moveButton bg-blue-500 hover:bg-blue-800 p-2 py-1 text-[1.3rem] font-bold text-white rounded-md mx-6 cursor-pointer transition-all duration-[0.5s] ease '  >
                                UP</button>

                            <button onClick={() => moveTaskDown(index)} className='moveButton bg-blue-500 hover:bg-blue-800 p-2 py-1 text-[1.4rem] font-bold text-white rounded-md mx-1 cursor-pointer transition duration-[0.5s] ease '>
                                DOWN</button>
                        </li>

                    )}
                </ol>






            </div>




        </>

    )
}

export default ToDoList
