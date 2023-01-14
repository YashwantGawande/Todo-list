import styles from './tasks.module.css'
import Task from '../Task/Task'
//something here
function Tasks({tasks,onComplete}){
const tasksQuantity = tasks.length
const compleatedTasks = tasks.filter(task => task.isCompleated).length

    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Create task</p>
                    <span>10</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>{compleatedTasks} of {tasksQuantity}</span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.map(task => (
                    <Task key={task.id} task={task} onComplete={onComplete}/>
                ))}  
            </div>
        </section>
    )
}

export default Tasks