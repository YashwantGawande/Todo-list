import styles from './task.module.css'
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

function Task(task, onComplete, onDelete) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}></button>
            {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}

            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>

            <button className={styles.deletButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>

    )
}

export default Task 