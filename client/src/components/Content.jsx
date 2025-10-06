import React,{useState} from 'react'

function Content(){

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    const handleAddTask = () => {
        if(task.trim() === "") return
        setTasks([...tasks,task])
        setTask("")
    }

    const handleDeleteTask = (indexToDelete) => {
        const updatedTasks = tasks.filter((_,index) => index !== indexToDelete)
        setTasks(updatedTasks)
    }

    return(
        <div className="flex justify-center h-80 border-4 mx-10 my-20 items-center">
            <div className="w-1/2 h-72 border-2 rounded-lg m-2">
                <h1 className="text-center text-xl font-bold underline m-3">Task Input</h1>
                <div className='flex justify-center'>
                    <input value={task} onChange={(event) => setTask(event.target.value)} className="border h-11 w-80 rounded-lg border-black p-2" type="text"/>
                </div>
                <div className="text-center">
                    <button onClick={handleAddTask} className="border bg-black text-white rounded-lg p-2 m-3 w-36">Add Task</button>
                </div>
            </div>
            <div className="w-1/2 h-72 border-2 rounded-lg m-2">
                <h1 className="text-center text-xl font-bold underline m-3">Task View</h1>
                <div>
                    {
                        tasks.length === 0 ? (
                            <div className="border text-center mx-2 h-11 flex justify-center items-center bg-black text-white font-bold text-xl rounded-lg">No tasks Yet</div>
                        ) : tasks.map((item, index) => (
                            <div key={index} className="border text-center mx-2 h-11 flex justify-between px-3 items-center bg-black text-white font-bold text-xl rounded-lg">
                                <span>{item}</span>
                                <button onClick={() => handleDeleteTask(index)} className="bg-blue-500 hover:bg-red-600 rounded-full p-1 transition-colors">🗑️</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Content