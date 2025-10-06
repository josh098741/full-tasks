const Task = require('../models/Task')

const createTask = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({success: false, message: "There was an error in create task"})
    }
}

const getTasks = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({success: false, message: "There was an error in get Tasks"})
    }
}

const getTask = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({success: false, message: "There was an error in get task"})
    }
}

const updateTask = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({success: false, message: "There was an error in update task"})
    }
}

const deleteTask = async (req,res) => {
    try{

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