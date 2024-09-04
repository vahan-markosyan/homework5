import { useState } from "react"
import { AddTask } from "./AddTask"
import { Stats } from "./Stats"
import { TaskList } from "./TaskList"
import { useEffect } from "react"
import axios from "axios"
import { Task } from "./Task"

export const Dashboard = () => {
    const [tasks, setTasks] = useState([])
    
    const addTask = task => {
        setTasks([...tasks, task])
    }
    const handleDelete = id => {
        setTasks(tasks.filter(x => x.id != id))
    }
    const handleUpdate = (id,status) => {
        axios
        .patch("http://localhost:3004/tasks/"+id,{status})
        .then(response => {
            setTasks(tasks.map(task => 
                task.id === id ? { ...task, status: response.data.status } : task
            ))})
        
    }


    useEffect(() => {
        axios
        .get("http://localhost:3004/tasks")
        .then(response => {
            setTasks(response.data)
        })

    },[])
    return <div className="dashboard">
        <div className="row">
            <TaskList
            tasks = {tasks}
            onDelete = {handleDelete}
            onUpdate = {handleUpdate}
            />
            <AddTask
            onAdd = {addTask}
            />
        </div>
        <Stats
        tasks={tasks}
        
        
        
        />
    </div>
}