const Task = require('../models/Task');

const createTask = async (req,res) => {
    try{
        const {text} = req.body
        if(!text){
            res.status(400).json({message: "Task text must be entered"})
        }
        const task = await Task.create({user: req.user.id, text});
        res.status(201).json(task)
    }catch(error){
        res.status(500).json({message: "Server error creating tasks"})
    }
}

const getTasks = async (req,res) => {
    try{
        const tasks = await Task.find({user: req.user.id});
        res.status(200).json(tasks)
    }catch(error){
        res.status(500).json({message: "Server error in fetching tasks"})
    }
}

const updateTask = async (req,res) => {
    try{
        const task = await Task.findByIdAndUpdate(
            {_id: req.params.id, user: req.user.id},
            req.body,
            {new: true, runValidators: true}
        )
        if(!task){
            return res.status(404).json({message: "Task not found"})
        }
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({message: "Server error in loading tasks"})
    }
}

const deleteTask = async (req,res) => {
    try{
        const task = await Task.findByIdAndDelete({_id: req.params.id, user: req.user.id})
        if(!task){
            return res.status(404).json({message: "Task not found"})
        }
        res.status(200).json({message: "Task deleted successfully"})
    }catch(error){
        res.status(500).json({message: "Server error in deleting task"})
    }
}

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
}