import { Task } from "./Task"
export const Stats = ({tasks}) => {
    const completedTasks = tasks.filter(task => task.status=="completed")
    const unstartedTasks = tasks.filter(task => task.status=="unstarted")
    const inProgressTasks = tasks.filter(task => task.status=="in progress")
    return <div>
        <p>completed {completedTasks.length+"/"+tasks.length}</p>
        <p>unstarted{unstartedTasks.length+"/"+tasks.length}</p>
        <p>in progress{inProgressTasks.length+"/"+tasks.length}</p>

                
        
        
    </div>
}