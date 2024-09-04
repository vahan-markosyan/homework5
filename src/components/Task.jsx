import axios from "axios"

export const Task = ({task, onDelete, onUpdate}) => {
    const handleDelete = () => {
        axios
        .delete("http://localhost:3004/tasks/"+task.id)
        .then(response => {
            onDelete(response.data.id)
        })
    }
    const handleUpdate = (e) => {
        const newUpdate = e.target.value
        onUpdate(task.id, newUpdate)
    }
    return <div>
        <p>{task.text}</p>
        <small>status:{task.status}</small>
        {
            task.status == "in progress"
            ?<img src = "https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png"/>
            :task.status=="unstarted"
            ?<img src = "https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png"/>
            :<img src = "https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png"/>
        }
        <select value={task.status} onChange={handleUpdate}>
            <option value="in progress">in progress</option> 
            <option value = "unstarted">unstarted</option>
            <option value = "completed">completed</option>
        </select>
        <button onClick={handleDelete}>x</button>
        
    </div>
}


/*

COMPLETED:
https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png

IN PROGERSS:
https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png

UNSTARTED
https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png
*/