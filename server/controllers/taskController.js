const Task = require('../models/Task')

const createTask = async (req,res) => {
    try{
        const task = await Task.create()
        res.status(201).json({success: true, data: task})
    }catch(error){
        res.status(500).json({success: false, message: "There was an error in create task"})
    }
}

const getTasks = async (req,res) => {
    try{
        const tasks = await Task.find()
        if(tasks.length === 0){
            res.status(400).json({success: false, message: "There were no task"})
        }
        res.status(200).json({success: true, data: tasks})
    }catch(error){
        res.status(500).json({success: false, message: "There was an error in get Tasks"})
    }
}

const getTask = async (req,res) => {
    try{
        const task = await Task.findById(req.params.id)
        if(!task){
            res.status(400).json({success: false, message: "The task was not found"})
        }
        res.status(200).json({success: true, data: task})
    }catch(error){
        res.status(500).json({success: false, message: "There was an error in get task"})
    }
}

const updateTask = async (req,res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators: true})
        if(!task){
            res.status(400).json({success: false, message: "The task to update was not found"})
        }
        res.status(200).json({success: true, data: task})
    }catch(error){
        res.status(500).json({success: false, message: "There was an error in update task"})
    }
}

const deleteTask = async (req,res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            res.status(400).json({success: false, message: "Task to be deleted was not found"})
        }
        res.status(200).json({success: true, message: "Task was deleted successfully"})
    }catch(error){
        res.status(500).json({success: false, message: "There was an error in delete task"})
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}