import React,{useState} from 'react'

function Content(){

    const [task, setTask] = useState([])

    return(
        <div className="flex justify-center h-80 border-4 mx-10 my-20 items-center">
            <div className="w-1/2 h-72 border-2 rounded-lg m-2">
                <h1 className="text-center text-xl font-bold">Task Input</h1>
                <div className='flex justify-center'>
                    <input className="border h-11 w-80 rounded-lg border-black" type="text"/>
                </div>
                <div>
                    <button></button>
                </div>
            </div>
            <div className="w-1/2 h-72 border-2 rounded-lg m-2">
                <h1 className="text-center text-xl font-bold">Task View</h1>
                <div></div>
            </div>
        </div>
    );
}

export default Content